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


let bonusCount = 5
let countGold = 0

help.addEventListener('click', () => {
	helpBox.style.display = 'block'
	containerForHeroes.style.display = 'none'
	choose_hero.style.display = 'none'
})

closeHelpBox.addEventListener('click', () => {
	helpBox.style.display = 'none'
	containerForHeroes.style.display = 'grid'
	choose_hero.style.display = 'block'
})

changeChoice.addEventListener('click', () => {location.reload()})

// hero.forEach( elem => {
// 	elem.addEventListener('click', () => {
// 		console.log(elem.children[0].children[1].src)
// 		containerForHeroes.style.display = 'none'
// 		choose_hero.innerHTML = `Выбран ${elem.children[0].children[0].innerHTML} <img src="${elem.children[0].children[1].src}" alt="" width="300px">`
// 		choose_hero.style.display = 'flex'
// 		setTimeout(() => {
// 			choose_hero.style.position = 'absolute'
// 			choose_hero.style.bottom = 0
// 			choose_hero.style.left = 0
// 			choose_hero.style.border = 'none'
// 			choose_hero.innerHTML = `<img src="${elem.children[0].children[1].src}" alt="" width="300px">`
// 		}, 2000)
// 	})
// })

// let x = 1;
// choose_hero.addEventListener('click', () => {
// 	if (x > 5){
// 		return
// 	} else {
// 	 	statsHulk.children[1].children[1].src = `img/${x}stats.png`
// 		x++
// 	}
// })

hero.forEach( elem => {
	elem.addEventListener('click', () => {
		containerForHeroes.innerHTML = `
			<div class="hero hoverBg">
				<div class="hero-box">
					<div class="name"> ${elem.children[0].children[0].innerHTML}</div>
					<img src="${elem.children[0].children[1].src}" class="hulk"  alt="hulk">
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


		let statsCountStrength = containerForHeroes.children[0].children[1].children[1].children[0].dataset.count 
		let statsCountIntel = containerForHeroes.children[0].children[1].children[1].children[1].dataset.count 
		let statsCountAgility = containerForHeroes.children[0].children[1].children[1].children[2].dataset.count 
		let statsCountCharisma = containerForHeroes.children[0].children[1].children[1].children[3].dataset.count 

		localStorage.setItem(1, statsCountStrength)
		localStorage.setItem(2, statsCountIntel)
		localStorage.setItem(3, statsCountAgility)
		localStorage.setItem(4, statsCountCharisma)
		

		containerForHeroes.children[1].addEventListener('click', (event) => {
			hideGoldButton()
			if (event.target.innerHTML === 'Сила') {
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
				mainGold.innerHTML = `Золотишко:${countGold+200}`
				startGame.style.marginTop = '30px'
			}
		})
	})
})

function hideGoldButton() {
	containerForHeroes.children[1].children[8].style.display = "none"
}

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