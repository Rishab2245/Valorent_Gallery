import axios from "axios";
import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useCardData = (API_URL , cardCreated , setCardCreated , cardRemoved , setCardRemoved) => {
  const [allCards, setAllCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [getLocalStorage, , clearLocalStorage] = useLocalStorage("user");

  // use useEffect for one time call getCards using empty dependency array

  useEffect(() => {
    getCards();
  }, []);
  
  if(cardCreated || cardRemoved){
    getCards();
    console.log("new cards")
  }
  // async function getRestaurant to fetch API data
  async function getCards() {
    // handle the error using try... catch
    try {
      const response = await axios.get(API_URL);
      // if response is not ok then throw new Error
      if (!response.status === 200) {
          const err = response.status;
          throw new Error(err);
        } else{
        
        console.log(response.data.data);
        setAllCards(response.data.data);
        setFilteredCards(response.data.data);
        if(cardCreated || cardRemoved){
          setCardCreated(false);
          setCardRemoved(false);
        }
        
      }
    } catch (error) {
      console.error(error); // show error in console
    }
  }
  return [allCards, filteredCards]; // return allCards & filteredCards data
};

export default useCardData;
