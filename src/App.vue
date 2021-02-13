<template>
    <div>
        <el-container>
            <el-header>标题</el-header>
        </el-container>
        <el-container style="height: 100%; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu default-openeds router>
                    <!--          //element-ui中index属性代表要渲染的id很重要。-->
                    <el-submenu v-for="(item,index) in $router.options.routes" :key="index" :index="index+''"
                                v-if="item.show==true">
                        <template slot="title"><i class="el-icon-message"></i>{{ item.name }}{{ index }}</template>
                        <el-menu-item v-for="(item1,index1) in item.children" :key="index1" :index="item1.path"
                                      :class="item1.path==$route.path?'is-active':''">{{ item1.name }}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <!--该router-view表示在el-main区域开窗口，才能把index的子页面pagex显示出来-->
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>

<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>

<script>
// export default {
//     data() {
//         return {
//             tableData: Array(20).fill(item)
//         }
//     }
// };
</script>
