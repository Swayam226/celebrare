function SearchBar({ value, onChange }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by author..."
        value={value}
        onChange={onChange}
        className="w-full p-3 border rounded-md"
      />
    </div>
  );
}

export default SearchBar;
