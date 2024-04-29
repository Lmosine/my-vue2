import initState from './init'

function Vue(options) {
  const vm = this.__init__(options)
  initState(vm)
}

Vue.prototype.__init__ = function (options) {
  const vm = this
  vm.$options = options
  return vm
}

export default Vue
