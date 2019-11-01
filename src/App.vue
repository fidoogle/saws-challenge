<template>
  <div id="app">
    <v-app>
      <v-app-bar
        app
        color="primary"
        dark
      >
        <v-toolbar-title>SAWS</v-toolbar-title>
        <v-spacer/>
        <MainButtons/>
      </v-app-bar>

      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>

      <v-footer
        color="primary lighten-1"
        padless
      >
        <v-row
          justify="center"
          no-gutters
        >
          <MainButtons/>
          <v-col
            class="primary lighten-2 py-4 text-center white--text"
            cols="12"
          >
            2019 — <strong>Fidel Guajardo</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import MainButtons from '@/components/MainButtons';

export default {
  name: 'App',
  components: {
    MainButtons
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
