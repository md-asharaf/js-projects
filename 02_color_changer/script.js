const boxes=document.querySelectorAll(".box")
boxes.forEach((box)=>{
    box.addEventListener('click',(e)=>{
        const color=e.target.className.split(' ')[0];
        document.querySelector('body').style.backgroundColor=color
    })
})