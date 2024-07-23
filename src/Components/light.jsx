import { useState } from "react"

function Light  (props){

    const [color,setColor]= useState(false)

    // handle on button 
    const handleOnButton = () => {
        setColor(true)
    }
const handleOffButton = () => {
    setColor(false)
}
return <div>
    <div style={{backgroundColor: color === true ? "blue" : ""}} className="border-[10px] ml-[400px] mt-10 border-black rounded-full w-[350px] h-[350px] ">
</div>
<div >
    <button style={{backgroundColor: color === true ? "red" : ""}} onClick={handleOnButton}   className="bg-orange-500 ml-[470px] mt-3 px-[30px] py-2 rounded text-white   hover:border-solid border-3-black  hover:text-black">ON</button>
    <button style={{backgroundColor: color === false ? "red" : ""}} onClick={handleOffButton}  className="bg-orange-500 ml-[20px] mt-3 px-[30px] py-2 rounded text-white ">OFF</button>
</div>
</div>
}

export default Light