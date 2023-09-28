
function Box({ height, width, color, deleteBox }){
  return (
    <div style={{display: "flex", flexDirection:"column"}}>
    <div style={{height: `${height}px`, width: `${width}px`, backgroundColor: `${color}`}}>
    </div>
    <button style={{width: `${width}px`}} onClick={deleteBox}>X</button>
    </div>
  )
}

export default Box;