import { expect, test } from 'vitest'
import {fetchUsers} from '../src/requests/index'

test('sanity check', () => {
  expect(Math.sqrt(4)).toBe(2)
})

test('fetchUsers should return with 10 users', async () => {
  const result = await fetchUsers()
  expect(result.length).toBe(10)
})


