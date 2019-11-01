<template>
    <div><h2>San Antonio Data</h2>
    <Results :groups="groups"/>
    </div>
</template>

<script>
import Results from "@/components/Results";
import { getFolders } from "@/services";

export default {
    components: {
        Results
    },

    data() {
        return {
        groups: null,
        };
    },

    methods: {
        
    },

    async mounted() {
        this.groups = await getFolders();
    }
};
</script>