import Feature from "../../../types/feature";

function Feature({ title, icon, paragraph }: Feature) {
  return (
    <div className="feature" data-testid="feature">
      <div className="feature-image mb-5">
        <img src={icon} className="mx-auto lg:mx-0" alt="" />
      </div>
      <h2 className="feature-title text-dark-blue mb-4">{ title }</h2>
      <p className="feature-paragraph text-grayish-blue text-xs leading-5">{ paragraph }</p>
    </div>
  )
}

export default Feature;