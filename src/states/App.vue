<template>
  <div id="app">
    <!-- Navigation -->
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link to="/" class="navbar-brand">Enterprise</router-link>
            </div>
            <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav side-nav">
                    <li>
                        <router-link to="/" data-toggle="collapse" data-target=".navbar-ex1-collapse"><i class="fa fa-fw fa-dashboard"></i>Home</router-link>
                    </li>
                    <li>
                        <router-link to="/about" data-toggle="collapse" data-target=".navbar-ex1-collapse"><i class="fa fa-fw fa-desktop"></i>About</router-link>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>

        <div id="page-wrapper">
            <router-view></router-view>
        </div>
        <!-- /#page-wrapper -->
  </div>
</template>

<script>
import Hello from '../components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
