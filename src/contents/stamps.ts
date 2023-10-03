import { DepartmentEnum } from './department/enum'
import CPEStampDisable from './images/Stamp_CPE_disabled.png'
import CPEStampEnable from './images/Stamp_CPE_enabled.png'

export interface IStampImage {
  department: DepartmentEnum
  detail: StampEnum
  stampDisable: string
  stampEnable: string
}

export enum StampEnum {
  Openhouse = 'Openhouse',
  Workshop = 'Workshop',
}

export const stampImages: IStampImage[] = [
  {
    department: DepartmentEnum.CPE,
    detail: StampEnum.Openhouse,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.CE,
    detail: StampEnum.Openhouse,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.ME,
    detail: StampEnum.Openhouse,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.PE,
    detail: StampEnum.Openhouse,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.EE,
    detail: StampEnum.Openhouse,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.ENE,
    detail: StampEnum.Openhouse,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.TME,
    detail: StampEnum.Openhouse,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.ENV,
    detail: StampEnum.Openhouse,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.CHE,
    detail: StampEnum.Openhouse,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.INC,
    detail: StampEnum.Openhouse,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.RC,
    detail: StampEnum.Openhouse,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
]
