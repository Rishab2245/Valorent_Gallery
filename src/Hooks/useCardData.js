import axios from "axios";
import { useEffect, useState } from "react";

const useCardData = (API_URL) => {
  const [allCards, setAllCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  // use useEffect for one time call getCards using empty dependency array
  useEffect(() => {
    getCards();
  }, []);
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
      }
    } catch (error) {
      console.error(error); // show error in console
    }
  }
  return [allCards, filteredCards]; // return allCards & filteredCards data
};

export default useCardData;
