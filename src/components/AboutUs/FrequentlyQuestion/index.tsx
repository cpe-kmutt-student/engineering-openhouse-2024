import { Collapse, CollapseProps, Typography } from 'antd'
import { IQandA, frequentlyQuestions } from '../../../contents/about/frequentlyQuestions'

const FrequentlyQuestion: React.FC = (): JSX.Element => {
  const { Text } = Typography

  const collapseItem: CollapseProps['items'] = frequentlyQuestions.map(({ question, answer }: IQandA, i: number) => {
    return {
      key: i,
      label: question,
      children: <Text>{answer}</Text>,
      style: {
        border: 0,
      },
    }
  })

  return <Collapse size="large" bordered={false} items={collapseItem} />
}

export default FrequentlyQuestion
