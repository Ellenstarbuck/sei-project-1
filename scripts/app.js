console.log('hello')
function init() {
  //dom variables
  const grid = document.querySelector(' .grid')
  const squares = []
  const timer = document.querySelector('.timer')

  //lives and safe frogs
  const frogLive1 = document.querySelector('body > div > div > div:nth-child(2)')
  const frogLive2 = document.querySelector('body > div > div > div:nth-child(3)')
  const frogLive3 = document.querySelector('body > div > div > div:nth-child(4)')
  const frogSafe1 = document.querySelector('body > div.container > div.livebox > div.safebox > div:nth-child(2)')
  const frogSafe2 = document.querySelector('body > div.container > div.livebox > div.safebox > div:nth-child(3)')
  const frogSafe3 = document.querySelector('body > div.container > div.livebox > div.safebox > div:nth-child(4)')
  const frogSafe4 = document.querySelector('body > div.container > div.livebox > div.safebox > div:nth-child(5)')
  const frogLives = [frogLive1, frogLive2, frogLive3]

  
  //landing page
  const container2 = document.querySelector('.container2')
  const container = document.querySelector('.container')
  //end page
  const container4 = document.querySelector('.container4')
  const container5 = document.querySelector('.container5')
  
  const safeFrog = [frogSafe1, frogSafe2, frogSafe3, frogSafe4]

  //buttons
  const firstStart = document.querySelector('button.newStart')
  const startBtn = document.querySelector('button.start')
  const resetBtn = document.querySelector('button.reset')
  const playAgainbtn = document.querySelector('button.playAgain')
  const playAgainbtn2 = document.querySelector('button.playAgain2')
  
  //timers
  let obstacleTimerId = null 
  let timerId = null 
  let timeRemaining = 60


  //game variables
  const width = 11
  let playerIndex = Math.floor((width * width) - (width / 2))//NEED TO MIDDLE OF BOARD AT BOTTOM
  let logStart = 11
  let lilypad = 2
  let gameRunning = false
  let lives = 3
  let grass = 0
  let frogSaved = 4

  //building the grid
  Array(width * width).join('.').split('.').forEach(() => { //this makes an empty array with 121 items in it, of empty strings
    const square = document.createElement('div') //this makes 121 divs
    square.classList.add('grid-item') //this gives the divs the class list of 'grid-item' (which has already been styled in css)
    squares.push(square) //push squares into the array so that we can manipulate each square individually as we know there index number
    grid.appendChild(square) //'this attaches them to the square
  }) 
  
  //object factory!

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

  //checks where the obstacles are and moves them

  function obstacleTimer() {
    if (gameRunning === true) {
      checkShark()
      car1.moveRight()
      car2.moveLeft()
      car3.moveRight()
      car4.moveLeft()
      car5.moveRight()
      car6.moveLeft()
      car7.moveRight()
      car8.moveLeft()
      car9.moveRight()
      car10.moveLeft()
      car11.moveRight()
      car12.moveLeft()
      sharkA.moveLeft()
      sharkB.moveLeft()
      sharkC.moveLeft()
      shark2A.moveRight()
      shark2B.moveRight()
      shark2C.moveRight()
      shark3A.moveLeft()
      shark3B.moveLeft()
      shark3C.moveLeft()
      shark4A.moveRight()
      shark4B.moveRight()
      shark4C.moveRight()
      crocA.moveLeft()
      crocB.moveLeft()
      croc2B.moveRight()
      croc2A.moveRight()
      croc3A.moveLeft()
      croc3B.moveLeft()
      croc4A.moveRight()
      croc4B.moveRight()
      checkCar()
    }
  }

  //obstacles
  //cars
  const car1 = new Car(6, 66, 'car')
  const car2 = new Car(7, 87, 'car2')
  const car3 = new Car(8, 88, 'car3')
  const car4 = new Car(9, 109, 'car4')
  const car5 = new Car(6, 70, 'car')
  const car6 = new Car(7,83, 'car2')
  const car7 = new Car(8, 92, 'car3')
  const car8 = new Car(9, 105, 'car4')
  const car9 = new Car(6, 74, 'car')
  const car10 = new Car(7, 79, 'car2')
  const car11 = new Car(8, 96, 'car3')
  const car12 = new Car(9, 101, 'car4')


  //water
  const waterArray = squares.slice(11,55)
  waterArray.forEach(square => square.classList.add('water'))

  //sharks
  //shark one
  const sharkA = new Log(1, 11, 'sharkA')
  const sharkB = new Log(1, 12,'sharkB')
  const sharkC = new Log(1, 13, 'sharkC')
  //shark two
  const shark2A = new Log(2, 32, 'shark2A')
  const shark2B = new Log(2, 31,'shark2B')
  const shark2C = new Log(2, 30, 'shark2C')
  //shark three
  const shark3A = new Log(3, 33, 'shark3A')
  const shark3B = new Log(3, 34, 'shark3B')
  const shark3C = new Log(3, 35, 'shark3C')
  //shark four
  const shark4A = new Log(4, 54, 'shark4A')
  const shark4B = new Log(4, 53, 'shark4B')
  const shark4C = new Log(4, 52, 'shark4C')
  //crocs one
  const crocA = new Log(1, 17, 'crockA')
  const crocB = new Log(1, 18, 'crockB')
  //crocs two
  const croc2B = new Log(2, 26, 'crock2B')
  const croc2A = new Log(2, 27, 'crock2A')
  //crocs three
  const croc3A = new Log(3, 39, 'crock3A')
  const croc3B = new Log(3, 40, 'crock3B')
  //crocs four
  const croc4A = new Log(4, 48, 'crock4B')
  const croc4B = new Log(4, 49, 'crock4A')
  

  //roads
  const roadTopArray = squares.slice(66,77)
  roadTopArray.forEach(square => square.classList.add('roadTop'))

  const roadSecondRow = squares.slice(77,88)
  roadSecondRow.forEach(square => square.classList.add('roadSecondRow'))

  const roadThirdRow = squares.slice(88,99)
  roadThirdRow.forEach(square => square.classList.add('roadThirdRow'))

  const roadBottomArray = squares.slice(99,110)
  roadBottomArray.forEach(square => square.classList.add('roadBottom'))
  
  //grass
  squares[grass].classList.add('grass')
  squares[grass + 1].classList.add('grass')
  squares[grass + 3].classList.add('grass')
  squares[grass + 5].classList.add('grass')
  squares[grass + 7].classList.add('grass')
  squares[grass + 9].classList.add('grass')
  squares[grass + 10].classList.add('grass')
  
  
  //tarmac
  const tarmacArray = squares.slice(110,121)
  const tarmacMiddleArray = squares.slice(55,66)
  tarmacArray.forEach(square => square.classList.add('tarmac'))
  tarmacMiddleArray.forEach(square => square.classList.add('tarmac'))

  //place the player at the starting point when the grid has been built
  squares[playerIndex].classList.add('player')

  //places the lilypad's on the grid
  squares[lilypad].classList.add('lilypad')
  squares[lilypad + 2].classList.add('lilypad')
  squares[lilypad + 4].classList.add('lilypad')
  squares[lilypad + 6].classList.add('lilypad')


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
      squares.forEach(square => square.classList.remove('player'))
      squares[playerIndex].classList.add('player')
      checkCar()
      checkWater()
      checkLilypad()
      grassDeath()
    } 
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


  //checks if the player is in a square with a car and if so HE DIES
  function checkCar() {
    const activeCars = squares[playerIndex].classList.contains('car')
    const activeCars2 = squares[playerIndex].classList.contains('car2')
    const activeCars3 = squares[playerIndex].classList.contains('car3')
    const activeCar4 = squares[playerIndex].classList.contains('car4')
  
    
    if (activeCars || activeCars2 || activeCars3 || activeCar4) {
      looseLife()
    }

    if (lives <= 0) {
      reset()
    }

   
  }

  //checks if the player is in a square with water, and if so HE DIES
  function checkWater() {
    if (squares[playerIndex].classList.contains('water') && squares[playerIndex].classList.length < 4){
      looseLife()
    }
    if (lives <= 0) {
      reset()
    }
  }

  //checks if the player is in a square with a shark, and if so HE DIES
  function checkShark() {
    const sharkA = squares[playerIndex].classList.contains('sharkA')
    const sharkB = squares[playerIndex].classList.contains('sharkB')
    const sharkC = squares[playerIndex].classList.contains('sharkC')
    const shark2A = squares[playerIndex].classList.contains('shark2A')
    const shark2B = squares[playerIndex].classList.contains('shark2B')
    const shark2C = squares[playerIndex].classList.contains('shark2C')
    const shark3A = squares[playerIndex].classList.contains('shark3A')
    const shark3B = squares[playerIndex].classList.contains('shark3B')
    const shark3C = squares[playerIndex].classList.contains('shark3C')
    const shark4A = squares[playerIndex].classList.contains('shark4A')
    const shark4B = squares[playerIndex].classList.contains('shark4B')
    const shark4C = squares[playerIndex].classList.contains('shark4C')
    const crockA = squares[playerIndex].classList.contains('crockA')
    const crockB = squares[playerIndex].classList.contains('crockB')
    const crock2B = squares[playerIndex].classList.contains('crock2B')
    const crock2A = squares[playerIndex].classList.contains('crock2A')
    const crock3A = squares[playerIndex].classList.contains('crock3A')
    const crock3B = squares[playerIndex].classList.contains('crock3B')
    const crock4B = squares[playerIndex].classList.contains('crock4B')
    const crock4A = squares[playerIndex].classList.contains('crock4A')



    //shark arrays
    const sharkLadLeft = [sharkA, sharkB, sharkC, shark3A, shark3B, shark3C, crockA, crockB, crock3A, crock3B]
    const sharkLadRight = [shark2A, shark2B, shark2C, shark4A, shark4B, shark4C, crock2A, crock2B, crock4A, crock4B]
    

    
    sharkLadRight.forEach(sharkBit => {
      if (sharkBit) {
        squares[playerIndex].classList.remove('player')
        playerIndex++
      } if (playerIndex % width > 0) {
        squares[playerIndex].classList.add('player')
      } else {
        looseLife()
      }

              
    })
    


    sharkLadLeft.forEach(sharkBit => {
      if (sharkBit) {
        squares[playerIndex].classList.remove('player')
        playerIndex--
      } if (playerIndex % width < width - 1) {
        squares[playerIndex].classList.add('player')
      } else {
        looseLife()
      }
      

    
    })
  }

  

  //keeps the safe frogs on the lilypad

  function checkLilypad(){
    const lilypadA = squares[playerIndex].classList.contains('lilypad')
  

    const lilypadLad = [lilypadA] 

    lilypadLad.forEach(lilypadbit => {
      if (lilypadbit) {
        squares[playerIndex].classList.add('player2')
        frogWin() 
        if (frogSaved === 0) {
          frogwinpage()
        }
        
      }

    })  
  }

  

  //landing on grass and dying

  function grassDeath() {
    if (squares[playerIndex].classList.contains('grass')) {
      looseLife()
    }
    if (lives <= 0) {
      reset()
    }
  } 

  //if the player gets four frogs across safely
  function frogWin() {
    squares[playerIndex].classList.remove('player')
    safeFrog[frogSaved - 1].classList.remove('safe') 
    frogSaved--
    playerIndex = Math.floor((width * width) - (width / 2))
    squares[playerIndex].classList.add('player')
    if (frogSaved === 0) {
      frogwinpage()
  
    }  
  }

  //landing page for win
  function frogwinpage() {
    container.style.display = 'none'
    container4.style.display = 'block'
    container5.style.display = 'block'
  }

  


  //dying and loosing lives
  function looseLife() {
    gameRunning = false
    squares[playerIndex].classList.remove('player')
    squares[playerIndex].classList.add('deadFrog')
    setTimeout(wait, 500)
    function wait() {
      squares[playerIndex].classList.remove('player')
      frogLives[lives - 1].classList.remove('life')
      squares[playerIndex].classList.remove('deadFrog')
      lives--
      playerIndex = Math.floor((width * width) - (width / 2))
      squares[playerIndex].classList.add('player')
      gameRunning = true
      if (lives === -1) {
        reset()
      }  
    }
  }
    
  //player clicks on the option to play again after they win
  function playAgain() {
    container4.style.display = 'none'
    container5.style.display = 'none'
    container.style.display = 'flex'
    reset()
  }


  //makes the landing page disapeer and the game start
  function firstPlay() {  
    firstStart.style.display = 'none'
    container.style.display = 'flex'
    container2.style.display = 'none'
    document.body.style.backgroundColor = '#f1f7e4'
    play()

  }

  
  //starts the game
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
  //resets the game
  function reset() {
    squares[lilypad].classList.remove('player2')
    squares[lilypad + 2].classList.remove('player2')
    squares[lilypad + 4].classList.remove('player2')
    squares[lilypad + 6].classList.remove('player2')
    frogSaved = 4
    safeFrog[0].classList.add('safe')
    safeFrog[1].classList.add('safe')
    safeFrog[2].classList.add('safe')
    safeFrog[3].classList.add('safe')
    lives = 3
    frogLives[0].classList.add('life')
    frogLives[1].classList.add('life')
    frogLives[2].classList.add('life')
    squares.forEach(square => square.classList.remove('deadFrog'))
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
  }

  function finishGame() {
    clearInterval(timerId)

  }

  

  //event handlers
  window.addEventListener('keydown', handleKeyDown)

  //start button and reset button
  startBtn.addEventListener('click', play)
  resetBtn.addEventListener('click', reset)
  firstStart.addEventListener('click', firstPlay)

  //end game and play again button

  playAgainbtn.addEventListener('click', playAgain)
  playAgainbtn2.addEventListener('click', playAgain)
  
  


}

window.addEventListener('DOMContentLoaded', init)
