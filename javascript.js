    let p=0;
    let c=0;
    let ps;
    const buttons = document.querySelectorAll('button');

    
    
    function getComputerChoice()
    {
    let choicen=Math.floor(Math.random()*3+1);
    let choice;
    switch(choicen)
    {
        case 1: choice="rock"; break;
        case 2: choice="paper"; break;
        case 3: choice ="scissors"; break;
    }
    return choice;
    }


    function playRound(playerSelection, computerSelection)
    {
    if(playerSelection=== computerSelection)
        return "Draw";
    else if(playerSelection==="rock" && computerSelection ==="scissors")
        {p++;
        return "You win! Rock beats Scissors"; }
    else if(playerSelection==="paper" && computerSelection ==="rock")
        {p++;
        return "You win! Paper beats Rock"; }
    else if(playerSelection==="scissors" && computerSelection ==="paper")
        {p++;
        return "You win! Scissors beats Paper";} 

    else if(playerSelection==="rock" && computerSelection ==="paper")
        {c++;
        return "You Lose! Paper beats Rock";}    
    else if(playerSelection==="paper" && computerSelection ==="scissors")
        {c++;
        return "You Lose! Scissors beats Paper";}
    else if(playerSelection==="scissors" && computerSelection ==="rock")
        {c++;
        return "You Lose! Rock beats Scissors"; }
    else return "Invalid input";
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            //console.log(playRound(button.id,getComputerChoice()));
            const box=document.querySelector('.box');
            const playa=document.querySelector('.one');
            const comp=document.querySelector('.two');

            box.textContent=playRound(button.id,getComputerChoice());
            playa.textContent=p;
            comp.textContent=c;
        });
    });