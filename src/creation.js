import { of, from, Observable, fromEvent, range, timer, interval } from 'rxjs'
import { scan, map } from 'rxjs/operators'

// const stream$ = of(1, 2, 3, 4)

// stream$.subscribe(val => {
//   console.log('Value: ', val)
// })

// const arr$ = from([1, 2, 3, 4]).pipe(
//   scan((acc, value) => acc.concat(value), [])
// )
// arr$.subscribe(val => console.log(val))

// const stream$ = new Observable(observer => {
//   observer.next('First value')
//   setTimeout(() => observer.next('After 1000ms'), 1000)
//   setTimeout(() => observer.complete(), 1500)
//   setTimeout(() => observer.error('Something went wrong'), 2000)
//   setTimeout(() => observer.next('After 3000ms'), 3000)
// })

// stream$.subscribe(
//   val => console.log('Value: ', val),
//   err => console.log(err),
//   () => console.log('Completed')
// )

// stream$.subscribe({
//   next(val) {
//     console.log('Value: ', val)
//   },
//   error(err) {
//     console.log(err)
//   },
//   complete() {
//     console.log('Completed')
//   }
// })

// fromEvent(document.querySelector('canvas'), 'mousemove')
//   .pipe(
//     map(e => ({
//       x: e.offsetX,
//       y: e.offsetY,
//       ctx: e.target.getContext('2d')
//     }))
//   )
//   .subscribe(pos => {
//     pos.ctx.fillRect(pos.x, pos.y, 2, 2)
//   })

// const clear$ = fromEvent(document.querySelector('#clear'), 'click')

// clear$.subscribe(() => {
//   const canvas = document.querySelector('canvas')
//   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
// })

//? Unsub
// const sub = interval(500).subscribe(v => console.log(v))

// setTimeout(() => {
//   sub.unsubscribe()
// }, 4000)

// timer(2500).subscribe(v => console.log(v))

// range(42, 10).subscribe(v => console.log(v))