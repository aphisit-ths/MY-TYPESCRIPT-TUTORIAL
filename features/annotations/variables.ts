let apples: number = 5;
let speed: string = 'fast';
let isName: boolean = true;

let nothing: null = null;

// nothing = '555';

let undif: undefined = undefined;

//Array
let colors: number[] = [6, 1, 2, 3];

//Classes
class Car {}

let car: Car = new Car();

//Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

interface IPoint {
  x: number;
  y: number;
}

let pointWithInterface: IPoint = {
  x: 10,
  y: 20,
};

//function

// const logNumber: (i: number) <- บอก fn ว่าเราต้องการอะไร และ จะ return  => void = (i: number) => {...}

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
