import Props from "../../types/Props";

function Paragraph({ children }: Props) {
  return (
    <p className="text-grayish-blue">{ children }</p>
  )
}

export default Paragraph;