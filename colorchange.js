var colorChange = function() {
    document.body.style.backgroundColor = '#2' + (Math.random() * 7).toFixed(0) + (Math.random() * 8).toFixed(0);
}
var i = setInterval(colorChange, 4000);