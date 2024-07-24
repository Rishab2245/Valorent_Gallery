import RestaurantCard from "./RestaurantCard";
import { useState } from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */
import { GETALL_CARD_API } from "../Common/constants";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper"; // For reusability or readability filterData function is added in Helper.js file of Utils folder
import useCardData from "../Hooks/useCardData.js";
import useOnline from "../Hooks/useOnline"; // imported custom hook useOnline which checks user is online or not
import UserOffline from "./UserOffline";

// Body Component for body section: It contain all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, AllCards and filteredCards is local state variable
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [AllCards,FilterCards] = useCardData(GETALL_CARD_API);
  const [filteredCards, setFilteredCards] = useState(null);
  console.log(FilterCards  , "filterCards" , "filteredCards" , filteredCards);
  const isOnline = useOnline();

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
        <input
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
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}
          
      {/* if Cards data are fetched then display Cards cards otherwise display Shimmer UI */}
      {AllCards?.length === 0 && FilterCards?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">

          {(filteredCards === null ? FilterCards : filteredCards).map(
            (card) => {
              return (
                <Link
                  key={card?._id}
                >
                  {/* if we click on any restaurant card it will redirect to that restaurant menu page */}
                  <RestaurantCard {...card} />
                </Link>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
