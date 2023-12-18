// SelectComponent.jsx
import React, { useState } from "react";

const Option = () => {
  const [selectedOption, setSelectedOption] = useState("React");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Selected Option: {selectedOption}</h2>
      <label htmlFor="selectOptions">Select an option:</label>
      <select
        id="selectOptions"
        data-cy="selectOptions"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="react">React</option>
        <option value="java">Java</option>
        <option value="nodejs">NodeJs</option>
        <option value="nextjs">Nextjs</option>
      </select>
    </div>
  );
};

export default Option;
