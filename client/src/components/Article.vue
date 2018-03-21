<template>
  <html>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css">
    <body>
        <div class="body-margin">
            <div class="container-body">
                <h1>Hello</h1> 
            </div>
        </div>
    </body>
</html>
</template>

<script>
export default {
  name: 'Article',
  data() {
    return {
      articles: [],
    };
  },
  created() {
  },
}
</script>

<style>
.body-margin {
    margin: 0 15%;
}
.feed-container{
    display: flex;
    align-content: space-between;
    flex-direction: column;
    margin:0.5em 1em;
    /* background-color: white; */
}

.feed-container>div{
    background-color:grey;
    margin: 0.5px 0;
    padding: 20px;
}
.content {
    text-align: left;
    padding-left: 1em;
}

html, body {
  background:#0e141e;
  height:100%;
  font:13px 'Open Sans', Arial, sans-serif;
  line-height:20px;
  font-weight:300;
  letter-spacing:0.4px;
}
.container-body {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
}
.container-body > div {
    height: 100%;
    color: #fff;
}
a, a:active {
  text-decoration:none; color: #fff;
}
a:hover {
  text-decoration:underline;
}
.selection{
    margin-top:3em;
}

.links {
  padding: 20px 0;
}

.links:hover{
  transform: scale(1.10);
  color: rgb(216, 69, 69);
   -webkit-transition: transform 0.7s ease-out;
  -moz-transition: transform 0.7s ease-out;
  -o-transition: transform 0.7s ease-out;
  transition: transform 0.7s ease-out;
}

.article-pane{
  padding: 0 30px;
}

h1 {
  font-size: 60px;
  font-family: "Source Code Pro", Monaco, "monospace";
  font-weight: 300;
  word-spacing:-12px;
  line-height:88px;
  margin-left: -8px;
  letter-spacing: -3px;
  }
h2 {
  font-size: 36px;
  font-weight: 600;
  word-spacing: -8px;
  line-height:52px;
  margin-left: -3px;
  letter-spacing: -2px;
  }
h3 {
  font-size: 24px;
  font-weight: normal;
  line-height: 35px;
  margin-left: -1px;
  color:#fff;
  padding-bottom: 20px;
}
h4 {
  font-size: 13px;
  font-weight: normal;
  text-transform: uppercase;
  line-height: 20px;
  letter-spacing: 5px;
}
h5 {
  font-size: 18px;
  font-weight: normal;
  line-height: 25px;
  margin-left: -1px;
  color:#0e141e;
  padding-bottom: 10px;
  }
p {
  font-size: 13px;
  line-height:25px;
}
strong {
  font-weight:600;
}
em {
  opacity:0.7;
}
#feed-title, #top-article{
    line-height: 40px;
    margin-top:1em;
    font-size:40px;
    color:white;
}

</style>
