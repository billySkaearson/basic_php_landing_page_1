
var con = document.getElementById('con'), mas = document.getElementById('mas'),
form = document.getElementById('form'), he = document.getElementById('hello'),
bluer = document.getElementById('bluer');

con.onclick = () =>{
form.classList.remove('let');
bluer.classList.add('bluer');
	form.classList.add('lett');
}
mas.onclick = () =>{
	
	form.classList.remove('let');
	form.classList.add('lett');
	bluer.classList.add('bluer');
}
hello.onclick = () =>{

	form.classList.add('let');
	form.classList.remove('lett');
	bluer.classList.remove('bluer');
}

