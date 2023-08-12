

interface props {
    output: string;
    setOutput: any;
}
const Output = ({ output }:props) => {
  return (
    <div>{output}</div>
  )
}

export default Output