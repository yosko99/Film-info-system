exports.searchData = [
  {
    id: 'filmUnder',
    text: 'филми под',
    category: 'филм',
    query: 'SELECT nazvanieFilm FROM film WHERE kodFilm IN (SELECT kodFilm FROM projektira WHERE cenaBilet < ? )'
  },
  {
    id: 'filmHigher',
    text: 'филми над',
    category: 'филм',
    query: 'SELECT nazvanieFilm FROM film WHERE kodFilm IN (SELECT kodFilm FROM projektira WHERE cenaBilet > ? )'
  },
  {
    id: 'cinemaUnder',
    text: 'кино под',
    category: 'кино'
  },
  {
    id: 'cinemaHigher',
    text: 'кино над',
    category: 'кино'
  }
];
