import FirstGroup from "./FirstGroup/FirstGroup";
import SecondGroup from "./SecondGroup/SecondGroup";
import ThirdGroup from "./ThirdGroup/ThirdGroup";

function AppFooterInfo() {
  return (
    <footer className="bg-dark-blue flex flex-col p-8 md:flex-row md:justify-between lg:px-28">
      <FirstGroup />
      <SecondGroup /> 
      <ThirdGroup />
    </footer>
  )
}

export default AppFooterInfo;