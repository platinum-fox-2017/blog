<template>
  <div id="messageModal" class="modal fade text-center">
    <div class="modal-dialog">
      <div class="col-lg-8 col-sm-8 col-12 main-section">
        <div class="modal-content">
          <div class="col-lg-12 col-sm-12 col-12 user-name">
            <h1>User Login</h1>
            <button type="button" class="close" data-dismiss="modal">×</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    login () {
    }
  }
}
</script>

<style scoped>
.main-section{
margin: 0 auto;
margin-top: 100px;
background-color: #fff;
border-radius: 5px;
padding: 0px;
}
.user-name{
margin:10px 0px;
}
.user-name h1{
font-size: 30px;
color:#676363;
}
.user-name button{
position:absolute;
top:-50px;
right:20px;
font-size:30px;
}
</style>
