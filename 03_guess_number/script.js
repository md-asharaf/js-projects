const randomNumber=Math.floor(Math.random()*100+1)
const button=document.querySelector('button')
const input=document.querySelector('input')
const pgSpan=document.querySelector('#pg>span')
const grSpan=document.querySelector('#gr>span')
let guessCount=5;
let playGame=true;
grSpan.innerHTML=`${guessCount}`
button.addEventListener('click',()=>{
    if(!playGame) {
        alert('game over. refresh the page for another play')
        return
    }
    const guessInput=parseInt(input.value);
    if(isNaN(guessInput)||guessInput==''){
        alert("wrong input! enter a valid number")
        return
    }
    guessCount--
    pgSpan.textContent+=` ${guessInput}`
    grSpan.innerHTML=`${guessCount}`
    input.value=''
    if(guessInput===randomNumber){
        document.querySelector('h3').innerHTML=`you won.the correct number is ${randomNumber}.`
        playGame=false;
        input.setAttribute('disabled','')
        return
    }
    if(guessInput<randomNumber){
        alert("wrong!!!  Number is lower")
    }
    else{
        alert("wrong!!!  Number is higher")
    }
    if(guessCount==0){
        document.querySelector('h3').innerHTML=`you lost.the correct number is ${randomNumber}.`
        playGame=false;
        input.setAttribute('disabled','')
    }
})