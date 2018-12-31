/*
 * @Author: double7
 * @Date: 2018-12-31 21:10:09
 * @Last Modified by: double7
 * @Last Modified time: 2018-12-31 23:24:02
 */

<template>
    <div>
        <van-collapse v-model="activeNames">
            <van-collapse-item title="筛选" name="1" icon="filter-o">
                <van-cell
                    title="时间"
                    :value="selectedTimeShowData"
                    icon="calender-o"
                    clickable
                    @click="showDateSelecter"
                />
                <van-cell
                    title="学院"
                    :value="selectedSchoolShowData"
                    icon="calender-o"
                    clickable
                    @click="showSchoolSelecter"
                />
            </van-collapse-item>
        </van-collapse>
        <div>
            <van-popup v-model="datePopupFlag" position="bottom" @click-overlay="refreshList">
                <van-picker :columns="dateData" @change="onTimeChange"/>
            </van-popup>
        </div>
        <div>
            <van-popup v-model="schoolPopupFlag" position="bottom" @click-overlay="refreshList">
                <van-picker :columns="schoolData" @change="onSchoolChange"/>
            </van-popup>
        </div>
    </div>
</template>

<script>
const Week = [
    '全部',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
    '星期日'
];
const Time = [
    '全部',
    '第一大节',
    '第二大节',
    '第三大节',
    '第四大节',
    '第五大节'
];

const schools = [
    '全部',
    '计算机学院',
    '材料学院',
    '机械学院',
    '物理学院',
    '光电学院',
    '数学学院'
];
export default {
    data() {
        return {
            activeNames: [],
            datePopupFlag: false,
            schoolPopupFlag: false,
            selectedWeek: '全部',
            selectedTime: '全部',
            selectedSchoolShowData: '全部',
            dateData: [
                {
                    values: Week
                },
                {
                    values: []
                }
            ],
            schoolData: schools
        };
    },
    methods: {
        showDateSelecter() {
            this.datePopupFlag = true;
        },
        showSchoolSelecter() {
            this.schoolPopupFlag = true;
        },
        onTimeChange(picker, values, index) {
            this.selectedWeek = values[0];
            if (!values[1]) {
                this.selectedTime = '全部';
            } else {
                this.selectedTime = values[1];
            }
            if (values[0] === '全部') {
                picker.setColumnValues(1, []);
                this.selectedTime = '全部';
            } else {
                picker.setColumnValues(1, Time);
            }
            // picker.setColumnValues(1, citys[values[0]]);
        },
        refreshList() {
            this.$emit('onRefresh', this.selectedWeek, this.selectedTime, this.selectedSchoolShowData);
        },
        onSchoolChange(picker, value, index) {
            this.selectedSchoolShowData = value;
        }
    },
    computed: {
        selectedTimeShowData() {
            if (this.selectedWeek === '全部' || this.selectedTime === '全部') {
                return this.selectedWeek;
            } else {
                return this.selectedWeek + ' ' + this.selectedTime;
            }
        }
    }
};
</script>
