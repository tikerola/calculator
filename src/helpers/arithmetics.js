//peruslaskutoimitukset
//saa syötteeksi talukon

//let valimuisti = 0;
let eka = 0;
let toka = 0;
let lasku;
let vastaus = 0;

//aluksi taulukossa on vain kolme alkiota, mutta sehän tulee kasvamaan kun laksutoimitusta
//jatketaan, ellei sitten keksi parempaa
console.log('Laskemista komentorivillä');

let t = [];
function laskuri( t ) {
    console.log('Siirretään taulukon arvot muuttujiin');
    eka = t[0];
    console.log('Muuttujassa eka on: ', eka);
    toka = t[2];
    console.log('Muuttujassa toka on: ', toka);
    //lasku: +, -, x, /
    lasku = t[1];
    console.log('Muuttujassa lasku on: ', lasku);

    if (lasku === '+') vastaus = summa(eka, toka);
    if (lasku === '-') vastaus = erotus(eka, toka);
    if (lasku === 'x') vastaus = tulo(eka, toka);
    if (lasku === '/') vastaus = osamaara(eka, toka);
}//laskuri

//Siis idea on että apufunktioita kutsutaan tarpeen mukaan, ja valimuistiin laitetaan
//vastaus muistiin, uuden laskun tulos lasketaan vastaukseen ja näiden välillä tehtään 
//sitten lasku, joka halutaan.
//iffeihin lisätään priorisointi
//TAI: odotetaan käyttäjältä joko = tai seuraavaa laskua (+ jne) ja toimitaan sitten
//eli laitetaan pitkä taulukko

//apufunktiot
function summa ( a, b ) {
    return a + b;
    console.log('Lukujen ', a, 'ja ', b, 'summa on: ', vastaus);
}

function erotus ( a, b ) {
    return a - b;
    console.log('Lukujen ', a, 'ja ', b, 'erotus on: ', vastaus);
}

//x (tulo)
function tulo ( a, b ) {
    return a * b;
    console.log('Lukujen ', a, 'ja ', b, 'tulo on: ', vastaus);
}

// (osamäärä) lasku
function osamaara ( a, b ){
   return a / b;
   console.log('Lukujen ', a, 'ja ', b, 'osamäärä on: ', vastaus);
}