import illustrationMobile from '../../public/images/bg-intro-mobile.svg';
import illustrationDesktop from '../../public/images/bg-intro-desktop.svg';
import mockups from '../../public/images/image-mockups.png';
import RequestInviteButton from '../../shared/ui/RequestInviteButton';

function Hero() {
  return (
    <section className="bg-very-light-gray relative flex flex-col pb-16 md:flex-row-reverse md:justify-between md:items-center md:pb-0">
      <div className="md:max-w-[55%] md:scale-125 md:translate-x-20">
        <img src={illustrationMobile} alt="illustration" className="md:hidden w-full h-full" />
        <img src={illustrationDesktop} alt="illustration" className="hidden md:inline-block" />
        <img src={mockups.src} alt="mockups" className="absolute top-0 right-0 scale-75 -translate-y-20" />
      </div>

      <div className="text-center md:text-left px-4 md:max-w-[45%] lg:pl-28">
        <h1 className="text-dark-blue text-3xl mt-0 mb-3 lg:mb-5 xl:text-5xl xl:leading-[3.5rem]">Next generation digital banking</h1>
        <p className="text-grayish-blue text-xs leading-5 mb-5 lg:mb-7 xl:text-base">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <RequestInviteButton />
      </div>
    </section>
  )
}

export default Hero;