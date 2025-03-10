let temperature = 20;

// const humidity = 40;
let humidity = 40 as 40;
// const humidity = [40];

temperature = humidity;

// humidity = temperature;

humidity = 40;

// let x = 10 as 79; test

function add(a: number, b: number): number {
  if (Math.random() > 0.5) {
    return a + b;
  }
}

const result = add(10, 20);

result.toExponential();
