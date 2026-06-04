
interface FilterAreaProps {
  partFilter: string;
  sortFilter: string;
  searchText: string;
  onPartChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}


function FilterArea({
  partFilter,
  sortFilter,
  searchText,
  onPartChange,
  onSortChange,
  onSearchChange,
}:FilterAreaProps) {
  return (
    <section className="filter-area">
      <label htmlFor="partFilter">파트</label>

      <select
        id="partFilter"
        value={partFilter}
        onChange={(e) => onPartChange(e.target.value)}
      >
        <option value="all">전체</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Design">Design</option>
      </select>

      <label htmlFor="sortFilter">정렬</label>

      <select
        id="sortFilter"
        value={sortFilter}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="latest">최신추가순</option>
        <option value="name">이름순</option>
      </select>

      <label htmlFor="searchInput">검색</label>

      <input
        id="searchInput"
        type="text"
        placeholder="이름으로 검색"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </section>
  );
}

export default FilterArea;