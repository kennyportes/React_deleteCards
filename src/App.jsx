import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Form from './components/Form'
import Child from './components/Child'
import Card from './components/Card'
import React from "react"
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

// CLASS COMPONENT

// class App extends React.Component {
// render(){
//   return <h1>Hello from class componet</h1>
//  }
// }

// STATE IN CLASS COMPONENT

// class Counter extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {count: 0}; // initial

//   }
//   render(){
//     return(
//       <>
//         <h2>Count:{this.state.count}</h2>
//         <button onClick={() => this.setState({count: this.state.count +1})}>Increase</button>
//       </>
//     )
//   }
// }

//  EVENT HANDLING IN CLASS COMPONENT:

// class ButtonClick extends React.Component{

//   handleClick(){
//     alert("Button clicked!");
//   }

//   render(){
//     return <button onClick={() => this.handleClick()}>Click Me!</button>;
//   }
// }

// REFS IN CLASS COMPONENT

// class FocusInput extends React.Component{
//   constructor(props){
//     super(props);
//     this.inputRef = React.createRef();
//   }
//   focusInput =() =>{
//     this.inputRef.current.focus();
//   };
//   render(){
//     return(
//       <>
//       <input ref ={this.inputRef} placeholder='Click button to focus' />
//       <button onClick={this.focusInput}>FocusInput</button>
//       </>
//     )
//   }
// }

//------------------------------------------------------------------------------------------------------

// TASK 1: FIRST CLASS COMPONENT
// class Welcome extends React.Component{
//   render(){
//     return(
//       <>
//       <h1>Welcome to React Class</h1>
//       </>
//     )
//   }
// }
// export default Welcome;

// TASK 2: STATE IN CLASS COMPONENT
// class Counter extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {count: 0};
//   }
  
//   render(){
//     return(
//       <>
//       <h2>Count: {this.state.count}</h2>
//       <button onClick={() => this.setState({count: this.state.count +1})}>Increase</button>
//       <button onClick={() => this.setState({ count: 0 })}>Reset</button>
//       </>
//     )
//   } 
// };

// export default Counter;

// TASK 3: EVENT HANDLING

// class Message extends React.Component{
//   buttonClick(){
//     alert("Button Was Clicked!");
//   }
//   render(){
//     return(
//       <>
//       <h3>Click the button</h3>
//       <button onClick={() => this.buttonClick()}>Click Here</button>
//       </>
//     )
//   }
// }

// export default Message;

// TASK 4: REFS IN CLASS COMPONENT

// class InputFocus extends React.Component{
//   constructor(props){
//     super(props);
//     this.refInput = React.createRef();
//   }
//   focusInput = () => {
//     this.refInput.current.focus();
//   };

//   render(){
//     return(
//       <>
//       <input ref = {this.refInput} placeholder='Click Button To Focus' />
//       <button onClick = {this.focusInput} >Click Here</button>
//       </>
//     )
//   }
// }

// export default InputFocus;


// Bonus Task 

class InteractiveInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayText: "" };
    this.inputRef = React.createRef();
  }

  handleInputChange = (event) => {
    this.setState({ displayText: event.target.value });
  };

  handleFocus = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <>
        <h2>View your Input Below</h2>
        
        <input 
          ref={this.inputRef}
          type="text"
          value={this.state.displayText}
          onChange={this.handleInputChange}
          placeholder="Type something..."
        />

        <button onClick={this.handleFocus}>Focus Input</button>

        <p>{this.state.displayText}</p>
      </>
    );
  }
}

export default InteractiveInput;

/* 

MCQ's:

1. What is a class component in React?
A. A function
B. A JavaScript class that extends React.Component
C. A CSS class
D. A HTML element
Answer: B

2. Which method is required in every class component?
A. start()
B. render()
C. display()
D. show()
Answer: B

3. How do you initialize state in a class component?
A. this.data = {}
B. this.state = {}
C. state = {}
D. setState()
Answer: B

4. What does setState() do?
A. Deletes state
B. Updates state and re-renders UI
C. Creates component
D. Stops rendering
Answer: B

5. Which keyword is used to access state?
A. state
B. this.state
C. props
D. this.props
Answer: C

6. How do you handle click events in class components?
A. onClick="handleClick"
B. onClick={handleClick}
C. click(handleClick)
D. event={handleClick}
Answer: B

7. What is the purpose of constructor(props)?
A. To render UI
B. To initialize state
C. To handle events
D. To create JSX
Answer: B

8. What is super(props) used for?
A. To delete props
B. To call parent constructor
C. To create state
D. To render UI
Answer: B

9. What is a ref in React?
A. A variable
B. A function
C. A way to access DOM elements
D. A state
Answer: C

10. How do you create a ref in class components?
A. useRef()
B. createRef()
C. new Ref()
D. getRef()
Answer: B

*/
