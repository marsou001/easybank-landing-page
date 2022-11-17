import Logo from "../../shared/ui/Logo";
import RequestInviteButton from "../../shared/ui/RequestInviteButton";

function HeaderBar() {
  return (
    <header className="flex justify-between items-center p-6 lg:px-28 lg:py-0">
      <Logo />

      <button className="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <nav className="hidden lg:block">
        <ul className="h-16">
          <li className="bg-gradient-to-r from-lime-green to-bright-cyan text-grayish-blue hover:text-dark-blue text-sm inline-block h-full">
            <a href="#" className="bg-white flex justify-center items-center px-4 h-full hover:h-[95%]">Home</a>
          </li>
          <li className="bg-gradient-to-r from-lime-green to-bright-cyan text-grayish-blue hover:text-dark-blue text-sm inline-block h-full">
            <a href="#" className="bg-white flex justify-center items-center px-4 h-full hover:h-[95%]">About</a>
          </li>
          <li className="bg-gradient-to-r from-lime-green to-bright-cyan text-grayish-blue hover:text-dark-blue text-sm inline-block h-full">
            <a href="#" className="bg-white flex justify-center items-center px-4 h-full hover:h-[95%]">Contact</a>
          </li>
          <li className="bg-gradient-to-r from-lime-green to-bright-cyan text-grayish-blue hover:text-dark-blue text-sm inline-block h-full">
            <a href="#" className="bg-white flex justify-center items-center px-4 h-full hover:h-[95%]">Blog</a>
          </li>
          <li className="bg-gradient-to-r from-lime-green to-bright-cyan text-grayish-blue hover:text-dark-blue text-sm inline-block h-full">
            <a href="#" className="bg-white flex justify-center items-center px-4 h-full hover:h-[95%]">Careers</a>
          </li>
        </ul> 
      </nav>

      <div className="hidden lg:block">
        <RequestInviteButton />
      </div>
    </header> 
  )
}

export default HeaderBar;