import Card from "./Card.js";
import { WithRemoveCard } from "./Card.js";
import { useState } from "react"; /* This is named export */
import { useLocation } from "react-router-dom";
import Shimmer from "./Shimmer"; /* This is default export */
import { GETALL_CARD_API } from "../Common/constants";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper"; // For reusability or readability filterData function is added in Helper.js file of Utils folder
import useCardData from "../Hooks/useCardData.js";
import useOnline from "../Hooks/useOnline"; // imported custom hook useOnline which checks user is online or not
import UserOffline from "./UserOffline";
import useAuth from "../Hooks/useAuth.js";

import AddCard from "./AddCard.js";
import { useEffect } from "react";


const EditableCard = WithRemoveCard(Card);

// Body Component for body section: It contain all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, AllCards and filteredCards is local state variable
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const [isAdd ,setisAdd] = useState(false);
  const [cardCreated , setCardCreated] = useState(false);
  const [cardRemoved , setCardRemoved] = useState(false);
  const [AllCards,FilterCards] = useCardData(GETALL_CARD_API , cardCreated , setCardCreated , cardRemoved , setCardRemoved);
  const [filteredCards, setFilteredCards] = useState(null);
  // console.log(FilterCards  , "filterCards" , "filteredCards" , filteredCards);
  const isOnline = useOnline();
  const [isLoggedin, setIsLoggedin] = useAuth();



 

  // if user is not Online then return UserOffline component
  if (!isOnline) {
    return <UserOffline />;
  }


  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, Cards) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, Cards);
      setFilteredCards(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredCards(Cards);
    }
  };

  // if AllCards are empty don't render Cards cards
  if (!AllCards) return null;

  return (
    <div className="body-container">
      <div className="search-container">
        <div><input
          type="text"
          className="search-input"
          placeholder="Search a card you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => {
            setSearchText(e.target.value);
            // when user will enter the data, it automatically called searchData function so it work same as when you click on Search button
            searchData(e.target.value, AllCards);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, AllCards);
          }}
        >
          Search
        </button></div>
        {isLoggedin && (
        <div>
        <button id="add" className="search-btn" onClick={()=>{
            setisAdd(!isAdd);
        }}>Add</button>
      </div>
        )}
      </div>
      {isAdd && (<div className="addCard">
        <AddCard setisAdd={setisAdd} setCardCreated={setCardCreated}/>
      </div>)}
      {errorMessage && <div className="error-container">{errorMessage}</div>}
          
      {/* if Cards data are fetched then display Cards cards otherwise display Shimmer UI */}
      {AllCards?.length === 0 && FilterCards?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {(filteredCards === null ? FilterCards : filteredCards).map(
            (card) => {
              return (
                 <div key={card?._id}>
                   {isLoggedin ? (<EditableCard setCardRemoved={setCardRemoved} {...card}/>) : (<Card {...card} />)}
                 </div>
                  
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default Body;


