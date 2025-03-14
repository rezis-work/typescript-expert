const myCar = {
  brand: "Ford",
  model: "Mustang",
  year: 2023,
};

let car: {
  brand: string;
  model: string;
  year: number;
} = myCar;

function printCar(car: { brand: string; model: string; year: number }) {
  // car.hi
  console.log(car.brand, car.model, car.year);
}

printCar({
  ...{
    brand: "Ford",
    model: "Mustang",
    year: 2023,
    color: "red",
  },
});

const phones: {
  mobile: {
    country: string;
    area: string;
    number: string;
  };
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
} = {
  home: {
    country: "+1",
    area: "202",
    number: "555-0111",
  },
  work: {
    country: "+995",
    area: "591",
    number: "012-345-6789",
  },
  mobile: {
    country: "+995",
    area: "591",
    number: "012-345-6789",
  },
};

phones.mobile;
phones["work"];

// const x: { [k: string]: string } = {};
// x.foo = "bar";
// x.boo = 17;

// const phones: {
//   [k: string]: {
//     country: string;
//     area: string;
//     number: string;
//   };
// }

const fileExtensions = ["js", "ts"];
// string[] Array<string>

// const twoDArray: string[][] = [
//   ["1", "2"],
//   ["3", "4"],
// ];

// const twoDArray2: Array<Array<string>> = [
//   ["1", "2"],
//   ["3", "4"],
// ];

// const twoDArray3: Array<Array<number>> = [
//   [1, 2],
//   [3, 4],
// ];
