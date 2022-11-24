import Feature from "./Feature/Feature";
import { features, paragraph, title } from "./text";

function Features() {
  return (
    <section className="bg-light-grayish-blue px-4 py-16 lg:px-28">
      <main className="text-center mb-12 md:text-left md:max-w-[50%] md:mb-16">
        <h1 className="text-dark-blue text-2xl mt-0 mb-3 lg:mb-5 xl:text-4xl xl:leading-[3.5rem]">{ title }</h1>
        <p className="text-grayish-blue text-xs leading-5 mb-5 lg:mb-7 xl:text-base">{ paragraph }</p>
      </main>

      <div className="features text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:text-left">
        {features.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default Features;