//peruslaskutoimitukset
//saa syötteeksi talukon?? niin mä ymmärsin :)
//MITEN SE TOIMII, SE SYÖTE? KUN PAINELEE PITEMMÄN LASKUTOIMITUKSEN??
//Onko sulla mitään ideoita????

let valimuisti = 0;
let eka = 0;
let toka = 0;
let lasku;
let vastaus = 0;
let uusiLasku;
let c = 0;

//aluksi taulukossa on vain kolme alkiota, mutta sehän tulee kasvamaan kun laksutoimitusta
//jatketaan, ellei sitten keksi parempaa
console.log('Laskemista komentorivillä');


// let t = [];
export function laskuri( t ) {
    console.log('Siirretään taulukon arvot muuttujiin');
    eka = t[0];
    console.log('Muuttujassa eka on: ', eka);
    toka = t[2];
    console.log('Muuttujassa toka on: ', toka);
    //lasku: +, -, x, /
    lasku = t[1];
    console.log('Muuttujassa lasku on: ', lasku);

//eli kaksi numeroo menis tähän
    if (lasku === '+') vastaus = summa(eka, toka);
    if (lasku === '-') vastaus = erotus(eka, toka);
    if (lasku === 'x') vastaus = tulo(eka, toka);
    if (lasku === '/') vastaus = osamaara(eka, toka);

    return vastaus;
}//laskuri

//laskujärjestys luetaan JÄLLEEN SYÖTE. Ja käytetään muuttujaa lasku, jossa on edellinen
//JA uusiLasku johon luetaan uusin lasku
//ajattelin sillee, että koko homma menis johonkin luuppii ja sieltä vois kokeila näitä tarpeen 
//mukaan
function jatko(uusilasku, c) {
    //tulo
    if ( uusilasku === 'x' || uusiLasku === '/' ) {
    valimuisti = vastaus;
    //varmuuden vuoksi, ei ehkä oikeesti tarvii nollaa?
    vastaus = 0;
        if (uusiLasku === 'x') {
            vastaus = tulo(valimuisti, c)
        }
        else {
            vastaus = osamaara(valimuisti, c);
        }
    if (uusiLasku === '+' || uusiLasku === '-' )
    //eli ei tee mitään!
    return;
    }
}//jatko

//apufunktiot
function summa ( a, b ) {
    console.log('Lukujen ', a, 'ja ', b, 'summa on: ', vastaus);
    return a + b;
}

function erotus ( a, b ) {
    console.log('Lukujen ', a, 'ja ', b, 'erotus on: ', vastaus);
    return a - b;
}

//x (tulo)
function tulo ( a, b ) {
    console.log('Lukujen ', a, 'ja ', b, 'tulo on: ', vastaus);
    return a * b;
}

// (osamäärä) lasku
function osamaara ( a, b ) {
    console.log('Lukujen ', a, 'ja ', b, 'osamäärä on: ', vastaus);
    return a / b;
}