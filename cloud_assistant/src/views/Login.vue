<template>
    <div>
        <div class="cg">
            <van-cell-group>
                <van-field
                    v-model="username"
                    label="用户名"
                    icon="question-o"
                    placeholder="请输入用户名"
                />

                <van-field
                    v-model="password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                />
            </van-cell-group>
        </div>
        <div class="b1">
            <van-button type="danger" round=true size="large" @click="LoginPage">登录</van-button>
        </div>
        <div class="b2">
            <van-button type="warning" round=ture size="large" @click=register>注册</van-button>
        </div>
    </div>
</template>

<style>

.b1{
    position: absolute;
    top: 50%;
    left: 5%;
    width: 90%;
    height: 90%;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    z-index: 1000;
}

.b2{
    position: absolute;
    top: 60%;
    left: 5%;
    width: 90%;
    height: 90%;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    z-index: 1000;
}
.cg{
    position: absolute;
    top: 35%;
    left: 5%;
    width: 90%;
    height: 90%;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    z-index: 1000;
}
</style>

<script>

</script>
