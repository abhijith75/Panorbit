<template>
  <div id="app">
    <!--Root Component --> 
    <link
      href="https://fonts.googleapis.com/css?family=Karla"
      rel="stylesheet"
    />
    <router-view/>   <!--Landing Page --> 
  </div>
</template>

<style>
#app {
  font-family: 'Karla';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
