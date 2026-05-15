import { useEffect, useState } from "react";

const initialForm = {
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
}) {

    useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === "Escape") {
      setForm(initialForm);
      onClose();
    }
  };

    window.addEventListener("keydown", handleEsc);

    return () => {
    window.removeEventListener("keydown", handleEsc);
    };
    }, [onClose]);

    const [form, setForm] =
    useState(initialForm);

    const handleChange = (e) => {

    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAutoFill = async () => {

    const data =
      await fetchLions(1);

    const lion = data[0];

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
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.skills.trim() ||
      !form.summary.trim() ||
      !form.detail.trim() ||
      !form.email.trim() ||
      !form.site.trim()
    ) {

      alert(
        "필수 입력값을 모두 입력해주세요."
      );

      return;
    }

    const newLion = {
      ...form,

      skills: form.skills
        .split(",")
        .map((skill) => skill.trim()),

      image:
        "https://randomuser.me/api/portraits/lego/1.jpg",
    };

    onAddLion(newLion);

    setForm(initialForm);

    onClose();
  };

  return (
    <form
      className="form-area"
      onSubmit={handleSubmit}
    >

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

          <option value="Frontend">
            Frontend
          </option>

          <option value="Backend">
            Backend
          </option>

          <option value="Design">
            Design
          </option>

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
        />
      </div>

      <div className="form-group full">
        <label>자기소개</label>

        <textarea
          name="detail"
          value={form.detail}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Email</label>

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Phone</label>

        <input
          name="phone"
          type="text"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group full">
        <label>Website</label>

        <input
          name="site"
          type="text"
          value={form.site}
          onChange={handleChange}
        />
      </div>

      <div className="form-group full">
        <label>한 마디</label>

        <input
          name="comment"
          type="text"
          value={form.comment}
          onChange={handleChange}
        />
      </div>

      <div className="form-actions">

        <button
          type="button"
          onClick={handleAutoFill}
          disabled={isLoading}
        >
          랜덤 값 채우기
        </button>

        <button type="submit">
          추가하기
        </button>

        <button
        type="button"
        onClick={() => {
        setForm(initialForm);
        onClose();
        }}
        >
        취소
        </button>

      </div>

    </form>
  );
}

export default LionForm;