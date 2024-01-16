import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

const FavoriteButton = ({ id, index, isFavorite, handleFavorite }) => {
  return (
    <button
      onClick={() => handleFavorite(id, index)}
      className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md py-1.5  transition-all  lg:py-1.5 ${
        isFavorite
          ? 'bg-[#DC2954]/[14%] text-[#DC2954] hover:bg-[#DC2954]/[24%]'
          : 'bg-[#1C4336]/[14%] text-[#1C4336]  hover:bg-[#1C4336]/[24%]'
      }`}
    >
      {isFavorite ? (
        <>
          <MdFavorite size={21} />
        </>
      ) : (
        <>
          <MdFavoriteBorder size={21} />
        </>
      )}
      Favorite
    </button>
  );
};

export default FavoriteButton;
