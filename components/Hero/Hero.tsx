import illustration from '../../public/images/bg-intro-mobile.svg';
import Paragraph from '../../shared/ui/Paragraph';
import Title from '../../shared/ui/Title';

function Hero() {
  return (
    <section className="flex flex-col lg:flex-row-reverse lg:justify-between lg:px-28">
      <div className="w-full h-full">
        <img src={illustration} alt="ilustration" className="w-full h-full lg:w-1/2 lg:h-1/4" />
      </div>

      <div className="text-center lg:text-left lg:max-w-1/2">
        <Title>Next generation digital banking</Title>
        <Paragraph>Take your financial life online. Your Easybank will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</Paragraph>
      </div>
    </section>
  )
}

export default Hero;