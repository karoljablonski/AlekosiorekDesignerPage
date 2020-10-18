//tutaj chcemy nałozyć DIV o konkretnych właściwościach (np kolko 20x20px) i ustawić jego position fixed i top i left na nasluchiwanie mousemove i przekazanie wartosci mousemoveX i (...)Y do właściwości top i left DIV'a. Mozna okreslic kilka DIV'ow i je zmieniac pod wzgledem np najechania na dany element (wówczas pamiętaj zeby dany DIV byl BRATEM elementu! nie moze byc zagniezdzony glebiej bo nie bedzie dzialac!)
//co nalezy sciagnac: 1. DIV i dostać się do jego wartości CSS; 2. ustawić nasłuchiwanie na document na mousemove i wykonac funkcje: 3. przejecie position mousemove 4. przekazanie wartosci dla top i left diva.
//zmienna.style.cssText =""; metoda dopisuje suchy tekst podany po prawej stronie do elementu 'zmienna'
console.log(window);
console.log(document);
window.addEventListener("mousemove", function(e) {
    const mouseCircle = document.querySelector("div.mouse_circle");
    mouseCircle.style.cssText = "left: " + e.clientX + "px;" + "top: " + e.clientY + "px;";
})
// window.addEventListener("click", function() {
//     const hello = document.querySelector("p.hello");
    // MouseEvent.
    // hello.style.cssText = "background-color: rgba(0, 0, 0, 0.3); color: black";
// })