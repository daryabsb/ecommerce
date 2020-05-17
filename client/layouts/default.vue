<template>
  <div>
    <Header />
    <!-- <MainMenu /> -->
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header';
// import MainMenu from '~/components/MainMenu';
import Footer from '~/components/Footer';
export default {
  head: {
    bodyAttrs: {
      class: 'horizontal-layout horizontal-menu content-detached-left-sidebar ecommerce-application navbar-floating footer-static'
    }
  },
  components: {
    Header,
    // MainMenu,
    Footer
  }
}
</script>




  
