import { Route,Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"
import List from "./components/List"
import Listitem from "./components/Listitem"
import Nested from "./components/Nested"
import Nesteditem from "./components/Nesteditem"

const App = () => {
  return (
    <>
    <Nav/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/list" element={<List/>}/>
      <Route path="/list/:i" element={<Listitem/>}/>   
      <Route path="/nested" element={<Nested/>}>
           <Route path="/nested/:i" element={<Nesteditem/>}/>
      </Route>   
    </Routes>
    </>
  )
}

export default App