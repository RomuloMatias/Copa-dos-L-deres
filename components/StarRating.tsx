import React, { useState } from 'react';
import { StarIcon } from './IconComponents';

interface StarRatingProps {
  count?: number;
  rating: number;
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ count = 5, rating, onRatingChange }) => {
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className="flex justify-center items-center gap-2 sm:gap-4">
            {[...Array(count)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <button
                        type="button"
                        key={starValue}
                        className={`transition-transform duration-200 ease-in-out transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-secondary-yellow rounded-full p-1`}
                        onClick={() => onRatingChange(starValue)}
                        onMouseEnter={() => setHoverRating(starValue)}
                        onMouseLeave={() => setHoverRating(0)}
                        aria-label={`Avaliar ${starValue} de ${count}`}
                    >
                        <StarIcon 
                            className={`w-10 h-10 sm:w-12 sm:h-12`}
                            isFilled={starValue <= (hoverRating || rating)}
                        />
                    </button>
                )
            })}
        </div>
    );
};

export default StarRating;