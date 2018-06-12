<template>
  <div class="editor-root">
    <div class="editor"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from 'vue-property-decorator';
import * as monaco from 'monaco-editor';

@Component
export default class MonacoEditor extends Vue {
  @Model() private value!: string;
  private editor?: monaco.editor.IStandaloneCodeEditor;

  private mounted() {
    this.editor = monaco.editor.create(this.$el.firstChild as HTMLElement, {
      value: this.value,
      language: 'json',
      theme: 'vs-dark',
      readOnly: true,
      scrollBeyondLastLine: false,
      automaticLayout: true,
      minimap: {enabled: false},
    });

    this.$http.get('https://svmeal-api.jmnw.me/api/restaurant/bit/meal').then((response) => {
      response.json().then((mealObj: any) => this.valueChanged(JSON.stringify(mealObj.data, null, 2)));
    });
  }

  private beforeDestroy() {
    this.editor!.dispose();
  }

  private valueChanged(newValue: string) {
    this.editor!.setValue(newValue);
  }
}
</script>

<style scoped lang="scss">
.editor-root, .editor {
  height: 100%;
}
</style>
