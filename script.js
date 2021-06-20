document.querySelector('.toggle-btn').addEventListener("click", () => {
    document.querySelector('.toggle-btn').classList.toggle("active");
    
    if(document.querySelector('.light-mode')) {
        document.querySelector('.light-mode').className = "dark-mode";
    } else {
        document.querySelector('.dark-mode').className = "light-mode";
    }
});