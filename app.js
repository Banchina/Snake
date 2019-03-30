document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.grid')
  const width = 18
  const squares = []
  const snake = [3,2,1,0]
  let direction = 'right'
  let playerIndex = 0


  for(let i = 0; i < width * width; i++) {
    const square = document.createElement('DIV')
    squares.push(square)
    grid.appendChild(square)
  }

  function drawSnake() {
    snake.forEach(index => squares[index].classList.add('snake'))
  }

  function eraseSnake() {
    snake.forEach(index =>
      squares[index].classList.remove('snake'))
  }

  function moveSnake() {

    if (snake[0] % width === 0 && direction === 'left' ||
//    
        snake[0] % width === width -1  && direction === 'right' ||

        snake[0] - width < 0  && direction === 'up' ||

        snake[0] >= width * (width - 1 )  && direction === 'down') {

      return false
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
  setInterval(moveSnake, 100)

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


document.addEventListener('keydown', (e) => {
  switch(e.keyCode) {

    case 37:
      if(playerIndex % width > 0) {
    direction = 'left'
  }
      break
    case 38:
      if(playerIndex - width >= 0) {
     direction = 'up'
   }
      break
    case 39:
      if(playerIndex % width < width - 1) {
      playerIndex++
    direction = 'right'
  }
      break
    case 40:
      if(playerIndex + width < width * width) {
    direction = 'down'
  }
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
