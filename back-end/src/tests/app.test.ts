import request from 'supertest'
import app from '../app'

test('ping', async () => {
  const response = await request(app.callback()).get('/ping')
  expect(response.text).toBe('pong')
})
