const Hello: React.FC<Props> = ({ text }: Props): JSX.Element => {
  return <div>{text}</div>
}

export default Hello

interface Props {
  text: string
}
