
export interface Lion {
  name: string;
  isMe?: boolean;
  part: string;
  skills: string[];
  summary: string;
  detail: string;
  email: string;
  phone: string;
  site: string;
  comment: string;
  image: string;
}


const lions: Lion[] = [
  {
    name: "김아기사자",
    isMe: true,
    part: "Frontend",
    skills: ["HTML", "CSS", "JavaScript"],
    summary: "프론트엔드를 배우고 있는 아기 사자입니다.",
    detail:
      "HTML, CSS, JavaScript를 활용해서 웹 페이지를 만드는 연습을 하고 있습니다.",
    email: "lion1@example.com",
    phone: "010-1111-1111",
    site: "https://example.com",
    comment: "열심히 배우겠습니다!",
    image:
      "https://i.pinimg.com/736x/8a/40/38/8a4038c328d6c4291081f899b79fcaf8.jpg"
  },

  {
    name: "박아기사자",
    part: "Backend",
    skills: ["Java", "Spring", "MySQL"],
    summary: "백엔드 개발에 관심이 있습니다.",
    detail: "서버와 데이터베이스를 배우고 있습니다.",
    email: "lion2@example.com",
    phone: "010-2222-2222",
    site: "https://example.com",
    comment: "꾸준히 성장하겠습니다!",
    image:
      "https://i.pinimg.com/736x/1d/d3/50/1dd350780ba09305a1a22cb3c5b222be.jpg"
  },

  {
    name: "이아기사자",
    part: "Design",
    skills: ["Figma", "UI", "UX"],
    summary: "사용자 경험을 고민하는 디자인 파트입니다.",
    detail: "사용하기 쉬운 화면을 만들고 싶습니다.",
    email: "lion3@example.com",
    phone: "010-3333-3333",
    site: "https://example.com",
    comment: "좋은 서비스를 만들고 싶습니다!",
    image:
      "https://i.pinimg.com/736x/d4/99/76/d4997632858893eb27ec55dc0674d74b.jpg"
  },
{
    name: "정아기사자",
    part: "Design",
    skills: ["Figma", "UI", "UX"],
    summary: "사용자 경험을 고민하는 디자인 파트입니다.",
    detail: "사용하기 쉬운 화면을 만들고 싶습니다.",
    email: "lion3@example.com",
    phone: "010-3333-3333",
    site: "https://example.com",
    comment: "좋은 서비스를 만들고 싶습니다!",
    image: "https://i.pinimg.com/736x/fb/cd/be/fbcdbeed12675bd0984601945bc8398e.jpg"
  },
  {
    name: "조아기사자",
    part: "Backend",
    skills: ["Java", "Spring", "MySQL"],
    summary: "백엔드 개발에 관심이 있습니다.",
    detail: "서버와 데이터베이스를 배우고 있습니다.",
    email: "lion2@example.com",
    phone: "010-2222-2222",
    site: "https://example.com",
    comment: "꾸준히 성장하겠습니다!",
    image: "https://i.pinimg.com/736x/6a/72/a1/6a72a16f064f3959cae24c8db7eda4ab.jpg"
  },
  {
    name: "신아기사자",
    part: "Frontend",
    skills: ["HTML", "CSS", "JavaScript"],
    summary: "프론트엔드를 배우고 있는 아기 사자입니다.",
    detail: "HTML, CSS, JavaScript를 활용해서 웹 페이지를 만드는 연습을 하고 있습니다.",
    email: "lion1@example.com",
    phone: "010-1111-1111",
    site: "https://example.com",
    comment: "열심히 배우겠습니다!",
    image: "https://i.pinimg.com/736x/8e/46/6a/8e466a62c63397bd222a2686b1829d6c.jpg"
  },
  {
    name: "박아기사자",
    part: "Frontend",
    skills: ["HTML", "CSS", "JavaScript"],
    summary: "프론트엔드를 배우고 있는 아기 사자입니다.",
    detail: "HTML, CSS, JavaScript를 활용해서 웹 페이지를 만드는 연습을 하고 있습니다.",
    email: "lion1@example.com",
    phone: "010-1111-1111",
    site: "https://example.com",
    comment: "열심히 배우겠습니다!",
    image: "https://i.pinimg.com/736x/51/3e/91/513e91c73aecf39caab69e0b975224af.jpg"
  },
  {
    name: "민아기사자",
    part: "Frontend",
    skills: ["HTML", "CSS", "JavaScript"],
    summary: "프론트엔드를 배우고 있는 아기 사자입니다.",
    detail: "HTML, CSS, JavaScript를 활용해서 웹 페이지를 만드는 연습을 하고 있습니다.",
    email: "lion1@example.com",
    phone: "010-1111-1111",
    site: "https://example.com",
    comment: "열심히 배우겠습니다!",
    image: "https://i.pinimg.com/736x/77/3b/23/773b23076020f3f9894b88e5c0b43c15.jpg"
  },
  {
    name: "변아기사자",
    part: "Backend",
    skills: ["Java", "Spring", "MySQL"],
    summary: "백엔드 개발에 관심이 있습니다.",
    detail: "서버와 데이터베이스를 배우고 있습니다.",
    email: "lion2@example.com",
    phone: "010-2222-2222",
    site: "https://example.com",
    comment: "꾸준히 성장하겠습니다!",
    image: "https://i.pinimg.com/736x/56/d8/d1/56d8d1ad942183397228086bd04a3674.jpg"
  },
];

export default lions;