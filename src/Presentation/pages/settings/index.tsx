import  { PersonalInfo, Menu } from "./components"

const Settings = () => {
  return (
    <div className="grid md:grid-cols-3 gap-y-10 md:gap-y-0 md:gap-10">
      <Menu />
      <PersonalInfo />
    </div>
  );
};

export default Settings;
