import { interval } from 'rxjs'
import { filter, map, take, scan } from 'rxjs/operators'

const btn = document.querySelector('#interval')
const rxjsBtn = document.querySelector('#rxjs')
const display = document.querySelector('#problem .result')

const people = [
  { name: 'Mirangs', age: 21 },
  { name: 'Vlad', age: 25 },
  { name: 'Vika', age: 17 },
  { name: 'Max', age: 23 },
  { name: 'Alex', age: 16 },
  { name: 'Leha', age: 22 },
  { name: 'Bohdan', age: 21 },
]

btn.addEventListener('click', () => {
  btn.disabled = true
  let i = 0
  const canDrink = []

  const interval = setInterval(() => {
    if (people[i]) {
      if (people[i].age >= 18) {
        canDrink.push(people[i].name)
      }
      display.textContent = canDrink.join(' ')
      i++
    } else {
      clearInterval(interval)
      btn.disabled = false
    }
  }, 1000)
})

rxjsBtn.addEventListener('click', () => {
  rxjsBtn.disabled = true

  interval(1000)
    .pipe(
      take(people.length),
      filter(v => people[v].age >= 18),
      map(v => people[v].name),
      scan((acc, v) => acc.concat(v), [])
    )
    .subscribe(res => {
      display.textContent = res.join(' ')
    }, null, () => rxjsBtn.disabled = false)
})