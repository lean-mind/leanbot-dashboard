import axios from "axios"
import { Endpoints } from "./endpoints"

const getData = (response: any) => response.data

export default class ApiCalls {
  async getCoffeeBreaks() {
    return await axios.get(Endpoints.coffeeBreaks).then(getData)
  }

  async getUserCoffeeBreaks(id: string) {
    return await axios.get(Endpoints.coffeeBreaks, {
      params: {
        userId: id
      }
    }).then(getData)
  }

  async getGratitudeMessages() {
    return await axios.get(Endpoints.gratitudeMessages).then(getData)
  }

  async getUserGratitudeMessages(id: string) {
    return await axios.get(Endpoints.gratitudeMessages, {
      params: {
        userId: id
      }
    }).then(getData)
  }

  async getUserName(id: string) {
    return await axios.get(`${Endpoints.userInfo}/${id}`).then((response: any) => response.data.name)
  }

  async verifyAuthToken(token: string) {
    return await axios.post(Endpoints.auth, {},{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }

  async verifySignUpTokens(token: string, id: string) {
    return await axios.post(Endpoints.signUp, {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: {
        id
      }
    })
  }
}