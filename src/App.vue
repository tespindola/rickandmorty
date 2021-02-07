<template>
    <div id="nav">
        <router-link to="/Episodes">Episodes</router-link> | 
        <router-link to="/Locations">Locations</router-link> | 
        <router-link to="/Characters">Characters</router-link>
    </div>
    <router-view/>
    <hr>
    <nav>
        <router-link :to="prevComp">Prev</router-link>
        <router-link :to="nextComp">Next</router-link>
    </nav>
</template>

<script>
import { computed, provide, ref } from 'vue';
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
        provide("info", info); // Envia la info a todos los componentes hijos de App.vue

        const prevComp = computed(() => ({
            name: route.name,
            params: {page: info.value.prev || route.params.page}
        })); // Es una mini funcion computada, osea que se ejecutara cuando los valores cambien dentro

        const nextComp = computed(() => ({
            name: route.name,
            params: {page: info.value.next || route.params.page}
        }));

        return { info, route, prevComp, nextComp };
    }
}
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
