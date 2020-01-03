console.log('hello')
function init() {
  //dom variables
  const grid = document.querySelector(' .grid')
  const squares = []
  const startBtn = document.querySelector('button.start')
  const resetBtn = document.querySelector('button.reset')
  


  //game variables
  const width = 11
  let playerIndex = Math.floor((width * width) - (width / 2))//NEED TO MIDDLE OF BOARD AT BOTTOM
  //let carStart = 88
  let logStart = 11
  let lilypad = 2
  let gameRunning = true


  Array(width * width).join('.').split('.').forEach(() => { //this makes an empty array with 121 items in it, of empty strings
    const square = document.createElement('div') //this makes 121 divs
    square.classList.add('grid-item') //this gives the divs the class list of 'grid-item' (which has already been styled in css)
    squares.push(square) //push squares into the array so that we can manipulate each square individually as we know there index number
    grid.appendChild(square) //'this attaches them to the square
  }) 
  
  //function

  function play() {
    gameRunning = true
    obstacleTimer()
  }

  function reset() {
    gameRunning = false
  }


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
  }

  //where the obstacle vars are
  //cars
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
  




  setInterval(obstacleTimer, 500)
 
 
 
 //functions

 // //THIS FUNCTION MOVES THE CAR ALONG
 // function moveCar() {
 //   squares[carStart].classList.remove('car')
 //   if (carStart === 98) {
 //     carStart = carStart - 10
 //   } else {
 //     carStart++
 //   }
 //   squares[carStart].classList.add('car')
 // }
 // setInterval(moveCar, 500)

  //THIS FUNCTION MOVES THE LOG ALONG

  //function moveLog() {
  //  squares[logStart].classList.remove('log')
  //  squares[logStart + 1].classList.remove('log')
  //  squares[logStart + 2].classList.remove('log')
  //  if (logStart === 21) {
  //    logStart = logStart - 10
  //  } else {
  //    logStart++
  //  }
  //  squares[logStart].classList.add('log')
  //  squares[logStart + 1].classList.add('log')
  //  squares[logStart + 2].classList.add('log')
  //}
  //setInterval(moveLog, 500)




 
  //place the player at the starting point when the grid has been built
  squares[playerIndex].classList.add('player')

  //places the car on the grid
  //squares[carStart].classList.add('car')

  //places the log on the grid
  squares[logStart].classList.add('log')
  squares[logStart + 1].classList.add('log')
  squares[logStart + 2].classList.add('log')

  //places the lilypad's on the grid
  squares[lilypad].classList.add('lilypad')
  squares[lilypad + 3].classList.add('lilypad')
  squares[lilypad + 6].classList.add('lilypad')
  

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

  startBtn.addEventListener('click', play)
  console.log(startBtn)
  resetBtn.addEventListener('click', reset)

  


}

window.addEventListener('DOMContentLoaded', init)
