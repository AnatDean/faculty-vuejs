import { test, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import UserList from '../UserList.vue'

test('sanity check', () => {
  expect(Math.sqrt(4)).toBe(2)
})

test('will extract useful info from user data', () => {
  const wrapper = shallowMount(UserList);
  const userObject = {
    gender:"female",
    name:{
       title:"Miss",
       first:"Catalina",
       last:"Serrano"
    },
    location:{
       street:{
          number:9473,
          name:"Calle de Tetuán"
       },
       city:"Cuenca",
       state:"Melilla",
       country:"Spain",
       postcode:36970,
       coordinates:{
          latitude:"-31.8352",
          longitude:"175.4237"
       },
       timezone:{
          offset:"+6:00",
          description:"Almaty, Dhaka, Colombo"
       }
    },
    email:"catalina.serrano@example.com",
    login:{
       uuid:"3e5cfa3d-47f4-4194-b9aa-29d2f9397a48",
       username:"purpledog612",
       password:"paragon",
       salt:"D8rgKt0J",
       md5:"2de0d2706066ebb0cc1eb314afa50968",
       sha1:"01c7cda986cc9570bcd060de7151fb66dc3d1fa7",
       sha256:"43f7d3dcedaee7ca7eb3f6aa610798ca10d8c0ef8f24fbb1fad22f84e376968b"
    },
    dob:{
       date:"1990-12-23T18:52:20.498Z",
       age:32
    },
    registered:{
       date:"2004-10-18T18:34:38.503Z",
       age:18
    },
    phone:"952-546-253",
    cell:"643-226-779",
    id:{
       name:"DNI",
       value:"96011938-L"
    },
    picture:{
       large:"https://randomuser.me/api/portraits/women/92.jpg",
       medium:"https://randomuser.me/api/portraits/med/women/92.jpg",
       thumbnail:"https://randomuser.me/api/portraits/thumb/women/92.jpg"
    },
    nat:"ES"
}

expect(wrapper.vm.extractUserInfo(userObject)).toEqual({ 
    email:"catalina.serrano@example.com", 
    firstName: 'Catalina',
    lastName: "Serrano",
    phone:"952-546-253",
    image: "https://randomuser.me/api/portraits/med/women/92.jpg"
  })
})