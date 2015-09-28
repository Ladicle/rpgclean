window.onload = function() {
    var output = document.getElementById('output');
    var cocoa = new MilkCocoa("dogiest1m63.mlkcca.com");
    var punchStore = cocoa.dataStore('punch');
    var prev = 0;
    
    window.addEventListener('devicemotion', function(e) {
	gravity = e.accelerationIncludingGravity;
	output.innerHTML = 'x:' + Math.round(gravity.x) + 'y:' + Math.round(gravity.y);
	sum = Math.abs(gravity.x) + Math.abs(gravity.y);
	if (sum == prev ) {
	    prev = sum;
	    return;
	}
	if (sum > 30) {
	    prev = sum;
	    punchStore.push({
		power: sum
	    });
	}
    }, true);
};
