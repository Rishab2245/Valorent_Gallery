import { IMG_CDN_URL } from "../Common/constants";
import Img from "./Img.js"
// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cardName,
  cardImg,
  cardDiscription
}) => {

  console.log(cardImg);
  return (
    <div className="card">
      <Img cardImg={cardImg} />
      <h3>{cardName}</h3>
      <h4>{cardDiscription}</h4>
    </div>
  );
};

export default RestaurantCard;
