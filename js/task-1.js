import axios from 'axios';

// axios({
//   method: 'get',
//   url: 'https://jsonplaceholder.typicode.com/users',
// })
//   .then(response => console.log(response))
//   .catch(error => console.log(error));

// import axios from 'axios';

// axios
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// ------------------------------------------------------------------------------

// const list = document.querySelector('.main-list');

// // Додаємо елемент LG перед списком
// const lgItem = document.createElement('li');
// lgItem.textContent = 'LG';
// list.prepend(lgItem); // prepend додає елемент на початок списку

// // Додаємо елемент Huawei після кінця списку
// const huaweiItem = document.createElement('li');
// huaweiItem.textContent = 'Huawei';
// list.append(huaweiItem); // append додає елемент в кінець списку

// // Додаємо елемент Sony перед кінцем списку
// list.insertAdjacentHTML('beforeend', '<li>Sony</li>');

// // Додаємо елемент HTC після списку
// list.insertAdjacentHTML('afterend', '<ul><li>HTC</li></ul>');

// const button = document.getElementById('myButton');

// button.addEventListener('click', () => {
//   console.log('Button was clicked!');
// });

// --------------------ПОДІЇ------------------------

// ---------------ADD REMOVE---------------------------------------

// 1.// // Отримуємо кнопку за її ID
// const button = document.getElementById('myButton');

// // Додаємо обробник події 'click', який викликає функцію при натисканні
// button.addEventListener('click', () => {
//   alert('Button was clicked!'); // Виводимо сповіщення
// });

// const button = document.getElementById('myButton');

// button.addEventListener('click', () => {
//   console.log('Button was clicked!');
// });

// 2. // const button = document.getElementById('myButton'); // Отримуємо кнопку
// const removeButton = document.getElementById('removeHandler'); // Отримуємо кнопку для видалення обробника

// // Функція, яка буде викликана при натисканні
// const handleClick = () => {
//   alert('Button was clicked!'); // Виводимо сповіщення
// };

// // Додаємо обробник до кнопки
// button.addEventListener('click', handleClick);

// // Додаємо обробник на кнопку для видалення обробника
// removeButton.addEventListener('click', () => {
//   button.removeEventListener('click', handleClick); // Видаляємо обробник
//   alert('Handler removed'); // Сповіщаємо, що обробник видалено
// });

// --------------------------KEYDOWN------------------------------

// 3.// const input = document.getElementById('inputField'); // Отримуємо інпут

// // Додаємо обробник події 'keydown', який викликається при натисканні клавіші
// input.addEventListener('keydown', event => {
//   console.log(`Key pressed: ${event.key}`); // Виводимо натиснуту клавішу в консоль
// });

// ---------------------------SUBMIT-------------------------

// const registerForm = document.querySelector('.form');

// registerForm.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;

//   if (login === '' || password === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   console.log(`Login: ${login}, Password: ${password}`);
//   form.reset();
// }

// const registerForm = document.querySelector('.form');

// registerForm.addEventListener('submit', event => {
//   event.preventDefault(); // Запобігаємо стандартному відправленню форми

//   const login = registerForm.elements.login.value; // Отримуємо логін
//   const password = registerForm.elements.password.value; // Отримуємо пароль

//   console.log(`Login: ${login}, Password: ${password}`); // Виводимо в консоль
// });

// -----------------------------CHANGE------------------------

// const select = document.querySelector('.pizza-select');
// const textOutput = document.querySelector('.text-output');
// const valueOutput = document.querySelector('.value-output');

// select.addEventListener('change', setOutput);

// function setOutput(event) {
//   const selectedOptionValue = event.currentTarget.value;
//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   const selectedOptionText =
//     event.currentTarget.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// -----------------------------INPUT-------------------------------

// const input = document.getElementById('inputField'); // Отримуємо інпут

// // Додаємо обробник події 'input', який викликається при введенні даних
// input.addEventListener('input', event => {
//   console.log(`Current input value: ${event.target.value}`); // Виводимо поточне значення інпуту в консоль
// });

// -------------------------FOCUS----------------------------

// const input = document.getElementById('focusField'); // Отримуємо інпут

// // Додаємо обробник події 'focus', який викликається при отриманні фокусу
// input.addEventListener('focus', () => {
//   console.log('Input field has focus'); // Виводимо повідомлення в консоль
// });

// --------------------------BLUR------------------------------

// const input = document.getElementById('blurField'); // Отримуємо інпут

// // Додаємо обробник події 'blur', який викликається при втраті фокусу
// input.addEventListener('blur', () => {
//   console.log('Input field lost focus'); // Виводимо повідомлення в консоль
// });

// ----------------------CHANGE-------------------------

// const checkbox = document.getElementById('subscribe-checkbox'); // Отримуємо чекбокс
// checkbox.addEventListener('change', event => {
//   if (event.target.checked) {
//     console.log('Subscribed to newsletter');
//   } else {
//     console.log('Unsubscribed from newsletter');
//   }
// });

// const select = document.getElementById('mySelect'); // Отримуємо випадаючий список

// // Додаємо обробник події 'change', який викликається при зміні вибору
// select.addEventListener('change', event => {
//   console.log(`Selected value: ${event.target.value}`); // Виводимо вибране значення в консоль
// });

// const usernameInput = document.getElementById('username'); // Отримуємо поле вводу
// usernameInput.addEventListener('change', event => {
//   console.log(`Username entered: ${event.target.value}`); // Виводимо введене значення після зміни
// });

// const registerForm = document.querySelector('.form');
// registerForm.addEventListener('submit', event => {
//   event.preventDefault(); // Запобігаємо стандартному відправленню форми
//   const login = registerForm.elements.login.value; // Отримуємо логін
//   const password = registerForm.elements.password.value; // Отримуємо пароль
//   console.log(`Login: ${login}, Password: ${password}`); // Виводимо в консоль
// });

// const registerForm = document.querySelector('.form');
// registerForm.addEventListener('submit', event => {
//   event.preventDefault(); // Запобігаємо стандартному відправленню форми
//   const login = registerForm.elements.login.value; // Отримуємо логін

//   const password = registerForm.elements.password.value; // Отримуємо пароль

//   console.log(`Login: ${login}, Password: ${password}`); // Виводимо в консоль
// });

// ------------------------TARGET 8 MODULE---------------------------------

// const parent = document.getElementById('parent');
// const child = document.getElementById('child');

// // Обробник події на батьківському елементі
// parent.addEventListener('click', function (event) {
//   console.log('event.target:', event.target); // Елемент, на якому виникла подія
//   console.log('event.currentTarget:', event.currentTarget); // Елемент, на якому обробник події
// });

// // Обробник події на дочірньому елементі (необов'язковий для демонстрації)
// child.addEventListener('click', function () {
//   console.log('Button clicked!');
// });

// -----------------------event.stopPropagation()---------------------------

// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const descendant = document.querySelector('#descendant');

// parent.addEventListener('click', () => {
//   alert(
//     'Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
//   );
// });

// child.addEventListener('click', () => {
//   alert(
//     'Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
//   );
// });

// descendant.addEventListener('click', event => {
//   event.stopPropagation();
//   alert('Descendant click handler');
// });

// const parent = document.getElementById('parent');
// const child = document.getElementById('child');

// // Обробник на батьківському елементі
// parent.addEventListener('click', () => {
//   console.log('Parent clicked');
// });

// // Обробник на дочірньому елементі з використанням stopPropagation()
// child.addEventListener('click', event => {
//   event.stopPropagation(); // Подія не спливатиме до батьківського елемента
//   console.log('Child clicked with stopPropagation');
// });

// // Ще один обробник на дочірньому елементі з використанням stopImmediatePropagation()
// child.addEventListener('click', event => {
//   event.stopImmediatePropagation(); // Забороняє іншим обробникам на цьому ж елементі виконуватися
//   console.log('Child clicked with stopImmediatePropagation');
// });

// -----------------Делегування подій (event delegation)------------------------

// const box = document.querySelector('div.box');

// box.addEventListener('click', function (event) {
//   console.log(event.target);
// });

// --------------------------КОЛЬОРИ_-----------------------------

// const colorPalette = document.querySelector('.color-palette');
// const output = document.querySelector('.output');

// colorPalette.addEventListener('click', selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomHexColor();
//     const item = document.createElement('button');
//     item.type = 'button';
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add('item');
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomHexColor() {
//   const letters = '0123456789ABCDEF';
//   let color = '#';

//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   return color;
// }

// --------------------------Підключення БІБЛІОТЕКИ LODASH and loghtbox--------------------
// console.log(_.sum([4, 2, 8, 6]));
// console.log(_.shuffle([1, 2, 3, 4]));
// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `);
// const instance = basicLightbox.create(
//   `
//     <h1>Not closable</h1>
//     <p>It's not possible to close this lightbox with a click.</p>
// `,
//   {
//     closable: false,
//   }
// );

// const instance = basicLightbox.create(document.querySelector('#template'));
// instance.show();
// console.log(instance);

// console.log(basicLightbox);

// -------------------------ДЕСТРУКТУРИЗАЦІЯ------------------------

// const user = {
//   name: 'Jacob',
//   age: 32,
// };

// const { name, age } = user;
// console.log(name); // Jacob
// console.log(age); // 32

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// function printUserInfo(user) {
//   const { name, age, hobby } = user;
//   console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }

// printUserInfo({
//   name: 'Alice',
//   age: 25,
//   hobby: 'dancing',
// }); // Name: Alice, Age: 25, Hobby: dancing

// function doStuffWithBook(title, pages, downloads, rating, isPublic) {
//   // Робимо щось з параметрами
//   console.log('Назва книги:', title);
//   console.log('Кількість сторінок:', pages);
//   console.log('Кількість завантажень:', downloads);
//   console.log('Рейтинг:', rating);
//   console.log('Доступ:', isPublic ? 'публічний' : 'приватний');
// }

// // Виклик функції з безліччю параметрів
// doStuffWithBook('The Last Kingdom', 736, 10283, 8.38, true);

// function doStuffWithBook(book) {
//   // Деструктуризація всередині функції
//   const { title, pages, downloads, rating, isPublic } = book;

//   console.log('Назва книги:', title);
//   console.log('Кількість сторінок:', pages);
//   console.log('Кількість завантажень:', downloads);
//   console.log('Рейтинг:', rating);
//   console.log('Доступ:', isPublic ? 'публічний' : 'приватний');
// }

// doStuffWithBook({
//   title: 'The Last Kingdom',
//   pages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
//   // Деструктуризовані значення використовуються безпосередньо
//   console.log('Назва книги:', title);
//   console.log('Кількість сторінок:', pages);
//   console.log('Кількість завантажень:', downloads);
//   console.log('Рейтинг:', rating);
//   console.log('Доступ:', isPublic ? 'публічний' : 'приватний');
// }

// doStuffWithBook({
//   title: 'The Last Kingdom',
//   pages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views, likes },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(views); // 4827
// console.log(likes); // 1308

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// ----------------Деструктуризація масивів---------------------------
// const color = [200, 255, 100];
// const [red, green, blue] = color;

// console.log(`rgb(${red}, ${green}, ${blue})`); // “rgb(200, 255, 100)"

// const color = [200, 255, 100];

// const [red, ...otherColors] = color;

// console.log(red); // 200
// console.log(otherColors); // [255, 100]

// const user = {
//   name: 'Jacob',
//   age: 32,
//   email: 'j.cob@mail.com',
//   isOnline: true,
// };

// const { name, isOnline, ...otherProps } = user;

// console.log(name); // "Jacob"
// console.log(isOnline); // true
// console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}

// function printFruits([firstFruit, secondFruit, thirdFruit]) {
//   console.log(firstFruit, secondFruit, thirdFruit);
// }

// printFruits(['apple', 'banana', 'orange']); // "apple banana orange"

// -----------------------ЗАДАЧА КРУЖЕЧКИ---------------------

// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const innerChild = document.querySelector('#inner-child');

// // Обробник події для parent
// parent.addEventListener('click', event => {
//   console.log('Parent clicked!');
//   console.log('event.target:', event.target); // Елемент, на якому відбулася подія
//   console.log('event.currentTarget:', event.currentTarget); // Елемент, до якого прив'язаний обробник
//   parent.style.backgroundColor = 'lightcoral'; // Зміна кольору
// });

// // Обробник події для child
// child.addEventListener('click', event => {
//   console.log('Child clicked!');
//   console.log('event.target:', event.target); // Елемент, на якому відбулася подія
//   console.log('event.currentTarget:', event.currentTarget); // Елемент, до якого прив'язаний обробник
//   event.stopPropagation(); // Запобігаємо спливанню події до батьківського елемента
//   child.style.backgroundColor = 'lightgreen'; // Зміна кольору
// });

// // Обробник події для innerChild
// innerChild.addEventListener('click', event => {
//   console.log('Inner Circle clicked!');
//   console.log('event.target:', event.target); // Елемент, на якому відбулася подія
//   console.log('event.currentTarget:', event.currentTarget); // Елемент, до якого прив'язаний обробник
//   event.stopPropagation(); // Запобігаємо спливанню події до батьківських елементів
//   innerChild.style.backgroundColor = 'lightblue'; // Зміна кольору
// });

// -----------------------------9 МОДУЛЬ----------------------
// ---------------------------JSON-----------------------------

// ---------------------------------МЕТОД JSON.stringify-------------------
// const dog = {
//   name: 'Mango',
//   age: 3,
//   isGoodBoy: true,
//   bark() {
//     console.log('Woof!');
//   },
// };

// const json = JSON.stringify(dog);
// console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

// ------------------------JSON.parse(json)------------------------

// -Працює з точністю навпаки і переводить в JS

// const json = '{"name":"Mango","age":3,"isGoodBoy":true}';

// const dog = JSON.parse(json);
// console.log(dog); // {name: "Mango", age: 3, isGoodBoy: true}
// console.log(dog.name); // "Mango"

// let jsonString = JSON.stringify(32); // "32"
// let number = JSON.parse(jsonString); // 32
// console.log(jsonString);
// console.log(number);

// let jsonString = JSON.stringify(true); // "true"
// let booleanValue = JSON.parse(jsonString); // true

// let jsonString = JSON.stringify([1, 2, 3]); // "[1, 2, 3]"
// let array = JSON.parse(jsonString); // [1, 2, 3]

// ---------------------конструкція try...catch---------------------

// try {
//   const data = JSON.parse('Well, this is awkward');
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // Unexpected token W in JSON at position 0
// }

// console.log('✅ This is fine, we handled parsing error in try...catch');

// ---------------------------ВЕБСхОВИЩЕ-----------------------}

// console.log(window.localStorage);
// // Storage {length: 0}

// localStorage.setItem('ui-theme', 'light');

// console.log(localStorage); // Storage {ui-theme: "light", length: 1}

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// const savedTheme = localStorage.getItem('ui-theme');
// console.log(savedTheme); // "light"

// const savedItem = localStorage.getItem('key-that-does-not-exist');
// console.log(savedItem); // null

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem('settings', JSON.stringify(settings));

// const savedSettings = localStorage.getItem('settings');
// console.log(savedSettings); // A string

// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // Settings object

// localStorage.setItem('ui-theme', 'dark');
// console.log(localStorage.getItem('ui-theme')); // "dark"

// localStorage.removeItem('ui-theme');
// console.log(localStorage.getItem('ui-theme')); // null

// console.log(window.sessionStorage); // Storage {length: 0}

// sessionStorage.setItem('user-id', '123');
// sessionStorage.setItem(
//   'tickets',
//   JSON.stringify({ from: 'Lviv', to: 'Kyiv', quantity: 2 })
// );
// console.log(sessionStorage);
// // Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}

// const userId = sessionStorage.getItem('user-id');
// console.log(userId); // "123"

// const tickets = JSON.parse(sessionStorage.getItem('tickets'));
// console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }

// sessionStorage.removeItem('tickets');
// console.log(sessionStorage); // Storage {user-id: '123', length: 1}

// -----------------------КЕЙС-----------------------
// const form = document.querySelector('.feedback-form');
// const localStorageKey = 'goit-example-message';

// form.elements.message.value = localStorage.getItem(localStorageKey) ?? '';

// form.addEventListener('input', evt => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });

// -----------------------------10 MODULE------------------------

// -----------------setTimeout-----------------
// 1

// const button = document.querySelector('button');

// // const onClick = () => {
//   const timerId = setTimeout(() => {
//     console.log('I love async JS!');
//   }, 2000);

//   console.log(timerId);
// };

// button.addEventListener('click', onClick);

// 2

// const setBtn = document.querySelector('.js-set');
// const clearBtn = document.querySelector('.js-clear');
// let timeoutId;

// setBtn.addEventListener('click', () => {
//   timeoutId = setTimeout(() => {
//     console.log('I love async JS!');
//   }, 2000);
// });

// clearBtn.addEventListener('click', () => {
//   clearTimeout(timeoutId);
//   console.log(`Timeout with id ${timeoutId} has stopped!`);
// });

// -------------------setInterval()---------------------

// const startBtn = document.querySelector('.js-start');

// startBtn.addEventListener('click', () => {
//   const intervalId = setInterval(() => {
//     console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
//   }, 1000);
// });

// ---------------------COMMON-------------------

// // Використання setTimeout
// document.getElementById('timeoutBtn').addEventListener('click', function () {
//   document.getElementById('output').textContent = 'Таймер запущено...';
//   console.log('Таймер setTimeout запущено');
//   setTimeout(() => {
//     document.getElementById('output').textContent = '2 секунди минуло!';
//     console.log("Через 2 секунди: 'I love async JS!'");
//   }, 2000); // 2 секунди затримки
// });

// // Використання setInterval
// let intervalId;
// document.getElementById('intervalBtn').addEventListener('click', function () {
//   let counter = 0;
//   document.getElementById('output').textContent = 'Інтервал запущено...';
//   console.log('Інтервал setInterval запущено');
//   intervalId = setInterval(() => {
//     counter++;
//     document.getElementById('output').textContent = `Минуло ${counter} секунд`;
//     console.log(`Минуло ${counter} секунд`);

//     // Зупиняємо інтервал після 5 секунд
//     if (counter === 5) {
//       clearInterval(intervalId);
//       document.getElementById('output').textContent = 'Інтервал завершено!';
//       console.log('Інтервал зупинено після 5 секунд');
//     }
//   }, 1000); // Кожна секунда
// });

// Використання класу Date
// document.getElementById('dateBtn').addEventListener('click', function () {
//   const now = new Date();
//   document.getElementById(
//     'output'
//   ).textContent = `Поточна дата та час: ${now.toString()}`;
//   console.log(`Поточна дата та час: ${now.toString()}`);
// });

// const date = new Date();

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// const date = new Date('2030-03-16');
// console.log(date); // "Sat Mar 16 2030 00:00:00 GMT+0200"

// const date = new Date('2030-03-16T14:25:00');
// console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// console.log(new Date('2030')); // "Tue Jan 01 2030 02:00:00 GMT+0200"
// console.log(new Date('2030-03')); // "Fri Mar 01 2030 02:00:00 GMT+0200"
// console.log(new Date('2030-03-16')); // "Sat Mar 16 2030 02:00:00 GMT+0200"
// console.log(new Date('2030-03-16T14:25:00')); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// const date = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200 "

// console.log(new Date(0));
// // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

// console.log(new Date(15000));
// // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"

// const date = new Date();
// console.log(date.getTime()); // 1624021654154

// const time = Date.now(); // 1693237207904
// console.log(time);

// const startTime = Date.now();

// // Твій код, виконуваний упродовж деякого часу
// for (let i = 0; i <= 100; i += 1) {
//   console.log(i);
// }

// const endTime = Date.now();
// const elapsedTime = endTime - startTime;

// console.log(`Elapsed time: ${elapsedTime} ms`);

// const date = new Date('March 16, 2030 14:25:00');
// console.log('Date: ', date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// // Повертає день місяця від 1 до 31
// console.log('Day: ', date.getDate()); // 16

// // Повертає день тижня від 0 до 6, починається з неділі
// console.log('Day of the week: ', date.getDay()); // 6

// // Повертає місяць від 0 до 11
// console.log('Month: ', date.getMonth()); // 2

// // Повертає рік з 4 цифр
// console.log('Full year: ', date.getFullYear()); // 2030

// // Повертає години
// console.log('Hours: ', date.getHours()); // 14

// // Повертає хвилини
// console.log('Minutes: ', date.getMinutes()); // 25

// // Повертає секунди
// console.log('Seconds: ', date.getSeconds()); // 0

// // Повертає мілісекунди
// console.log('Milliseconds: ', date.getMilliseconds()); // 0

// -----------------------PROMISE-------------------------

// // Створюємо змінну, яка визначає успіх чи невдачу промісу
// const isSuccess = true;

// // Додаємо подію на кнопку
// document.getElementById('startPromise').addEventListener('click', () => {
//   // Створюємо новий проміс
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Якщо успішно, викликаємо resolve
//       if (isSuccess) {
//         resolve('Success! Value passed to resolve function');
//       } else {
//         // Якщо помилка, викликаємо reject
//         reject('Error! Error passed to reject function');
//       }
//     }, 2000); // 2 секунди затримки
//   });

//   // Виводимо початковий стан промісу
//   console.log('Initial promise state:', promise);

//   // Через 3 секунди виводимо стан промісу
//   setTimeout(() => {
//     console.log('Final promise state:', promise);
//   }, 3000); // Чекаємо трохи більше за завершення промісу, щоб побачити фінальний стан
// });

// ----------------------THEN----------------------

// // Змінна для визначення успішного або помилкового завершення
// const isSuccess = true;

// // Функція, що створює та обробляє проміс
// const handlePromise = () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isSuccess) {
//         resolve('Success! Value passed to resolve function');
//       } else {
//         reject('Error! Error passed to reject function');
//       }
//     }, 2000);
//   });

//   // Обробка промісу
//   promise.then(
//     value => {
//       console.log(value); // Успішне завершення
//     },
//     error => {
//       console.log(error); // Завершення з помилкою
//     }
//   );

//   console.log('Promise created and pending...');
// };

// // Вішаємо обробник на кнопку
// const button = document.getElementById('testButton');
// button.addEventListener('click', handlePromise);

// -----------------------Промісифікація---------------
// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true; // Змінюючи значення, можна імітувати успішний запит чи помилку

//       if (isSuccess) {
//         resolve('Успішно отримано дані для ' + username); // Значенням параметра resolve буде колбек-функція методу then()
//       } else {
//         reject('Помилка при отриманні даних'); // Значенням параметра reject буде колбек-функція методу catch()
//       }
//     }, 2000); // Затримка 2 секунди для імітації асинхронного запиту
//   });
// };

// document.getElementById('fetchUserButton').addEventListener('click', () => {
//   fetchUserFromServer('Mango')
//     .then(user => console.log(user)) // Виконано, якщо проміс успішний
//     .catch(error => console.error(error)); // Виконано, якщо проміс завершився з помилкою
// });

// // Функція, яка повертає проміс
// function fetchUserData(username) {
//   console.log(`Fetching data for ${username}`);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isSuccess = true; // Імітуємо успішний запит

//       if (isSuccess) {
//         resolve('User data for ' + username); // Розв'язуємо проміс з результатом
//       } else {
//         reject('Error fetching data'); // Відхиляємо проміс з помилкою
//       }
//     }, 2000);
//   });
// }

// // Додаємо обробник події на кнопку
// document.getElementById('fetchData').addEventListener('click', () => {
//   fetchUserData('Mango')
//     .then(data => {
//       document.getElementById('result').innerText = data; // Виводимо дані
//       console.log(data);
//     })
//     .catch(error => {
//       document.getElementById('result').innerText = error; // Виводимо помилку
//       console.error(error);
//     });
// });

// const makePromise = ({ value, delay, shouldResolve = true }) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });
// };

// document.getElementById('runPromises').addEventListener('click', () => {
//   // Clear previous results
//   document.getElementById('result').innerHTML = '';

//   makePromise({ value: 'A', delay: 1000 })
//     .then(value => {
//       console.log(value); // "A"
//       document.getElementById(
//         'result'
//       ).innerHTML += `<p>Resolved: ${value}</p>`;
//     })
//     .catch(error => {
//       console.log(error);
//       document.getElementById(
//         'result'
//       ).innerHTML += `<p>Rejected: ${error}</p>`;
//     });

//   makePromise({ value: 'B', delay: 3000 })
//     .then(value => {
//       console.log(value); // "B"
//       document.getElementById(
//         'result'
//       ).innerHTML += `<p>Resolved: ${value}</p>`;
//     })
//     .catch(error => {
//       console.log(error);
//       document.getElementById(
//         'result'
//       ).innerHTML += `<p>Rejected: ${error}</p>`;
//     });

//   makePromise({ value: 'C', delay: 2000, shouldResolve: false })
//     .then(value => {
//       console.log(value);
//       document.getElementById(
//         'result'
//       ).innerHTML += `<p>Resolved: ${value}</p>`;
//     })
//     .catch(error => {
//       console.log(error); // "C"
//       document.getElementById(
//         'result'
//       ).innerHTML += `<p>Rejected: ${error}</p>`;
//     });
// });

// ----------------PROMICE ALL---------------------------

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
// 	.then(values => console.log(values)); // [1, 2, 3]
// 	.catch(error => console.log(error));

// const options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
// };

// console.log(new Date().toLocaleDateString('uk-UA', options));

// setTimeout(() => {}, 2000);

// -------------------------11 МОДУЛЬ HTTP ЗАПИТИ-------------------

// // Функція, яка повертає новий проміс
// const loadData = () => {
//   return new Promise((resolve, reject) => {
//     // Створюємо новий проміс
//     console.log('Початок асинхронної операції (симуляція запиту на сервер)');

//     // Симуляція асинхронної дії за допомогою setTimeout
//     setTimeout(() => {
//       const isSuccess = true; // Визначаємо успіх операції

//       // Якщо операція успішна, викликаємо resolve
//       if (isSuccess) {
//         resolve('Data successfully loaded!'); // Передаємо значення успішного виконання
//       } else {
//         reject('Error: Failed to load data.'); // Передаємо помилку в разі невдачі
//       }
//     }, 2000); // Затримка в 2000 мілісекунд (2 секунди)
//   });
// };

// // Додаємо обробник події для кнопки
// document.getElementById('loadData').addEventListener('click', () => {
//   // Викликаємо функцію loadData, яка повертає проміс
//   loadData()
//     .then(response => {
//       // Метод then обробляє успішне завершення промісу
//       // Перший параметр then - це функція, яка отримує значення з resolve
//       console.log(response); // Виводимо успішне повідомлення в консоль
//     })
//     .catch(error => {
//       // Метод catch обробляє помилки, якщо проміс був відхилений
//       // catch отримує значення з reject
//       console.error(error); // Виводимо помилку в консоль
//     });
// });

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     // Response handling
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });

// document.getElementById('fetchData').addEventListener('click', () => {
//   // Відправляємо асинхронний запит на сервер
//   fetch('https://jsonplaceholder.typicode.com/posts/1') // Запит до тестового API
//     .then(response => response.json()) // Перетворення відповіді в JSON
//     .then(data => console.log(data)) // Виводимо отримані дані в консоль
//     .catch(error => console.error('Error fetching data:', error));
// });

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//     console.log(data);
//   })
//   .catch(error => {
//     // Error handling
//     console.log(error);
//   });

// const options = {
//   method: 'GET',
// };

// fetch('https://jsonplaceholder.typicode.com/users', options)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });

// const fetchUsersBtn = document.querySelector('.btn');

// fetchUsersBtn.addEventListener('click', () => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(users => {
//       // Дані від бекенда
//       console.log(users);
//     })
//     .catch(error => console.log(error));
// });

// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(users => {
//       const markup = users
//         .map(user => {
//           return `<li>
// 	          <p><b>Name</b>: ${user.name}</p>
// 	          <p><b>Email</b>: ${user.email}</p>
// 	          <p><b>Company</b>: ${user.company.name}</p>
// 	        </li>`;
//         })
//         .join('');

//       userList.insertAdjacentHTML('beforeend', markup);
//     })
//     .catch(error => console.log(error));
// });

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(posts => console.log(posts))
//   .catch(error => console.log(error));

// Change this number to fetch different post
// const postId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// --------------------METOD POST-----------------

// const postToAdd = {
//   title: 'CRUD',
//   body: 'CRUD is awesome!',
// };

// const options = {
//   method: 'POST',
//   body: JSON.stringify(postToAdd),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// Припустимо, у нас є BASE_URL і API_KEY
// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '46177713-58a5ba69e9c8cb46785531260'; // Заміни це на свій ключ API

// // Функція для отримання зображень
// function fetchImages(params) {
//   const urlParams = new URLSearchParams(params);

//   return fetch(`${BASE_URL}?key=${API_KEY}&${urlParams}`).then(response => {
//     if (!response.ok) {
//       throw new Error('Помилка при отриманні зображень');
//     }
//     return response.json();
//   });
// }

// // Вибір елемента для відображення зображень
// const imagesBoxEl = document.querySelector('.js-images');
// const params = {
//   q: 'pug', // Пошуковий запит
//   image_type: 'photo', // Тип зображення
//   orientation: 'horizontal', // Орієнтація зображення
//   per_page: 30, // Кількість зображень на сторінці
// };

// // Виклик функції для отримання зображень
// fetchImages(params)
//   .then(data => {
//     const { hits } = data; // Отримуємо масив зображень з відповіді
//     // Генеруємо HTML для кожного зображення
//     const imagesMarkup = hits.reduce((acc, item) => {
//       return (acc += `<article><img src="${item.previewURL}" alt="${item.tags}" /></article>`);
//     }, '');

//     // Додаємо згенерований HTML в контейнер
//     imagesBoxEl.innerHTML = imagesMarkup;
//   })
//   .catch(e => console.log(e)); // Лог помилки, якщо вона виникла

// ------------------team proj---------------

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.header-mobile-menu-container');
const closeButton = document.querySelector('.header-mobile-menu-close');

// Відкриваємо меню
menuToggle.addEventListener('click', () => {
  nav.style.display = 'flex'; // Відображаємо мобільне меню
});

// Закриваємо меню
closeButton.addEventListener('click', () => {
  nav.style.display = 'none'; // Сховати мобільне меню
});

// Закриваємо меню після вибору пункту
document.querySelectorAll('.header-mobile-list a').forEach(link => {
  link.addEventListener('click', () => {
    nav.style.display = 'none'; // Сховати мобільне меню
  });
});
