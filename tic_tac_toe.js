let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; 
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
     box.addEventListener("click" ,()=>{
        console.log("buttion was click");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled =true;
        checkWinner();
     })
})

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner=(winner)=>{
msg.innerText =`Congratulation, Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableboxes();
}



function checkWinner(){
    for(pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        let pos1val = boxes[pattern[0]].innerText;
        console.log(pos1val);
        let pos2val = boxes[pattern[1]].innerText;
        console.log(pos2val);
        let pos3val = boxes[pattern[2]].innerText;
        console.log(pos3val);
    if(pos1val !="" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("winner" ,pos1val);
            showWinner(pos1val);
        }
    }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
