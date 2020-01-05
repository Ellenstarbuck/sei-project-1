console.log('hello')
function init() {
  //dom variables
  const grid = document.querySelector(' .grid')
  const squares = []
  const startBtn = document.querySelector('button.start')
  const resetBtn = document.querySelector('button.reset')
  const timer = document.querySelector('.timer')
  const frogLive1 = document.querySelector('body > div > div > div:nth-child(1)')
  const frogLive2 = document.querySelector('body > div > div > div:nth-child(2)')


  const frogLives = [frogLive1, frogLive2]
  
  //document.querySelector("body > div > div > div:nth-child(1)")
  
  //timers
  let obstacleTimerId = null 

  let timerId = null 
  let timeRemaining = 60


  //game variables
  const width = 11
  let playerIndex = Math.floor((width * width) - (width / 2))//NEED TO MIDDLE OF BOARD AT BOTTOM
  let carStart = 88
  let logStart = 11
  let lilypad = 2
  let gameRunning = false
  let lives = 2
  
  


  Array(width * width).join('.').split('.').forEach(() => { //this makes an empty array with 121 items in it, of empty strings
    const square = document.createElement('div') //this makes 121 divs
    square.classList.add('grid-item') //this gives the divs the class list of 'grid-item' (which has already been styled in css)
    squares.push(square) //push squares into the array so that we can manipulate each square individually as we know there index number
    grid.appendChild(square) //'this attaches them to the square
  }) 
  
  //function

  


  //objects

  class Obstacle {
    constructor (line, current, image) {
      this.line = line
      this.current = current
      this.image = image
      squares[this.current].classList.add(this.image)
    }
    moveRight() {
      squares[this.current].classList.remove(this.image)
      if (this.current === (this.line * width) + (width - 1)) {
        this.current = this.current - 10
      } else {
        this.current++
      }
      squares[this.current].classList.add(this.image)
    }

    moveLeft() {
      squares[this.current].classList.remove(this.image)
      if (this.current === (this.line * width)) {
        this.current = this.current + 10
      } else {
        this.current--
      }
      squares[this.current].classList.add(this.image)
    }

  }

  class Car extends Obstacle {
    constructor (line, current, image) {
      super(line, current, image)
    }
  }

  class Log extends Obstacle {
    constructor (line, current, image) {
      super(line, current, image)
    }
  }

  //functions

  function obstacleTimer() {
    car1.moveRight()
    car2.moveLeft()
    car3.moveRight()
    car4.moveLeft()
    car5.moveRight()
    car6.moveLeft()
    car7.moveRight()
    car8.moveLeft()
    sharkA.moveLeft()
    sharkB.moveLeft()
    sharkC.moveLeft()
    sharkD.moveRight()
    sharkE.moveRight()
    sharkF.moveRight()
    crocA.moveLeft()
    crocB.moveLeft()
    crocC.moveRight()
    crocD.moveRight()
    checkFrog()
  }

  const car1 = new Car(6, 66, 'car')
  const car2 = new Car(7, 87, 'car2')
  const car3 = new Car(8, 88, 'car')
  const car4 = new Car(9, 109, 'car2')
  const car5 = new Car(6, 69, 'car')
  const car6 = new Car(7,84, 'car2')
  const car7 = new Car(8, 91, 'car')
  const car8 = new Car(9, 106, 'car2')

  //logs
  //log one
  const sharkA = new Log(1, 11, 'sharkA')
  const sharkB = new Log(1, 12,'sharkB')
  const sharkC = new Log(1, 13, 'sharkC')
  //log two
  const sharkD = new Log(2, 32, 'shark2A')
  const sharkE = new Log(2, 31,'shark2B')
  const sharkF = new Log(2, 30, 'shark2C')
  //crocs one
  const crocA = new Log(1, 17, 'crockA')
  const crocB = new Log(1, 18, 'crockB')
  //cros two
  const crocC = new Log(2, 26, 'crock2B')
  const crocD = new Log(2, 27, 'crock2A')
  
 
  //place the player at the starting point when the grid has been built
  squares[playerIndex].classList.add('player')

  //places the car on the grid
  squares[carStart].classList.add('car')

  //places the log on the grid
  squares[logStart].classList.add('log')
  squares[logStart + 1].classList.add('log')
  squares[logStart + 2].classList.add('log')

  //places the lilypad's on the grid
  squares[lilypad].classList.add('lilypad')
  squares[lilypad + 3].classList.add('lilypad')
  squares[lilypad + 6].classList.add('lilypad')

  //
  

  //THIS FUNCTION LETS THE PLAYER MOVE THE FROG
  function handleKeyDown(e) {
    if (gameRunning === true) {
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
      checkFrog()
    } 
    squares.forEach(square => square.classList.remove('player'))
    squares[playerIndex].classList.add('player')
  }

  //timer function

  function startTimer() {
    if (timeRemaining < 0) { 
      reset() 
    } else {
      timer.innerHTML = timeRemaining 
      timeRemaining-- 
    }
  }


  
  //checks the class of the square the frog is in

  function checkFrog() {
    //check if the game is in play
    const activeCars = squares[playerIndex].classList.contains('car')
    const activeCar2 = squares[playerIndex].classList.contains('car2')
    
    const activeShark = squares[playerIndex].classList.contains('sharkA')
    const activeSharkMiddle = squares[playerIndex].classList.contains('sharkB')
    const activeSharkBack = squares[playerIndex].classList.contains('sharkC')

    const sharkLad = [activeShark, activeSharkMiddle, activeSharkBack]

    sharkLad.forEach(sharkBit => {
      if (sharkBit) {
        playerIndex--
        squares.forEach(square => square.classList.remove('player'))
        squares[playerIndex  + 1].classList.add('player')
      }
  

    })
    

    

    //const activePlayers = squares[playerIndex].classList.contains('player')
    
    if (activeCars || activeCar2) {
      looseLife()
    }

    if (lives <= 0) {
      reset()
    }

   
  }

  //dying and loosing lives

  function looseLife() {
    squares[playerIndex].classList.remove('player')
    frogLives[lives - 1].classList.remove('life')
    lives--
    playerIndex = Math.floor((width * width) - (width / 2))
    squares[playerIndex].classList.add('player')  
  }

  //start the game
  function play() {
    if (gameRunning === false) {
      obstacleTimerId = setInterval(obstacleTimer, 500)
      gameRunning = true
      startTimer()
      timerId = setInterval(startTimer,1000)
      startBtn.style.display = 'none' 
      resetBtn.style.display = 'block'

    }
  }
  //reset the game
  function reset() {
    lives = 2
    frogLives[0].classList.add('life')
    frogLives[1].classList.add('life')
    squares[playerIndex].classList.remove('player')
    playerIndex = Math.floor((width * width) - (width / 2))
    squares[playerIndex].classList.add('player')
    finishGame()
    clearInterval(obstacleTimerId)
    gameRunning = false
    timerId = null 
    timeRemaining = 60
    timer.innerHTML = timeRemaining
    startBtn.style.display = 'block' 
    resetBtn.style.display = 'none'

    //needs to move player back to the start
    //needs to reset the timer 
  }

  function finishGame() {
    clearInterval(timerId)

  }

  //event handlers
  window.addEventListener('keydown', handleKeyDown)

  //start button and reset button
  startBtn.addEventListener('click', play)
  console.log(startBtn)
  resetBtn.addEventListener('click', reset)

  


}

window.addEventListener('DOMContentLoaded', init)
