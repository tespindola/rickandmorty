
import  {request}  from "graphql-request";
import { inject, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

export function useQuery(query) {
    let results = ref([]);
    const info = inject("info"); // Recibimos la informacion del padre
    const route = useRoute();
    watchEffect(() => {
        request("https://rickandmortyapi.com/graphql", query, {
            page: parseInt(route.params.page)
        }).then(({ data }) => {
            results.value = data.results;
            info.value = data.info;
        });
    });

    return {
        results,
    }
}