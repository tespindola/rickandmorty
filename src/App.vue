<template>
    <div id="nav">
        <router-link to="/Episodes">Episodes</router-link> | 
        <router-link to="/Locations">Locations</router-link> | 
        <router-link to="/Characters">Characters</router-link>
    </div>
    <router-view/>
    <hr>
    <nav>
        {{ route.params.page }}
        <router-link to="/">Prev</router-link> | 
        <router-link to="/">Next</router-link>
    </nav>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
    setup(){
        const info = ref({
            count: 0,
            pages: 0,
            next: 0,
            prev: 0,
        });

        const route = useRoute();

        return { info, route }
    }
}
</script>

<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'

    const info = ref({
        count: 0,
        pages: 0,
        next: 0,
        prev: 0,
    });

    const route = useRoute();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
