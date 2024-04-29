import observe from './observe'

export default function Observer(data) {
  if (Array.isArray(data)) {
    // TODO 数组的情况
  } else {
    this.walk(data)
  }
}

Observer.prototype.walk = function (data) {
  for (let key in data) {
    defineReactiveData(data, key, data[key])
  }
}

function defineReactiveData(data, key, value) {
  observe(value)
  Object.defineProperty(data, key, {
    get() {
      console.log('--observe:get')
      return value
    },
    set(newValue) {
      console.log('--observe:set ', newValue)
      value = newValue
    }
  })
}
