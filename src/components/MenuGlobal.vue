<template>
    <div class="global-menu navbar">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/"><span class="icon"><i class="fa fa-home"></i></span></router-link>
            <router-link class="navbar-item" to="/canvas">canvas</router-link>
            <router-link class="navbar-item" to="/search-example">search-example</router-link>
            <router-link class="navbar-item" to="/firebase">Firebase</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'global-menu',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
