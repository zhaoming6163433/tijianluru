<template>
    <div class="caseset">
        <div class="divhead searchcon">
            <span class="bigsize">数据列表</span>
            <div class="app_btn_in addbtn"><div><img src="../../../static/img/icon_jia.png"/><span>添加</span></div></div>
        </div>
        <div class="checkc tablepadding">
            <!--表格组件-->
            <el-table :data="tablelist" tooltip-effect="dark" ref="multipleTable" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column  type="selection"></el-table-column>
                <el-table-column  label="标签名称" prop="name"></el-table-column>
                <el-table-column  label="会员人数" prop="num"></el-table-column>
                <el-table-column  label="标签说明" prop="info" min-width="280"></el-table-column>
                <el-table-column label="操作" align="center" width="189" style="text-aligen:center">
                    <template slot-scope="scope">
                        <el-button @click.native.prevent="checkreport(scope.$index, tablelist, 0)" type="text" size="small"><span class="scopestate1">编辑</span></el-button>
                        <div class="navline"></div>
                        <el-button @click.native.prevent="checkreport(scope.$index, tablelist, 1)" type="text" size="small"><span class="scopestate1">删除</span></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-checkbox class="checkedall"  v-model="checkedall" @change="toggleSelection">全选</el-checkbox>
            <el-select  class="piliang" v-model="batchandle" placeholder="批量操作">
                <el-option
                v-for="item in batchandles"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <div class="app_btn_in downloadbtn">确定</div>
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
    name: 'caseset',
    props : [],
    data () {
        return {
            checkedall:false,//全选
            checkedvalue:[],//选中的值
            currentPage:1,//当前页面
            batchandle:'',//批量操作
            batchandles:[
                {value: '0',label: '删除'},
                {value: '1',label: '下载'},
                {value: '2',label: '不知道'}
            ],
            tablelist:[
                {name:'体检用户',num:'10000',info:'体检用户基础病历体检用户基础病历'},
                {name:'体检用户',num:'10000',info:'体检用户基础病历体检用户基础病历'},
                {name:'体检用户',num:'10000',info:'体检用户基础病历体检用户基础病历'},
                {name:'体检用户',num:'10000',info:'体检用户基础病历体检用户基础病历'},
                {name:'体检用户',num:'10000',info:'体检用户基础病历体检用户基础病历'},
                {name:'体检用户',num:'10000',info:'体检用户基础病历体检用户基础病历'},
                {name:'体检用户',num:'10000',info:'体检用户基础病历体检用户基础病历'},
                {name:'体检用户',num:'10000',info:'体检用户基础病历体检用户基础病历'},
                {name:'体检用户',num:'10000',info:'体检用户基础病历体检用户基础病历'},
                {name:'体检用户',num:'10000',info:'体检用户基础病历体检用户基础病历'}
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
    .caseset{
        .addbtn{
            right:1.5rem;
        }
        .downloadbtn{
            width:4.5rem;
        }
    }
</style>
