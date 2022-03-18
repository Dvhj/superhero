const choose_hero = document.querySelector('.choose-hero')
const containerForHeroes = document.querySelector('.containerForHeroes')
const hero = document.querySelectorAll('.hero')
const statsHulk = document.querySelector('.statsHulk')
const mainGold = document.querySelector('.mainGold')

let bonusCount = 5
let countGold = 2
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
		console.log(elem)
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
						<img src="${elem.children[1].children[1].children[0].src}" alt="">
						<img src="${elem.children[1].children[1].children[1].src}" alt="">
						<img src="${elem.children[1].children[1].children[2].src}" alt="">
						<img src="${elem.children[1].children[1].children[3].src}" alt="">
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
		containerForHeroes.children[1].children[8].addEventListener('click', () => {
			if(countGold > 200) {
				return
			} else {
				mainGold.innerHTML = `	Золото:${countGold+200}`
			}
			
		})
	})
})