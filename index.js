let carHorn  = document.getElementById('carHorn');
let music  = document.getElementById('music');
let contentArea = document.querySelector('#contentArea');

contentArea.addEventListener("click", () => {
    carHorn.play();
    music.play();

});

