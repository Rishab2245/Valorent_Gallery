import {
  shimmer_card_unit,
  shimmer_menu_card_unit,
} from "../Common/constants";

// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate"></div>
      <div className="shimmer-details">
        <div className="shimmer-details-rating stroke animate"></div>
        <div className="shimmer-details-rating stroke animate"></div>
        <div className="shimmer-details-rating stroke animate"></div>
      </div>
    </div>
  );
};
const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {/* create a new Array instance using Array() constructor and map through every element of array */}
      {Array(shimmer_card_unit)
        .fill("")
        .map((element, index) => {
          return <CardShimmer key={index.toString() + 1} />;
        })}
    </div>
  );
};
export default Shimmer;
