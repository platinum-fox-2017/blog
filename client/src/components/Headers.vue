<template>
    <header id="header">
        <div class="container">
            <div class="logo">
                <a href="/">Blog</a>
            </div>
            <div class="menu">
                <a href="/">Article</a>
            </div>
            <div class="info">
                <a href="/">login</a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Headers',
};
</script>

<style>
    #header {
        position: fixed;
        min-width: 1110px;
        top: 0;
        left: 0;
        right: 0;
        padding: 11px 0;
        box-shadow: 1px 0 3px rgba(0, 0, 0, 0.2);
        background: white;
    }

    .logo, .menu {
        float: left;
    }

    .logo a {
        display: block;
    }

    a, a:hover, a:focus {
        text-decoration: none;
        outline: none;
        color: #1d1d1d;
    }

    #header .info {
        float: right;
        color: #8c8c8c;
    }

    .logo, .menu, #header .info {
        line-height: 16px;
        letter-spacing: 1px;
        margin: 11px 0;
    }

    .menu {
        margin-left: 16px;
    }
</style>
