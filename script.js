//your JS code here. If required.
let boxes = document.querySelectorAll('#box');
let game = document.querySelector('.game');
let start = document.querySelector('#submit');
let pname = document.querySelector('.pname');
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let player = document.getElementById('message');
let gameStart = false;
let winner = false;
let turn = true;
let winPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

console.log(start)

if(player1 !== '' && player2 !== ''){
    start.addEventListener('click',()=>{
    game.style.display = 'block';
    pname.style.display = 'none';
    player.innerText = `${player1.value}, you're up`;
})
}

if(!gameStart){
    game.style.display = 'none';
}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn){
            box.innerText = 'X';
            turn = false;
            player.innerText = `${player2.value}, you're up`;
        }else{
            box.innerText = 'O';
            turn = true;
            player.innerText = `${player1.value}, you're up`;
        }
        box.disabled = true;
        if(checkWinner()){
            disableBox();
        }
    })
})

const disableBox = () => {
    boxes.forEach((box)=>{
        box.disabled = true;
    })
}

const checkWinner = () => {
    for(let pattern of winPattern){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if(val1 !== '' && val2 !== '' && val3 !== '' && val1 === val2 && val2 === val3){
            console.log("winner");
            if(val1 === 'O' && val2 === 'O' && val3 === 'O'){
                player.innerText = `${player2.value}, congratulations you won!`
            }else{
                player.innerText = `${player1.value}, congratulations you won!`
            }
            return true;
        }
    }
}