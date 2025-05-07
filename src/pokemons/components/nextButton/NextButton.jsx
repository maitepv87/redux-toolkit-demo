import PropTypes from "prop-types";
import "./nextButton.css";

export const NextButton = ({ isLoading, loadNextPage }) => {
  return (
    <button
      className="next-button"
      aria-label="Load next page of Pokémon"
      aria-disabled={isLoading}
      disabled={isLoading}
      onClick={loadNextPage}
    >
      {isLoading ? "Loading..." : "Next"}
    </button>
  );
};

NextButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadNextPage: PropTypes.func.isRequired,
};
