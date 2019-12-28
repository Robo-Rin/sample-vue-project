<template>
  <div class="home">
    <div class="home-header">This is a basic Vue.js app scaffolded with vue-cli</div>
    <div class="home-subheader">The purpose of this app is to demo my knowledge of Vue.js by compiling sample code, some of which was used for coding tasks</div>
    <ul class="home-overviews">
      <li>The first app <router-link to="/sample">Sample</router-link> demonstrates simple API interaction by fetching user information and generating user cards based on that information.<br>→ Constructed with the Strategy pattern and simple composition.</li>
      <li>The second app <router-link to="/ascap">Ascap</router-link> demonstrates some UI and UX with the beginning of a membership interactive flow reverse-engineered from <a href="https://ome.ascap.com/" target="_blank" rel="noreferrer noopener">here</a>.<br>→ Constructed with the Strategy pattern and simple composition.<br>→ For the sake of time the <span class="mono"><b>Membership.vue</b></span> component is quite large. Ideally, this component would be split up into smaller reusable components.</li>
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
    padding-right: 25%;
    font-size: 1.2rem;

    .mono {
      font-family: 'Courier New', Courier, monospace;
    }

    li {
      margin-bottom: 1rem;
    }
  }
}
</style>
