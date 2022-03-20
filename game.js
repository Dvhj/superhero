const next = document.querySelector('.next')
const contText = document.querySelector('.contText')
const contGameplay = document.querySelector('.contGameplay')
const heroPosition = document.querySelector('.heroPosition')
const secondPosition = document.querySelector('.secondPosition')
const elem = document.querySelectorAll('.elem')

next.addEventListener('click', () => {
	contText.style.display = 'none'
	contGameplay.style.display = 'grid'
	startMainGame()
})

function startMainGame() {
	heroPosition.innerHTML = `<img src="${localStorage.getItem('hero')}" class="iolo"  alt="iolo">`
	secondPosition.innerHTML = `<img src="img/guard2.png" alt="">`
	setTimeout( () => {
		elem[1].innerHTML = 'Герой подходил к городу Балстоун, когда дорогу ему перегородила  стража'
		elem[1].style.paddingTop = '50px'
	}, 500)
	setTimeout(() => {
		elem[8].innerHTML = 'Стой, кто такой и куда направляешься !'
		setTimeout(() => {
			elem[6].innerHTML = '<div class="ask" data-react="good">Я простой путешественник, направляюсь в город Балстоун</div> <div class="ask" data-react="bad"> Вы кто такие чтоб меня спрашивать, псы!</div>' 
			result(elem[6], elem[8])
		} , 500)
	}, 500)
}

function result(item, guard) {
	console.log(item)
	item.addEventListener('click', (event) => {
		console.log(event.target)
		if ( event.target.dataset.react == 'bad') {
			setTimeout(() => {
				fight()
				elem[8].innerHTML = 'Взять его!!!'
				}, 500)
		} else {
			setTimeout(() => guard.innerHTML = 'oK', 500)
			elem[1].innerHTML = ''
			elem[6].innerHTML = ''
			elem[8].innerHTML = ''
		}
	})
}

function fight() {
	if( localStorage.getItem(1) > 5) {
		elem[6].innerHTML = ''
		elem[8].innerHTML = ''
		elem[1].innerHTML = 'Заявязалась ожесточенная драка. Но герою удалось победить стражников. '
	} else {
		elem[1].innerHTML = 'Вас убили как собаку сутулую, вы слабый'
		elem[6].innerHTML = ''
		elem[8].innerHTML = ''
		elem[5].children[0].style.transform = 'rotate(-90deg)'
	}
}