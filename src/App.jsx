import{useState} from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{ backgroundColor: color }}>
    <div className="fixed flex flex-col justify-center mt-16 ml-12">
        <div className="flex flex-col justify-center gap-1 shadow-lg bg-white px-2 py-2 rounded-3xl">

    <button 
        onClick={() => setColor("red")}
        className="outline-none px-4 py-1 m-2 rounded-full text-white shadow=lg"
        style={{backgroundColor:"red"}}>Red</button>
        <button 
        onClick={() => setColor("green")}
        className="outline-none px-4 py-1 m-2 rounded-full text-white shadow=lg"
        style={{backgroundColor:"green"}}>green</button>
        <button 
        onClick={() => setColor("blue")}
        className="outline-none px-4 py-1 m-2 rounded-full text-white shadow=lg"
        style={{backgroundColor:"blue"}}>blue</button>
        <button 
        onClick={() => setColor("orange")}
        className="outline-none px-4 py-1 m-2 rounded-full text-white shadow=lg"
        style={{backgroundColor:"orange"}}>orange</button>
        <button 
        onClick={() => setColor("gray")}
        className="outline-none px-4 py-1 m-2 rounded-full text-white shadow=lg"
        style={{backgroundColor:"gray"}}>Gray</button>
        <button 
        onClick={() => setColor("yellow")}
        className="outline-none px-4 py-1 m-2 rounded-full text-black shadow=lg"
        style={{backgroundColor:"yellow"}}>Yellow</button>
        <button 
        onClick={() => setColor("pink")}
        className="outline-none px-4 py-1 m-2 rounded-full text-black shadow=lg"
        style={{backgroundColor:"pink"}}>Pink</button>
        <button 
        onClick={() => setColor("purple")}
        className="outline-none px-4 py-1 m-2 rounded-full text-white shadow=lg"
        style={{backgroundColor:"purple"}}>Purple</button>
        <button 
        onClick={() => setColor("lavender")}
        className="outline-none px-4 py-1 m-2 rounded-full text-black shadow=lg"
        style={{backgroundColor:"lavender"}}>Lavender</button>
        <button 
        onClick={() => setColor("white")}
        className="outline-none px-4 py-1 m-2 rounded-full text-black shadow=lg"
        style={{backgroundColor:"white"}}>White</button>
        <button 
        onClick={() => setColor("black")}
        className="outline-none px-4 py-1 m-2 rounded-full text-white shadow=lg"
        style={{backgroundColor:"black"}}>Black</button>
      </div>
    </div>
  </div>
  )
}

export default App
