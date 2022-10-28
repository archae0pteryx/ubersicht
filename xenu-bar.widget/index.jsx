import { DockerIcon } from './lib/icons'


export { className } from './lib/styles'

export const command = 'whoami'
export const refreshFrequency = 1000000

export const render = ({ output }) => {
  return (
    <div className='container'>
      <DockerIcon />
    </div>
  )
}
