<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <!--model注入数据,rules注入规则-->
        <el-form-item label="编号"><!--去掉prop属性的校验-->
            <el-input v-model="ruleForm.id" readonly></el-input>
        </el-form-item>
        <el-form-item label="书名" prop="bookName"> <!--prop绑定rules中的name-->
            <el-input v-model="ruleForm.bookName"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    data() {
        return {
            ruleForm: {
                id: '',
                bookName: '',
                author: '',
            },
            rules: {
                bookName: [
                    //required 是否必填；message：提示信息；trigger: 触发规则，blur-失去焦点出发
                    {required: true, message: '请输入图书名称', trigger: 'blur'}
                ],
                author: [
                    {required: true, message: '请输入作者', trigger: 'blur'},
                    {min: 1, max: 10, message: '长度在 1 到 20 个字符', trigger: 'blur'}
                ]
            }
        };
    },
    created() {
        const _this = this
        this.gettRequest("batisBook/findById?id="+this.$route.query.id).then(function (response) {
            _this.ruleForm = response.data
        })
    },
    methods: {
        submitForm(formName) {
            const _this = this
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.putRequest('batisBook/update',this.ruleForm).then(function (response) {
                        if (response.data == "success") {
                            _this.$alert("修改成功！", "消息", {
                                confirmButtonText: "确定",
                                callback: action => {
                                    // _this.$router.replace("/BookManager")
                                    _this.$router.push("/BookManager")
                                }
                            })
                        } else {
                            return false
                        }
                    })
                } else {
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>