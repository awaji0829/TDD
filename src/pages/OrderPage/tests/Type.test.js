import { render } from '@testing-library/react';
import Type from '../Type';

test('서버에서 이미지 가져옴', async () => {
  render(<Type orderType='products' />);

  const productImages = await screen.findAllByRole('img', {
    name: /product$/i,
  });
  expect(productImages).toHaveLength(2);

  const altText = productImages.map((ele) => ele.alt);

  expect(altText).toEqual(['America product', 'England product']);
});
