let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let winner = document.querySelector("#winner")

let turnX = true;
const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }else{
            box.innerText = "O";
            turnX= true;
        }
        box.disabled = true;
        checkWinner();
    })

}) 
const checkWinner = () => {
    for (let pattern of winningPatterns){
        posi0 = boxes[pattern[0]].innerText;
        posi1 = boxes[pattern[1]].innerText;
        posi2 = boxes[pattern[2]].innerText;
        if(posi0 != "" && posi1 != "" && posi2 != ""){
            if(posi0 === posi1 && posi1 === posi2){
                console.log("Winner")
                afterWinner(posi0)
            }
        }
    }

}



const afterWinner = (posi1) => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
    winner.innerText = `Congratulation! Winner is ${posi1}`
}
resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";

    })
    winner.innerText = "";
    turnX = true;
})

