import React, { useRef } from "react";

const Searching = ({ onButtonClick }) => {
  const searchRef = useRef(null);

  return (
    <div>
      <input type="text" placeholder="Search..." ref={searchRef} />
      <button onClick={() => onButtonClick(searchRef.current.value)}>
        Search
      </button>
    </div>
  );
};

export default Searching;
