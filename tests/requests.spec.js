import { describe, expect, test } from 'vitest'
import {fetchUsers} from '../src/requests/index'


describe('fetchUsers', () => {
  test('should return with 10 users', async () => {
    const result = await fetchUsers()
    expect(result.length).toBe(10)
  })
  
  test('should return users with only requested properties', async () => {
    const params = ['phone']
    const result = await fetchUsers(1, params )
    const [user]= result
    expect(user.phone).toBeDefined();
    expect(user.name).toBeUndefined()
  })
})


