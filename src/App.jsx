import Main from "./components/Main/Main"
import Navbar from "./components/Navbar/Navbar"
import { useState } from "react";

export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm)

  return (
    <>
    <section className="nav">
    <Navbar setSearchTerm={setSearchTerm}/>
    </section>
    <section className="cards"> 
    <Main searchTerm={searchTerm}/>
    </section>
    </>
  )
}

export default App