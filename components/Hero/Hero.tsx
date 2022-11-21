import illustrationMobile from '../../public/images/bg-intro-mobile.svg';
import illustrationDesktop from '../../public/images/bg-intro-desktop.svg';

function Hero() {
  return (
    <section className="flex flex-col md:flex-row-reverse md:justify-between md:items-center">
      <div className="md:max-w-[55%] md:scale-125 md:translate-x-20">
        <img src={illustrationMobile} alt="illustration" className="md:hidden w-full h-full" />
        <img src={illustrationDesktop} alt="illustration" className="hidden md:inline-block" />
      </div>

      <div className="text-center md:text-left px-4 md:max-w-[45%] lg:pl-28">
        <h1 className="text-dark-blue text-3xl mt-0 mb-3 lg:text-5xl lg:leading-[3.5rem]">Next generation digital banking</h1>
        <p className="text-grayish-blue text-xs leading-5 lg:text-base">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
      </div>
    </section>
  )
}

export default Hero;