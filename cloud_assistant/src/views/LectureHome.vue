<template>
    <div>
        <van-cell title="按时间筛选" is-link @click="showpopup = true"/>
        <van-popup v-model="showpopup" position="bottom">
            <van-picker
                show-toolbar
                title="按时间筛选"
                :columns="columns"
                @cancel="showpopup = false"
                @confirm="showpopup = false"
            />
        </van-popup>
    </div>
</template>

<style>
</style>

<script>
export default {
    data() {
        return {
            showpopup: false,
            columns: ['-请选择-', '未来三天', '未来一周', '未来一个月']
        };
    },
    methods: {}
};
</script>
