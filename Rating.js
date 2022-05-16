
let url =  window.location.search
 
 let params = new URLSearchParams(window.location.search);
 let getRating = params.get("lname"); 
 let setRating = `You selected ${getRating} out of 5`;

 document.getElementById("Select").innerHTML = setRating;