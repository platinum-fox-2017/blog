<template>
  <div class="">
    <div class="row profile">
  		<div class="col-sm-3" v-show="tokenfb">
  			<div class="profile-sidebar">
  				<div class="profile-userpic" align="center">
  					<img :src="picture" class="img-responsive" alt="">
  				</div>
  				<div class="profile-usertitle">
  					<div class="profile-usertitle-name">
  						{{name}}
  					</div>
  				</div>
          <div class="profile-userbuttons">
  					<button type="button" class="btn btn-success col-sm-12" data-toggle="modal" data-target="#exampleModalLong">Add Artikel</button>
  				</div>
  			</div>
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Add artikel</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <input type="text" class="form-control" v-model="title" value="" placeholder="Input Title">
                <br />
                <textarea name="name" class="form-control" placeholder="Input Content" v-model="content"></textarea>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="addartikel">Save</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="updateartikell" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Update artikel</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <input type="text" class="form-control" v-model="updatetitle" value="" placeholder="Input Title">
                <br />
                <textarea name="name" class="form-control" placeholder="Input Content" v-model="updatecontent"></textarea>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="updateartikel">Save changes</button>
              </div>
            </div>
          </div>
        </div>
  		</div>
  		<div class="col-md-9" v-show="tokenfb">
        <div class="profile-content">
          <div class="artikel">
            <div class="card col-md-12" v-for="(n,i) in artikel" :key="i">
              <div class="card-body col-md-12 col-sm-12">
                <h3 class="card-title">{{n.title}}</h3>
                <read-more more-str="read more" class="readmore" :text="n.content" link="#" less-str="read less" :max-chars="20"></read-more>
                <button type="button" name="button" class="btn btn-warning" data-toggle="modal" data-target="#updateartikell" @click="showupdate(n)">update</button>
                <button type="button" name="button" class="btn btn-danger" @click="deleteartikel(n._id)">delete</button>
              </div>
            </div>
          </div>
        </div>
  		</div>
      <div class="col-md-12" v-show="!tokenfb">
        <div class="profile-content">
          <div class="artikel">
            <div class="card col-md-12" v-for="(n,i) in artikel" :key="i">
              <div class="card-body col-md-12 col-sm-12">
                <h3 class="card-title">{{n.title}}</h3>
                <read-more more-str="read more" class="readmore" :text="n.content" link="#" less-str="read less" :max-chars="20"></read-more>
              </div>
            </div>
          </div>
        </div>
  		</div>
  	</div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        title:'',
        content:'',
        updatetitle:'',
        updatecontent:'',
        updateid:'',
        msg: 'Welcome to Your Vue.js App',
        name: localStorage.getItem('name'),
        picture:localStorage.getItem('foto'),
        artikel:[],
        tokenfb:localStorage.getItem('tokenfb') || null
      }
    },
    created:function () {
      axios.get('http://localhost:3000/artikel/').then(response => {
        this.artikel=response.data.articles
        console.log(response);
      }).catch(err => console.error(err));
    },
    methods:{
      addartikel () {
        axios.post('http://localhost:3000/artikel', {
          title:this.title,
          content:this.content
        })
        .then(response => {
          console.log(response)
        })
        .catch(err => { console.log(err)})
      },
      deleteartikel (id) {
        console.log(id);
        axios.delete(`http://localhost:3000/artikel/${id}`)
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
      },
      showupdate (data){
        this.updateid= data._id
        this.updatetitle = data.title
        this.updatecontent = data.content
      },
      updateartikel (data){
        axios.put(`http://localhost:3000/artikel/${this.updateid}`,{
          title:this.updatetitle,
          content:this.updatecontent
        })
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
.profile {
  margin: 20px 0;
}

.profile-sidebar {
  padding: 20px 20px 10px 20px;
  background: #eee;
}

.profile-usertitle-name {
  color: #5a7391;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 7px;
}

.profile-userpic img {
  float: none;
  margin: 0 auto;
  width: 50%;
  height: 50%;
  -webkit-border-radius: 50% !important;
  -moz-border-radius: 50% !important;
  border-radius: 50% !important;
}

.profile-usertitle {
  text-align: center;
  margin-top: 20px;
}


.profile-content {
  padding: 20px;
  background: rgba(100, 100, 100, 0.1);
}
</style>
