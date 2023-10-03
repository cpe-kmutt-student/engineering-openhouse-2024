import { DepartmentEnum } from './department/enum'
import CPEStampDisable from './images/stamps/Stamp_CPE_disabled.png'
import CPEStampEnable from './images/stamps/Stamp_CPE_enabled.png'

export interface IStampImage {
  department?: DepartmentEnum
  detail: StampEnum
  stampDisable: string
  stampEnable: string
}

export enum StampEnum {
  Openhouse = 'Openhouse',
  Workshop = 'Workshop',
  Center = 'Center',
  Tour = 'Tour',
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
  {
    department: DepartmentEnum.CPE,
    detail: StampEnum.Workshop,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.CE,
    detail: StampEnum.Workshop,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.ME,
    detail: StampEnum.Workshop,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.PE,
    detail: StampEnum.Workshop,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.EE,
    detail: StampEnum.Workshop,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.ENE,
    detail: StampEnum.Workshop,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.TME,
    detail: StampEnum.Workshop,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.ENV,
    detail: StampEnum.Workshop,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.CHE,
    detail: StampEnum.Workshop,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    department: DepartmentEnum.INC,
    detail: StampEnum.Workshop,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    detail: StampEnum.Tour,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
  {
    detail: StampEnum.Center,
    stampDisable: CPEStampDisable,
    stampEnable: CPEStampEnable,
  },
]
