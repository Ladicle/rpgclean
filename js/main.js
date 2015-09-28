window.onload = function() {
    var output = document.getElementById('output');
    
    window.addEventListener('devicemotion', function(e) {
	gravity = e.accelerationIncludingGravity;
	output.innerHTML = 'x:' + gravity.x + 'y:' + gravity.y;
    }, true);
};
