import { useRef, useState } from "react";
import initialLions from "../data/lions.js";
import type { Lion } from "../data/lions.js";

interface RandomUser {
  name: { first: string };
  email: string;
  phone: string;
  picture: { large: string };
}

function makeLionFromUser(user: RandomUser): Lion {
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
  const [lions, setLions] = useState<Lion[]>(initialLions);
  const [status, setStatus] = useState<string>("준비 완료");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const lastRequestRef = useRef<(() => Promise<void>) | null>(null);

  const fetchLions = async (count: number): Promise<Lion[]> => {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    if (!response.ok) throw new Error("API 요청 실패");
    const data = await response.json();
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
    } catch (error) {
      setHasError(true);
      setStatus("불러오기 실패");
    } finally {
      setIsLoading(false);
    }
  };

  const addRandomLions = (count: number) => {
    runRequest(async () => {
      const newLions = await fetchLions(count);
      setLions((prev) => [...prev, ...newLions]);
    });
  };

  const resetLions = () => {
    runRequest(async () => {
      const myCard = lions.find((lion) => lion.isMe);
      const otherCount = lions.length - 1;
      const newLions = await fetchLions(otherCount);
      if (myCard) {
        setLions([myCard, ...newLions]);
      } else {
        setLions(newLions);
      }
    });
  };

  const retry = () => {
    if (lastRequestRef.current) {
      runRequest(lastRequestRef.current);
    }
  };

  const addLion = (newLion: Lion) => {
    setLions((prev) => [...prev, newLion]);
  };

  const deleteLastLion = () => {
    setLions((prev) => prev.slice(0, -1));
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