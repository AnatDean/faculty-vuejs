import { expect, test } from 'vitest'
import {fetchUsers} from '../src/requests/index'



test('fetchUsers should return with 10 users', async () => {
  const result = await fetchUsers()
  expect(result.length).toBe(10)
})


