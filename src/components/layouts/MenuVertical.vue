<template>
  <ul class="vertical-menu">
    <li>
      <router-link to="./">
        <i class="fa fa-home"></i>
      </router-link>

      <ul class="submenu">
        <li>
          <router-link to="#"> Dashboard </router-link>
        </li>
        <li>
          <router-link to="#"> Account </router-link>
        </li>
      </ul>
    </li>
    <li>
      <router-link to="./">
        <i class="fa fa-home"></i>
      </router-link>

      <ul class="submenu">
        <li>
          <router-link to="#"> Dashboard </router-link>
        </li>
        <li>
          <router-link to="#"> Account </router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss">
@import "@/assets/scss/index.scss";

.vertical-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  li {
    &:hover {
      background: #f3f3f3;

      .submenu {
        display: block;
        z-index: 1031;
      }
    }
    a {
      display: block;
      text-align: center;
      padding: 6px 0px;
      border-bottom: 1px solid #e5e5e5;
    }
  }

  .submenu {
    position: absolute;
    background: #e5e5e5;
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;
    left: $left-nav-width;
    top: 0;
    width: 150px;
    height: calc(100vh - $top-nav-height);

    text-align: left;

    li {
      padding: 3px 10px;
      font-size: 14px;
      a {
        text-align: left;
        border-bottom: none;
      }
    }
  }
}
</style>