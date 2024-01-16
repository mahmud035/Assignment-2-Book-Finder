import InfoAndTitle from '../ui/InfoAndTitle';
import SearchBook from './SearchBook';
import SortBook from './SortBook';

const SearchAndSortBar = ({ handleSearchBook, handleSortBook }) => {
  return (
    <div>
      <header className="mx-auto mb-8 lg:mb-10 max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          <div>
            <InfoAndTitle />

            {/* Search Book  */}
            <SearchBook handleSearchBook={handleSearchBook} />
          </div>

          {/* Sort Book  */}
          <SortBook handleSortBook={handleSortBook} />
        </div>
      </header>
    </div>
  );
};

export default SearchAndSortBar;
