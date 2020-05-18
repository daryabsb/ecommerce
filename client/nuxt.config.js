export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    script: [
      // BEGIN: Vendor JS
      { src: "/app-assets/vendors/js/vendors.min.js", body: true },
      // BEGIN Vendor JS

      // BEGIN: Page Vendor JS
      { src: "/app-assets/vendors/js/ui/jquery.sticky.js", body: true },
      { src: "/app-assets/vendors/js/ui/prism.min.js", body: true },
      { src: "/app-assets/vendors/js/extensions/wNumb.js", body: true },
      {
        src: "/app-assets/vendors/js/extensions/nouislider.min.js",
        body: true
      },
      {
        src: "/app-assets/vendors/js/forms/select/select2.full.min.js",
        body: true
      },
      // END: Page Vendor JS

      // BEGIN: Theme JS
      { src: "/app-assets/js/core/app-menu.js", body: true },
      { src: "/app-assets/js/core/app.js", body: true },
      { src: "/app-assets/js/scripts/components.js", body: true },
      // END: Theme JS

      // BEGIN: Page JS
      { src: "/app-assets/js/scripts/pages/app-ecommerce-shop.js", body: true }
      // END: Page JS
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600"
      },

      // BEGIN: Vendor CSS
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/vendors/css/vendors.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/vendors/css/extensions/nouislider.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/vendors/css/ui/prism.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/vendors/css/forms/select/select2.min.css"
      },
      // END: Vendor CSS

      // BEGIN: Theme CSS
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/css/bootstrap.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/css/bootstrap-extended.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/css/colors.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/css/components.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/css/themes/dark-layout.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/css/themes/semi-dark-layout.css"
      },

      // BEGIN: Page CSS
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/css/core/menu/menu-types/horizontal-menu.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/css/core/colors/palette-gradient.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/css/plugins/extensions/noui-slider.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/app-assets/css/pages/app-ecommerce-shop.css"
      },
      // END: Page CSS

      // BEGIN: Custom CSS-->
      { rel: "stylesheet", type: "text/css", href: "/css/style.css" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
