console.log('Hello from site.js'); // Logs a message to the console for debugging purposes.

let mythumbs = document.querySelectorAll('.imgTile'); // Selects all elements with the class 'imgTile' and stores them in the 'mythumbs' NodeList.

mythumbs.forEach((img) => { // Iterates over each element in the 'mythumbs' NodeList.
    
    img.addEventListener('click', function(e) { // Adds a click event listener to each image.
     
        let thumbUrl = e.target.src; // Gets the source URL of the clicked thumbnail image.
        let bigImageUrl = document.getElementById('big').src; // Gets the source URL of the big image.
        
        e.target.src = bigImageUrl; // Sets the source URL of the clicked thumbnail to the big image URL.
        document.getElementById('big').src = thumbUrl; // Sets the source URL of the big image to the clicked thumbnail URL.
    });
});