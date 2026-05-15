const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const totalCount = document.getElementById("totalCount");

const formArea = document.getElementById("lionForm");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");

const cardGrid = document.getElementById("cardGrid");
const detailList = document.getElementById("detailList");
const randomOneBtn = document.getElementById("randomOneBtn");
const randomFiveBtn = document.getElementById("randomFiveBtn");
const resetBtn = document.getElementById("resetBtn");
const status = document.getElementById("status");
const retryBtn = document.getElementById("retryBtn");

const partFilter = document.getElementById("partFilter");
const sortFilter = document.getElementById("sortFilter");
const searchInput = document.getElementById("searchInput");

const autoFillBtn = document.getElementById("autoFillBtn");

async function fetchLions(count) {
  const res = await fetch(`https://randomuser.me/api/?results=${count}`);
  const data = await res.json();

  return data.results.map(user => ({
    name: user.name.first + "아기사자",
    part: ["Frontend", "Backend", "Design"][Math.floor(Math.random()*3)],
    skills: ["HTML", "React", "Node.js", "Figma"],
    summary: "외부 데이터로 추가된 아기사자입니다.",
    detail: "API 데이터를 이용해 생성되었습니다.",
    email: user.email,
    phone: user.phone,
    site: "https://example.com",
    comment: "열심히 하겠습니다!",
    image: user.picture.large
  }));
}

async function handleRequest(fn) {
  try {
    status.textContent = "불러오는 중...";
    retryBtn.classList.add("hidden");
    setLoading(true);

    lastRequest = fn; 

    await fn();

    status.textContent = "완료!";
  } catch (error) {
    status.textContent = "불러오기 실패";
    retryBtn.classList.remove("hidden");
  } finally {
    setLoading(false);
  }
}

let lastRequest = null;

function setLoading(isLoading) {
  randomOneBtn.disabled = isLoading;
  randomFiveBtn.disabled = isLoading;
  resetBtn.disabled = isLoading;
}

let lions = [
  {
    name: "김아기사자",
    part: "Frontend",
    skills: ["HTML", "CSS", "JavaScript"],
    summary: "프론트엔드를 배우고 있는 아기 사자입니다.",
    detail: "HTML, CSS, JavaScript를 활용해서 웹 페이지를 만드는 연습을 하고 있습니다.",
    email: "lion1@example.com",
    phone: "010-1111-1111",
    site: "https://example.com",
    comment: "열심히 배우겠습니다!",
    image: "https://i.pinimg.com/736x/8a/40/38/8a4038c328d6c4291081f899b79fcaf8.jpg"
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
    image: "https://i.pinimg.com/736x/1d/d3/50/1dd350780ba09305a1a22cb3c5b222be.jpg"
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
    image: "https://i.pinimg.com/736x/d4/99/76/d4997632858893eb27ec55dc0674d74b.jpg"
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
  }
];

render();

addBtn.addEventListener("click", function () {
  formArea.classList.toggle("hidden");
});

cancelBtn.addEventListener("click", function () {
  formArea.classList.add("hidden");
});

deleteBtn.addEventListener("click", function () {
  if (lions.length === 0) return;
  lions.pop();
  render();
});

randomOneBtn.addEventListener("click", () => {
  handleRequest(async () => {
    const newData = await fetchLions(1);
    lions = [...lions, ...newData];
    render();
  });
});

randomFiveBtn.addEventListener("click", () => {
  handleRequest(async () => {
    const newData = await fetchLions(5);
    lions = [...lions, ...newData];
    render();
  });
});

resetBtn.addEventListener("click", () => {
  handleRequest(async () => {
    lions = await fetchLions(6);
    render();
  });
});

retryBtn.addEventListener("click", () => {
  if (lastRequest) {
    handleRequest(lastRequest);
  }
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const part = document.getElementById("part").value;
  const skills = document.getElementById("skills").value.trim();
  const summary = document.getElementById("summary").value.trim();
  const detail = document.getElementById("detail").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const site = document.getElementById("site").value.trim();
  const comment = document.getElementById("comment").value.trim();

  if (!name || !skills || !summary || !detail || !email || !site) {
    alert("필수 입력값을 모두 입력해주세요.");
    return;
  }

  const skillList = skills.split(",").map(s => s.trim());

  const newLion = {
    name,
    part,
    skills: skillList,
    summary,
    detail,
    email,
    phone,
    site,
    comment,
    image: "assets/profile.png"
  };

  lions.push(newLion);

  render();
  clearForm();
  formArea.classList.add("hidden");
});

function render() {
  cardGrid.innerHTML = "";
  detailList.innerHTML = "";
  let visibleLions = [...lions];

  if (partFilter.value !== "all") {
  visibleLions = visibleLions.filter(lion => lion.part === partFilter.value);
}

    const keyword = searchInput.value.trim().toLowerCase();

    if (keyword !== "") {
  visibleLions = visibleLions.filter(lion =>
    lion.name.toLowerCase().includes(keyword)
  );
}

if (sortFilter.value === "name") {
  visibleLions.sort((a, b) => a.name.localeCompare(b.name, "ko"));
} 
if (visibleLions.length === 0) {
  cardGrid.innerHTML = "<p>조건에 맞는 아기 사자가 없습니다.</p>";
  detailList.innerHTML = "<p>표시할 상세 정보가 없습니다.</p>";
  totalCount.textContent = "총 0명";
  return;
}
   visibleLions.forEach(function (lion) {
    const firstSkill = lion.skills[0];

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="image-box">
        <img src="${lion.image}">
        <span class="badge">${firstSkill}</span>
      </div>
      <h3>${lion.name}</h3>
      <p class="part">${lion.part}</p>
      <p>${lion.summary}</p>
    `;

    cardGrid.appendChild(card);

    const skillItems = lion.skills.map(s => `<li>${s}</li>`).join("");

const detailCard = document.createElement("div");
detailCard.className = "detail-card";

detailCard.innerHTML = `
  <h3>${lion.name}</h3>
  <p class="part">${lion.part}</p>

  <div class="section">
    <strong>자기소개</strong>
    <p>${lion.detail}</p>
  </div>

  <div class="section">
    <strong>연락처</strong>
    <ul>
      <li>Email: ${lion.email}</li>
      <li>Phone: ${lion.phone}</li>
      <li>${lion.site}</li>
    </ul>
  </div>

  <div class="section">
    <strong>관심 기술</strong>
    <ul>${skillItems}</ul>
  </div>

  <div class="section">
    <strong>한 마디</strong>
    <p>${lion.comment}</p>
  </div>
`;



    detailList.appendChild(detailCard);
  });

  totalCount.textContent = "총 " + visibleLions.length + "명";
}
autoFillBtn.addEventListener("click", () => {
  handleRequest(async () => {
    const data = await fetchLions(1);
    const lion = data[0];

    document.getElementById("name").value = lion.name;
    document.getElementById("part").value = lion.part;
    document.getElementById("skills").value = lion.skills.join(", ");
    document.getElementById("summary").value = lion.summary;
    document.getElementById("detail").value = lion.detail;
    document.getElementById("email").value = lion.email;
    document.getElementById("phone").value = lion.phone;
    document.getElementById("site").value = lion.site;
    document.getElementById("comment").value = lion.comment;
  });
});

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("skills").value = "";
  document.getElementById("summary").value = "";
  document.getElementById("detail").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("site").value = "";
  document.getElementById("comment").value = "";

  
}
  partFilter.addEventListener("change", render);
  sortFilter.addEventListener("change", render);
  searchInput.addEventListener("input", render);