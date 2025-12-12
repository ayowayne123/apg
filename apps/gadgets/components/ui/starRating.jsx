import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function StarRating({ rating }) {
  const stars = [];
  const rounded = Math.floor(rating); // full stars
  const hasHalf = rating % 1 >= 0.25; // half star if 0.25 – 0.99
  const empty = 5 - rounded - (hasHalf ? 1 : 0);

  for (let i = 0; i < rounded; i++) stars.push(<FaStar key={"f" + i} />);
  if (hasHalf) stars.push(<FaStarHalfAlt key="half" />);
  for (let i = 0; i < empty; i++) stars.push(<FaRegStar key={"e" + i} />);

  return <div className="flex  text-xl gap-1">{stars}</div>;
}
