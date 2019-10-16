import React, { useEffect, useState } from 'react';
import './App.css'
import drawNumberOrOperator from './helpers/hitbox'
import screenCoords from './helpers/screenCoords'
import { inputIsValid } from './helpers/validateInput'


function App() {
  const [numbers, setNumbers] = useState([])
  const [numbersOnScreen, setNumbersOnScreen] = useState([])


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

    ctx.fillStyle = 'rgb(188, 197, 154)'
    ctx.fillRect(30, 40, 190, 50)

    ctx.fillStyle = 'black'
    let totalCorrection = numbersOnScreen.join().match(/[.1]/g) ? numbersOnScreen.join().match(/[.1]/g).length : 0

    let xCorrection = 0
    numbersOnScreen.forEach((number, index) => {

      if (index > 0 && (numbersOnScreen[index - 1] === 1 || numbersOnScreen[index - 1] === '.'))
        xCorrection += 1

      ctx.fillText(number, screenCoords[numbersOnScreen.length - (index + 1)].x - xCorrection * 8 + totalCorrection * 8, screenCoords[index].y)

    })
  }, [numbersOnScreen])


  const handleClick = e => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const mark = drawNumberOrOperator(x, y)

    if (mark === '=') {
      console.log(numbers)
      const arr = '¯\\_ツ _/¯'.split('')
      setNumbersOnScreen(arr)
      return
    }

    if (mark === 'missHit')
      return

    else if (mark === 'clear') {
      setNumbers([])
      setNumbersOnScreen([])
    }

    else {

      if (!inputIsValid(numbersOnScreen, mark))
        return

      if (/[^0-9.]/.test(mark))
        setNumbersOnScreen([mark])

      else if (numbersOnScreen.length < 10) {

        if (typeof numbersOnScreen[0] === 'string' && numbersOnScreen[0] !== '.')
          if (numbersOnScreen[0] === '-' && numbers[0] === '-' && numbers.join().match(/[-]/g).length === 1)
            setNumbersOnScreen([...numbersOnScreen, mark])
          else
            setNumbersOnScreen([...numbersOnScreen.slice(1), mark])
        else
          setNumbersOnScreen([...numbersOnScreen, mark])
      }

      else
        return

      setNumbers([...numbers, mark])
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
