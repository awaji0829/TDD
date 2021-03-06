import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0 ', () => {
  render(<App />);
  //sreen object 를 이용해서 원하는 엘레멘트에 접근(접근할때 id로 )
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(0);
});
test('minus button has correc text', () => {
  render(<App />);
  //sreen object 를 이용해서 원하는 엘레멘트에 접근(접근할때 id로 )
  const minusButtonElement = screen.getByTestId('minus-button');
  expect(minusButtonElement).toHaveTextContent('-');
});
test('plus button has correc text', () => {
  render(<App />);
  //sreen object 를 이용해서 원하는 엘레멘트에 접근(접근할때 id로 )
  const plusButtonElement = screen.getByTestId('plus-button');
  expect(plusButtonElement).toHaveTextContent('+');
});
test('플러스버튼 누르면 1추가', () => {
  render(<App />);
  //sreen object 를 이용해서 원하는 엘레멘트에 접근(접근할때 id로 )
  const buttonElement = screen.getByTestId('plus-button');
  fireEvent.click(buttonElement);

  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(1);
});
test('마이너스 누르면 1추가', () => {
  render(<App />);
  //sreen object 를 이용해서 원하는 엘레멘트에 접근(접근할때 id로 )
  const buttonElement = screen.getByTestId('minus-button');
  fireEvent.click(buttonElement);

  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(-1);
});
test('온오프버튼 색깔 있니', () => {
  render(<App />);
  //sreen object 를 이용해서 원하는 엘레멘트에 접근(접근할때 id로 )

  const buttonElement = screen.getByTestId('on/off-button');

  // const buttonElement = screen.getByTestId('counter');
  expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });
});
test('온오프버튼 클릭했을때 +/- 버튼 비활', () => {
  render(<App />);

  const onOffButtonElement = screen.getByTestId('on/off-button');
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId('plus-button');

  expect(plusButtonElement).toBeDisabled();
});
