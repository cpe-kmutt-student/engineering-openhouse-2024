import { DepartmentEnum } from './department/enum'
import WorkshopCPE from './images/stamps/CPE-LABCom.png'
import WorkshopCE from './images/stamps/CE-LABCom.png'
import WorkshopME from './images/stamps/ME-LABCom.png'
import WorkshopPE from './images/stamps/PE-LABCom.png'
import WorkshopEE from './images/stamps/EE-LABCom.png'
import WorkshopENE from './images/stamps/ENE-LABCom.png'
import WorkshopTME from './images/stamps/TME-LABCom.png'
import WorkshopENV from './images/stamps/ENV-LABCom.png'
import WorkshopCHE from './images/stamps/CHE-LABCom.png'
import WorkshopINC from './images/stamps/INC-LABCom.png'

import ExpoCPE from './images/stamps/CPE-V2-EXPOCom.png'
import ExpoCE from './images/stamps/CE-EXPOCom.png'
import ExpoME from './images/stamps/ME-V2-EXPOCom.png'
import ExpoPE from './images/stamps/PE-V2-EXPOCom.png'
import ExpoEE from './images/stamps/EE-EXPOCom.png'
import ExpoENE from './images/stamps/ENE-EXPOCom.png'
import ExpoTME from './images/stamps/TME-EXPOCom.png'
import ExpoENV from './images/stamps/ENV-EXPOCom.png'
import ExpoCHE from './images/stamps/CHE-EXPOCom.png'
import ExpoINC from './images/stamps/INC-EXPOCom.png'
import ExpoRC from './images/stamps/RC-EXPOCom.png'

import Regis from './images/stamps/RegisCom.png'
import Tour from './images/stamps/PaTour-Com.png'

export interface IStampImage {
  department?: DepartmentEnum
  event: StampEnum
  image: string
}

export enum StampEnum {
  carnival = 'carnival',
  central = 'central',
  tour = 'tour',
  workshop = 'workshop',
}

export const stampImages: IStampImage[] = [
  {
    department: DepartmentEnum.CPE,
    event: StampEnum.carnival,
    image: ExpoCPE,
  },
  {
    department: DepartmentEnum.CE,
    event: StampEnum.carnival,
    image: ExpoCE,
  },
  {
    department: DepartmentEnum.ME,
    event: StampEnum.carnival,
    image: ExpoME,
  },
  {
    department: DepartmentEnum.PE,
    event: StampEnum.carnival,
    image: ExpoPE,
  },
  {
    department: DepartmentEnum.EE,
    event: StampEnum.carnival,
    image: ExpoEE,
  },
  {
    department: DepartmentEnum.ENE,
    event: StampEnum.carnival,
    image: ExpoENE,
  },
  {
    department: DepartmentEnum.TME,
    event: StampEnum.carnival,
    image: ExpoTME,
  },
  {
    department: DepartmentEnum.ENV,
    event: StampEnum.carnival,
    image: ExpoENV,
  },
  {
    department: DepartmentEnum.CHE,
    event: StampEnum.carnival,
    image: ExpoCHE,
  },
  {
    department: DepartmentEnum.INC,
    event: StampEnum.carnival,
    image: ExpoINC,
  },
  {
    department: DepartmentEnum.RC,
    event: StampEnum.carnival,
    image: ExpoRC,
  },
  {
    department: DepartmentEnum.CPE,
    event: StampEnum.workshop,
    image: WorkshopCPE,
  },
  {
    department: DepartmentEnum.CE,
    event: StampEnum.workshop,
    image: WorkshopCE,
  },
  {
    department: DepartmentEnum.ME,
    event: StampEnum.workshop,
    image: WorkshopME,
  },
  {
    department: DepartmentEnum.PE,
    event: StampEnum.workshop,
    image: WorkshopPE,
  },
  {
    department: DepartmentEnum.EE,
    event: StampEnum.workshop,
    image: WorkshopEE,
  },
  {
    department: DepartmentEnum.ENE,
    event: StampEnum.workshop,
    image: WorkshopENE,
  },
  {
    department: DepartmentEnum.TME,
    event: StampEnum.workshop,
    image: WorkshopTME,
  },
  {
    department: DepartmentEnum.ENV,
    event: StampEnum.workshop,
    image: WorkshopENV,
  },
  {
    department: DepartmentEnum.CHE,
    event: StampEnum.workshop,
    image: WorkshopCHE,
  },
  {
    department: DepartmentEnum.INC,
    event: StampEnum.workshop,
    image: WorkshopINC,
  },
  {
    event: StampEnum.tour,
    image: Tour,
  },
  {
    event: StampEnum.central,
    image: Regis,
  },
]
