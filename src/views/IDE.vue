<template>
  <main id="ide" class="bg-primary-1">
    <h3 class="brand text-white p-3">// fragment</h3>
    <div class="container py-3">
      <div class="card mb-3 nft-metadata">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://via.placeholder.com/200" class="img-fluid rounded-start" >
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ace-editor
            v-model="code"
            lang="python"
            theme="ambiance"
            style="height: 500px"
          />
          <div class="d-grid gap-2">
            <button class="btn btn-info-1 text-white text-uppercase" type="button">run</button>
          </div>
        </div>
        <div class="col">

        </div>
      </div>
      <div class="fixed-bottom text-muted text-center">
        &copy; {{ new Date().getFullYear() }} conceptcodes
      </div>
    </div>
  </main>
</template>

<script>
  import AceEditor from 'v-ace-editor';

  export default {
    name: 'ide',
    data: ()=>({
      code: ''
    }),
    components: {
      AceEditor
    },
    setup() {

    },
  }
</script>

<style lang="scss" scoped>
  #ide {
    width: 100vw;
    height: 100vh;
  }
    /* required class */
  .my-editor {
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: #2d2d2d;
    color: #ccc;
 
    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
  }
 
  /* optional class for removing the outline */
  .prism-editor__textarea:focus {
    outline: none;
  }
</style>
