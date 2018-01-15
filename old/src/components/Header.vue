<template>
  <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">NavBar</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#">首页</b-nav-item>
      <b-nav-item href="#">发现</b-nav-item>
      <b-nav-item href="#">创建</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="输入thing名称"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
      </b-nav-form>
      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>会员</em>
        </template>
        <b-dropdown-item href="#">设置</b-dropdown-item>
        <b-dropdown-item href="#">登出</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
export default {
  methods: {
      handleSelect (key) {
      if (key === 'logo') {
        this.$router.push('/')
      } else if (key === 'quit') {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
.header {
  height: 4rem;
}
.menu {
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 4rem;
  top: 0;
  left: 0;
  
}
.menu-col {
/* background-color: aliceblue; */
  /* border: 10; */
  /* width: 100%; */
  /* border-color: aqua; */
}
.logo {
  width: 50px;
  height: 50px;
  vertical-align: middle;
}
</style>


