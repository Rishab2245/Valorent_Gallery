import { useState } from "react";
import { IMG_CDN_URL } from "../Common/constants.js";
import Img from "./Img.js"
import Confirmation from "./Confirmation.js";
// Restaurant card component: Image, name, cuisine
const Card = ({
  cardName,
  cardImg,
  cardDiscription
}) => {
  return (
    <div className="card">
      <Img cardImg={cardImg} />
      <h3>{cardName}</h3>
      <h4>{cardDiscription}</h4>
    </div>
  );
};

export const WithRemoveCard = (Card) =>{
  return (props) =>{
    const [iscross , setiscross] = useState(false);


    const { _id , setCardRemoved} = props;
    console.log(_id);
    return (
      <div className="main-card">
       <button className="cross" onClick={()=>{
            setiscross(!iscross);
        }}>x</button>
       {
          iscross&& <Confirmation id={_id} setCardRemoved={setCardRemoved} setiscross={setiscross}/>
       }
       <Card {...props}/>
      </div>
     );
  }
};

export default Card;
