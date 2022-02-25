interface RatingStarProps {
  rate: number;
}

export default function RatingStar({ rate }: RatingStarProps) {
  const givenRate = Number(rate);
  const validRate = givenRate ? givenRate : 5;
  const activeRate = new Array(validRate).fill(0);
  const inactiveRateCount = 5 - validRate;
  const validInactiveRate = inactiveRateCount ? inactiveRateCount : 0;
  const inactiveRate = new Array(validInactiveRate).fill(0);

  return (
    <div className="star-rating">
      {activeRate.map((rate, index) => (
        <i key={index} className="star-rating-icon ci-star-filled active"></i>
      ))}
      {inactiveRate.map((rate, index) => (
        <i key={index} className="star-rating-icon ci-star"></i>
      ))}
    </div>
  );
}
