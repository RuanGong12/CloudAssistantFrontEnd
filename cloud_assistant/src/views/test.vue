<template>
    <div>
        {{ list[0].name }}
        <div>
            <van-button @click="debug"></van-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [{ name: 'double' }]
        };
    },
    methods: {
        debug() {
            this.list = [{ name: 'asd' }];
        }
    }
};
</script>
