import proxyData from './proxyData'
import observe from './observe'

function initState(vm) {
  if (vm.$options.data) {
    initData(vm)
  }
}

function initData(vm) {
  let data = vm.$options.data
  data = vm._data = typeof data === 'function' ? data.call(vm) : data || {}
  for (let key in data) {
    proxyData(vm, '_data', key)
  }
  observe(vm._data)
}

export default initState
