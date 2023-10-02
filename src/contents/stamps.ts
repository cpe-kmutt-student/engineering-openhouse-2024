import { DepartmentEnum } from './department/enum'
import CPEStampDisable from './images/Stamp_CPE_disabled.png'
import CPEStampEnable from './images/Stamp_CPE_enabled.png'

export interface IStampImage {
  department: DepartmentEnum
  stampDisable: string
  stampEnable: string
}

export const stampImages: IStampImage[] = [
  {
    department: DepartmentEnum.CPE,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.CE,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.ME,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.PE,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.EE,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.ENE,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.TME,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.ENV,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.CHE,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.INC,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.RC,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
]
