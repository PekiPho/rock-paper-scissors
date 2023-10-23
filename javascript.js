 
        let p=0;
        let c=0;
        function getComputerChoice()
        {
            let choicen=Math.floor(Math.random()*3+1);
            let choice
            
            switch(choicen)
            {
                case 1: choice="Rock"; break;
                case 2: choice="Paper"; break;
                case 3: choice ="Scissors"; break;
            }
            return choice;
        }
        function playRound(playerSelection, computerSelection)
        {
            if(playerSelection.toLowerCase()=== computerSelection.toLowerCase())
                return "Draw";
            else if(playerSelection.toLowerCase()==="rock" && computerSelection ==="Scissors")
                {p++;
                return "You win! Rock beats Scissors"; }
            else if(playerSelection.toLowerCase()==="paper" && computerSelection ==="Rock")
                {p++;
                return "You win! Paper beats Rock"; }
            else if(playerSelection.toLowerCase()==="scissors" && computerSelection ==="Paper")
                {p++;
                return "You win! Scissors beats Paper";} 

            else if(playerSelection.toLowerCase()==="rock" && computerSelection ==="Paper")
                {c++;
                return "You Lose! Paper beats Rock";}    
            else if(playerSelection.toLowerCase()==="paper" && computerSelection ==="Scissors")
                {c++;
                return "You Lose! Scissors beats Paper";}
            else if(playerSelection.toLowerCase()==="scissors" && computerSelection ==="Paper")
                {c++;
                return "You Lose! Rock beats Scissors"; }
            else return "Invalid input";
        }
        