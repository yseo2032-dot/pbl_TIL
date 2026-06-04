import type { Lion, RandomUser } from "../types/lion.js";

export function makeLionFromUser(user: RandomUser): Lion {
  return {
    name: user.name.first + "아기사자",
    part:
      ["Frontend", "Backend", "Design"][
        Math.floor(Math.random() * 3)
      ] ?? "Frontend",

    skills: ["React", "JavaScript", "Node.js", "Figma"],

    summary: "외부 API로 추가된 아기 사자입니다.",

    detail:
      "randomuser API 데이터를 이용해서 생성된 사용자입니다.",

    email: user.email,
    phone: user.phone,
    site: "https://example.com",
    comment: "열심히 성장하겠습니다!",
    image: user.picture.large,
  };
}