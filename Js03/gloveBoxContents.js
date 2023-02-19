const myStorage = {
  car: {
    inside: {
      'gloveBox': 'maps',
      'passengerSeat': 'crumbs',
    },
    outside: {
      trunk: 'jack',
    },
  },
};
const gloveBoxContents = myStorage.car.inside.gloveBox;
console.log(gloveBoxContents);