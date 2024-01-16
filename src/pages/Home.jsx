import { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import SearchAndSortBar from '../components/SearchAndSort/SearchAndSortBar';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);

  //* Search Book
  const handleSearchBook = (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    if (searchTerm === '') {
      setSearchedBooks([...books]); // Show all books if searchTerm is empty
    } else {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm)
      );
      setSearchedBooks([...filtered]); // Filter books based on searchTerm
    }
  };

  //* Sort Book
  const handleSortBook = (e) => {
    const sortInfo = e.target.value.split('_');
    const sortBy = sortInfo[0] || 'title';
    const sortOrder = sortInfo[1] || 'asc';

    const sortedBooks =
      searchedBooks.length > 0 ? [...searchedBooks] : [...books];

    // sort the books using sortBy & sortOrder value and JS compare function
    sortedBooks.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });

    setSearchedBooks([...sortedBooks]);
  };

  //* Toggle Favorite Book
  const handleFavorite = (id, index) => {
    const clickedBook = books.find((book) => book.id === id);

    if (clickedBook.isFavorite === false) {
      clickedBook.isFavorite = true;
    } else {
      clickedBook.isFavorite = false;
    }

    setBooks([
      ...books.slice(0, index),
      clickedBook,
      ...books.slice(index + 1),
    ]);
  };

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  console.log(books);

  return (
    <div>
      <main className="my-10 lg:my-14">
        {/* Search & Sort Book */}
        <SearchAndSortBar
          handleSearchBook={handleSearchBook}
          handleSortBook={handleSortBook}
        />

        {/* Book Grid  */}
        <div className="container grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchedBooks.length > 0 ? (
            <>
              {searchedBooks?.map((book, index) => (
                <Card
                  book={book}
                  key={book.id}
                  index={index}
                  handleFavorite={handleFavorite}
                />
              ))}
            </>
          ) : (
            <>
              {books?.map((book, index) => (
                <Card
                  book={book}
                  key={book.id}
                  index={index}
                  handleFavorite={handleFavorite}
                />
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
