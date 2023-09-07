const Hello: React.FC<Hello> = ({ text }: Hello): JSX.Element => {
  return <div>{text}</div>
}

export default Hello

interface Hello {
  text: string
}
