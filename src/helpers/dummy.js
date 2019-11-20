
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

const rekursio = t => {
  let tulos

  if (t.length === 1)       // jatketaan kunnes taulukossa t on vain yksi alkio
    return t[0]

  if (t[1] === '+')               //katotaan mikä operaattori on taulukon ekan numeron jälkeen ja tallennetaan lasku tulos-muuttujaan
    tulos = summa(t[0], t[2])
  else if (t[1] === '*')
    tulos = tulo(t[0], t[2])
  else if (t[1] === '/')
    tulos = osamaara(t[0], t[2])
  else if (t[1] === '-')
    tulos = erotus(t[0], t[2])

  t.splice(0, 3, tulos)    // t-taulukon nollannesta alkiosta lähtien poistetaan 3 alkiota, eli 5 '+' 5 ja korvataan tulos-muuttujalla.
                            // näin ollen ensimmäisen kierroksen jälkeen t=[10, '+', 5]. Tokan kierroksen jälkeen t=[15] ja kolmannella
                            // kierroksella t.length === 1 on tosi ja funktio palauttaa taulukon ainoan arvon
  return rekursio(t)
}






const t = [5, '+', 6, '*', 7, '+', 3, '+', 7, '-', 7, '/', 8, '*', 3, '/', 5, '-', 3, '*', 100]


console.log(rekursio(t))