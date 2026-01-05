{/* <script> */}
      //1 rock
      //2 paper
      //3 scissors
      function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      function election(play) {
        let result = "";
        if (play == 1) {
          result = "Rock";
        } else if (play == 2) {
          result = "Paper";
        } else if (play == 3) {
          result = "Scissors";
        } else {
          result = "Bad chose";
        }
        return result;
      }
      function combat(player, pc){

        
        return 
      }

      let player = 0;
      let pc = 0;
      let wins = 0;
      let lose = 0;

      while (wins < 3 && lose < 3) {
        pc = random(1, 3);
        player = prompt("Chose: \n 1 Rock \n 2 Paper \n 3 Scissors");

        alert("You selected " + election(player));
        alert("PC selected " + election(pc));

        //Combat
        if (player == pc) {
          alert("DRAW!!!");
        } else if (
          (player == 1 && pc == 3) ||
          (player == 2 && pc == 1) ||
          (player == 3 && pc == 2)
        ) {
            wins = wins + 1;
            // alert("You win: "+wins); 
        } else {
          lose = lose + 1;
        //   alert("You lose: " +lose);
        }
      }
        alert("You win "+ wins +" times and lose " + lose + " times");
    // </script>