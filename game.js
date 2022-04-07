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

// function textToType(item, pos) {
// 	let text = Array.from(item);
// 	console.log(text)
// 	text.forEach(i => {
// 		  console.log(i)
// 	})
// }

function startMainGame() {
	heroPosition.innerHTML = `<img src="${localStorage.getItem('hero')}" title="Сила - ${localStorage.getItem('1')}" class="iolo"  alt="iolo">`
	secondPosition.innerHTML = `<img src="img/guard2.png" title ="Сила - (1-5)" alt="">`
	setTimeout( () => {
		elem[1].innerHTML = 'Герой подходил к городу Балстоун, когда дорогу ему перегородила  стража'
		// textToType("Герой подходил к городу Балстоун, когда дорогу ему перегородила стража", elem[1])
		elem[1].style.paddingTop = '50px'
	}, 500)
	setTimeout(() => {
		elem[6].innerHTML = 'Стой, кто такой и куда направляешься !'
		setTimeout(() => {
			elem[5].innerHTML = '<div class="ask hoverBg" data-react="good">Я простой путешественник, направляюсь в город Балстоун</div> <div class="ask hoverBg" data-react="bad"> Вы кто такие чтоб меня спрашивать, псы!</div> <div class="helpText">Выбор агрессивных действий может спровоцировать драку. Наведите на себя и соперника чтобы сравнить вашу силу</div>' 
			result(elem[5], elem[6])
		} , 2000)
	}, 3000)

}

function result(item, guard) {
	console.log(item)
	item.addEventListener('click', (event) => {
		console.log(event.target)
		if ( event.target.dataset.react == 'bad') {
			setTimeout(() => {
				elem[6].innerHTML = 'Взять его!!!'
				elem[5].innerHTML = ''
				}, 500)
			setTimeout(fight, 2000)
		} else if ( event.target.dataset.react == 'good'){
			setTimeout(() => {guard.innerHTML = 'oK, посмотрим твои документы'; setTimeout(() => {
				elem[1].innerHTML = 'Стражники проверили подорожную грамоту, поставили печать, заглянули в сумку и, не найдя ничего интересного, нехотя пропустили героя'
				setTimeout(() => elem[6].innerHTML = 'Лааадно, проходи и проваливай с глаз, тьфуу', 4000)
				}, 1200)
			}, 500)
			elem[1].innerHTML = ''
			elem[5].innerHTML = ''
			elem[6].innerHTML = ''
		} else return
	})
}


function fight() {
	if( localStorage.getItem(1) > 5) {
		elem[1].innerHTML = ''
		elem[5].innerHTML = ''
		elem[6].innerHTML = ''
		elem[1].innerHTML = 'Заявязалась ожесточенная драка. Но герою удалось победить стражников. '
		elem[7].children[0].style.transform = 'rotate(90deg)'
		setTimeout(()=> elem[5].innerHTML = 'Сасать раки', 1200 )
		setTimeout(()=> {
			elem[5].innerHTML = '<div class="ask hoverBg" data-choose="loot">Залутать добычу</div> <div class="ask hoverBg" data-choose="go"> Продолжить путь</div>'
			elem[5].addEventListener('click', (event) => {
				if (event.target.dataset.choose == 'loot') {looting()}
			else if (event.target.dataset.choose == 'go') { elem[1].innerHTML = 'Герой направился в город..'; ;elem[5].innerHTML = ''}
			})
		}, 3000 )
	} else {
		elem[1].innerHTML = 'Вас убили как собаку сутулую, вы слабый'
		elem[5].innerHTML = ''
		elem[6].innerHTML = ''
		elem[4].children[0].style.transform = 'rotate(-90deg)'
		setTimeout(() => {contGameplay.classList.add('endGame');
			contGameplay.classList.remove('contGameplay')
			contGameplay.innerHTML = 'YOU DIED...'; 
		}, 1500)
		return
	}
}

function looting() {
	elem[1].innerHTML = ''
	if (localStorage.getItem(3) < 2) {
		elem[5].innerHTML = ''
		setTimeout(() => elem[1].innerHTML = 'Вы, роясь в рюкзаке, теряете равновесие, падаете и ломаете шею', 1000)
		setTimeout(() => {contGameplay.classList.add('endGame');
			contGameplay.classList.remove('contGameplay')
			contGameplay.innerHTML = 'YOU DIED...'; 
		}, 4500)
	} else if (localStorage.getItem(3) >= 4){
		elem[1].innerHTML = 'Вы получили 30 золотых'
		let gold = +localStorage.getItem('gold') + 30
		localStorage.setItem('gold', gold)
		mainGold.innerHTML = `Золотишко:${localStorage.getItem('gold')}`
		elem[5].innerHTML = ''
	} else {
		elem[1].innerHTML = 'Вы случайно задеваете в рюкзаке нож стражника и полчаете ранение. Сила уменьшена на 1';
		localStorage.setItem('1', +localStorage.getItem('1')-1)
		heroPosition.innerHTML = `<img src="${localStorage.getItem('hero')}" title="Сила - ${localStorage.getItem('1')}" class="iolo"  alt="iolo">`
	}
}