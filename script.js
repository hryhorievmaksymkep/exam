const text = document.getElementById("text");
function changeLanguage(){
    const radio = document.querySelector("input[name = 'language']:checked");
    text.textContent = radio.parentElement.textContent;
}