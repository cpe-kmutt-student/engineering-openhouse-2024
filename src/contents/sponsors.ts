import SponsorBig1 from './images/Sponsor_Big_1.png'
import SponsorBig2 from './images/Sponsor_Big_2.png'
import SponsorBig3 from './images/Sponsor_Big_3.png'

export interface ISponsor {
  image: string
  size: SponsorSize
}

export enum SponsorSize {
  Small = 'small',
  Big = 'big',
}

export const sponsors: ISponsor[] = [
  {
    image: SponsorBig1,
    size: SponsorSize.Big,
  },
  {
    image: SponsorBig2,
    size: SponsorSize.Big,
  },
  {
    image: SponsorBig3,
    size: SponsorSize.Big,
  },
]
