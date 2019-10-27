//peruslaskutoimitukset

//+ (summa)
//muuttujaan tulos summataan for lausekkeessa jokainen taulukon luvun alkio
function summa ( luvut[] ) {
    let tulos;
        for (let luku of tulos) {
            tulos += luku;
        }
    return tulos;
}

//- (erotus) JÄRKEILY ON KESKEN ELI TÄMÄ MUUTTUU!!!!!
//Siis taulukon ensimmäisestä vähennetään jokaisella kierroksella seuraava
// joka jää tulokseen, josta taas
//vähennetään seuraava
function erotus ( luvut[] ) {
    let tulos = luvut[0]; //tästä vähennetään taulukon seuraavat luvut
    //kiepin pitää alkaa taulukon [1]:stä eteenpäin
    for (let luku of luvut) {
        tulos -= luku
    }
    return tulos;
}

//x (tulo)
//taulukon [0] kerrotaan ensin yhdellä (joka on valmiina tulos muuttujassa)
//sitten taulukon [1] x muuttujan tulo arvolla joka on [0]x[1] jne taulukon loppuun) 
function tulo ( luvut[] ) {
    let tulos = 1;
    for ( let luku of luvut) {
        tulos *= luku;
    }

}return tulos;

// (osamäärä) lasku
function osamaara ( eka, toka) {
    let tulos = eka / toka;
    return tulos;
}