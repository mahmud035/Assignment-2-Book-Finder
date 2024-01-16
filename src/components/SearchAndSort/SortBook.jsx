const SortBook = ({ handleSortBook }) => {
  return (
    <div>
      <div className="flex items-stretch space-x-3">
        {/* Sort  */}
        <select
          onChange={handleSortBook}
          className="px-4 py-2 text-center text-gray-600 border rounded-md cursor-pointer"
          name="sortBy"
          id="sortBy"
        >
          <option value="">Sort</option>
          <option value="title_asc">Name (A-Z)</option>
          <option value="title_desc">Name (Z-A)</option>
          <option value="publishYear_asc">Publication Year (Oldest)</option>
          <option value="publishYear_desc">Publication Year (Newest)</option>
        </select>
      </div>
    </div>
  );
};

export default SortBook;
