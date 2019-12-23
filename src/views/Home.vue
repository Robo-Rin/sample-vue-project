<template>
  <div class="home">
    <div class="home-header">This is a basic Vue.js app scaffolded with vue-cli</div>
    <div class="home-subheader">The purpose of this app is to demo my knowledge of Vue.js by compiling sample code, some of which was used for coding tasks</div>
    <ul class="home-overviews">
      <li>The first app <router-link to="/sample">Sample</router-link> demonstrates simple API interaction by fetching user information and generating user cards based on that information. It's constructed with the Strategy pattern and simple composition.</li>
      <li>The second app <router-link to="/ascap">Ascap</router-link> demonstrates some UI and UX with the beginning of a membership interactive flow.</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.home {
  text-align: left;

  &-header, &-subheader {
    padding-left: 1rem;
  }

  &-header {
    font-size: 2rem;
  }

  &-subheader {
    font-size: 1.3rem;
    font-style: italic;
  }

  &-overviews {
    font-size: 1.2rem;
  }
}
</style>
