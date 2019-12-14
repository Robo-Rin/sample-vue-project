<template>
  <div class="sampleApp">
    <div/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SampleApp',
  data () {
    return {
      data: []
    }
  },
  mounted () {
    axios.get('http://www.json-generator.com/api/json/get/ckGeTpGfaW').then(response => {
      console.log(response)
    })
  }
}
</script>

<style scoped lang="scss">

</style>
