const panels = document.querySelectorAll(".panel"); 
// all diyoruz çünkü tüm panellere ulaşmak istiyoruz, nokta class ı verir bize.
panels.forEach(panel => {
    panel.addEventListener("click", ()=>{
        removeActive();
        panel.classList.add("active")
    })
})
// bu paneller arasında dolaşabilmemizi sağlar
function removeActive(){
    panels.forEach(panel=>{
        panel.classList.remove("active");
    })
}
