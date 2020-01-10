PLAYING INSTRUCTIONS

The user has to safely guide four ‘frog doctors’ to four sick frogs on lily pads. In his way are several obstacles. If he gets hit or runs into a monster then he will die. If he falls in water he will die. If he lands on grass instead of a lily pad he will die. He can ride safely on crocodiles and sharks.

TECHNOLOGIES USED AND INSTALLATION INSTRUCTIONS

I built a grid using a technique we were shown in class, where instead of building a grid manually in HTML we made an empty array of divs, and pushed squares into the div.

I used a switch and keydown event listener to control the player, ensuring that the user could move him, but preventing them moving him off the grid.

I used a variable called game running, and set it a boolean value which made it a lot easier to control the game, different timers and functions so they were able to run smoothly. 

I put all the moving obstacles inside a constructor and make a ‘obstacle’ factory which produced the sharks, cars and crocodiles.
This made it much easier to produce different objects, group them together and apply functions to all of them in turn.
I had a timer function for the obstacles, which checked where they were on the board and what classes existed inside them throughout the game.  This way I could see if the frog was on their square, and if so they would help move him or kill him. 

For the lives function and safe frogs I added and removed classes depending on where the frog was in the grid, and if they were below a certain amount than the user would either ‘win’ and a winning page would appear, or they would die and the start button would appear.

In order to ensure the frog would die on the water I build a function that would check both the class.length of the current square the player was in AND if the water class was in it . If it was below a certain amount (which meant there wasn’t a crocodile or shark class in the square the player could ‘ride’ on) then the frog would die. 

I had a few issues with adding and removing the ‘dead frog’ class when the player got hit by a car. I had several different timers and functions running in tandem - one for the game, one for the obstacles, once checking the frog. I added in a timeout timer to delay the adding and removal of the dead frog class so it could be seen on screen. However the different timer functions meant  several checks were all taking place at once which meant the alive frog class was being added back in after the dead frog was removed. I ended up moving functions around, in order to control the order the obstacles were checked, as well as  and the game running boolean also gave me more control. 

I had some issues with the ‘lives’ and ‘safe frogs’ boxes, as I was added and removing their classes to make them disappear depending on whether the frog made it to a lily pad or was hit by a car. Unfortunately this meant the size of the box they lived in was shrinking and moving, as they were removed. I realise that I should have made them appear and disappear using visibility: hidden, which would have kept them in their containers but they would not have been seen. 

I added in water and lily pads using slice to make a new array out of the original grid array and insert in the images I wanted. 

PROBLEMS

I wanted to have a ‘winning page’ that gave you the option of playing again, or quitting and going back to the home screen. Unfortunately this didn’t work for the ‘quit’ option, as when you went back to play the game the timer changed, lives had disappeared. So I gave the option of playing again, or playing again but with more enthusiasm.