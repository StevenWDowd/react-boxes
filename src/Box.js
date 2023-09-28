
function Box({ height, width, color, deleteBox, id }){
  return (
    // <div style={{display: "flex", flexDirection:"column"}}>
    <div id={id} style={{height: `${height}px`, width: `${width}px`, backgroundColor: `${color}`}}>
    <button style={{width: `${width}px`}} onClick={deleteBox}>X</button>
    </div>
    // </div>
  )
}

export default Box;