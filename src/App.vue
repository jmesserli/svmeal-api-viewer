<template>
  <div id="app">
    <MonacoEditor :value="value" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MonacoEditor from './components/MonacoEditor.vue';

@Component({
  components: {
    MonacoEditor,
  },
})
export default class App extends Vue {
  private value: string = JSON.stringify({please: 'wait'}, null, 2);
}
</script>

<style lang="scss">
html, body { 
  height: 100%;
  margin: 0;
  overflow: hidden;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
