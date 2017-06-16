import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import './styles/login.scss'

import {polyfill} from 'smoothscroll-polyfill'
import {debounce} from 'loginutil'

polyfill()


ReactDOM.render(
		<App />,
    document.getElementById('root')
  )

// let totalHeight, percentage

// const locks = [0, 33.4, 66.9]

// function resizeUpdate() {
//     totalHeight = document.documentElement.scrollHeight
//     percentage = document.body.scrollTop / totalHeight
// }

// function scroll() {
//     percentage = document.body.scrollTop / totalHeight
//     locks.reduce((a, b) => {
//         if(between(a, b, percentage * 100)) {
//             let targ = closest(a, b, percentage * 100)
//             window.scroll({left: 0, top: totalHeight * (targ / 100), behavior: 'smooth'})
//         }
//         return b
//     })
// }

// function closest(a, b, t) {
//     let da = Math.abs(t-a)
//     let db = Math.abs(t-b)

//     return da < db? a : b
// }

// function between(a, b, t) {
//     return t >= a && t <=b
// }

// window.addEventListener('resize', resizeUpdate)
// window.addEventListener('scroll', debounce(scroll, 100))
// window.addEventListener('DOMContentLoaded', resizeUpdate)
// window.addEventListener('load', resizeUpdate)