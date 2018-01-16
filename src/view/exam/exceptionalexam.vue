<template>
    <div class="exceptionalexam" v-loading="loading">
        <section class="g2pie2sec">
            <!--头部-->
            <div class="divhead">
                <span>异常项目分析</span>
                <div class="titlec">
                    <div class="app_btn_in_w derivedata">导出数据</div>
                    <el-radio-group class="weekfromto" v-model="radiozhe" size="medium">
                        <el-radio-button label="昨天" ></el-radio-button>
                        <el-radio-button label="最近7天"></el-radio-button>
                        <el-radio-button label="最近30天"></el-radio-button>
                    </el-radio-group>
                    <el-date-picker
                        class="datefromto"
                        v-model="datefromto"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </div>
            </div>
            <!--两个饼图-->
            <div class="pie2g2">
                <g2pie2 class="g2pie2" :id="id" :list="list" :colorarr="colorarr"></g2pie2>
                <g2pie2 class="g2pie2_1" :id="id2" :list="list2" :colorarr="colorarr"></g2pie2>
            </div>
            <!--饼图说明-->
            <div class="pielegend mypie2legend"><span v-for="(item, index) in list" :key="index" :style="{'color':colorarr[index]}"><b :style="{'background-color':colorarr[index]}"/>{{item.name}}</span></div>
            <!--表格-->
            <el-table class="datatable" :data="tablelist" tooltip-effect="dark">
                    <el-table-column  label="异常项目" prop="name"></el-table-column>
                    <el-table-column  label="总检查数量" prop="totalnum"></el-table-column>
                    <el-table-column  label="男性异常数量" prop="sexnum"></el-table-column>
                    <el-table-column  label="男性占比" prop="zhanbi1"></el-table-column>
                    <el-table-column  label="女性异常数量" prop="womanum"></el-table-column>
                    <el-table-column  label="女性占比" prop="zhanbi2"></el-table-column>
            </el-table>
            <!--分页-->
            <el-pagination
                class="pagingpage"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-size="10"
                layout="total, prev, pager, next, jumper"
                :total="1400">
            </el-pagination>
        </section>
    </div>
</template>

<script>
import util from 'src/util/util.js'
import vueutil from 'src/util/vueutil.js'
import g2pie2 from 'src/components/g2pie2'

export default {
    name: 'physicalexam',
    props : [],
    data () {
        return {
            loading:true,
            currentPage:1,//当前页面
            radiozhe:'昨天',
            datefromto:'',
            id:'frompie',
            id2:'frompie2',
            list:[
                {name: '舒张压', value: 187 },
                {name: '血糖', value: 642},
                {name: '心率', value: 187},
                {name: '癌症', value: 643},
                {name: '吸烟', value: 643}
            ],
            list2:[
                {name: '舒张压', value: 200 },
                {name: '血糖', value: 158},
                {name: '心率', value: 238},
                {name: '癌症', value: 230},
                {name: '吸烟', value: 12}
            ],
            colorarr:['#4EBECD', '#63D5B2','#A2E698','#668ED6','#E6F4A0'],
            tablelist:[
                {name:'舒张压',totalnum:'187',sexnum:'40',zhanbi1:'20%',womanum:'40',zhanbi2:'20%'},
                {name:'血糖',totalnum:'643',sexnum:'40',zhanbi1:'20%',womanum:'40',zhanbi2:'20%'},
                {name:'心率',totalnum:'187',sexnum:'40',zhanbi1:'20%',womanum:'40',zhanbi2:'20%'},
                {name:'癌症',totalnum:'643',sexnum:'40',zhanbi1:'20%',womanum:'40',zhanbi2:'20%'},
                {name:'吸烟',totalnum:'643',sexnum:'40',zhanbi1:'20%',womanum:'40',zhanbi2:'20%'}
            ]
        }
    },
    components: {
        g2pie2
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
<style lang="scss">
    .exceptionalexam{
        .el-table th{
            text-align:center;
        }
    }
</style>
<style lang="scss" scoped>
    .exceptionalexam{
        .g2pie2sec{
            position: relative;
            background-color:$wihte_c;
            height:44.15rem;
            .titlec{
                float: right;
                margin-right: 1.4rem;
                line-height: 2.3rem;
            }
            .pie2g2{
                text-align: center;
                .g2pie2{
                    display:inline-block;
                    margin-right:2rem;
                    margin-top:3.6rem;
                }
                .g2pie2_1{
                    display:inline-block;
                    margin-left:2rem;
                    margin-top:3.6rem;
                }
            }
            .mypie2legend{
                top: 23.3rem;
                width: 100%;
                text-align: center;
            }
            .datatable{
                text-align:center;
                position: absolute;
                left:1.45rem;
                right:1.45rem;
                bottom:4.7rem;
                width:inherit;
            }
            .pagingpage{
                bottom: 1.5rem;
                position: absolute;
                right: 1.45rem;
            }
        }
    }
</style>
