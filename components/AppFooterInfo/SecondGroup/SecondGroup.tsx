import links from "../links";

function SecondGroup() {
  return (
    <div className="second-group nav-links mb-6 md:translate-y-2">
      <ul className="text-sm list-none m-0 xs:columns-2 xs:max-w-[50%] xs:mx-auto md:max-w-none md:gap-4 lg:gap-16">
        {links.map((link) => (
          <li key={link} className="text-center pb-4 md:text-left">
            <a href="#" className="text-very-light-gray hover:text-lime-green">{ link }</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SecondGroup;