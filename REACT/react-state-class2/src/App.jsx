import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Lottery from './Lottery/Lottery'
import { sum } from './Lottery/helper'
import Form from './Form'
import CommentsForm from './CommentsForm'
import Comment from './Comment'
import Counter from './Counter'

//  LOTTERY

// function App() {

//   let winCondition = (ticket) => {
//     return ticket[0] === 0 ;
//   }

//   return (
//     <>
//       <Lottery n={3} winCondition={winCondition}/>
//     </>
//   )
// }

// FORM

// function App(){
//   return (
//     <Form/>
//   )
// }

// COMMENT FORM

// function App(){
//   return(
//     <CommentsForm/>
//   )
// }

//  COMMENT

function App(){
  return(
    <>
      <Counter/>
    </>
    
  )
}

export default App
