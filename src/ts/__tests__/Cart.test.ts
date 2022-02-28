import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

test('mathSum func work', () => {
  const cart = new Cart();
  
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  const expected = 2900;
  const received = cart.mathSum();
  
  expect(received).toBe(expected)
});

test ('mathSumWithDiscont sum work', () => {
  const cart = new Cart();
  
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  const expected = 2610;
  const received = cart.mathSumWithDiscont(10);

  expect(received).toBe(expected)
})