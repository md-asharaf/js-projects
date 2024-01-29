const colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'white',
    'black',
    'pink',
    'brown',
  ];
  const hex='0123456789ABCDEF'
  const start = document.querySelector('#start');
  const stop = document.querySelector('#stop');
  const body = document.querySelector('body');
  let refId;
  start.addEventListener('click', () => {
    if(!refId){
        refId=setInterval(changeColor, 1000)
    }
  })
  stop.addEventListener('click', (e) => {
        clearInterval(refId)
        refId=null
  })
  const changeColor = () => {
    let randomColor = '#'
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hex.length)
        randomColor+=hex.charAt(randomIndex)
    }
    body.style.backgroundColor = randomColor
  }