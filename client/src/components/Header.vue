<template>
<header>
  <div class="header-container">
      <div class="nav-left">
          <img src="@/assets/invert.png">
      </div>
      <div class="nav-center">
          <h2>center</h2>
          <!-- <div class="field is-grouped">
            <p class="control is-expanded">
                <input class="input" type="text" placeholder="Find an article">
            </p> -->
            <!-- <p class="control">
                <a class="button is-info">
                Search
                </a>
            </p> -->
          <!-- </div> -->
      </div>
      <div class="nav-right">
          <h2>Login</h2>
      </div>
  </div>
</header>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  top: 0;
  padding-top:1em;
  background:#0e141e;
  /* color:#fff; */
  color: rgb(255,255,255,0.4);
  border-bottom: #fff 0.3px solid;
}
.header-container{
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
}
@media all and (max-width: 600px){
  .header-container{
    grid-template-columns: auto;
    padding-top: 20px;
  }
}
/* Global styles */
span {
  display: none;
}
a, a:active {
  text-decoration:none; color: #fff;
}
a:hover {
  text-decoration:underline;
}
.clear {
  clear: both;
}
img {
    margin-top: auto;
    margin-bottom: auto;
    width: 40px;
    height: auto;
    cursor: pointer;
}
h2 {
  cursor: pointer;
}
h2:after {
  content:"\258B"; color:#32c766; animation: 1.2s blink infinite; margin-left: 2px;
}
h2.clean:after {
  content:none;
}

@keyframes blink {
0% {
  opacity: 1;
  }
50% {
  opacity: 0;
  }
}
@-webkit-keyframes blink {
0% {
  opacity: 1;
  }
50% {
  opacity: 0;
  }
}
</style>
