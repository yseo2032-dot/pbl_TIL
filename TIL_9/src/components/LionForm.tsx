import { useEffect, useState } from "react";
import type { Lion } from "../data/lions.js";

interface LionFormProps {
  onAddLion: (lion: Lion) => void;
  onClose: () => void;
  fetchLions: (count: number) => Promise<Lion[]>;
  isLoading: boolean;
}

interface FormState {
  name: string;
  part: string;
  skills: string;
  summary: string;
  detail: string;
  email: string;
  phone: string;
  site: string;
  comment: string;
}

const initialForm: FormState = {
  name: "",
  part: "Frontend",
  skills: "",
  summary: "",
  detail: "",
  email: "",
  phone: "",
  site: "",
  comment: "",
};

function LionForm({
  onAddLion,
  onClose,
  fetchLions,
  isLoading,
}: LionFormProps) {
  const [form, setForm] = useState<FormState>(initialForm);

  const resetAndClose = () => {
    setForm(initialForm);
    onClose();
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        resetAndClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAutoFill = async () => {
    try {
      const data = await fetchLions(1);
      const lion = data[0];

      if (!lion) return;

      setForm({
        name: lion.name,
        part: lion.part,
        skills: lion.skills.join(", "),
        summary: lion.summary,
        detail: lion.detail,
        email: lion.email,
        phone: lion.phone,
        site: lion.site,
        comment: lion.comment,
      });
    } catch (error) {
      console.error(error);
      alert("랜덤 데이터를 불러오지 못했습니다.");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.skills.trim() ||
      !form.summary.trim() ||
      !form.detail.trim() ||
      !form.email.trim() ||
      !form.site.trim()
    ) {
      alert("필수 입력값을 모두 입력해주세요.");
      return;
    }

    const newLion: Lion = {
      ...form,
      skills: form.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),

      image: `https://randomuser.me/api/portraits/lego/${
        Math.floor(Math.random() * 9) + 1
      }.jpg`,
    };

    onAddLion(newLion);

    resetAndClose();
  };

  return (
    <form className="form-area" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>이름</label>

        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="홍아기사자"
        />
      </div>

      <div className="form-group">
        <label>파트</label>

        <select
          name="part"
          value={form.part}
          onChange={handleChange}
        >
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Design">Design</option>
        </select>
      </div>

      <div className="form-group full">
        <label>관심 기술</label>

        <input
          name="skills"
          type="text"
          value={form.skills}
          onChange={handleChange}
          placeholder="React, JS, CSS"
        />
      </div>

      <div className="form-group full">
        <label>한 줄 소개</label>

        <input
          name="summary"
          type="text"
          value={form.summary}
          onChange={handleChange}
          placeholder="프론트엔드 개발 좋아합니다!"
        />
      </div>

      <div className="form-group full">
        <label>자기소개</label>

        <textarea
          name="detail"
          value={form.detail}
          onChange={handleChange}
          placeholder="자기소개를 입력하세요."
        />
      </div>

      <div className="form-group">
        <label>Email</label>

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="lion@example.com"
        />
      </div>

      <div className="form-group">
        <label>Phone</label>

        <input
          name="phone"
          type="text"
          value={form.phone}
          onChange={handleChange}
          placeholder="010-1234-5678"
        />
      </div>

      <div className="form-group full">
        <label>Website</label>

        <input
          name="site"
          type="text"
          value={form.site}
          onChange={handleChange}
          placeholder="https://github.com/example"
        />
      </div>

      <div className="form-group full">
        <label>한 마디</label>

        <input
          name="comment"
          type="text"
          value={form.comment}
          onChange={handleChange}
          placeholder="화이팅"
        />
      </div>

      <div className="form-actions">
        <button
          type="button"
          onClick={handleAutoFill}
          disabled={isLoading}
        >
          {isLoading ? "불러오는 중..." : "랜덤 값 채우기"}
        </button>

        <button type="submit">추가하기</button>

        <button
          type="button"
          onClick={resetAndClose}
        >
          취소
        </button>
      </div>
    </form>
  );
}

export default LionForm;