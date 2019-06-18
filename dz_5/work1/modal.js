let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close');
let showBtn = document.querySelector('button');

showBtn.addEventListener('click', function() {
	console.log('нажали');
	modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', function() {
	console.log('убрать');
	modal.classList.add('hidden');
});