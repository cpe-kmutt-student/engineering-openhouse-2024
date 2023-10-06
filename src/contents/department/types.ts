export interface IContact {
  name?: string
  tel?: string
  social: IContactSocial[]
}

export interface IContactSocial {
  name: string
  link: string
}

export interface IActivity {
  title: string
  description: string
  subDescription?: ISubActivity[]
}

export interface ISubActivity {
  name: string
  description: string
}

export interface IWorkshopSchedule {
  date: Date | string
  time: string
  amount: number
}

export interface ISubWorkshop {
  title: string
  schedules: IWorkshopSchedule[]
}

export interface IRC {
  department: string
  location: string
  details: IRCDetail[]
}

export interface IRCDetail {
  title?: string
  headDescription: string
  description: string[]
}
