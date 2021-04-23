<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      let params = {admin_name: 'admin', admin_pwd: 'zxc123456'}
      let [err, data] = await this.$Axios('/login', params)
      if (data) {
        console.log(data)
      } else {
        console.log(err)
      }
    }
  }
}
</script>
