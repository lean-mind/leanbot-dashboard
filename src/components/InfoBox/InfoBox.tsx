import React from "react";
import "./InfoBox.scss" 
interface InfoBoxParams {
  text: string,
  data: number | string
}

export const InfoBox: React.FC<InfoBoxParams> = ({ text, data }) => {
  return (
    <div className="InfoBox">
      <div className="title">{ text }</div>
      <div className="figure">{ data }</div>
    </div>
  )
}