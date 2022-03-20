const choose_hero = document.querySelector('.choose-hero')
const containerForHeroes = document.querySelector('.containerForHeroes')
const hero = document.querySelectorAll('.hero')
const statsHulk = document.querySelector('.statsHulk')
const mainGold = document.querySelector('.mainGold')
const changeChoice = document.querySelector('.changeChoice')
const startGame = document.querySelector('.startGame')
const help = document.querySelector('.help')
const helpBox = document.querySelector('.helpBox')
const closeHelpBox = document.querySelector('.closeHelpBox')
const newGame = document.querySelector('.newGame')


let bonusCount = 5
let countGold = 0
let heroId

checkStartSettings()

function checkStartSettings() {
	if (localStorage.getItem('gold')) {
		mainGold.innerHTML = `Золотишко:${localStorage.getItem('gold')}`
	} else {
		mainGold.innerHTML = `Золотишко:${countGold}`
	}
	if (localStorage.getItem('checkGameStart') == 'true'){
		changeChoice.style.display = 'none'
		newGame.style.display = 'block'
		if (containerForHeroes != null) {
			containerForHeroes.style.display = 'none'
			choose_hero.style.display = 'none'
		} else {
			return
		}
	}
}

help.addEventListener('click', () => {
	helpBox.style.display = 'block'
	containerForHeroes.style.display = 'none'
	choose_hero.style.display = 'none'
})

closeHelpBox.addEventListener('click', () => {
	helpBox.style.display = 'none'
	if (localStorage.getItem('checkGameStart') == 'true'){
		return
	} else {
		choose_hero.style.display = 'block'
		if (containerForHeroes.children.length > 2) {
			containerForHeroes.style.display = 'grid'
		} else {
			containerForHeroes.style.display = 'flex'
		}
	}
})

changeChoice.addEventListener('click', () => {
	localStorage.setItem('gold', 0)
	location.reload()
})


newGame.addEventListener('click' , () => {
	if (confirm('Вы уверены, что хотите начать Новую игру ?')) {
	// window.location.href = 'file:///D:/%D0%A7%D1%82%D0%BE-%D1%82%D0%BE/%D1%81%D0%B0%D0%B9%D1%82%D1%8B/game2/index.html'
		window.location.href = 'index.html'
		localStorage.clear()
	} else {
		return
	}

})


hero.forEach( elem => {
	elem.addEventListener('click', () => {
		containerForHeroes.innerHTML = `
			<div class="hero hoverBg">
				<div class="hero-box">
					<div class="name"> ${elem.children[0].children[0].innerHTML}</div>
					<img src="${elem.children[0].children[1].src}" >
					<div class="hero_phrase">${elem.children[0].children[2].innerHTML} !</div>
				</div>
				<div class="stats-box statsHulk">
					<div class="title">
						<p>Статы</p>
						<p>Сила</p>
						<p>Интелект</p>
						<p>Ловкость</p>
						<p>Харизма</p>	
					</div>
					<div class="stats">
						<img src="${elem.children[1].children[1].children[0].src}" data-count='${elem.children[1].children[1].children[0].dataset.count}' alt="">
						<img src="${elem.children[1].children[1].children[1].src}" data-count='${elem.children[1].children[1].children[1].dataset.count}' alt="">
						<img src="${elem.children[1].children[1].children[2].src}" data-count='${elem.children[1].children[1].children[2].dataset.count}' alt="">
						<img src="${elem.children[1].children[1].children[3].src}" data-count='${elem.children[1].children[1].children[3].dataset.count}' alt="">
					</div>
				</div>
			</div>
			<div class="choose_stats">
				<p>ДОСТУПНО ОЧКОВ ${bonusCount}</p>
				<br>
				<p >УЛУЧШИТЬ НАВЫК</p>
				<p class="bonusStats hoverBg">Сила</p>
				<p class="bonusStats hoverBg">Интелект</p>
				<p class="bonusStats hoverBg">Ловкость</p>
				<p class="bonusStats hoverBg">Харизма</p>	
				<br>
				<p class="bonusStats hoverBg gold"> Халявное золотишко</p>	
			</div>
		`
		containerForHeroes.style.display = 'flex'
		containerForHeroes.style.justifyContent = 'center'
		choose_hero.innerHTML = `У вас есть 5 очков навыков, распределите их по желанию. Либо выберите получение дополнительного золота`
		
		heroImage = elem.children[0].children[1].src

		let statsCountStrength = containerForHeroes.children[0].children[1].children[1].children[0].dataset.count 
		let statsCountIntel = containerForHeroes.children[0].children[1].children[1].children[1].dataset.count 
		let statsCountAgility = containerForHeroes.children[0].children[1].children[1].children[2].dataset.count 
		let statsCountCharisma = containerForHeroes.children[0].children[1].children[1].children[3].dataset.count 

		localStorage.setItem(1, statsCountStrength)
		localStorage.setItem(2, statsCountIntel)
		localStorage.setItem(3, statsCountAgility)
		localStorage.setItem(4, statsCountCharisma)
		

		containerForHeroes.children[1].addEventListener('click', (event) => {
			if (event.target.innerHTML === 'Сила') {
				hideGoldButton()
				console.log(++statsCountStrength)
				console.log(bonusCount--)
				if (bonusCount < 0) {
					return
				} else {
					containerForHeroes.children[1].children[0].innerHTML = `ДОСТУПНО ОЧКОВ ${bonusCount}`
					containerForHeroes.children[0].children[1].children[1].children[0].src = `img/${statsCountStrength}stats.png`
					localStorage.setItem(1, statsCountStrength)
				}
			} else if (event.target.innerHTML === 'Интелект') {
				hideGoldButton()
				console.log(++statsCountIntel)
				console.log(bonusCount--)
				if (bonusCount < 0) {
					return
				} else {
					containerForHeroes.children[1].children[0].innerHTML = `ДОСТУПНО ОЧКОВ ${bonusCount}`
					containerForHeroes.children[0].children[1].children[1].children[1].src = `img/${statsCountIntel}stats.png`
					localStorage.setItem(2, statsCountIntel)
				}
			} else if (event.target.innerHTML === 'Ловкость') {
				hideGoldButton()
				console.log(++statsCountAgility)
				console.log(bonusCount--)
				if (bonusCount < 0) {
					return
				} else {
					containerForHeroes.children[1].children[0].innerHTML = `ДОСТУПНО ОЧКОВ ${bonusCount}`
					containerForHeroes.children[0].children[1].children[1].children[2].src = `img/${statsCountAgility}stats.png`
					localStorage.setItem(3, statsCountAgility)
				}
				// addStats(statsCountAgility, 2, 3)
			} else if (event.target.innerHTML === 'Харизма') {
				hideGoldButton()
				console.log(++statsCountCharisma)
				console.log(bonusCount--)
				if (bonusCount < 0) {
					return
				} else {
					containerForHeroes.children[1].children[0].innerHTML = `ДОСТУПНО ОЧКОВ ${bonusCount}`
					containerForHeroes.children[0].children[1].children[1].children[3].src = `img/${statsCountCharisma}stats.png`
					localStorage.setItem(4, statsCountCharisma)
				}
			}
			if( bonusCount == 0) {
				containerForHeroes.children[1].innerHTML = '<p>ДОСТУПНО ОЧКОВ 0</p>'
				startGame.style.marginTop = '30px'
			}
		})


		containerForHeroes.children[1].children[8].addEventListener('click', () => {
			containerForHeroes.children[1].innerHTML = '<p>ДОСТУПНО ОЧКОВ 0</p> <br> <p>Золото получено</p>'
			if(countGold > 200) {
				return
			} else {
				countGold = countGold + 200
				mainGold.innerHTML = `Золотишко:${countGold}`
				startGame.style.marginTop = '30px'
			}
		})
	})
})

function hideGoldButton() {
	containerForHeroes.children[1].children[8].style.display = "none"
}

startGame.addEventListener('click', () => {
	localStorage.setItem('hero' , heroImage)
	localStorage.setItem('gold', countGold)
	localStorage.setItem('checkGameStart', true)
	// window.location.href = 'file:///D:/%D0%A7%D1%82%D0%BE-%D1%82%D0%BE/%D1%81%D0%B0%D0%B9%D1%82%D1%8B/game2/game.html'
	window.location.href = 'game.html'
})


// function addStats(statsCount, pos, locStrPos) {
// 	hideGoldButton();
// 	console.log(++statsCount)
// 	console.log(bonusCount--)
// 	if (bonusCount < 0) {
// 		return
// 	} else {
// 		containerForHeroes.children[1].children[0].innerHTML = `ДОСТУПНО ОЧКОВ ${bonusCount}`
// 		containerForHeroes.children[0].children[1].children[1].children[pos].src = `img/${statsCount}stats.png`
// 		localStorage.setItem(locStrPos, statsCount)
// 		console.log('222')
// 	}
// }