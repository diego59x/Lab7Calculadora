import React, { useState } from 'react'
import Button from './Button'

const Grid = () => {
    const [activeButttons, setActiveButtons] = useState([false, false, false, false, false, false, false, false, false, false, false])

    const handleButtonClick = (index) => {
        setActiveButtons((oldActiveButtons) => {
            const newActiveButtons = [...oldActiveButtons]
            newActiveButtons[index] = true
            return newActiveButtons
        })
    }

    return  (
      <div>
          <Button color="backButton" active={activeButttons[0]} onClick={() => {
              handleButtonClick(0)
          }} text="1" />
          <Button color="backButton" active={activeButttons[1]} onClick={() => {
              handleButtonClick(1)
          }} text="2" />
          <Button color="backButton" active={activeButttons[2]} onClick={() => {
              handleButtonClick(2)
          }} text="3" />
          <Button color="backButton" active={activeButttons[3]} onClick={() => {
              handleButtonClick(3)
          }} text="4" />
          <Button color="backButton" active={activeButttons[4]} onClick={() => {
              handleButtonClick(4)
          }} text="5" />
          <Button color="backButton" active={activeButttons[5]} onClick={() => {
              handleButtonClick(5)
          }} text="6" />
          <Button color="backButton" active={activeButttons[6]} onClick={() => {
              handleButtonClick(6)
          }} text="7" />
          <Button color="backButton" active={activeButttons[7]} onClick={() => {
              handleButtonClick(7)
          }} text="8" />
          <Button color="backButton" active={activeButttons[8]} onClick={() => {
              handleButtonClick(8)
          }} text="9" />
          <Button color="backButton" active={activeButttons[9]} onClick={() => {
              handleButtonClick(9)
          }} text="=" />
          <Button color="backButton" active={activeButttons[10]} onClick={() => {
              handleButtonClick(10)
          }} text="+" />
          <Button color="backButton" active={activeButttons[11]} onClick={() => {
              handleButtonClick(11)
          }} text="-" />
          <Button color="backButton" active={activeButttons[12]} onClick={() => {
              handleButtonClick(12)
          }} text="/" />
          <Button color="backButton" active={activeButttons[13]} onClick={() => {
              handleButtonClick(13)
          }} text="X" />
         
          
      </div>
    )
}

export default Grid
