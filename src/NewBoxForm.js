import { useState } from "react";

function NewBoxForm({addBox}){

  const initialState = {
    height: "",
    width: "",
    color: "",
  }
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt){
    const { fieldName, value } = evt.target;
    setFormData(currData => {
      currData[fieldName] = value;
      return {...currData};
    });

  }

  function handleSubmit(evt){
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  return (
    <form className="NewBoxForm" onSubmit={handleSubmit}>

      <label htmlFor="height-input">Height:</label>
      <input id="height-input"
             name="height"
             value={formData.height}
             onChange={handleChange}/>

      <label htmlFor="width-input">Width:</label>
      <input id="width-input"
             name="width"
             value={formData.width}
             onChange={handleChange}/>

      <label htmlFor="color-input">Color:</label>
      <input id="color-input"
             name="color"
             value={formData.color}
             onChange={handleChange}/>


      <button>Add a Box!</button>




    </form>
  )

}

export default NewBoxForm;