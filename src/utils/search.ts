import schoolData from 'src/contents/thailand_school_name.json'
import provinceData from 'src/contents/province.json'

export interface ISchoolData {
  school_name: string
}

export interface IProvinceData {
  province: string
}

export const searchSchool = (searchText: string) => {
  const searchValue = schoolData
    .filter((el: ISchoolData) => el.school_name.includes(searchText))
    .map((el: ISchoolData) => {
      return {
        value: el.school_name,
      }
    })

  return searchText ? searchValue.slice(0, 10) : []
}

export const searchProvince = (searchText: string) => {
  const searchValue = provinceData
    .filter((el: IProvinceData) => el.province.includes(searchText))
    .map((el: IProvinceData) => {
      return {
        value: el.province,
      }
    })

  return searchText ? searchValue.slice(0, 10) : []
}
