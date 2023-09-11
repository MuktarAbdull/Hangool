const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classlist.toggole ("sticky", this.window.scrolly > 0)
});