# Snake
Snake Game

Theme / background image meant redesigning wire frame.

setInterval v. setTimeOut
    - also solved the need for a global Boolean

PhotoShop / Pixlr - cutting out images, and making the styles, shades match background image.

Difficulty of changing plane direction, the following planes just inherit the direction of the first plan as they move into its location.

# Project 1: SNAKE, a JavaScript Game

### Timeframe
7 days

## Technologies used

* JavaScript (ES6)
* HTML5
* CSS
* git
* HTML5 Audio                 (CSS animation, localStorage etc)_

## Installation

1. Clone or download the repo
1. Open the `index.html` in your browser of choice

## Introduction
A traditional game of snake with an aeronautical theme. You can find the hosted game here: https://banchina.github.io/Snake/

![Title](https://user-images.githubusercontent.com/47927026/55617154-63ec1e00-578b-11e9-98c2-b587e23ba86d.png)

## Game Overview
The game is a reworking of the 80s arcade classic Snake. The simplicity of Snake's 2D design, and its playability are primary in its enduring popularity in this 4D age. It immediately felt like an ideal, and fun, first project candidate.  

![Main Page](https://user-images.githubusercontent.com/47927026/55616108-03f47800-5789-11e9-9042-078a66ac4d3b.png)

### Flight Controls
The jet flight is controlled by the keyboard's arrow keys: ← ↑ → ↓ .

### Game Instructions

The "snake", now a squadron of fighter jets flying in-line, "kills" enemy jets (in preference to eating apples) in an aerial dogfight above anonymous Pacific islands. With each kill the squadron grows one jet longer and the player scores a point.

![Death by Squadron](https://user-images.githubusercontent.com/47927026/55621127-8df60e00-5794-11e9-8380-5ccca16611e8.png)

The game ends if the player flies into their own squadron or off the grid. The "game over" page is accompanied by audio of a crash.

![Game Over Page](https://user-images.githubusercontent.com/47927026/55620367-a8c78300-5792-11e9-9aed-87ebecc5aaf9.png)

If the player achieves a high score, a more celebratory game over page is invoked, with a moving image and music.

(https://user-images.githubusercontent.com/47927026/55620049-e11a9180-5791-11e9-855a-ba1d1a2b618a.png)

The score considered a high score can be judged and set depending on the starting speed at which the jets start flying and the level of the increments to that speed which occur with every kill.

## Process
My initial action was to thoroughly read the brief and then research the game I was to build myself. This was to avoid the assumption that because I have played the game so many times before, that the need for research was negated. This time, I would be playing with a developer's perspective, which even at the offset involves a lot more than just grasping the rules and basic logic. I found a number of different versions to play online and noted down what I liked and didn't like about their varying features.

It then seemed sensible to locate other individuals in the class, who also chose Snake as their initial project, and suggest that we hold an initial planning meeting. This would encompass discussing our basic understanding of the game, to ensure there were no knowledge gaps, and then breaking the game down into its most basic parts, to commence pseudo coding our initial steps. This utilisation of the 'group brain' proved very productive in terms of then making rapid steps towards MVP.

In respect of time management, I used Trello as an  organisational tool throughout the process, setting timed goals and different categories of task. Based on this, every morning I set out the tasks that I would aim to work through and complete by the end of that day.

### Challenges

JavaScript, as the most abstract of the software engineering components learned so far was the biggest challenge. Setting simple, broken down goals and systematically working through these one at a time neutralised the daunting nature of this challenge. Pseudocode was fundamental in this process.  
_Describe the biggest challenges. How did you overcome them? Did you decide to pivot because of time constraints? What did you learn from these problems?_

### Wins
Teamwork was one of the most obvious positives of the whole experience. A particular highlight was debugging in a pair. Taking one bug at a time and utilising two laptops we were able to discuss potential solutions and then quickly implement numerous variations upon these solutions, before moving on to the next and repeating this process until a full solution was found. This systematic approach was effective and supremely effective.
The biggest technical win was perhaps the formation of the snake. Varying the direction of the individual planes so that they followed the direction of the user's input was an obvious step. However, each jet turning to face the same direction at the same time meant that all but the first jet would be effectively moving sideways. Therefore, I was eventually able to implement a more advanced solution whereby, the following jets turn as they corner creating a more realistic movement. This was quite advance for my ability at the time.
_Describe the wins. What are you most proud of? What did this project help you to understand the most?_

## Future features
In terms of revisiting the project in the future, the next obvious step would be the introduction of a high score, score board and perhaps a sliding difficulty level so that the user could commence play at a higher speed.
My preference in terms of extra features, however, would be the introduction of a second snake. This would be most simply done with the introduction of another player using separate keyboard controls. However, my aspiration would be to look to an AI operated second player for the human player to pit themselves against.
