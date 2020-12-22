<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import "../node_modules/bulma/bulma.sass";

#app {
  /*文字設定*/
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /*位置設定*/
  margin-top: 10%;
  margin-left:10%;
  width:80%;
}
label{
  /*位置設定*/
  margin-right:10px;
  line-height:50px;
}
header {
  /*背景色設定*/
  background-color:rgb(215,243,243);

  /*線設定*/
  border-left: 2px solid;
  border-right: 2px solid;
  border-top: 2px solid;

  /*線色設定*/
  border-color:rgb(103,210,210);
}
.content {
  /*位置設定*/
  padding:20px;

  /*線設定*/
  border: 2px solid;

  /*線色設定*/
  border-color:rgb(103,210,210);
}
.title {
  /*文字設定*/
  font-size:16px;
  font-weight:lighter;

  /*文字色設定*/
  color:blue;
}
.instruction{
  /*文字設定*/
  font-size: 16px;

  /*位置設定*/
  text-align:center;
}
.transition-button{
  /*文字色設定*/
  color:white;

  /*背景色設定*/
  background-color:rgb(103,210,210);

  /*位置設定*/
  padding: 15px 15px 10px 15px;
  margin:0 auto;
}
textarea{
  width:100%;
  height:100%;
}
</style>