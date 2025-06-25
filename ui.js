
var note1 = document.getElementById('note1'),note2 = document.getElementById('note2'),
note3 = document.getElementById('note3');
var body = document.getElementsByTagName('body')[0];
var j = document.getElementById('j'),i=document.getElementById('i');

note1.style.backgroundColor = 'black';

note1.onclick = () =>{
	note1.style.backgroundColor = 'black';
	note2.style.backgroundColor = 'gray';
	note3.style.backgroundColor = 'gray';
	window.scrollTo(0,0);
}
note2.onclick = () =>{
	note1.style.backgroundColor = 'gray';
	note2.style.backgroundColor = 'black';
	note3.style.backgroundColor = 'gray';
	window.scrollTo(2000,0);
	j.classList.add('ki');
	i.classList.add('kl');
}
note3.onclick = () =>{
	note1.style.backgroundColor = 'gray';
	note2.style.backgroundColor = 'gray';
	note3.style.backgroundColor = 'black';
}
