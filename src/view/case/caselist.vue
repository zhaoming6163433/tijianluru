<template>
    <div class="caselist">
        <div class="divhead searchead">
                <span>输入搜索</span>
                <div class="input_div"><input class="app_input_a" v-model="tijiano"  placeholder="姓名 / 体检号 / 病历号" type="text"/></div>
                <div class="app_btn_in resultbtn">查询结果</div>
        </div>
        <div class="divhead searchcon">
            <span class="bigsize">数据列表</span>
            <div class="app_btn_in addbtn"><div><img src="../../../static/img/icon_jia.png"/><span>添加</span></div></div>
            <div class="app_btn_in_w">设置标签</div>
            <el-select class="sortype" v-model="sortype" placeholder="排序方式">
                <el-option
                v-for="item in sortypes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="checkc tablepadding">
            <!--表格组件-->
            <el-table :data="tablelist" tooltip-effect="dark" ref="multipleTable" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column  type="selection"></el-table-column>
                <el-table-column  label="病历号" prop="caseno"></el-table-column>
                <el-table-column  label="体检号" prop="tijiano"></el-table-column>
                <el-table-column  label="姓名" prop="name"></el-table-column>
                <el-table-column  label="手机号" prop="phone"></el-table-column>
                <el-table-column  label="标签" prop="label"></el-table-column>
                <el-table-column  label="备注" prop="note" min-width="189"></el-table-column>
                <el-table-column  label="账户启用状态" align="center" min-width="120" style="text-aligen:center">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.statu" @change="checkstatu(scope.row)" active-color="#1CC09F" inactive-color="#999999"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center" width="189" style="text-aligen:center">
                    <template slot-scope="scope">
                        <el-button @click.native.prevent="checkreport(scope.$index, tablelist, 0)" type="text" size="small"><span class="scopestate1">查看</span></el-button>
                        <div class="navline"></div>
                        <el-button @click.native.prevent="checkreport(scope.$index, tablelist, 1)" type="text" size="small"><span class="scopestate1">编辑</span></el-button>
                        <div class="navline"></div>
                        <el-button @click.native.prevent="checkreport(scope.$index, tablelist, 2)" type="text" size="small"><span class="scopestate1">删除</span></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-checkbox class="checkedall" v-model="checkedall" @change="toggleSelection">全选</el-checkbox>
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
    name: 'caselist',
    props : [],
    data () {
        return {
            tijiano:'',//编号
            sortype:'',
            checkedall:false,//全选
            currentPage:1,//当前页面
            sortypes:[
                {value: '0',label: '正序'},
                {value: '1',label: '倒序'}
            ],//排序方式
            batchandle:'',//批量操作
            batchandles:[
                {value: '0',label: '删除'},
                {value: '1',label: '下载'},
                {value: '2',label: '不知道'}
            ],
            tablelist:[
                {caseno:'890211',tijiano:'20171943567378',name:'戴永明',phone:'18694098908',label:'体检用户',note:'--',statu:true},
                {caseno:'890211',tijiano:'20171943567378',name:'戴永明2',phone:'18694098908',label:'体检用户',note:'--',statu:true},
                {caseno:'890211',tijiano:'20171943567378',name:'戴永明',phone:'18694098908',label:'体检用户',note:'--',statu:false},
                {caseno:'890211',tijiano:'20171943567378',name:'戴永明',phone:'18694098908',label:'体检用户',note:'--',statu:true},
                {caseno:'890211',tijiano:'20171943567378',name:'戴永明',phone:'18694098908',label:'体检用户',note:'--',statu:true},
                {caseno:'890211',tijiano:'20171943567378',name:'戴永明',phone:'18694098908',label:'体检用户',note:'--',statu:false},
                {caseno:'890211',tijiano:'20171943567378',name:'戴永明',phone:'18694098908',label:'体检用户',note:'--',statu:true},
                {caseno:'890211',tijiano:'20171943567378',name:'戴永明',phone:'18694098908',label:'体检用户',note:'--',statu:true},
                {caseno:'890211',tijiano:'20171943567378',name:'戴永明',phone:'18694098908',label:'体检用户',note:'--',statu:false},
                {caseno:'890211',tijiano:'20171943567378',name:'戴永明',phone:'18694098908',label:'体检用户',note:'--',statu:true}
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
        },
        //账户启用状态
        checkstatu(row){
            console.log(row)
        }
    },
    mounted(){

    }
}

</script>

<style lang="scss" scoped>
    .caselist{
        .app_btn_in_w{
            position: absolute;
            right:7.5rem;
            width:5.5rem;
            height: 1.65rem;
            line-height: 1.65rem;
            top:0.38rem;
        }
        .addbtn{
            right:13.5rem;
        }
        .checkc{
            .tablelist{
                padding:1.35rem;
                color:$gray;
            }
            .checkedall{
                @include font(0.7rem,0.7rem);
                margin: 1.85rem 0 0 .75rem;
            }
        }
        .downloadbtn{
            width:4.5rem;
        }
    }
</style>
