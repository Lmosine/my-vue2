import Observer from './Observer'

function observe(data) {
  if (typeof data !== 'object' || data === null) return
  new Observer(data)
}

export default observe
