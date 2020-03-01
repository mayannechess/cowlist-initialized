import React from "react";


let CowEntry = ({cow, handler}) => (
  <div className="cow-name" onClick={() => handler(cow)}>{cow.name}</div>
);



export default CowEntry;