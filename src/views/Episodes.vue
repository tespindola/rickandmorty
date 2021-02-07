<template>
    <h1>Episodes</h1>
    <ul>
        <li v-for="episode in episodes" :key="episode.id">
            {{ episode.name }}
        </li>
    </ul>
</template>

<script>
import  {request}  from "graphql-request";
import { ref } from 'vue';

export default {
    setup(){
        let episodes = ref([]);
        request("https://rickandmortyapi.com/graphql", /* GraphQL */ `
            query {
                episodes {
                    info {
                        count
                        pages
                        next
                        prev
                    },
                    results {
                        id
                        name
                        air_date
                        episode
                        created
                    }
                }
            }
        `).then(data => {
            episodes.value = data.episodes.results;
        });

        return {
            episodes,
        }
    }
}
</script>

<style>

</style>