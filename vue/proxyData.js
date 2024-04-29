export default function proxyData(vm, title, key) {
  Object.defineProperty(vm, key, {
    get() {
      // console.log('获取_data')
      return vm[title][key]
    },
    set(newValue) {
      // console.log('修改_data数据，新值：', newValue)
      vm[title][key] = newValue
    }
  })
}
