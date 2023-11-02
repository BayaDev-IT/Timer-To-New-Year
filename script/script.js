// console.log('Hello');

// const timer = () => {
//     console.log('Timer done');
// };

// setTimeout(timer, 2000);

// console.log('JavaScript');

// const func = (name, text) => {
//     console.log(`${name}: ${text}`);
// };

// func('Nikita', 'Zhukov');

// const name = prompt('Enter your name:');
// let timer = setTimeout(() => {
//     func(name, 'Hello all')
// }, 2000);

// if(name == 'Nikita') {
//     clearTimeout(timer);
// }


//============================ Interval =====================

// setInterval(() => {
//     console.log(1);
// }, 1000);


// let i = 0;

// let timer = setInterval(() => {
//     console.log(i++);
    // i++;
    // if(i > 5) {
    //     clearInterval(timer)
    // }

    // i > 5 ? clearInterval(timer) : null;

//     i > 5 && clearInterval(timer);
// }, 1000);


//====================================================
// const btn = document.getElementById('btn');

// let i = 0;
// let timer;

// const logger = () => {
//     console.log(i);
//     i++;
//     i > 5 && clearInterval(timer);
// }

// btn.addEventListener('click', () => {
//     timer = setInterval(logger, 1000)
// });


// //======================================================
// const cube = document.querySelector('#cube');
// const btnStart = document.querySelector('#btnStart');
// const btnStop = document.querySelector('#btnStop');

// let i = 0;
// let ctop = 0;
// let cleft = 0;
// let timer;

// const animCuber = () => {
//     timer = setInterval(() => {
//         if (ctop <= 300 && ctop > 0 && cleft == 0) {
//             cube.style.top = ctop + 'px';
//             ctop -= 10;
//         }else if (cleft <= 650 && cleft >= 0 && ctop == 300) {
//             cube.style.left = cleft + 'px';
//             cleft -= 10;
//         }else if (ctop >= 0 && ctop <= 300 && cleft == 650) {
//             cube.style.top = ctop + 'px';
//             ctop += 10;
//         }else if(cleft >= 0 && ctop == 0 && cleft <= 650) {
//             cube.style.left = cleft + 'px';
//             cleft += 10;
//         };

        
//     }, 10);
// };

// btnStart.addEventListener('click', () => {
//     i == 0 && animCuber();
//     i++;
// });
// btnStop.addEventListener('click', () => {
//     clearInterval(timer);
//     i = 0;
// })



//==================== Object Date ============================

// let now = new Date()              // показывает текущее дату и время

// ============= Методы  GET ============

// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getMonth() + 1);
// console.log(now.getDate());  // число месяца
// console.log(now.getDay());   // дни недели
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getUTCHours());    // Часы по Гринвичу
// console.log(now.getTimezoneOffset());    // Разница в минтах от Лондона
// console.log(now.getTime());         // Количество милисекунд прошедших с 1970 года 1 января 6 часов утра


// =================== Методы SET ===========

// now.setHours(14);
// console.log(now);



//===========================================

// const deadline = '2024-01-01 00:00:00';
// const wrapper = document.querySelector('.timers_wrapper');
// const timer_total = document.querySelector('.timer_total');
// const timer_days = document.querySelector('.timer_days');
// const timer_hours = document.querySelector('.timer_hours');
// const timer_minutes = document.querySelector('.timer_minutes');
// const timer_seconds = document.querySelector('.timer_seconds');

// //======================================
// wrapper.style.cssText = `
// width: 500px;
// height: 300px;
// display: flex;
// gap: 10px;
// justify-content: center;
// align-items: center;
// background-color: aqua;
// `
// timer_total.style.cssText = `
// padding: 5px;
// height: 40px;
// background-color: black;
// color: aqua;
// display: flex;
// justify-content: center;
// align-items: center;
// `
// timer_days.style.cssText = `
// padding: 5px;
// height: 40px;
// background-color: black;
// color: aqua;
// display: flex;
// justify-content: center;
// align-items: center;
// `
// timer_hours.style.cssText = `
// padding: 5px;
// height: 40px;
// background-color: black;
// color: aqua;
// display: flex;
// justify-content: center;
// align-items: center;
// `
// timer_minutes.style.cssText = `
// padding: 5px;
// height: 40px;
// background-color: black;
// color: aqua;
// display: flex;
// justify-content: center;
// align-items: center;
// `
// timer_seconds.style.cssText = `
// padding: 5px;
// height: 40px;
// background-color: black;
// color: aqua;
// display: flex;
// justify-content: center;
// align-items: center;
// `

// //=============================

// const getTime = (endTime) => {
//     // console.log(Date.parse(endTime));
//     // console.log(Date.parse(new Date()));
//     const total = Date.parse(endTime) - Date.parse(new Date());
//     const days = Math.floor(total / (1000 * 60 * 60 * 24));
//     const hours = Math.floor(total / (1000 * 60 * 60) % 24);
//     const minutes = Math.floor(total / (1000 * 60) % 60);
//     const seconds = Math.floor(total / (1000) % 60);
//     // console.log(days, hours, minutes, seconds);
//     return {
//         total,
//         days,
//         hours,
//         minutes,
//         seconds,
//     }
// };

// const result = () => {
//     const {total, days, hours, minutes, seconds} = getTime(deadline)

//     timer_total.innerHTML = deadline;
//     timer_days.innerHTML = days;
//     timer_hours.innerHTML = hours;
//     timer_minutes.innerHTML = minutes;
//     timer_seconds.innerHTML = seconds;

//     if (total <= 0) {
//         clearInterval(timer);
//         alert('Happy New Year');
//     }

// }

// let timer = setInterval(result, 1000);



// Дз
// стилизация
// каждая секунда должна поазаться, самообнавления
// когда время дойдет 0, остнаовить время и вызвать с новым годом


















