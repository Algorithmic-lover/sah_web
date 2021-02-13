<template>
    <!--  ref(反射)-->
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="loginContainer">
        <h3 class="loginTitle">系统登陆</h3>
        <el-form-item label="用户名" prop="username">
            <el-input type="text" aotu-complete="false" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
            <el-input type="password" aotu-complete="false" v-model="loginForm.password"
                      placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item prop="code">
            <el-input type="text" v-model="loginForm.code" auto-complete="false" placeholder="点击图片更换验证码"
                      style="width: 160px;margin-right: 5px"></el-input>
                        <img :src="captchaUrl" @click="updateCaptcha()">
        </el-form-item>

        <el-form-item>
            <el-checkbox v-model="checked">记住我</el-checkbox>
            <el-button type="primary" @click="submitForm('loginForm')" style="margin-left: 20px">登录</el-button>
            <el-button @click="resetForm('loginForm')" style="margin-left: 20px">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>

export default {
    data() {
        return {
            captchaUrl: '/captcha?time'+new Date(),//'/captcha'表示接口地址,get请求方式,添加参数为了动态变换验证码
            loginForm: {//和v-model绑定
                username: 'admin',
                password: '123',
                code: ''
            },
            checked: false,
            rules: {
                //以下属性和loginForm属性不同，和prop绑定
                username: [
                    {required: true, message: "请输入用户名", trigger: 'blur'}
                ],
                password: [
                    {required: true, message: "请输入密码", trigger: 'blur'}
                ],
                code: [
                    {required: true, message: "请输入验证码", trigger: 'blur'}
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {//形参为formName,实参传入loginForm
            const _this = this
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.postRequest('login',this.loginForm).then(function (resp) {
                        if (resp.data == "success"){
                            _this.$alert("登录成功！", "消息", {
                                confirmButtonText: "确定",
                                callback: action => {
                                    _this.$router.push("/homePage")
                                }
                            })
                        }
                    })

                    // this.$axios.post('http://localhost:8181/login', this.loginForm).then(function (response) {
                    //     if (response.data == "success") {
                    //         _this.$alert("登录成功！", "消息", {
                    //             confirmButtonText: "确定",
                    //             callback: action => {
                    //                 _this.$router.push("/BookManager")
                    //             }
                    //         })
                    //     } else {
                    //         _this.$route.push("/Login")
                    //     }
                    // })

                } else {
                    this.$message.error('请输入所有字段！');
                    return false;
                }
            });
        },
        updateCaptcha() {
            this.captchaUrl = "/captcha?time" + new Date();
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
<style>
    .loginContainer {
        border-radius: 15px; /*边框*/
        background-clip: padding-box; /*背景*/
        margin: 180px auto;
        width: 350px;
        padding: 15px 35px 35px 15px; /*内边距*/
        background: aliceblue; /*背景色*/
        border: 1px solid #eeeeee;
        box-shadow: 0 0 25px #B3C0D1;
    }

    .loginTitle {
        margin: 0px auto 40px auto;
        text-align: center;
    }

    .el-form-item__content{
        display: flex;
        align-content: center;
    }
</style>
