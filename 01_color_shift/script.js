var box=document.querySelector(".box");
box.addEventListener("mousemove",(dets)=>{
    var inside=dets.x-box.getBoundingClientRect().x;
    var halfWidth=box.getBoundingClientRect().width/2;
    if(inside<halfWidth){
        //mouse is in left
        console.log("left")
        var red=gsap.utils.mapRange(0,halfWidth,255,0,inside);
        gsap.to(box,{
            backgroundColor:`rgb(${red},0,0)`,
            ease:Power4,
        });
    }
    else{
        console.log("right")

        //mouse is in right
        var blue=gsap.utils.mapRange(halfWidth,2*halfWidth,0,255,inside);
        gsap.to(box,{
            backgroundColor:`rgb(0,0,${blue})`,
            ease:Power4,
        })
    }
})
box.addEventListener(`mouseleave`,()=>{
    gsap.to(box,{
        backgroundColor:`#fff`
    })
})
