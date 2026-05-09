function FilterArea() {
  return (
    <section className="filter-area">

      <label htmlFor="partFilter">파트</label>

      <select id="partFilter">
        <option>전체</option>
        <option>Frontend</option>
        <option>Backend</option>
        <option>Design</option>
      </select>

      <label htmlFor="sortFilter">정렬</label>

      <select id="sortFilter">
        <option>최신추가순</option>
        <option>이름순</option>
      </select>

      <label htmlFor="searchInput">검색</label>

      <input
        id="searchInput"
        type="text"
        placeholder="이름으로 검색"
      />

    </section>
  );
}

export default FilterArea;