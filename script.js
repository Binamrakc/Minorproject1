 const button =document.getElementById("darkmode");
 
 
 button.addEventListener('click',function toggleMode() {
      document.body.classList.toggle("dark-mode");
      console.log("clicked")
    })