import Props from "../../types/Props";

function Title({ children }: Props) {
  return (
    <h1 className="text-dark-blue text-3xl">{ children }</h1>
  )
}

export default Title;