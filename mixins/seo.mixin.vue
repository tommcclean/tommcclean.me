<script>
export default {
  head () {
    return {
      link: [
        { rel: 'canonical', href: `https://www.tommcclean.me${this.$route.path}` }
      ]
    }
  }
}
</script>
