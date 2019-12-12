//  kaip isnesti pranesima i konsole
console.log('labas rytas');
console.log('ka tu?');
console.log('nieko, o tu?');

//sudedamosios dalys:
// -kintamieji
// -funkcijos 
// - event'ai (listener'iai)

const bruk = '---------------------';
console.log(bruk);

// Kintamieji negali prasideti skaiciumi, arba zenklu (+-*/?!). Gali buti (_, $ )
// Kintamieji rasomi is mazosios raidies;
//Kintamieji su teksto tipo reiksmemis;
//kintamieji su saraso tipo reiksmemis, kuriuose yra is skaiciaus tipo, ir teksto tipo reiksmiu;
// Skaiciaus tipas
 const PI = 3.1415;
 console.log( PI );

 let amzius = 0;    //LEt kintamuoju gales naudotis visi, kas yra tam paciam kodo gylije arba gylaiu esantis. 
 console.log('mano amzius yra', amzius);
 amzius = 7;
 console.log('mano amzius yra', amzius);

 // Teksto tipas
 var vardas = 'Sergej';     // VAR kintamuoju gales naudotis visi
 console.log('cia mano vardas:', vardas);
 vardas = 'Sergejus';
 console.log('nuo dabar mano vardas:', vardas);

 // ARRAY - saraso tipas, masyvas
const pirminiaiSkaiciai = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ];
console.log(pirminiaiSkaiciai);

const a = 8;
const b = 'adsf';
const c = [5248, 85463];
const d = ['adjs', 'qwe', 'asdfg'];
const e = [54236, 'awqhd', 45, ' lojku'];
const f = [2, 'a', [1, 'dfr'], [a, b,] ];
console.log(f);


//VEIKSMAI SU KINTAMAISIAIS;

// const s1 = 15;
// const s2 = 33;
// const s3 = -18;
// const sum = s1 + s2 +s3;
// console.log(sum);

const s1 = 15;
const s2 = 33;
const s3 = -18;
const sum = s1 + s2 + 'a' + s3;
console.log(sum);





