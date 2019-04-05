document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.grid')
  const scores = document.querySelector('.score')
  const playAgain = document.querySelector('button')
  const popUp = document.querySelector('.flames')
  const topGun = document.querySelector('.top')
  const dangerZone = document.querySelector('audio')
  const crashSound = document.querySelector('.crash')
  const enemySound = document.querySelector('.enemy')
  const fireSound = document.querySelector('.fireUp')
  // const keyResult = document.querySelector('.arrowKeys')

  const width = 18
  const squares = []
  let snake = [3,2,1,0]
  let direction = 'right'
  let chosenSquare = 0
  let scoreTally = 0
  let snakeSpeed = 350
  // const i = 0
  let gameInPlay = true
  let timer    // SEAN'S CODE, CLEARS DOUBLE SNAKE

  for(let i = 0; i < width * width; i++) {
    // putting an gameInPlay if statement not necessary, wrecks code
    const square = document.createElement('DIV')
    //squares is an array of divs
    squares.push(square)
    grid.appendChild(square)
  }
  console.log(gameInPlay)
  // }

  function createApple() {
    // generate a random NUMBER on a square without the class of snake
    let chosenSquare = Math.floor(Math.random() * squares.length)
    while(squares[chosenSquare].classList.contains('snake')) {
      chosenSquare = Math.floor(Math.random() * squares.length)
    }
    squares[chosenSquare].classList.add('apple')

  }

  // if snake in play
  // }
  // createApple()    //SEAN'S

  // chosenSquare logged here is as the array of 324 divs containing one with class apple

  // generate a random NUMBER on a square without the class of snake
  // give that div a class of active/apple (display in CSS)
  // if snake head contains the class of apple
  //      - don't pop from end of snake boundary
  //      - increment the score by one
  //      - generate another random number / apple.

  function drawHead(vector) {
    const head = snake[0] + vector
    snake.unshift(head)
    squares[head].classList.add('snake')
    squares[head].setAttribute('data-direction', direction)

  }

  function eraseTail() {
    const tail = snake.pop()
    squares[tail].classList.remove('snake')
    squares[tail].removeAttribute('data-direction')
  }

  function drawSnake() {
    console.log('drawing snake')
    snake.forEach(index => {
      squares[index].classList.add('snake')
      squares[index].setAttribute('data-direction', direction)
    })
  }

  function eraseSnake() {
    console.log('removing snake')
    snake.forEach(index => {
      squares[index].classList.remove('snake')
      squares[index].removeAttribute('data-direction')
    })
  }
  console.log(gameInPlay)

  function soundTrack() {
    dangerZone.src = 'sounds/danger_zone.mp3'
  }
  function soundEffect() {
    crashSound.src = 'sounds/aircrash.mp3'
  }
  function enemy() {
    enemySound.src = 'sounds/hitplane.mp3'
  }
  function runway() {
    fireSound.src = 'sounds/take_off.mp3'
  }

  // could we say if snake speed / interval = 0, run gameOver function / remove snake.
  function gameOver() {
    console.log('game over')
    snakeSpeed = 400
    gameInPlay = false
    grid.classList.remove('grid')
    console.log('remove')
    if (scoreTally > 20) {
      grid.classList.add('top')
      dangerZone.play()
    } else {
      grid.classList.add('flames')
      crashSound.play()
    }

    eraseSnake()

    // gameInPlay = false
    console.log(gameInPlay)
    // eraseSnake()
    // clearInterval()

    // grid.classList.remove('grid')   //ADD BACK IN

    // grid.classList.add('flames')
    // snake.forEach(index =>
    //   squares[index].classList.remove('snake'))
  //   // run future end of game code (poss including removing key event listeners?)
    // chosenSquare.classList.remove('apple')  // doesn't
  //
  }

  function moveSnake() {

    if (snake[0] % width === 0 && direction === 'left' ||
    //if 1st box/snake head position divides evenly ie the column down from it, and snake is going left, return false
        snake[0] % width === width -1  && direction === 'right' ||
    //if 1st box divided by with = -1 its refering to the same row, along to the right, when snake is going right therefore, stop
        snake[0] - width < 0  && direction === 'up' ||
    //if 1st box minus the width is less than 0 (meaning the boxes going up beyond the top of the grid) and the direction is up, stop
        snake[0] >= width * (width - 1 )  && direction === 'down') {
      //if first box/snake head position is greater than or equal to width * width - 1, so in this case 306, puttinh it into the last row, when the direction is therefore also down, this stops the snake when it tries to cross the grid's bottom boundary.
      return gameOver()
      // THIS IS WORKING BUT NOT CONTINUING MOVEMENT ONCE IT EATS AN APPLE.

    }
    // running gameOver after eraseSnake stops snake dying when it eats the apple
    // Will need to return a message of "Snake crash. You scored  !"
    console.log(gameInPlay)
    //currently the following is killing the snake when it eats the apple, and ca

    // eraseSnake()
    switch(direction){

      case 'right' : moveRight()
        break
      case 'left' : moveLeft()
        break
      case 'up' : moveUp()
        break
      case 'down' : moveDown()
    }
    // drawSnake()
    if(snake.slice(1).includes(snake[0])) { // SEAN'S ISN'T IN IF STATEMENT
      return gameOver()       // SEAN'S DOESN'T RETURN A GAMEOVER FUNCTION HERE
    }
    console.log(gameInPlay)

    if (squares[snake[0]].classList.contains('apple')){
      scoreTally++
      enemySound.play()
      snakeSpeed -= 10
      scores.innerText = scoreTally
      squares[snake[0]].classList.remove('apple')
      snake.unshift(snake[0])
      createApple()
    }
    // drawSnake()
    // setTimeout better than interval here because it looks to run again in the set amount of time whereas setInterval says do this once and be set in stone
    timer = setTimeout(moveSnake, snakeSpeed) //SEAN'S: timer = setTimeout(moveSnake, snakeSpeed) AS SNAKE SPEEDS UP ON RESET AND  A DOUBLE SNAKE
  }
  drawSnake()
  moveSnake()   // not called previously so has to be called, and out

  function moveRight(){
    eraseTail()
    drawHead(+1)
  }
  function moveLeft() {
    eraseTail()
    drawHead(-1)
  }
  function moveUp() {
    eraseTail()
    drawHead(-width)
  }
  function moveDown() {
    eraseTail()
    drawHead(+width)
  }

  console.log(gameInPlay)

  // *****LISENINING FOR DIRECTIONAL ARROW KEY INPUT*****
  document.addEventListener('keydown', (e) => {
    switch(e.keyCode) {
      // ( !== )
      case 37: if (direction !== 'right') direction = 'left'
        break

      case 38: if (direction !== 'down') direction = 'up'
        break

      case 39: if (direction !== 'left') direction = 'right'
        break

      case 40: if (direction !== 'up') direction = 'down'
        break
    }
    // console.log(snake)
    console.log(gameInPlay)
  })
  createApple()


  playAgain.addEventListener('click', () => {
    snake.forEach(index => squares[index].classList.remove('snake')) //SEAN'S
    snake = [3,2,1,0]
    // overcomes default up direction so that snake does not kill itself immediately on game
    direction = 'right'
    gameInPlay = true
    clearTimeout(timer)
    grid.classList.remove('flames')
    grid.classList.remove('top')
    grid.classList.add('grid')
    dangerZone.pause()
    fireSound.play()
    scoreTally = 0
    scores.innerText = scoreTally
    drawSnake()
    moveSnake()
    //SEAN'S for us reset doesn't work after a death

  })

})
