import ApiCalls from "../../utils/axios"

const apiCalls = new ApiCalls()

export const verifyAuthToken= async (token: string) => {
  return await apiCalls.verifyAuthToken(token)
}