import { useState } from "react"
import "./App.css"
import Homepage from "./pages/Homepage"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Homepage />
      {/* <div>home</div> */}
    </div>
  )
}

export default App
