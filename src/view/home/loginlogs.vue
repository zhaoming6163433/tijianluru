<template>
    <div class="loginlogs" v-loading="loading">
       <div class="divhead searchcon">
            <span class="bigsize">数据列表</span>
        </div>
        <div class="tablepadding">
                <!--表格组件-->
                <el-table :data="tablelist" tooltip-effect="dark"  style="width: 100%" >
                    <el-table-column  label="时间" prop="time"></el-table-column>
                    <el-table-column  label="IP" prop="ip"></el-table-column>
                    <el-table-column  label="地区" prop="address"></el-table-column>
                    <el-table-column  label="浏览器" prop="brower"></el-table-column>
                </el-table>
                <div></div>
                <el-pagination
                    class="pagingpage pagingpage2"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="10"
                    layout="total, prev, pager, next, jumper"
                    :total="400">
                </el-pagination>
            </div>
    </div>
</template>

<script>
import util from 'src/util/util.js'

export default {
    name: 'loginlogs',
    props : [],
    data () {
        return {
            loading:true,
            currentPage:1,//当前页面
            tablelist:[
                {time:'2017-11-13 11:36:54',ip:'183.14.135.1',address:'本溪县小市实验小学',brower:'Firefox 45'},
                {time:'2017-11-13 11:36:54',ip:'183.14.135.1',address:'本溪县小市实验小学',brower:'Firefox 45'},
                {time:'2017-11-13 11:36:54',ip:'183.14.135.1',address:'本溪县小市实验小学',brower:'Firefox 45'},
                {time:'2017-11-13 11:36:54',ip:'183.14.135.1',address:'本溪县小市实验小学',brower:'Firefox 45'},
                {time:'2017-11-13 11:36:54',ip:'183.14.135.1',address:'本溪县小市实验小学',brower:'Firefox 45'},
                {time:'2017-11-13 11:36:54',ip:'183.14.135.1',address:'本溪县小市实验小学',brower:'Firefox 45'},
                {time:'2017-11-13 11:36:54',ip:'183.14.135.1',address:'本溪县小市实验小学',brower:'Firefox 45'},
                {time:'2017-11-13 11:36:54',ip:'183.14.135.1',address:'本溪县小市实验小学',brower:'Firefox 45'},
                {time:'2017-11-13 11:36:54',ip:'183.14.135.1',address:'本溪县小市实验小学',brower:'Firefox 45'},
                {time:'2017-11-13 11:36:54',ip:'183.14.135.1',address:'本溪县小市实验小学',brower:'Firefox 45'}
            ]
        }
    },
    components: {

    },
    watch:{

    },
    created(){

    },
    methods : {
        //分页改变时候
        handleCurrentChange(val){
            console.log(val)
        }
    },
    mounted(){
        setTimeout(()=>{
            this.loading = false;
        },1000);
    }
}

</script>

<style lang="scss" scoped>
    .loginlogs{

    }
</style>
