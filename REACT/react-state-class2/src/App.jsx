import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Lottery from './Lottery'
import TicketNum from './TicketNum'
import Ticket from './Ticket'

function App() {


  return (
    <>
      <Ticket ticket={[1,2,3]}/>
      <Ticket ticket={[1,2,3,6,8,5,4,7]}/>


    </>
  )
}

export default App
