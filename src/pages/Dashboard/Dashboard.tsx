import { SideNavBar } from "../../components/SideNavBar/SideNavBar"
import "./Dashboard.scss"

export const Dashboard: React.FC<{}> = () => {
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <SideNavBar/>
    </div>
  );
}
