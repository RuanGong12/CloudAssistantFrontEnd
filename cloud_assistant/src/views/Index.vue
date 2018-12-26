<template>
    <div>
        <index-header></index-header>
        <div></div>
        <footer></footer>
        <el-button style="margin-top:20px;">index</el-button>
    </div>
</template>

<script>
import IndexHeader from '@/components/IndexHeader.vue';

export default {
    components: {
        IndexHeader: IndexHeader
    }
};
</script>
