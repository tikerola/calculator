import React, { useEffect, useState } from 'react';
import './app.css'
import drawNumberOrOperator from './helpers/hitbox'
import screenCoords from './helpers/screenCoords'


function App() {
  const [numbers, setNumbers] = useState([])

  const canvasRef = React.useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const image = new Image()

    image.src = "calculator1.png"
    ctx.fillStyle = '#B9B9B9'

    ctx.font = "1.8rem digital-7"
    ctx.fillRect(0, 0, 250, 350)
    image.onload = () => {
      ctx.drawImage(image, 0, 0, 250, 350)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = 'black'
    numbers.forEach((number, index) => {
      ctx.fillText(number, screenCoords[numbers.length - index].x, screenCoords[index].y)
    })
  }, [numbers])

  const handleClick = e => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const ctx = canvas.getContext('2d')
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const mark = drawNumberOrOperator(x, y)

    if (mark === '=') {

      console.log(numbers)
      return
    }

    if (mark === 'missHit')
      return

    if (mark === 'clear') {
      setNumbers([])
      ctx.fillStyle = 'rgb(188, 197, 154)'
      ctx.fillRect(30, 40, 190, 50)
    }
    else if (numbers.length < 10) {
      setNumbers([...numbers, mark])
      ctx.fillStyle = 'rgb(188, 197, 154)'
      ctx.fillRect(30, 40, 190, 50)
    }
  }

  return (
    <div className='container'>
      <h1>Calculator</h1>
      <canvas
        ref={canvasRef}
        width={250}
        height={350}
        onClick={handleClick}
      />

    </div>
  );
}

export default App;
