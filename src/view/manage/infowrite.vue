<template>
    <div class="infowrite">
        <div class="divhead searchead">
            <span class="middlesize">输入搜索</span>
            <div class="input_div"><input class="app_input_a" v-model="searchname"  placeholder="姓名" type="text"/></div>
            <div class="app_btn_in resultbtn2">查询</div>
        </div>
        <div class="divhead searchcon">
            <span class="bigsize">家庭医师列表</span>
        </div>
        <div class="checkc tablepadding">
            <!--表格组件-->
            <el-table :data="tablelist"  tooltip-effect="dark" ref="multipleTable" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column  type="selection"></el-table-column>
                <el-table-column label="序号" width="53" type="index"></el-table-column>
                <el-table-column  label="一级科室" prop="stairoffice"></el-table-column>
                <el-table-column  label="二级科室" prop="secoffice"></el-table-column>
                <el-table-column  label="医师姓名" prop="docname"></el-table-column>
                <el-table-column  label="性别" width="53" prop="sex"></el-table-column>
                <el-table-column  label="民族" width="53" prop="nation"></el-table-column>
                <el-table-column  label="联系电话" prop="phone"></el-table-column>
                <el-table-column  label="医师编码" min-width="88" prop="dochisno">
                    <template slot-scope="scope">
                        <el-input v-model="tablelist[scope.$index]['dochis1']"></el-input>
                    </template>
                </el-table-column>
                <el-table-column  label="医师名称" min-width="88" prop="dochisname">
                    <template slot-scope="scope">
                        <el-input v-model="tablelist[scope.$index]['dochis2']"></el-input>
                    </template>
                </el-table-column>
                <el-table-column  label="医师所在科室编码" min-width="88" prop="dochisoffice">
                    <template slot-scope="scope">
                        <el-input v-model="tablelist[scope.$index]['dochis3']"></el-input>
                    </template>
                </el-table-column>
                <el-table-column  label="医师所在科室名称" min-width="88" prop="dochisoffname">
                    <template slot-scope="scope">
                        <el-input v-model="tablelist[scope.$index]['dochis4']"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center" width="130" style="text-aligen:center">
                    <template slot-scope="scope">
                        <el-button @click.native.prevent="checkreport(scope.$index, tablelist, 0)" type="text" size="small"><span class="scopestate1">保存</span></el-button>
                        <div class="navline"></div>
                        <el-button @click.native.prevent="checkreport(scope.$index, tablelist, 1)" type="text" size="small"><span class="scopestate1">详情</span></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-checkbox class="checkedall" v-model="checkedall" @change="toggleSelection">全选</el-checkbox>
            <div class="app_btn_in downloadbtn">批量保存</div>
            <el-pagination
                class="pagingpage"
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
    name: 'infowrite',
    props : [],
    data () {
        return {
            searchname:'',
            checkedall:false,//全选
            checkedvalue:[],//选中的值
            currentPage:1,//当前页面
            tablelist:[
                {stairoffice:'皮肤病',secoffice:'功能神经外科',docname:'刮大白',sex:'男',nation:'满',phone:'1388888888',dochis1:'',dochis2:'',dochis3:'',dochis4:''},
                {stairoffice:'皮肤病',secoffice:'功能神经外科',docname:'刮大白',sex:'男',nation:'满',phone:'1388888888',dochis1:'',dochis2:'',dochis3:'',dochis4:''},
                {stairoffice:'皮肤病',secoffice:'功能神经外科',docname:'刮大白',sex:'男',nation:'满',phone:'1388888888',dochis1:'',dochis2:'',dochis3:'',dochis4:''},
                {stairoffice:'皮肤病',secoffice:'功能神经外科',docname:'刮大白',sex:'男',nation:'满',phone:'1388888888',dochis1:'',dochis2:'',dochis3:'',dochis4:''},
                {stairoffice:'皮肤病',secoffice:'功能神经外科',docname:'刮大白',sex:'男',nation:'满',phone:'1388888888',dochis1:'',dochis2:'',dochis3:'',dochis4:''},
                {stairoffice:'皮肤病',secoffice:'功能神经外科',docname:'刮大白',sex:'男',nation:'满',phone:'1388888888',dochis1:'',dochis2:'',dochis3:'',dochis4:''},
                {stairoffice:'皮肤病',secoffice:'功能神经外科',docname:'刮大白',sex:'男',nation:'满',phone:'1388888888',dochis1:'',dochis2:'',dochis3:'',dochis4:''},
                {stairoffice:'皮肤病',secoffice:'功能神经外科',docname:'刮大白',sex:'男',nation:'满',phone:'1388888888',dochis1:'',dochis2:'',dochis3:'',dochis4:''}
            ]
        }
    },
    components: {

    },
    created(){

    },
    methods : {
        //选中的值
        handleSelectionChange(value){
            this.checkedvalue = value;
            if(this.checkedvalue.length<this.tablelist.length){
                this.checkedall = false;
            }else{
                this.checkedall = true;
            }
        },
        //全选
        toggleSelection(val){
            if (this.checkedall&&this.checkedvalue.length<this.tablelist.length) {
                this.tablelist.forEach(i => {
                    this.$refs.multipleTable.toggleRowSelection(i,true);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        //分页改变时候
        handleCurrentChange(val){
            console.log(val)
        },
        //操作
        checkreport(index,list,type){
            console.log(index);
            console.log(list);
            console.log(type);
        }
    },
    mounted(){

    }
}

</script>

<style lang="scss" scoped>
    .infowrite{

    }
</style>
