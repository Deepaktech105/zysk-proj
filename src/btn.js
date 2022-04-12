import React, {useState} from 'react'

// 3rd assignment
// change the 'HI' Text color on clicking of button.
export const Btn = () => {
    const [color, setColor] = useState("")

    const handleColor = () => {
        setColor("red");
    }

  return (
    <div>
        <h1 style={{color: color}}>HI</h1>
        <button onClick={handleColor}>Change Color</button>
    </div>
  )
}
