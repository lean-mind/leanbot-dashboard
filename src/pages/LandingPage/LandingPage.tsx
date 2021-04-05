import { Link } from "react-router-dom"

export const LandingPage: React.FC<{}> = () => {
  return (
    <div className="LandingPage">
      <h1>Landing Page</h1>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}
