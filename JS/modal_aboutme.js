//w momencie klikniecia 'aboutme' nadać klase blur dla body oraz jednoczesnie dodac klase modal_active dla div.modal_wrapper.
//aby wylaczyc: w momencie klikniecia div.close odjac klase blur od body oraz odjac klase modal_active [calosc zrobic toggle?]
const button_aboutme = document.querySelector('li.first>a');
const bodywrapper = document.querySelector('div.wrapper');
const modal = document.querySelector('div.modal_wrapper');
const button_exit = document.querySelector('div.close');
function modalf() {
    bodywrapper.classList.add("blur");
    modal.classList.add("modal_active");
    modal.classList.remove("modal_wrapper");
};
function exitt() {
    bodywrapper.classList.remove("blur");
    modal.classList.add("modal_wrapper");
}
button_aboutme.addEventListener("click", modalf);
button_exit.addEventListener("click", exitt);