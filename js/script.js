// Сначало создадим подключение к стрелкам
// document - это весь сайт
// document.querySelector - подключение к определенному классу или индефикатору

const hour = document.querySelector('.h'),
   min = document.querySelector('.m'),
   sec = document.querySelector('.s'),
   hoursNumb = document.querySelector('.hours'),
   minutesNumb = document.querySelector('.minutes')
const inp = document.querySelector('#check'),
   audio = document.querySelector('audio')
// new Date() - отдает время которое сейчас на пк
function clock() {
   let time = new Date()
   let second = time.getSeconds() * 6
   let minutes = time.getMinutes() * 6
   let hours = time.getHours() * 30
   // HTML элемент.style - добовляет css стили в html документ к элементу
   min.style = `transform: rotate(${minutes}deg)`
   hour.style = `transform: rotate(${hours + (minutes / 12)}deg)`
   if (inp.checked) {
      audio.play()
   } else {
      audio.pause()
   }
   sec.animate([
      {
         transform: `rotate(${second}deg)`
      },
      {
         transform: `rotate(${second + 6}deg)`
      }
   ], {
      fill: 'forwards',
      duration: 1000,

   })
   // HTML элемент.innerHTML - Заменяет весь контент в html
   hoursNumb.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
   minutesNumb.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
   // Рекурсия это когда функция вызывает саму себя
   setTimeout(() => {
      clock()
   }, 1000);
}
clock()
const links = document.querySelectorAll('.tabsItem'),
  tabs = document.querySelectorAll('.tabsContentItem')
  
for (let i = 0; i < links.length; i++) {
   links[i].addEventListener('click', function (e) {
      e.preventDefault()
      for (let x = 0; x < links.length; x++) {
         links[x].classList.remove('active')
         tabs[x].classList.remove('active')
      }
      tab(this, tabs[i])
   })
}
function tab(el, arr) {
   el.classList.add('active')
   arr.classList.add('active')
}
const hoursdWatch = document.querySelector('.stopwatch__hours'),
      minutesdWatch = document.querySelector('.stopwatch__minutes'),
      secondsdWatch = document.querySelector('.stopwatch__seconds'),
      watchBtn = document.querySelector('.stopwatch__btn'),
      secondInfo = document.querySelector('.tabsLink__span')

watchBtn.addEventListener('click', function () {
   if (this.innerHTML == 'start') {
      this.innerHTML = 'stop'
      secondInfo.classList.add('active')
      let i = 0
      setTimeout(() => stopWatch(this, i), 1000);
   }else if (this.innerHTML == 'stop') {
      secondInfo.classList.remove('active')
      secondInfo.classList.add('active_clear')
      this.innerHTML = 'clear'
   }else{
      secondsdWatch.innerHTML = 0
      minutesdWatch.innerHTML = 0
      hoursdWatch.innerHTML = 0
      this.innerHTML = 'start'
      secondInfo.classList.remove('active_clear')
   }
})
function stopWatch(el, i) {
   if (el.innerHTML == 'stop') {
      if (i == 59) {
         i = 0
         secondsdWatch.innerHTML = i
         if (minutesdWatch.innerHTML == 59) {
            minutesdWatch.innerHTML = 0
            hoursdWatch.innerHTML++
         }else{
            minutesdWatch.innerHTML++
         }
      }else{
         i++
         secondsdWatch.innerHTML = i
      }
      setTimeout(() => stopWatch(el, i), 1000);
   }
}