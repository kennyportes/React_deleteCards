import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Form from './components/Form'
import Child from './components/Child'
import Card from './components/Card'

// STATEFUL FUNCTIONAL COMPONENT

// function App() {
//   const [count, setCount] = useState(0);
//   return(
//     <>
//     <h1>count: {count}</h1>
//     <button onClick={() => setCount(count-1)}>Decrease</button>
//     </>
//   );
// }





// EVENT HANDLE IN REACT

// function App(){
//   function handleClick(){
//     alert("Button Clicked");
//   }
//   return <button onClick={handleClick} >Click Me</button>
// }



// RENDERING A LIST OF COMPONENTS

// function App(){
//   const users = ["Aliyah","Jackie","Kenny"];
//   return(

//     <>
//     {users.map((user, index) =>(
//       <h2 key={index}>{user}</h2>
      
//     )
//     )}
//    </> 
//   );
// }


// EXTRACTING FORM INTO COMPONENT

// function App(){
//   return <Form />;
// }


// PASSING STATE CHILD AS PROPS

// function App(){
//   const [count, setCount] = useState(0);
//   return(
//     <>
//       <button onClick={() => setCount(count+1)}>Increase</button>
//       <Child count = {count} />
//     </>
//   );
// }

// Adding card

// function App(){
//   return(
//     <>
//     <h1>Cards</h1>
//     <Card name = "Prince Aliyah" />
//     <Card name = "Queen Jacklyn" />
//     <Card name = "King Kenny" />
    
//     </>
    
//   );
// }

function App(){
  const[cards, setCards] = useState([]);

  function addCard(){
    setCards ([...cards, "New card"]);
  }

  function deleteCard(indexToDelete){
    const updatedCards = cards.filter((_,index) => index !== indexToDelete);
    setCards(updatedCards);
  }
 
return (
  <>
  <button onClick={addCard}>Add Card</button>
  {cards.map((card, index) => (
    <Card 
    key={index} 
    name={card} 
    index={index}
    onDelete={() => deleteCard(index)} />
  ))}
  </>
);
}
export default App