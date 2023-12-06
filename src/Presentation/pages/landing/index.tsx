import { Welcome, Services, GetOnBoard } from "./components"

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Welcome />
      <Services />
      <GetOnBoard />
    </div>
  )
}

export default LandingPage;
