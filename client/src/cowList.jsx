
import React from "react";
import CowEntry from "./cowEntry";

let CowList = ({entries}) => (
  <div className="cow-list">
    <h4>Your cows:</h4>
    <div>
      {entries.map((cow) => 
        <CowEntry
        key={cow.id}
        name={cow.name}
        />
      )}
    </div>
  </div>
);

export default CowList;