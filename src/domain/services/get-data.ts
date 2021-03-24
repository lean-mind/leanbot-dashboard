import ApiCalls from "../../utils/axios"

const apiCalls = new ApiCalls()

export const getCoffeeBreaks = async () => {
  return await apiCalls.getCoffeeBreaks()
}

export const getGratitudeMessages = async (user: string) => {
  return await apiCalls.getUserGratitudeMessages(user)
}

export const getUserCoffeeBreaks = async (user: string): Promise<number> => {
  const userCoffeeBreaks = await apiCalls.getUserCoffeeBreaks(user)
  return userCoffeeBreaks.length
}

export const getUserGivenGratitudeMsgs = async (user: string): Promise<number> => {
  const userGratitudeMessages = await apiCalls.getUserGratitudeMessages(user)
  return userGratitudeMessages.filter((message: any) => message.sender.id === user).length
}

export const getUserReceivedGratitudeMsgs = async (user: string): Promise<number> => {
  const userGratitudeMessages = await apiCalls.getUserGratitudeMessages(user)
  return userGratitudeMessages.filter((message: any) => message.recipient.id === user).length
}

export const getInteractions = async (user: string): Promise<string> => {
  const userGratitudeMessages = await apiCalls.getUserGratitudeMessages(user)
  const userCoffeeBreaks = await apiCalls.getUserCoffeeBreaks(user)

  const interactedUserList = userGratitudeMessages
                              .concat(userCoffeeBreaks)
                              .map(getInvolvedUsers)
                              .flat()
                              .filter((element: string) => element !== user)
  
  const userInteractionCounts = {}
  interactedUserList.forEach((user: string) => {
    const noUserCount = !userInteractionCounts[user]
    if (noUserCount) {
      userInteractionCounts[user] = 0
    } 
    userInteractionCounts[user]++
  })
  const maxInteractionsUserId = Object.keys(userInteractionCounts)
                                  .reduce((a, b) => {
                                    return userInteractionCounts[a] > userInteractionCounts[b] ? a : b
                                  })
  // Get name del usuario que se devuelve
  return maxInteractionsUserId 
}

const getInvolvedUsers = (element: any): Array<string>  => {
  return [element.sender.id, element.recipient.id]  
}