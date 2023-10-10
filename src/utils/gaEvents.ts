import ReactGA from 'react-ga4'

export const registerEvent = () => ReactGA.event('Register') // when user regis
export const buttonEvent = (name: string) => ReactGA.event('button-' + name)
