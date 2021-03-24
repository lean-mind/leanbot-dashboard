import axios from "axios"
import { Endpoints } from "./endpoints"

const getData = (response: any) => response.data

export default class ApiCalls {
  async getCoffeeBreaks() {
    return await axios.get(Endpoints.coffeeBreaks).then(getData)
  }

  async getUserCoffeeBreaks(user: string) {
    return await axios.get(Endpoints.coffeeBreaks, {
      params: {
        userId: user
      }
    }).then(getData)
  }

  async getGratitudeMessages() {
    return await axios.get(Endpoints.gratitudeMessages).then(getData)
  }

  async getUserGratitudeMessages(user: string) {
    return await axios.get(Endpoints.gratitudeMessages, {
      params: {
        userId: user
      }
    }).then(getData)
  }

}