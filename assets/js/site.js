console.log('Hello from site.js');


let mythumbs=document.querySelectorAll('.imgTile');


mythumbs.forEach((img) => {
    
    img.addEventListener('click', function(e){
     
        let thumbUrl=e.target.src;
        let bigImageUrl=document.getElementById('big').src;
        
        e.target.src=bigImageUrl;
        document.getElementById('big').src=thumbUrl;
    })
});