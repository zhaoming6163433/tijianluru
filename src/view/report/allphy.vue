<template>
    <div class="allphy" v-loading="loading">
            <div class="divhead searchead">
                <span>输入搜索</span>
                <div class="input_div"><input class="app_input_a" v-model="tijiano"  placeholder="体检人姓名 / 体检编号" type="text"/></div>
                <span class="comtime">提交时间</span>
                <div class="input_div">
                    <el-date-picker
                        class="myeldata wd"
                        v-model="comtime"
                        type="datetime"
                        placeholder="请选择时间"
                        align="right">
                    </el-date-picker>
                </div>
                <div class="app_btn_in resultbtn">查询结果</div>
                <div class="app_btn_in_w resultbtn">高级检索</div>
            </div>
            <div class="divhead searchcon">
                <span class="bigsize">数据列表</span>
                <div class="app_btn_in addbtn"><div><img src="../../../static/img/icon_jia.png"/><span>添加</span></div></div>
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
                    <el-table-column  label="体检编号" prop="no"></el-table-column>
                    <el-table-column  label="提交时间" prop="time"></el-table-column>
                    <el-table-column  label="联系电话" prop="phone"></el-table-column>
                    <el-table-column  label="姓名" prop="name"></el-table-column>
                    <el-table-column  label="体检类型" prop="type"></el-table-column>
                    <el-table-column  label="用户来源" prop="from"></el-table-column>
                    <el-table-column  label="体检状态" prop="statu"></el-table-column>
                    <el-table-column label="操作" align="center" width="189" style="text-aligen:center">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="checkreport(scope.$index, tablelist, 0)" type="text" size="small"><span class="scopestate1">查看报告</span></el-button>
                            <div class="navline"></div>
                            <el-button @click.native.prevent="checkreport(scope.$index, tablelist, 1)" type="text" size="small"><span class="scopestate2">下载报告</span></el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-checkbox class="checkedall" v-model="checkedall" @change="toggleSelection">全选</el-checkbox>
                <div class="app_btn_in downloadbtn">批量下载</div>
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
    name: 'allphy',
    props : [],
    data () {
        return {
            loading:true,
            sortype:'',
            sortypes:[
                {value: '0',label: '正序'},
                {value: '1',label: '倒序'}
            ],//排序方式
            tijiano:'',//编号
            comtime:'',//提交时间
            checkedall:false,//全选
            checkedvalue:[],//选中的值
            currentPage:1,//当前页面
            tablelist:[
                {no:'20171987839487',time:'2017-11-13 14:48:39',phone:'18694098908',name:'戴永明',type:'医保体检',from:'线下录入',statu:'待体检'},
                {no:'20171987839487',time:'2017-11-13 14:48:39',phone:'18694098908',name:'戴永明',type:'医保体检',from:'线下录入',statu:'待体检'},
                {no:'20171987839487',time:'2017-11-13 14:48:39',phone:'18694098908',name:'戴永明',type:'医保体检',from:'线下录入',statu:'待体检'},
                {no:'20171987839487',time:'2017-11-13 14:48:39',phone:'18694098908',name:'戴永明',type:'医保体检',from:'线下录入',statu:'待体检'},
                {no:'20171987839487',time:'2017-11-13 14:48:39',phone:'18694098908',name:'戴永明',type:'医保体检',from:'线下录入',statu:'待体检'},
                {no:'20171987839487',time:'2017-11-13 14:48:39',phone:'18694098908',name:'戴永明',type:'医保体检',from:'线下录入',statu:'待体检'},
                {no:'20171987839487',time:'2017-11-13 14:48:39',phone:'18694098908',name:'戴永明',type:'医保体检',from:'线下录入',statu:'待体检'},
                {no:'20171987839487',time:'2017-11-13 14:48:39',phone:'18694098908',name:'戴永明',type:'医保体检',from:'线下录入',statu:'待体检'}
            ]
        }
    },
    components: {

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
    created(){

    },
    mounted(){
        setTimeout(()=>{
            this.loading = false;
        },1000);
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .allphy{
        .searchead{
            height:3.4rem;
            @include font(0.7rem,3.4rem);
            .comtime{
                margin-left:0.45rem;
            }
        }
        .checkc{
            .checkedall{
                @include font(0.7rem,0.7rem);
                margin: 1.85rem 0 0 .75rem;
            }
        }
    }
</style>
