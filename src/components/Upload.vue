<template>
  <element-upload
    class="upload-demo"
    drag
    action=""
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    multiple>
    <i class="el-icon-upload"/>
    <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
    <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
  </element-upload>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>

<style scoped>

</style>
