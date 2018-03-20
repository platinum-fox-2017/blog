<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link :to="{ name: 'Home'}" class="nav-text">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contacts</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    padding: 0;
}
.nav-text {
    text-decoration: none;
}
</style>
