// // "use strict";

// // const btn = document.querySelector('.btn-country');
// // const countriesContainer = document.querySelector('.countries');

// // const getCountryData = function(country){ 
// // const request = new XMLHttpRequest();
// // request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
// // request.send();
// // // console.log(request.responseText);

// // request.addEventListener("load", function () {
// //   // console.log(this.responseText);

// //   const [data] = JSON.parse(this.responseText);
// //   console.log(data);

// //   const html = ` 
// //             <article class="country">
// //             <img class="country__img" src="${data.flag}" />
// //             <div class="country__data">
// //             <h3 class="country__name">${data.name}</h3>
// //             <h4 class="country__region">${data.region}</h4>
// //             <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
// //             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// //             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// //             </div>
// //             </article>
// // `;
// //     countriesContainer.insertAdjacentHTML('beforeend',html);
// //     countriesContainer.style.opacity = 1;
// // });
// // }
// // btn.addEventListener('click', function() {
// //     getCountryData('portugal');
// //     getCountryData('usa');
// //     getCountryData('india');
// //     getCountryData('austria')
    
// // });

// // The Event Loop in Practice
// // console.log('Test start');
// // setTimeout(() => console.log('0 sec timer'), 0);
// // Promise.resolve('Resolved promise 1').then(res => console.log(res));
// // Promise.resolve('Resolved promise 2').then(res => {
// //   for (let i = 0; i < 1000000000; i++) {}
// //   console.log(res);
// // });
// // console.log('Test end');


// // Promise.resolve('abc').then(x => console.log(x));
// // Promise.reject(new Error('Problem!')).catch(x => console.error(x));

// //coding Challenge 2


// // const wait = function (seconds) {
// //     return new Promise(function (resolve) {
// //       setTimeout(resolve, seconds * 1000);
// //     });
// //   };
// //   const imgContainer = document.querySelector('.images');
// //   const createImage = function (imgPath) {
// //     return new Promise(function (resolve, reject) {
// //       const img = document.createElement('img');
// //       img.src = imgPath;
// //       img.addEventListener('load', function () {
// //         imgContainer.append(img);
// //         resolve(img);
// //       });
// //       img.addEventListener('error', function () {
// //         reject(new Error('Image not found'));
// //       });
// //     });
// //   };
// //   let currentImg;
// //   createImage('img/img-1.jpg')
// //     .then(img => {
// //       currentImg = img;
// //       console.log('Image 1 loaded');
// //       return wait(2);
// //     })
// //     .then(() => {
// //       currentImg.style.display = 'none';
// //       return createImage('img/img-2.jpg');
// //     })
// //     .then(img => {
// //       currentImg = img;
// //       console.log('Image 2 loaded');
// //       return wait(2);
// //     })
// //     .then(() => {
// //       currentImg.style.display = 'none';
// //     })
// //     .catch(err => console.error(err));

// // const btn = document.querySelector('.btn-country');
// // const countriesContainer = document.querySelector('.countries');

// // const renderCountry = function (data, className = '') {
// //     const html = `
// //     <article class="country ${className}">
// //     <img class="country__img" src="${data.flag}" />
// //       <div class="country__data">
// //         <h3 class="country__name">${data.name}</h3>
// //         <h4 class="country__region">${data.region}</h4>
// //         <p class="country__row"><span>👫</span>${(
// //           +data.population / 1000000
// //         ).toFixed(1)} people</p>
// //         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// //         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// //       </div>
// //     </article>
// //     `;
// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   };

// // const getPosition = function () {
// //     return new Promise(function (resolve, reject) {
// //       navigator.geolocation.getCurrentPosition(resolve, reject);
// //     });
// //   };
// //   // getPosition().then(pos => console.log(pos));
  

// // //   latitude  longitude

// // // 46.34176"
// // // longt: "6.88673"
// // const whereAmI = async function () {
// //     try {
// //       // Geolocation
// //       const pos = await getPosition();
// //       const { 46.34176: lat, 6.88673 : lng } = pos.coords;
// //       // Reverse geocoding
// //       const resGeo = await fetch(`https://geocode.xyz/${46.34176},${6.88673}?geoit=json`);
// //       if (!resGeo.ok) throw new Error('Problem getting location data');
// //       const dataGeo = await resGeo.json();
// //       console.log(dataGeo);

// //       // Country data
// //       const res = await fetch(
// //         `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
// //       );
      
// //       // BUG in video:
// //       if (!resGeo.ok) throw new Error('Problem getting country');
      
// //       // FIX:
// //       if (!res.ok) throw new Error('Problem getting country');
// //       const data = await res.json();
// //       console.log(data);
// //       renderCountry(data[0]);
// //     } catch (err) {
// //       console.error(`${err} 💥`);
// //       renderError(`💥 ${err.message}`);
// //     }
// //   };
// //   whereAmI();
// // //   whereAmI();
// // //   whereAmI();
// //   console.log('FIRST');

// ///////////////////////////////////////
// // Running Promises in Parallel

// // const getJSON = function (url, errorMsg = 'Something went wrong') {
// //     return fetch(url).then(response => {
// //       if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
  
// //       return response.json();
// //     });
// //   };
// // const get3Countries = async function (c1, c2, c3) {
// //     try {
// //       // const [data1] = await getJSON(
// //       //   `https://restcountries.eu/rest/v2/name/${c1}`
// //       // );
// //       // const [data2] = await getJSON(
// //       //   `https://restcountries.eu/rest/v2/name/${c2}`
// //       // );
// //       // const [data3] = await getJSON(
// //       //   `https://restcountries.eu/rest/v2/name/${c3}`
// //       // );
// //       // console.log([data1.capital, data2.capital, data3.capital]);
// //       const data = await Promise.all([
// //         getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
// //         getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
// //         getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
// //       ]);
// //       console.log(data.map(d => d[0].capital));
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };
// //   get3Countries('portugal', 'canada', 'tanzania');

// //   Promise.any([
// //     Promise.reject('Success'),
// //     Promise.resolve('ERROR'),
// //     Promise.resolve('Another success'),
// //   ])
// //     .then(res => console.log(res))
// //     .catch(err => console.error(err));
  

// // coding Challenge 3

// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//       setTimeout(resolve, seconds * 1000);
//     });
//   };
//   const imgContainer = document.querySelector('.images');
//   const createImage = function (imgPath) {
//     return new Promise(function (resolve, reject) {
//       const img = document.createElement('img');
//       img.src = imgPath;
//       img.addEventListener('load', function () {
//         imgContainer.append(img);
//         resolve(img);
//       });
//       img.addEventListener('error', function () {
//         reject(new Error('Image not found'));
//       });
//     });
//   };
//   let currentImg;
  
//   // PART 1
//   const loadNPause = async function () {
//     try {
//       // Load image 1
//       let img = await createImage('img/img-1.jpg');
//       console.log('Image 1 loaded');
//       await wait(2);
//       img.style.display = 'none';
//       // Load image 1
//       img = await createImage('img/img-2.jpg');
//       console.log('Image 2 loaded');
//       await wait(2);
//       img.style.display = 'none';
//     } catch (err) {
//       console.error(err);
//     }
//   };
// //   loadNPause();
//   // PART 2
//   const loadAll = async function (imgArr) {
//     try {
//       const imgs = imgArr.map(async img => await createImage(img));
//       const imgsEl = await Promise.all(imgs);
//       console.log(imgsEl);
//       imgsEl.forEach(img => img.classList.add('parallel'));
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
  

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
    // Never to this!
    // this.calcAge = function () {
    //   console.log(2037 - this.birthYear);
    // };
  };

console.log(firstName.prototype);