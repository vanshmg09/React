import "./App.css"

import Title  from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

// function Description(){
//   return(
//     <h3>I am the description</h3>
//   );
// }

// function App() {
//   return (
//    <ProductTab />
// );

// }

function App() {
  return(
    <>
    <MsgBox username="vansh" textColor="pink"/>
     <MsgBox username="Apna College" textColor="yellow"/>
    </>
    
  )
}

export default App;
