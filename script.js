let element = document.getElementById("item103");
function generate(){
    let value = Math.floor(1000 + Math.random() * 9000);
    let display = document.getElementById("item104");
    display.value = value;
}