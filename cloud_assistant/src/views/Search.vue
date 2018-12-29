<template>
    <div>the search page</div>
</template>

<style>
</style>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            refreshFlag: state => state.refreshInfo.refreshFlag,
            refreshCount: state => state.refreshInfo.refreshCount
        })
    },
    watch: {
        refreshFlag: function(val) {
            console.log(`search:${val}`);
        }
    }
};
</script>
