console.log('hello')
function init() {
  //dom variables
  const grid = document.querySelector(' .grid')
  const squares = []
  


  //game variables
  const width = 11
  let playerIndex = Math.floor((width * width) - (width / 2))//NEED TO MIDDLE OF BOARD AT BOTTOM
  let carStart = 88
  let logStart = 11
  const gameRunning = true


  //functions

  //THIS FUNCTION MOVES THE CAR ALONG
  function moveCar() {
    squares[carStart].classList.remove('car')
    if (carStart === 98) {
      carStart = carStart - 10
    } else {
      carStart++
    }
    squares[carStart].classList.add('car')
  }
  setInterval(moveCar, 500)

  //THIS FUNCTION MOVES THE LOG ALONG

  function moveLog() {
    squares[logStart].classList.remove('log')
    squares[logStart + 1].classList.remove('log')
    squares[logStart + 2].classList.remove('log')
    if (logStart === 21) {
      logStart = logStart - 10
    } else {
      logStart++
    }
    squares[logStart].classList.add('log')
    squares[logStart + 1].classList.add('log')
    squares[logStart + 2].classList.add('log')
  }
  setInterval(moveLog, 500)




  //THIS FUNCTION IS THE GRID AND HAS ADDED CLASSES TO THE CAR AND PLAYER
  Array(width * width).join('.').split('.').forEach(() => { //this makes an empty array with 121 items in it, of empty strings
    const square = document.createElement('div') //this makes 121 divs
    square.classList.add('grid-item') //this gives the divs the class list of 'grid-item' (which has already been styled in css)
    squares.push(square) //push squares into the array so that we can manipulate each square individually as we know there index number
    grid.appendChild(square) //'this attaches them to the square
  }) 
  //place the player at the starting point when the grid has been built
  squares[playerIndex].classList.add('player')

  //places the car on the grid
  squares[carStart].classList.add('car')

  //places the log on the grid
  squares[logStart].classList.add('log')
  squares[logStart + 1].classList.add('log')
  squares[logStart + 2].classList.add('log')
  

  //THIS FUNCTION LETS THE PLAYER MOVE THE FROG
  function handleKeyDown(e) {
    switch (e.keyCode) {
      case 39: 
        if (playerIndex % width < width - 1) {
          playerIndex++ //go right one
        }        
        break
      case 37:
        if (playerIndex % width > 0) {
          playerIndex--  //go left one
        }
        break
      case 40:
        if (playerIndex + width < width * width) {
          playerIndex += width //yourself plus the width(adding 11)//down
        }
        break
      case 38:
        if (playerIndex - width >= 0) {
          playerIndex -= width 
        }
        break  
      default:
        console.log('player shouldnt move')  
      
    }
    squares.forEach(square => square.classList.remove('player'))
    squares[playerIndex].classList.add('player')
  }




  //event handlers
  window.addEventListener('keydown', handleKeyDown)
  


}

window.addEventListener('DOMContentLoaded', init)
