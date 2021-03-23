import React from "react";
import { DashboardContainer, SideNavBar } from "../../components";
import "./Dashboard.scss"

export const Dashboard: React.FC<{}> = () => {
  return (
    <div className="Dashboard">
      <SideNavBar/>
      <DashboardContainer/>
    </div>
  );
}
