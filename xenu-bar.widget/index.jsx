import { DockerIcon, NodeIcon } from './lib/icons'
import { docker_ps } from './lib/core'
export { className } from './lib/styles'
import { React } from 'uebersicht'

export const command = 'whoami'
export const refreshFrequency = 1000000

const App = () => {
  const [output, setOutput] = React.useState()
  React.useEffect(() => {
    docker_ps().then(setOutput)
  }, [output])
  return (
    <div className='container'>
      <DockerIcon />
      <NodeIcon />
      <p className='output'>{output}</p>
    </div>
  )
}

export const render = ({ output }) => {
  return <App />
}
