function Card({ name, onDelete }){
  return(
    <div style={{border:"5px solid black", margin: "10px", padding:"10px"}}>
      <h3>{name}</h3>
      <button onClick={onDelete} style={{color: "red", cursor: "pointer"}}>X</button>
    </div>
  );
}

export default Card