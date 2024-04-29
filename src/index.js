import Vue from 'vue'

const vm = new Vue({
  el: '#app',
  data() {
    return {
      title: '学生裂变',
      age: 24,
      info: {
        status: true
      },
      infoMation: {
        status: {
          value: true
        }
      }
    }
  }
})

console.log(vm.title)
console.log(vm.info.status)
console.log(vm.infoMation.status.value)
