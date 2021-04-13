import ApiCalls from "../../utils/axios"

const apiCalls = new ApiCalls()

export const verifyAuthToken = async (token: string) => {
  return await apiCalls.verifyAuthToken(token)
}

export const verifySignUpTokens = async (token: string, id: string) => {
  return await apiCalls.verifySignUpTokens(token, id)
}