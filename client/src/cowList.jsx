
import React from "react";
import CowEntry from "./cowEntry";

let CowList = ({entries, handler}) => (
  <div className="cow-list">
    <h4>Your cows:</h4>
    <div>
      {entries.map((cow) => 
        <CowEntry
        key={cow.id}
        cow={cow}
        handler={handler}
        />
      )}
    </div>
  </div>
);

export default CowList;