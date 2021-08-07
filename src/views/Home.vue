<template>
  <main id="home">
    <div class="card p-4 bg-white">
      <div class="container">
        <div class="row">
          <div class="col">
            <h3 class="fw-bold">// fragment</h3>
          </div>
          <div class="col input-group-sm mb-3">
            <input type="text" class="form-control rounded-pill bg-primary-1 text-white" placeholder="Enter NFT Token here!" aria-label="frag code" aria-describedby="inputGroup-sizing-default">
          </div>
        </div>
        <div class="row">
          <div class="col pt-5">
            <h1 class="text-info-1">Collaborative <br> <span class="text-primary-1">Coding.</span></h1>
            <p class="font-monospace text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur, in fugiat hic provident.</p>
          </div>
          <div class="col">
            <img src="https://via.placeholder.com/400" class="clipart">
          </div>
        </div>
        <p class="float-end pt-3 text-muted">
          &copy; {{ new Date().getFullYear() }} conceptcodes
        </p>
      </div>
    </div>
    <div class="fixed-bottom h5 text-success text-center">
      alpha
    </div>
  </main>
</template>

<script>
  export default {
    name: 'Home',
    components: {
      
    }
  }
</script>

<style lang="scss" scoped>
  #home {
    background: #2C3E50;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #438493, #2C3E50);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #438493, #2C3E50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    width: 100vw;
    height: 100vh;
  }
  .clipart {
    border-radius: 58% 42% 63% 37% / 35% 31% 69% 65%;
  }
  h1 { font-size: 78px; }
  h3 { font-size: 28px; }
  input[type=text]::placeholder {
    color: white;
  }
  .tagline {
    font-size: 18px;
  }

  .card {
    position: absolute;
    width: 80vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
