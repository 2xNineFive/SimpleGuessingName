const btn1 = document.getElementById('button');
const inputBox= document.getElementById('myInput');
const dope = document.getElementById('dope');
const doper = document.getElementById('doper');
const scoreBox = document.getElementById('score');
let score = 0

btn1.addEventListener('click', search);

let listOfName = ['frankie', "johny"];
function names () {
dope.innerText = listOfName;

} 
names();

function randomIndex() {
    const rando = Math.floor(Math.random() * listOfName.length)
    // console.log(rando);
    return rando;
}

function search () {
{
    names();
    console.log(listOfName);

    const rando = randomIndex();
    // console.log(rando);

    answer = listOfName[rando];
    // console.log(answer)

    var inputVal = inputBox.value
    console.log(inputVal);

    scoreBox.innerText = score;


    if (inputVal === answer) {
        console.log('true')
        doper.innerText = "Correct!"
        inputBox.value = ''

        score++
        console.log(score)
        scoreBox.innerText = score
    } 
    if (inputVal !== answer) {
        // console.log('false')
        doper.innerText = "Incorrect"
        inputBox.value = ''
        score--
        scoreBox.innerText = score
    }
 
};
}