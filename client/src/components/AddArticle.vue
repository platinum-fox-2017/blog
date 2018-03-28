<template>
  <div class="modal fade" tabindex="-1" role="dialog" id="addModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Form</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form id="register-form">
            <div class="form-group">
              <label for="name-register">Title</label>
              <input class="form-control" type="text" name="title" id="title" v-model="title">
            </div>
            <div class="form-group">
              <label for="email-register">Description</label>
              <textarea 
                style="width: 100%;" 
                class="form-control" name="description" id="description" v-model="description">
              </textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="add()">Add</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal" id="dismissAddModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addArticle',
  data() {
    return {
      title: '',
      description: '',
    };
  },
  methods: {
    add() {
      this.$store.dispatch('add', {
        title: this.title,
        description: this.description,
      });
      this.title = '';
      this.description = '';
      document.querySelector('#dismissAddModal').click();
    },
  },
}
</script>

<style>

</style>
