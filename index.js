const choose_hero = document.querySelector('.choose-hero')
const containerForHeroes = document.querySelector('.containerForHeroes')
const hero = document.querySelectorAll('.hero')


hero.forEach( elem => {
	elem.addEventListener('click', () => {
		console.log(elem.children[0].children[1].src)
		containerForHeroes.style.display = 'none'
		choose_hero.innerHTML = `Выбран ${elem.children[0].children[0].innerHTML} <img src="${elem.children[0].children[1].src}" alt="" width="300px">`
		choose_hero.style.display = 'flex'
		setTimeout(() => {
			choose_hero.style.position = 'absolute'
			choose_hero.style.bottom = 0
			choose_hero.style.left = 0
			choose_hero.style.border = 'none'
			choose_hero.innerHTML = `<img src="${elem.children[0].children[1].src}" alt="" width="300px">`
		}, 2000)
	})
})