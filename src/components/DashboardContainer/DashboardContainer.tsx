import React, { useEffect, useState } from "react";
import { getInteractions, getUserCoffeeBreaks, getUserGivenGratitudeMsgs, getUserReceivedGratitudeMsgs } from "../../domain/services/get-data";
import { InfoBox } from "../InfoBox/InfoBox";
import './DashboardContainer.scss';

export const DashboardContainer: React.FC<{}> = () => {

  const [user] = useState("U01NCQLSQRZ")
  const [userCoffees, setUserCoffees] = useState<number>(0)
  const [userGivenGratitudeMsgs, setUserGivenGratitudeMsgs] = useState<number>(0)
  const [userReceivedGratitudeMsgs, setUserReceivedGratitudeMsgs] = useState<number>(0)
  const [mostInteractedWithUser, setMostInteractedWithUser ] = useState<string>("")

  useEffect(() => {
    getUserCoffeeBreaks(user).then(setUserCoffees)
    getUserGivenGratitudeMsgs(user).then(setUserGivenGratitudeMsgs)
    getUserReceivedGratitudeMsgs(user).then(setUserReceivedGratitudeMsgs)
    getInteractions(user).then(setMostInteractedWithUser)
  }, [user])
 
  return (
    <div className="DashboardContainer">
      <InfoBox text="Cafés compartidos" data={ userCoffees }/>
      <InfoBox text="Gracias dadas" data={ userGivenGratitudeMsgs }/>
      <InfoBox text="Gracias recibidas" data={ userReceivedGratitudeMsgs }/>
      <InfoBox text="Más interacciones con" data={ mostInteractedWithUser }/>
    </div>
  )
}