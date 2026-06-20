import { useEffect, useRef, useState } from "react";
import { supabase } from "../utils/supabase.js";
import type { Lion, RandomUser } from "../types/lion.js";
import type { LionRow, LionInsert } from "../types/database.js";

function rowToLion(row: LionRow): Lion {
  return {
    id: row.id,
    name: row.name,
    part: row.part,
    skills: row.skills,
    summary: row.summary,
    detail: row.detail,
    email: row.email,
    phone: row.phone,
    site: row.site,
    comment: row.comment,
    image: row.image,
  };
}

function lionToInsert(lion: Omit<Lion, "id" | "isMe">): LionInsert {
  return {
    name: lion.name,
    part: lion.part,
    skills: lion.skills,
    summary: lion.summary,
    detail: lion.detail,
    email: lion.email,
    phone: lion.phone,
    site: lion.site,
    comment: lion.comment,
    image: lion.image,
  };
}

function makeLionFromUser(user: RandomUser): Omit<Lion, "id" | "isMe"> {
  return {
    name: user.name.first + "아기사자",
    part: (["Frontend", "Backend", "Design"][Math.floor(Math.random() * 3)] ?? "Frontend"),
    skills: ["React", "JavaScript", "Node.js", "Figma"],
    summary: "외부 API로 추가된 아기 사자입니다.",
    detail: "randomuser API 데이터를 이용해서 생성된 사용자입니다.",
    email: user.email,
    phone: user.phone,
    site: "https://example.com",
    comment: "열심히 성장하겠습니다!",
    image: user.picture.large,
  };
}

export default function useLions() {
  const [lions, setLions] = useState<Lion[]>([]);
  const [status, setStatus] = useState<string>("준비 완료");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const lastRequestRef = useRef<(() => Promise<void>) | null>(null);

  useEffect(() => {
    void loadFromSupabase();
  }, []);

  const loadFromSupabase = async () => {
    await runRequest(async () => {
      const { data, error } = await supabase
        .from("lions")
        .select("*")
        .order("created_at", { ascending: true });
      if (error) throw error;
      setLions(data.map(rowToLion));
    });
  };

  const fetchLions = async (count: number): Promise<Omit<Lion, "id" | "isMe">[]> => {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    if (!response.ok) throw new Error("API 요청 실패");
    const data = await response.json() as { results: RandomUser[] };
    return data.results.map(makeLionFromUser);
  };

  const runRequest = async (requestFn: () => Promise<void>) => {
    try {
      setIsLoading(true);
      setHasError(false);
      setStatus("불러오는 중...");
      lastRequestRef.current = requestFn;
      await requestFn();
      setStatus("완료!");
    } catch {
      setHasError(true);
      setStatus("불러오기 실패");
    } finally {
      setIsLoading(false);
    }
  };

  const addRandomLions = (count: number) => {
    void runRequest(async () => {
      const newLions = await fetchLions(count);
      const { data, error } = await supabase
        .from("lions")
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .insert(newLions.map(lionToInsert) as any)
        .select();
      if (error) throw error;
      setLions((prev) => [...prev, ...data.map(rowToLion)]);
    });
  };

  const resetLions = () => {
    void runRequest(async () => {
      const { error: deleteError } = await supabase.from("lions").delete().neq("id", "");
      if (deleteError) throw deleteError;
      const newLions = await fetchLions(lions.length || 5);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data, error } = await supabase.from("lions").insert(newLions.map(lionToInsert) as any).select();
      if (error) throw error;
      setLions(data.map(rowToLion));
    });
  };

  const retry = () => {
    if (lastRequestRef.current) {
      void runRequest(lastRequestRef.current);
    }
  };

  const addLion = (newLion: Lion) => {
    void runRequest(async () => {
      const { id: _id, isMe: _isMe, ...insertData } = newLion;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data, error } = await supabase.from("lions").insert([insertData] as any).select();
      if (error) throw error;
      setLions((prev) => [...prev, ...data.map(rowToLion)]);
    });
  };

  const deleteLastLion = () => {
    void runRequest(async () => {
      if (lions.length === 0) return;
      const last = lions[lions.length - 1];
      if (!last?.id) return;
      const { error } = await supabase.from("lions").delete().eq("id", last.id);
      if (error) throw error;
      setLions((prev) => prev.slice(0, -1));
    });
  };

  return {
    lions,
    status,
    isLoading,
    hasError,
    addRandomLions,
    resetLions,
    retry,
    addLion,
    deleteLastLion,
    fetchLions,
  };
}
