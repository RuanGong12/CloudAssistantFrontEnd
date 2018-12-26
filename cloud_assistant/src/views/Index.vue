<template>
    <div>
        <index-header></index-header>
        <index-top></index-top>
        <index-channel></index-channel>
        <course-recommend></course-recommend>
        <index-footer></index-footer>
        <footer></footer>
    </div>
</template>

<script>
import IndexHeader from '@/components/IndexHeader.vue';
import IndexTop from '@/components/IndexTop.vue';
import IndexChannel from '@/components/IndexChannel.vue';
import CourseRecommend from '@/components/CourseRecommend.vue';
import IndexFooter from '@/components/IndexFooter.vue';

export default {
    components: {
        IndexHeader: IndexHeader,
        IndexTop: IndexTop,
        IndexChannel: IndexChannel,
        CourseRecommend: CourseRecommend,
        IndexFooter: IndexFooter
    }
};
</script>
