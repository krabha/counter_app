// let count =5;

// console.log(count);

// let bonusPoints =50;
// bonusPoints = bonusPoints+100;
// console.log(bonusPoints);
// bonusPoints = bonusPoints-25;
// console.log(bonusPoints);
// bonusPoints = bonusPoints+70;
// console.log(bonusPoints);

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count =0;

function increment() {
    count +=1; 
    countEl.textContent = count;
}

function save()
{
  let countStr = count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0

}