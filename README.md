# Memory-Game

Pairs of the day is a classic memory card game played with a set of cards. Each card comes with a front image and back image. The player selects two cards and if the card images match, then they stay facing up. However, If the two cards don’t match then they go back to a face down position. The whole process continues until all pairs have been found.


## Game Rules
1. You will start by flipping over one card
2. If the next card you flip matches, a pop up alert notifies you and you get +1 to your score. These cards then disspear.
3. If the next card you flip does not match, a pop up alert notifies you of this and the cards flip back.
4. The game continues until you match all the cards on the board

## Development

The project started with the development of the HTML pages and CSS files. i chose a football related theme for the project because its something that i like watching and thought it would be a great idea to have a matching game based on club logos. The stadium background image was from google images and the club logos  [club logos](https://seeklogo.com/search?q=arsenal).

The next step was to come up with the actual game idea. I had the theme for the game set but how far was i going to go in terms of complexity. Game difficulty was the first hurdle because i wanted to give the user the option of choosing a game board based on the number of pairs required for the chosen difficulty. I.e easy mode will consist of a board that has 8 tiles and a total of 4 pairs to find.


To start of i created a HTML form and a set of radio buttons. There would be a total of 3 radio buttons displaying easy, normal or hard. Using the DOM to interact with HTML files i would take the value from the selected/checked radio button and use it to run code in the app.js file. Before continuing the entire game is based on a array of objects that contains the name and image file for each club used in the game. 32 elements in total. With this in mind i knew that i could manipulate the size of the array by using the splice method. Therefore the value stored in the radio button will be used as the parameter to change the size of the array. 

For example for the easy difficulty i set the value to 24. When this option is selected and accessed via the DOM the array will be spliced by 24 leaving 8 elements in the array. This will be different based on the other two difficulties. 

Once the array was spiced correctly the next step was to create the game board based on the new array. To do this i made use of a for loop to loop over the contents of the array and create image elements and set its data attribute.

By creating an image element based on the contents of the array i had come across a visual error that made the site look different to what i had intially intended. The issue was within the checkForMatch() and how the following code (const cards = document.querySelectorAll("img");) would select all the images within the site including the site logo whcih was an image. So each time i would run the game for testing the site logo would be inluded as part of the game and would cause a mis match amongst the pairs. i.e The wrong image would be elected when a correct match is selected or only one image would change. 

Therefore i made a change by replacing the site logo image with a header element. This prevented the visual error from happening becasue the only images used in the site would be the ones for the game tiles.




## Technologies used:

1. HTML- For structuring the website.
2. CSS - For styling the look of the website.
3. Javascript- For dynamically changing content. 
3. Git/github - for adding hosting my project and used for version control.

## Tseting

1. HTML file has been run through a code validator.[HTML validator]( https://validator.w3.org/#validate_by_input).
2. CSS file has been run against code validator [CSS Validator](http://jigsaw.w3.org/css-validator/).
3. Javascript has been run against code validator[Javascript Validator](-https://javascriptvalidator.net)


## view site

[Pairs of the Day - Memory game](https://prushilpatel.github.io/Memory-Game/)