//console.log("Welcome to TypeScript!");

function randomNum() : number{
    return Math.floor(Math.random() * 3);
}

function assignChoiceWord(p:Player) : Player{
    if(p.choice == 0){
        p.choiceWord = "rock";
    }
    if(p.choice == 1){
        p.choiceWord = "paper";
    }
    if(p.choice == 2){
        p.choiceWord = "scissors";
    }
    return p;
}

function decideWinner(p1:Player, p2:Player) : string{
    if(p1.choiceWord == p2.choiceWord) return `It was a tie. They both chose ${p1.choiceWord}`;
    if(
        (p1.choiceWord == "rock" && p2.choiceWord == "scissors") ||
        (p1.choiceWord == "paper" && p2.choiceWord == "rock") ||
        (p1.choiceWord == "scissors" && p2.choiceWord == "paper")) 
        return `${p1.Name}'s ${p1.choiceWord} beats ${p2.Name}'2 ${p2.choiceWord}`;
    else
        return `${p2.Name}'s ${p2.choiceWord} beats ${p1.Name}'2 ${p1.choiceWord}`;
        
}

//create a player interface for each player
interface Player{
    Name: string;
    choice: number;
    choiceWord: string;

}

let p1:Player = {
    Name:"Slippin Jimmy",
    choice: 0,
    choiceWord: "null"
}

let p2:Player = {
    Name:"Gus Fring",
    choice: 0,
    choiceWord: "null"
}

//Get a random number assigned to the two players between 0, 1, and 2
p1.choice = randomNum();
p2.choice = randomNum();

//assign the choice word based on the assigned numbers
p1 = assignChoiceWord(p1);
p2 = assignChoiceWord(p2);
//0 == rock
//1 == paper
//2 == scissors

let UltimateWinner = decideWinner(p1,p2);

console.log(UltimateWinner);



