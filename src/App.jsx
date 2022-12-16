import Main from "./components/Main/Main"
import Navbar from "./components/Navbar/Navbar"
import { useState } from "react";

export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm)

  const [checkABV, setCheckABV] = useState(false)

  const [checkYear, setCheckYear] = useState(false)

  const [checkPH, setCheckPH] = useState(false)

  

  return (
    <>
    <section className="nav">
    <Navbar setSearchTerm={setSearchTerm} 
    setCheckABV={setCheckABV}
    setCheckYear={setCheckYear}
    setCheckPH={setCheckPH}/>
    </section>
    <section className="cards"> 
    <Main searchTerm={searchTerm}
    checkABV={checkABV}
    checkYear={checkYear}
    checkPH={checkPH}/>
    </section>
    </>
  )
}

export default App