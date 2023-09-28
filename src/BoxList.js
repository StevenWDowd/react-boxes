import react from "react";
import { useState } from "react";
import NewBoxForm from "./NewBoxForm";

function BoxList(){

  const [boxes, setBoxes] = useState([]);

  function addBox(){

  }

  function renderBoxes(){
    // return (
    //   // <ul className="BoxList-list">
    //   //   {boxes.map(box =>
    //   //     <Box)}
    //   // </ul>
    // // )
  }

  return (
    <div>
      <NewBoxForm addBox={addBox}/>
      (renderBoxes())
    </div>
  )
}

export default BoxList;