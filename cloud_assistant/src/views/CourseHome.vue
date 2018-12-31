<template>
    <div>
        <van-cell title="按条件筛选" is-link @click="showpopup = true"/>
        <van-popup v-model="showpopup" position="bottom">
            <van-picker
                show-toolbar
                title="按条件筛选"
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
            columns3: {
                Group1: ['-地点-', '中关村校区', '良乡校区'],
                Group2: [
                    '-时间-',
                    '星期一',
                    '星期二',
                    '星期三',
                    '星期四',
                    '星期五',
                    '星期六',
                    '星期日'
                ],
                Group3: [
                    '-开课学院-',
                    '宇航学院',
                    '机电学院',
                    '机械与车辆学院',
                    '光电学院',
                    '自动化学院',
                    '计算机学院',
                    '材料学院',
                    '化学与化工学院',
                    '生命学院',
                    '数学与统计学院',
                    '物理学院',
                    '管理与经济学院',
                    '人文社会科学学院',
                    '马克思主义学院',
                    '法学院',
                    '外国语学院',
                    '设计与艺术学院'
                ]
            }
        };
    },
    computed: {
        columns() {
            return {};
        }
    },
    methods: {}
};
</script>
