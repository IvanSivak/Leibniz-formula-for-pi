var n = 1, 
    s = -1;

for (var i = 2; i < 1000000; i++){
	if (i % 2 != 0) {
  	n += (1/i) * s;
    s *= -1;
  }
}


console.log(4 * n)
