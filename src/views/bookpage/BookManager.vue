<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.15.0/lib/index.js"></script>
<!--当el-table元素中注入data对象数组后，在el-table-column中用prop属性来对应对象中的键名即可填入数据，
用label属性来定义表格的列名。可以使用width属性来定义列宽。-->
<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="id"
                label="编号"
                width="180">
            </el-table-column>
            <el-table-column
                prop="bookName"
                label="书名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="author"
                label="作者"
                width="180">
            </el-table-column>
            <el-table-column
                prop="right"
                label="操作">
                <template slot-scope="scope">
                    <!--通过 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据，用法参考 demo。-->
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            background
            @current-change="page"
            :page-size="2"
            layout="prev, pager, next"
            :total=total>
        </el-pagination>
    </div>
</template>


<script>
export default {
    data() {
        return {
            total: 1,
            tableData: [{
                id: '2016-05-02',
                bookName: '王小虎',
                author: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: '2016-05-04',
                bookName: '王小虎',
                author: '上海市普陀区金沙江路 1517 弄'
            }]
        }
    },
    created() {
        this.getBook()
        //this.page()
    },
    methods: {
        handleEdit(index, row) {
            // console.log(index, row);
            this.$router.push({
                path: "/update",
                query: {
                    id: row.id
                }
            })
        },
        handleDelete(index, row) {
            const _this = this
            this.deleteRequest('batisBook/delete/' + row.id).then(function (resp) {
                _this.$alert(row.bookName + '已删除', '消息', {
                    confirmButtonText: '确定！',
                    callback: action => {
                        window.location.reload();
                    }
                })
            })
        },
        page(currentPage) {
            const _this = this
            const toPage = currentPage
            this.gettRequest('batisBook/findPage/' + toPage + '/2').then(function (response) {
                console.log(response)
                _this.tableData = response.data.records
                _this.total = response.data.total
            })
        },
        getBook() {
            const _this = this
            this.gettRequest('batisBook/findPage/1/2').then(function (response) {
                console.log(response)
                _this.tableData = response.data.records
                // response.data.ElementTotal,jpa返回的json？
                _this.total = response.data.total
            })
        }
    }
}
</script>