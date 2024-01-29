const url='https://api.github.com/users/hiteshchaudhary'
const req=new XMLHttpRequest()
req.open('GET',url) //necessary
req.send() //necessary
req.onreadystatechange=()=>{
    if(req.readyState===4){
        const user=JSON.parse(req.responseText)
        // console.log(user)
        addImageNfollowers(user.avatar_url,user.followers)
    }
}
const addImageNfollowers=(imgSrc,followers)=>{
    document.querySelector('body').innerHTML=`<div><img style="height:200px;width:200px;"></img><h2>followers:  ${followers}</h2></div>`
    document.querySelector('img').setAttribute('src',imgSrc)
}
