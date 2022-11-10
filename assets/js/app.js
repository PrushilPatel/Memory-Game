// event Listener that loads all content when the page first loads.
document.addEventListener("DOMContentLoaded", () => {
  //  global variables used to access content via the DOM.
  //  the Ids are used as the link between the html file and js file.
  const startGame = document.getElementById("startgame");
  const gameLevel = document.getElementById("gameLevel");
  const difficultyHeader = document.getElementById("difficulty-header");
  const grid = document.querySelector("#grid");
  const resultDisplay = document.querySelector("#score");

  // set of arrays which will hold the cards chosen, the IDs of each of the cards and the cards which the user has sucessfully found.
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  // an array of objects used to store the name and image of each card in the game.
  const clubs = [
    {
      name: "Arsenal",
      img: "assets/images/arsenal.png",
    },
    {
      name: "Arsenal",
      img: "assets/images/arsenal.png",
    },
    {
      name: "Atletico",
      img: "assets/images/atletico.png",
    },
    {
      name: "Atletico",
      img: "assets/images/atletico.png",
    },
    {
      name: "Bayern",
      img: "assets/images/bayern.png",
    },
    {
      name: "Bayern",
      img: "assets/images/bayern.png",
    },
    {
      name: "Barcelona",
      img: "assets/images/barcelona.png",
    },
    {
      name: "Barcelona",
      img: "assets/images/barcelona.png",
    },
    {
      name: "Chelsea",
      img: "assets/images/chelsea.png",
    },
    {
      name: "Chelsea",
      img: "assets/images/chelsea.png",
    },
    {
      name: "Dortmund",
      img: "assets/images/dortmund.png",
    },
    {
      name: "Dortmund",
      img: "assets/images/dortmund.png",
    },
    {
      name: "Inter",
      img: "assets/images/inter.png",
    },
    {
      name: "Inter",
      img: "assets/images/inter.png",
    },
    {
      name: "Liverpool",
      img: "assets/images/liverpool.png",
    },
    {
      name: "Liverpool",
      img: "assets/images/liverpool.png",
    },
    {
      name: "Lyon",
      img: "assets/images/lyon.png",
    },
    {
      name: "Lyon",
      img: "assets/images/lyon.png",
    },
    {
      name: "Mancity",
      img: "assets/images/mancity.png",
    },
    {
      name: "Mancity",
      img: "assets/images/mancity.png",
    },
    {
      name: "Manutd",
      img: "assets/images/manutd.png",
    },
    {
      name: "Manutd",
      img: "assets/images/manutd.png",
    },
    {
      name: "Newcastle",
      img: "assets/images/newcastle.png",
    },
    {
      name: "Newcastle",
      img: "assets/images/newcastle.png",
    },
    {
      name: "PSG",
      img: "assets/images/psg.png",
    },
    {
      name: "PSG",
      img: "assets/images/psg.png",
    },
    {
      name: "Realmadrid",
      img: "assets/images/realmadrid.png",
    },
    {
      name: "Realmadrid",
      img: "assets/images/realmadrid.png",
    },
    {
      name: "Spurs",
      img: "assets/images/spurs.png",
    },
    {
      name: "Spurs",
      img: "assets/images/spurs.png",
    },
    {
      name: "Valencia",
      img: "assets/images/valencia.png",
    },
    {
      name: "Valencia",
      img: "assets/images/valencia.png",
    },
  ];

  // an event listener that is used to select the game difficulty.
  // level variable is used to access the checked value from the radio button input.

  // the value from the selected radio button will be used to splice the clubs array.
  // once level has been selected the clubs array will be randomised  and sorted.

  startGame.addEventListener("click", () => {
    let level = document.querySelector(
      'input[name="difficulty"]:checked'
    ).value;

    clubs.splice(0, level);
    clubs.sort(() => 0.5 - Math.random());

    // a for loop will be used to create the game board.
    // card variable will be used to create a image element and this will be looped based on the length of the array.
    // a class has been added to each created image.
    // all images created from the loop is then appended to the grid variable.

    for (let i = 0; i < clubs.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "assets/images/player.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      card.classList.add("club-img");
      grid.appendChild(card);
    }

    startGame.classList.add("hide");
    gameLevel.classList.add("hide");
    difficultyHeader.classList.add("hide");
  });

  // create a variable call cards which will selec all "img" files via documet.querySelectorALl.
  // create optionOneID and optionTwoId and asign it to cardsChosenID. specifically postion[0] for fisrt card and [1] for second card.
  // arrays start form index 0.
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    //the if statement checks to see that whether optionOneId equals optionTwoId. if so then have a alert pop up saying that the same image has been clicked.
    // set the atrribute for both optionOneID and optionTwoId to a image. player.png file

    // else if the two selected cards deeply match each other then set the card image for both optionsto trophy.png file and remove click event listener for those cards.
    // these cards will be pushed into the cardsWon array which will store all cards found within the game.

    // else set the the image for the selected cards back to player.png and alert the user that they have to try again.

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "assets/images/player.png");
      cards[optionTwoId].setAttribute("src", "assets/images/player.png");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "assets/images/trophy.png");
      cards[optionTwoId].setAttribute("src", "assets/images/trophy.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "assets/images/player.png");
      cards[optionTwoId].setAttribute("src", "assets/images/player.png");
      alert("Sorry, try again");
    }

    // the cards chosen array and cardsChosenId array will be cleared in order to start selecting again.
    // the score will update when a pair is found and this is done by finding the length of the cardsWon array.
    // the statement checks that if we have found all the cards in the game by checking the length of the cardsWon array divided by 2.
    // display a message to the user that they have found all the pairs in the game. This is done by setting the innerHTML for the resultsDisplay variable.
    // the resulsDisplay variable is used to access the span tag in the HTML file via the DOM.

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = `Score: ${cardsWon.length}`;
    if (cardsWon.length === clubs.length / 2) {
      resultDisplay.textContent = `Congratulations! You found them all!  click Home to restart game`;
    }
  }

  // the cardId gets the data-id that was created via the game board.
  // the card iD once found will be pushed into the cardsChosen array and will tell us the name of the card. i.e arsenal
  // the id will then be stored in a seperate array called cardsChosenID.
  // the setAttribute method will asign an image to the card based on the id selected.
  // the if statement checks that the cards chosen equals 2 because we only want 2 cards to be selected and if so run it against the checkForMatch function.
  // setTimeout prevents the whole process from completing too quickly. so by setting a time in milliseconds allows for a smooth transition.
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(clubs[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", clubs[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
});
