<template>
<div class="sidenav col-md-2">
<h4>Featured Articles</h4>
<div class="link">

</div>
<a href="#">About</a>
<a href="#">Services</a>
<a href="#">Clients</a>
<a href="#">Contact</a>
</div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.sidenav {
    height: 100%;
    padding-top: 20px;
    margin-right: 0;
    text-align:justify;
}

/* The navigation menu links */
.sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
    color: #f1f1f1;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
}
</style>
