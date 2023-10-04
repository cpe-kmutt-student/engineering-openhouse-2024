import SponsorBig1 from './images/sponsors/Sponsor_Big_1.png'
import SponsorBig2 from './images/sponsors/Sponsor_Big_2.png'
import SponsorBig3 from './images/sponsors/Sponsor_Big_3.png'

import SponsorSmall1 from './images/sponsors/Sponsor_Small_1.png'
import SponsorSmall2 from './images/sponsors/Sponsor_Small_2.png'
import SponsorSmall3 from './images/sponsors/Sponsor_Small_3.png'
import SponsorSmall4 from './images/sponsors/Sponsor_Small_4.png'
import SponsorSmall5 from './images/sponsors/Sponsor_Small_5.png'
import SponsorSmall6 from './images/sponsors/Sponsor_Small_6.png'
import SponsorSmall7 from './images/sponsors/Sponsor_Small_7.png'
import SponsorSmall8 from './images/sponsors/Sponsor_Small_8.png'
import SponsorSmall9 from './images/sponsors/Sponsor_Small_9.png'
import SponsorSmall10 from './images/sponsors/Sponsor_Small_10.png'

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
  {
    image: SponsorSmall1,
    size: SponsorSize.Small,
  },
  {
    image: SponsorSmall2,
    size: SponsorSize.Small,
  },
  {
    image: SponsorSmall3,
    size: SponsorSize.Small,
  },
  {
    image: SponsorSmall4,
    size: SponsorSize.Small,
  },
  {
    image: SponsorSmall5,
    size: SponsorSize.Small,
  },
  {
    image: SponsorSmall6,
    size: SponsorSize.Small,
  },
  {
    image: SponsorSmall7,
    size: SponsorSize.Small,
  },
  {
    image: SponsorSmall8,
    size: SponsorSize.Small,
  },
  {
    image: SponsorSmall9,
    size: SponsorSize.Small,
  },
  {
    image: SponsorSmall10,
    size: SponsorSize.Small,
  },
]
