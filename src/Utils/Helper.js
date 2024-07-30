// Filter the restaurant data according input type
export const filterData = (searchText, cards) => {
    const cardsFilterData = cards.filter((card) =>
      card?.cardName?.toLowerCase().includes(searchText.toLowerCase())
    );
    return cardsFilterData; 
  }