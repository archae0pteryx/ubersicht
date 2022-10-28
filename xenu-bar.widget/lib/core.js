import { run } from 'uebersicht'


export async function docker_ps() {
  const res = await run("docker ps -a | awk '{print $1}'")
  // const res = await run("docker ps -a --format '{{.Names}}'")
  return res
}
