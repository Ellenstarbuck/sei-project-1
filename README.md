# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Software Engineneering Immersive: Project 1
This was my first project of the General Assembly Software Engineering Immersive course.

<h1> FROGGER M.D <h1>

This project is a browser game of Frogger built with Vanilla Javascript.
It has been built with HTML, CSS and Javascript.

<h2> PLAYING INSTRUCTIONS <h2>

<h3> The player has to get four ‘frog doctors’ safely across the grid to the lilypads on the other side before the time runs out. There are several obstacles in the way including fast moving monsters. If the player runs into, or gets hit by a monster they loose a life. They can ride safely on crocodiles and sharks, but if they fall in the water they loose a life. They also loose a life if they land on the grass instead of the lilypad. The player has four lives.  <h3>

<h2> DEPLOYMENT <h2>

![Gif of frogger in action](https://media.giphy.com/media/emGXEoILCDclYfrRFP/giphy.gif)


The game is deployed on GitHub Pages: https://ellenstarbuck.github.io/sei-project-1/

<h2> TECHNOLOGIES USED AND INSTALLATION INSTRUCTIONS <h2>

<h3> I built a grid using DOM manipulation, where instead of building manually buidling in HTML, I made an empty array of divs, and pushed squares into the div.

![grid](https://i.imgur.com/OBrL7oz.png)

I used a switch and keydown event listener to control the player, ensuring that the user could move him and preventing the user moving him off the grid.

I utitlized a variable called game running, which I set to have a boolean value which made it a lot easier to control the game, different timers and functions so they were able to run smoothly. 

I put all the moving obstacles inside a constructor and make a ‘obstacle’ factory which produced the sharks, cars and crocodiles.

![object factory](https://i.imgur.com/xEo2Xvc.png)

This made it much easier to produce different objects, group them together and apply functions to all of them in turn.
I had a timer function for the obstacles, which checked where each obstacle was on the board and what classes existed inside them throughout the game. 

For the lives function and safe frogs I added and removed classes depending on where the frog was in the grid, and if they were below a certain amount than the user would either ‘win’ and a winning page would appear, or they would die and the start button would appear.

In order to ensure the frog would die on the water I built a function that would check both the class length of the current square the player was in AND if the water class was in it. If it was below a certain amount (which meant there wasn’t a crocodile or shark class in the square the player could ‘ride’ on) then the frog would 'die'. 

![check class](https://i.imgur.com/sOjwCvV.png)


I added in water and lily pads using slice to make a new array out of the original grid array and insert in the images I wanted. <h3>

<h2> CHALLENGES <h2>

<h3> I had a few issues with adding and removing the ‘dead frog’ class when the player got hit by a car. I had several different timers and functions running in tandem - one for the game, one for the obstacles, once checking the frog. I added in a timeout timer to delay the adding and removal of the dead frog class so it could be seen on screen. However the different timer functions meant  several checks were all taking place at once. The alive frog class was then being added back in after the dead frog was removed. I ended up moving functions around, in order to control the order the obstacles were checked and the 'game running' boolean also gave me more control. 

I had some issues with the ‘lives’ and ‘safe frogs’ boxes, as I was added and removing their classes to make them disappear depending on whether the frog made it to a lily pad or was hit by a car. Unfortunately this meant the size of the box they lived in was shrinking and moving, as they were removed. I realise that I should have made them appear and disappear using visibility: hidden, which would have kept them in their containers but they would not have been seen. <h3>

<h2> FUTURE IMPROVEMENTS <h2>

<h3> I want to add in a ‘winning page’ that gave you the option of playing again, or quitting and going back to the home screen. I would also like to have different settings for the game, so that you had the option of playing on a easier mode. The timer would be longer, the obstacles would move slower and the player would have more lives. <h3>