
function summa(a, b) {
  return a + b;
}

function erotus(a, b) {
  return a - b;
}

function tulo(a, b) {
  return a * b;
}

function osamaara(a, b) {
  return a / b;
}

// esim [5, '+', 5, '+', 5]

const rekursioV1 = t => {

  while (t.length > 1) {
                                    // jatketaan kunnes taulukossa t on vain yksi alkio
    let tulos
    if (t[1] === '+')               //katotaan mikä operaattori on taulukon ekan numeron jälkeen ja tallennetaan lasku tulos-muuttujaan
      tulos = summa(t[0], t[2])
    else if (t[1] === '*')
      tulos = tulo(t[0], t[2])
    else if (t[1] === '/')
      tulos = osamaara(t[0], t[2])
    else if (t[1] === '-')
      tulos = erotus(t[0], t[2])

    t.splice(0, 3, tulos)             // t-taulukon nollannesta alkiosta lähtien poistetaan 3 alkiota, eli 5 '+' 5 ja korvataan tulos-muuttujalla.
  }                                   // näin ollen ensimmäisen kierroksen jälkeen t=[10, '+', 5]. Tokan kierroksen jälkeen t=[15] ja kolmannella
                                      // kierroksella t.length === 1 on tosi ja funktio palauttaa taulukon ainoan arvon
  return t[0]
}

const rekursioV2 = t => {

  while (t.length > 1) {
    // jatketaan kunnes taulukossa t on vain yksi alkio
    if ((t[1] === '+' || t[1] === '-') && (t[3] === '*' || t[3] === '/')) {  //5 - 5 * 5 --> -5 * 5 + 5
      // 0 1 2 3 4

      let [eka, toka, ...kerto] = t.splice(0, 5)

      if (toka === '+')
        t = [...kerto, toka, eka, ...t]

      else if (toka === '-') {
        let [a, ...b] = kerto
        kerto = [-a, ...b]

        toka = '+'

        t = [...kerto, toka, eka, ...t]

      }
    }
    else {
      let tulos
      if (t[1] === '+')               //katotaan mikä operaattori on taulukon ekan numeron jälkeen ja tallennetaan lasku tulos-muuttujaan
        tulos = summa(t[0], t[2])
      else if (t[1] === '*')
        tulos = tulo(t[0], t[2])
      else if (t[1] === '/')
        tulos = osamaara(t[0], t[2])
      else if (t[1] === '-')
        tulos = erotus(t[0], t[2])

      t.splice(0, 3, tulos)             // t-taulukon nollannesta alkiosta lähtien poistetaan 3 alkiota, eli 5 '+' 5 ja korvataan tulos-muuttujalla.
    }
  }                            // näin ollen ensimmäisen kierroksen jälkeen t=[10, '+', 5]. Tokan kierroksen jälkeen t=[15] ja kolmannella
  // kierroksella t.length === 1 on tosi ja funktio palauttaa taulukon ainoan arvon
  return t[0]
}


const t1 = [5, '+', 6, '*', 7, '+', 3, '+', 7, '-', 7, '/', 8, '*', 3, '/', 5, '-', 3, '*', 100]
const t2 = [5, '+', 6, '*', 7, '+', 3, '+', 7, '-', 7, '/', 8, '+', 3, '/', 5, '-', 3, '*', 100]


console.log(rekursioV1(t1))
console.log(rekursioV2(t2))