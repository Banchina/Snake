document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.grid')
  const scores = document.querySelector('.score')

  const width = 18
  const squares = []
  const snake = [3,2,1,0]
  let direction = 'right'
  const chosenSquare = []
  let scoreTally = 0
  let i = 0

console.log(chosenSquare)

  for(let i = 0; i < width * width; i++) {
    const square = document.createElement('DIV')
    squares.push(square)
    grid.appendChild(square)
  }

  function createApple(){
    // generate a random NUMBER on a square without the class of snake
    let chosenSquare = squares[Math.floor(Math.random() * squares.length)]
    // give that div a class of active/apple (display in CSS)
    chosenSquare.classList.add('apple')
}
createApple()
// chosenSquare logged here is as the array of 324 divs containing one with class apple

  // if (statement) {
  // if (squares[snake[0]].classlist.contains('apple'))
  //   score++
    //don't pop
    //remove apple
    //generate another apple


  // DON'T POP
  // + 1 TO THE SCORE &
  // GENERATE ANOTHER RANDOM NUMBER APPLE
  // }


  //************FUNCTIONS*************//

// generate a random NUMBER on a square without the class of snake
// give that div a class of active/apple (display in CSS)
// if snake head contains the class of apple
//      - don't pop from end of snake boundary
//      - increment the score by one
//      - generate another random number / apple.
  //
  // function createApple () {
  //   const chosenSquare = squares[Math.floor(Math.random() * grid.length)]
  //   chosenSquare.classList.contains('apple')
  // }
  //
  // setInterval(createApple, 500)


  function drawSnake() {
    snake.forEach(index => squares[index].classList.add('snake'))
  }

  function eraseSnake() {
    snake.forEach(index =>
      squares[index].classList.remove('snake'))
  }

  function gameOver() {
    alert('Game over. You scored &{scoreTally}!')
    // remove key event listeners?
  }

  function moveSnake() {

    if (squares[snake[0]].classList.contains('apple')){
      scoreTally++
      scores.innerText = scoreTally
      squares[snake[0]].classList.remove('apple')
      snake.unshift(snake[0])
      createApple()
    }

    if (snake[0] % width === 0 && direction === 'left' ||
//if 1st box/snake head position divides evenly ie the column down from it, and snake is going left, return false
        snake[0] % width === width -1  && direction === 'right' ||
//if 1st box divided by with = -1 its refering to the same row, along to the right, when snake is going right therefore, stop
        snake[0] - width < 0  && direction === 'up' ||
//if 1st box minus the width is less than 0 (meaning the boxes going up beyond the top of the grid) and the direction is up, stop
        snake[0] >= width * (width - 1 )  && direction === 'down'||
//if first box/snake head position is greater than or equal to width * width - 1, so in this case 306, puttinh it into the last row, when the direction is therefore also down, this stops the snake when it tries to cross the grid's bottom boundary.
        ((snake[0] = snake[i]) && i > 0) ){

      return false //+ alert('Unicorn crash. You scored  !')
      // Will need to return a message of "Unicorn crash. You scored  !"
    }

    eraseSnake()
    switch(direction){

      case 'right' : moveRight()
        break
      case 'left' : moveLeft()
        break
      case 'up' : moveUp()
        break
      case 'down' : moveDown()
    }
    drawSnake()
  }
  setInterval(moveSnake, 500)

//***** FUNCTIONS

//   score++
// } else {

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

    case 37: direction = 'left'
      break

    case 38: direction = 'up'
      break

    case 39: direction = 'right'
      break

    case 40: direction = 'down'
      break
    }
  })
})
  //
  //   }
  // }


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
