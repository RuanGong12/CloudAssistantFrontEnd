/*
 * @Author: double7
 * @Date: 2018-12-31 21:10:09
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-31 22:35:09
 */

<template>
    <div>
        <van-collapse v-model="activeNames">
            <van-collapse-item title="筛选" name="1" icon="filter-o">
                <van-cell
                    title="时间"
                    :value="selectedDate"
                    icon="calender-o"
                    clickable
                    @click="showDateSelecter"
                />
            </van-collapse-item>
        </van-collapse>
        <div>
            <van-popup v-model="datePopuoFlag" position="bottom" @click-overlay="refreshList">
                <van-picker :columns="dateData" @change="onChange"/>
            </van-popup>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeNames: [],
            datePopuoFlag: false,
            dateData: ['全部', '最近三天', '最近一周', '最近两周'],
            selectedDate: '全部'
        };
    },
    methods: {
        showDateSelecter() {
            this.datePopuoFlag = true;
        },
        onChange(picker, value, index) {
            this.selectedDate = value;
        },
        refreshList() {
            this.$emit('onRefresh', this.selectedDate);
        }
    }
};
</script>
