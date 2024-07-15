/* eslint-disable ts/consistent-type-definitions */
export {};
console.log('Creating interfaces');

interface ButtonProps {
  text: string;
  onClick?: () => void;
}
const okButton: ButtonProps = {
  text: 'OK',
  onClick: () => console.log('OK Click!'),
};
console.log(okButton);
okButton.onClick?.();

const buyButton: ButtonProps = {
  text: 'Buy',
};
console.log(buyButton);

interface ColorButtonProps extends ButtonProps {
  color: string;
}
const greenBuyButton: ColorButtonProps = {
  text: 'Buy',
  color: 'Green',
  onClick: () => console.log('Buy'),
};
console.log(greenBuyButton);

interface ILog {
  (message: string): void;
}

const log: ILog = (message: string) => console.log(`message: ${message}`);
log('ILog interface');

interface MergedCar {
  brand: string;
  model: string;
  year: number;
}
interface MergedCar {
  id: number;
}
const car: MergedCar = {
  id: 1,
  brand: 'Toyota',
  model: 'Corona',
  year: 2000,
};
console.log(car);
