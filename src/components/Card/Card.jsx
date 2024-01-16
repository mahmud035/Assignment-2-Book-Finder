import starIcon from '../../assets/star.svg';
import AddToCartButton from '../Button/AddToCartButton';
import FavoriteButton from '../Button/FavoriteButton';

const Card = ({ book, index, handleFavorite }) => {
  const { id, title, author, image, price, isFavorite } = book;

  return (
    <div className="space-y-3">
      {/* thumbnail  */}
      <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
        <img className="w-full" src={image} alt="book image" />
      </div>

      {/* info  */}
      <div className="space-y-3">
        <h4 className="text-lg font-bold lg:text-xl">{title}</h4>
        <p className="text-xs lg:text-sm">
          By : <span>{author}</span>
        </p>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold lg:text-xl">{price}</h4>
          {/* stars  */}
          <div className="flex items-center space-x-1">
            <img src={starIcon} />
            <img src={starIcon} />
            <img src={starIcon} />
            <img src={starIcon} />
            <span className="text-xs lg:text-sm">(4 Star)</span>
          </div>
          {/* stars ends  */}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 text-xs lg:text-sm">
          <AddToCartButton />
          <FavoriteButton
            id={id}
            index={index}
            isFavorite={isFavorite}
            handleFavorite={handleFavorite}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
