const btn = document.getElementById("toggle-theme");
const body = document.body;
const moon = btn.querySelector(".fa-moon");
const sun = btn.querySelector(".fa-sun");
 

btn.addEventListener("click", () =>{

      
    body.classList.toggle("darkmode");

    if(body.classList.contains("darkmode")){
        moon.style.display = "none";
        sun.style.display = "inline-block";
        sun.style.color = "white"
       
    }else{
        moon.style.display = "inline-block";
        sun.style.display = "none";
        
    }
})