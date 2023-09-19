import { Typography } from 'antd'
import { IDepartmentInfo, IWorkshop } from '../../../contents/departmentInfo'

interface Props {
  department: IDepartmentInfo
}

const WorkshopDetail: React.FC<Props> = ({ department }: Props): JSX.Element => {
  const { Title, Paragraph } = Typography

  const renderWorkshopDetails = department.workshop.map((workshop: IWorkshop, i: number) => {
    return (
      <div key={i}>
        <Title level={4}>{`${(i += 1)}. ${workshop.title}`}</Title>
        <Paragraph>{workshop.description}</Paragraph>
      </div>
    )
  })
  return (
    <div>
      <Title level={3}>Workshop Detail</Title>
      {renderWorkshopDetails}
    </div>
  )
}

export default WorkshopDetail
