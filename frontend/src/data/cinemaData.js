const cinemaData = {
  inputData: {
    kodKinoteatyr: 'Код на кинотеатър',
    nazvanieKinoteatyr: 'Название на кинотеатър',
    adresKinoteatyr: 'Адрес на кинотеатър',
    kategoriqKinoteatyr: 'Категория на кинотеатър',
    imeDirektor: 'Име на директор',
    kinorazpredelitel: 'Киноразпределител'
  },
  formData: [
    {
      id: 'nazvanieKinoteatyr',
      label: 'Название на кинотеатър',
      placeHolder: 'Въведи име на кинотеатър'
    }, {
      id: 'adresKinoteatyr',
      label: 'Адрес на кинотеатър',
      placeHolder: 'Въведи адрес на кинотеатър'
    }, {
      id: 'kategoriqKinoteatyr',
      label: 'Категория на кинотеатър',
      placeHolder: 'Въведи категория на кинотеатър'
    }, {
      id: 'imeDirektor',
      label: 'Име на директор',
      placeHolder: 'Въведи име на директор'
    }, {
      id: 'kinorazpredelitel',
      label: 'Име на киноразпределител',
      placeHolder: 'Въведи име на киноразпределител'
    }
  ]
};

module.exports = cinemaData;
