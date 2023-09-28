import react from "react";
import { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from 'uuid';

function BoxList(){

  const [boxes, setBoxes] = useState([]);

  function addBox(box){
    const newBox = { ...box, id: uuid()};
    setBoxes(boxes => [...boxes, newBox]);
  }

  function deleteBox(evt) {
    const box = evt.target.parentNode;
    console.log("BOX IS!!!!!!", box.id);
    setBoxes(boxes.filter(b => b.id !== box.id));
  }

  function renderBoxes(){
    return (
      <div>
        {boxes.map(box => (
          <Box key={box.id}
              id={box.id}
              height={box.height}
              width={box.width}
              color={box.color}
              deleteBox={deleteBox}
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <NewBoxForm addBox={addBox}/>
      {renderBoxes()}
    </div>
  )
}

export default BoxList;