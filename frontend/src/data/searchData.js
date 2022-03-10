exports.searchData = [
  {
    id: 'nazvanieFilm',
    rowText: 'Название на филм',
    text: 'филми под',
    query: 'SELECT nazvanieFilm FROM film WHERE kodFilm IN (SELECT kodFilm FROM projektira WHERE cenaBilet < ? )'
  },
  {
    id: 'nazwanieFilm',
    rowText: 'Название на филм',
    text: 'филми над',
    query: 'SELECT nazvanieFilm FROM film WHERE kodFilm IN (SELECT kodFilm FROM projektira WHERE cenaBilet > ? )'
  },
  {
    id: 'nazvanieKinoteatyr',
    rowText: 'Название на кинотеатър',
    text: 'кино под'
  },
  {
    id: 'nazvanieKinoteatyr',
    rowText: 'Название на кинотеатър',
    text: 'кино над'
  }
];
