import { add } from '../services'

test('add', () => {
  expect(add(1, 2)).toEqual(3)
})
