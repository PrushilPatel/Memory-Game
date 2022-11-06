document.addEventListener("DOMContentLoaded", () => {
  const startGame = document.getElementById("startgame");
  const gameLevel = document.getElementById("gameLevel");
  const difficultyHeader = document.getElementById("difficulty-header");
  const grid = document.querySelector("#grid");
  const resultDisplay = document.querySelector("#score");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

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

  startGame.addEventListener("click", () => {
    let level = document.querySelector(
      'input[name="difficulty"]:checked'
    ).value;

    clubs.splice(0, level);
    clubs.sort(() => 0.5 - Math.random());
    //test to check array after splice   console.log(clubs) ;

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

  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

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
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = `Score: ${cardsWon.length}`;
    if (cardsWon.length === clubs.length / 2) {
      resultDisplay.textContent = `Congratulations! You found them all!  click Home to restart game`; 
    }
  }

  

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
