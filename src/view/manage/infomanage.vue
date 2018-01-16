<template>
    <div class="infomanage" v-loading="loading">
            <div class="divhead searchead">
                <span>输入搜索</span>
                <div class="input_div"><input class="app_input_a" v-model="searchname"  placeholder="姓名" type="text"/></div>
                <span>审批状态</span>
                <el-select class="inputwh input_div" v-model="handleperson" placeholder="请选择操作人员">
                    <el-option
                    v-for="item in handlepersons"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <div class="app_btn_in resultbtn2">查询</div>
            </div>
            <div class="divhead searchcon">
                <span class="bigsize">家庭医师列表</span>
            </div>
            <div class="checkc tablepadding">
                <!--表格组件-->
                <el-table :data="tablelist"  tooltip-effect="dark" ref="multipleTable" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column label="序号" width="55" type="index"></el-table-column>
                    <el-table-column  label="一级科室" min-width="65" prop="stairoffice"></el-table-column>
                    <el-table-column  label="二级科室" min-width="65" prop="secoffice"></el-table-column>
                    <el-table-column  label="医师姓名" prop="docname"></el-table-column>
                    <el-table-column  label="性别" min-width="45" prop="sex"></el-table-column>
                    <el-table-column  label="民族" min-width="45" prop="nation"></el-table-column>
                    <el-table-column  label="联系电话" prop="phone"></el-table-column>
                    <el-table-column  label="医师编码" prop="dochisno"></el-table-column>
                    <el-table-column  label="医师名称" prop="dochisname"></el-table-column>
                    <el-table-column  label="医师所在科室编码"  prop="dochisoffice"></el-table-column>
                    <el-table-column  label="医师所在科室名称"  prop="dochisoffname"></el-table-column>
                    <el-table-column  label="审核状态" min-width="65" prop="checkstatu"></el-table-column>
                    <el-table-column label="操作" align="center" width="130" style="text-aligen:center">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="checkreport(scope.$index, tablelist, 0)" type="text" size="small"><span class="scopestate1">权限</span></el-button>
                            <div class="navline"></div>
                            <el-button @click.native.prevent="checkreport(scope.$index, tablelist, 1)" type="text" size="small"><span class="scopestate1">详情</span></el-button>
                        </template>
                    </el-table-column>
                </el-table>
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
    name: 'infomanage',
    props : [],
    data () {
        return {
            loading:true,
            searchname:'',//搜索姓名
            handleperson:'',//审批状态
            handlepersons:[
                {value: '0',label: '全部'},
                {value: '1',label: '待医保审核'},
                {value: '2',label: '医保已审核'}
            ],
            currentPage:1,//当前页面
            tablelist:[
                {stairoffice:'皮肤病',secoffice:'功能神经外科',docname:'刮大白',sex:'男',nation:'满',phone:'1388888888',dochisno:'1385757',dochisname:'王大拿',dochisoffice:'9527',dochisoffname:'精神病科',checkstatu:'待医保审核'},
                {stairoffice:'皮肤病',secoffice:'功能神经外科',docname:'刮大白',sex:'男',nation:'满',phone:'1388888888',dochisno:'1385757',dochisname:'王大拿',dochisoffice:'9527',dochisoffname:'精神病科',checkstatu:'待医保审核'},
                {stairoffice:'皮肤病',secoffice:'功能神经外科',docname:'刮大白',sex:'男',nation:'满',phone:'1388888888',dochisno:'1385757',dochisname:'王大拿',dochisoffice:'9527',dochisoffname:'精神病科',checkstatu:'待医保审核'},
                {stairoffice:'皮肤病',secoffice:'功能神经外科',docname:'刮大白',sex:'男',nation:'满',phone:'1388888888',dochisno:'1385757',dochisname:'王大拿',dochisoffice:'9527',dochisoffname:'精神病科',checkstatu:'待医保审核'},
                {stairoffice:'皮肤病',secoffice:'功能神经外科',docname:'刮大白',sex:'男',nation:'满',phone:'1388888888',dochisno:'1385757',dochisname:'王大拿',dochisoffice:'9527',dochisoffname:'精神病科',checkstatu:'待医保审核'},
                {stairoffice:'皮肤病',secoffice:'功能神经外科',docname:'刮大白',sex:'男',nation:'满',phone:'1388888888',dochisno:'1385757',dochisname:'王大拿',dochisoffice:'9527',dochisoffname:'精神病科',checkstatu:'待医保审核'},
                {stairoffice:'皮肤病',secoffice:'功能神经外科',docname:'刮大白',sex:'男',nation:'满',phone:'1388888888',dochisno:'1385757',dochisname:'王大拿',dochisoffice:'9527',dochisoffname:'精神病科',checkstatu:'待医保审核'},
                {stairoffice:'皮肤病',secoffice:'功能神经外科',docname:'刮大白',sex:'男',nation:'满',phone:'1388888888',dochisno:'1385757',dochisname:'王大拿',dochisoffice:'9527',dochisoffname:'精神病科',checkstatu:'待医保审核'}
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
            if(type==0){
                console.log(this)
                util.alertip('呵呵呵');
            }else{
                //util.confirmtip('删除确认','确认删除吗','删除','取消');
                util.alerthtmltip('删除确认','<strong>这是 <i>HTML</i> 片段</strong>','取消','删除',"","","red");
            }
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
    .infomanage{
        .resultbtn2{
            margin-left:1rem;
        }
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
