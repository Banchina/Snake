document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.grid')
  const scores = document.querySelector('.score')

  const width = 18
  const squares = []
  const snake = [3,2,1,0]
  let direction = 'right'
  let chosenSquare = 0
  let scoreTally = 0
  let snakeSpeed = 400
  let i = 0

  for(let i = 0; i < width * width; i++) {
    const square = document.createElement('DIV')
    squares.push(square)
    grid.appendChild(square)
  }

  function createApple(){
    // generate a random NUMBER on a square without the class of snake
    chosenSquare = squares[Math.floor(Math.random() * squares.length)]
    // give that div a class of active/apple (display in CSS)
    chosenSquare.classList.add('apple')

    // if snake in play
}
// createApple()

// chosenSquare logged here is as the array of 324 divs containing one with class apple

// generate a random NUMBER on a square without the class of snake
// give that div a class of active/apple (display in CSS)
// if snake head contains the class of apple
//      - don't pop from end of snake boundary
//      - increment the score by one
//      - generate another random number / apple.


  function drawSnake() {
    console.log('drawing snake')
    snake.forEach(index => squares[index].classList.add('snake'))
  }

  function eraseSnake() {
    console.log('removing snake')
    snake.forEach(index => squares[index].classList.remove('snake'))
  }

  function snakeDeath() {
    if(snake.slice(1).includes(snake[0])) {
      return gameOver()
    }
  }

// could we say if snake speed / interval = 0, run gameOver function / remove snake.
  function gameOver() {
    console.log('game over')
    // eraseSnake()
    // clearInterval()
    grid.classList.remove('grid')
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
    eraseSnake()
    // running gameOver after eraseSnake stops snake dying when it eats the apple
    // Will need to return a message of "Snake crash. You scored  !"

    //currently the following is killing the snake when it eats the apple, and ca
    // for (let i=1;i<snake.length;i++){
    //   if(snake[0] === snake[i]) {
    //     // gameOver()
    //   }
    // }
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
    snakeDeath()

    if (squares[snake[0]].classList.contains('apple')){
      scoreTally++
      snakeSpeed -= 10
      scores.innerText = scoreTally
      squares[snake[0]].classList.remove('apple')
      snake.unshift(snake[0])
      createApple()
    }
    drawSnake()
// setTimeout better than interval here because it looks to run again in the set amount of time whereas setInterval says do this once and be set in stone
    setTimeout(moveSnake, snakeSpeed)
  }
  moveSnake()   // not called previously so has to be called, and out



// if (scoreTally > 3) {
//     setInterval(moveSnake, 100)
// }

  function moveRight(){
    eraseSnake()
    snake.pop()
    snake.unshift(snake[0] + 1)
    drawSnake()
  }
  function moveLeft() {
    eraseSnake()
    snake.pop()
    snake.unshift(snake[0] - 1)
    drawSnake()
  }
  function moveUp() {
    eraseSnake()
    snake.pop()
    snake.unshift(snake[0] - width)
    drawSnake()
  }
  function moveDown() {
    eraseSnake()
    snake.pop()
    snake.unshift(snake[0] + width)
    drawSnake()
  }


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
    console.log(snake)
  })
  createApple()
})



//snake[0] head of snake integer

  // get from JS
  // Define the snake array
  // Assign those four squares a class of active  = snake
  // Define starting position of the snake
  // Define movement of snake
  //    add event listener to each movement key
  // Create a push/pop function to roll snake along
  //    incoporating a loop
  // Generate a random number
  // Store in a variable (i.e let apple)
  // Give random square a class of apple (like active)
  // Display apple
  // To be continued ...
