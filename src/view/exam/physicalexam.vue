<template>
    <div class="physicalexam" v-loading="loading">
        <!--交易数据-->
        <section class="tradedata">
            <div class="divhead">
                <span>体检统计</span>
                <div class="titlec">
                    <div class="app_btn_in_w derivedata">导出数据</div>
                    <el-radio-group class="weekfromto" v-model="data1.radiozhe" size="medium">
                        <el-radio-button label="昨天" ></el-radio-button>
                        <el-radio-button label="最近7天"></el-radio-button>
                        <el-radio-button label="最近30天"></el-radio-button>
                    </el-radio-group>
                    <el-date-picker
                        class="datefromto"
                        v-model="data1.datefromto"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </div>
            </div>
            <div class="tradein">
                <div>
                    <ul>
                        <li><div>体检人数（人）</div><div>1826</div></li>
                        <li><div>已完成体检（人）</div><div>1024</div></li>
                        <li><div>已完成总检（人）</div><div>1144</div></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><div>医保体检（人）</div><div>643</div></li>
                        <li><div>公司体检（人）</div><div>565</div></li>
                        <li><div>个人体检（人）</div><div>347</div></li>
                    </ul>
                </div>
            </div>
        </section>
        <!--性别构成-->
        <section class="sexmake">
            <div class="divhead margintop20">
                <span>性别构成</span>
                <div class="titlec">
                    <div class="app_btn_in_w derivedata">导出数据</div>
                    <el-radio-group class="weekfromto" v-model="data2.radiozhe" size="medium">
                        <el-radio-button label="本月" ></el-radio-button>
                        <el-radio-button label="上月"></el-radio-button>
                    </el-radio-group>
                    <el-date-picker class="datefromto" style="width:6.5rem;" v-model="data2.datefromto" type="month" placeholder="选择月"></el-date-picker>
                </div>
            </div>
            <div class="pie1">
                <g2pie class="g2pie" :id="data2.id" :list="data2.list" :colorarr="data2.colorarr"></g2pie>
                <div class="pielegend mypielegend"><span v-for="(item,index) in data2.list" :key="index" :style="{'color':data2.colorarr[index]}"><b :style="{'background-color':data2.colorarr[index]}"/>{{item.name}}</span></div>
                <el-table class="data2table" :data="data2.tablelist" tooltip-effect="dark">
                    <el-table-column  label="" prop="sex"></el-table-column>
                    <el-table-column  label="体检人数" prop="phynum"></el-table-column>
                    <el-table-column  label="较前一月">
                        <template slot-scope="scope">
                            <span v-html="agomonthf(scope.row.agomonth)"></span>
                        </template>
                    </el-table-column>
                    <el-table-column  label="自费人数" prop="selfpay"></el-table-column>
                    <el-table-column  label="较前一月" prop="agomonth2">
                        <template slot-scope="scope">
                            <span v-html="agomonthf(scope.row.agomonth2)"></span>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </section>
        <!--体检年龄数据-->
        <section class="phyage">
            <div class="divhead">
                <span>体检年龄数据</span>
                <div class="titlec">
                    <div class="app_btn_in_w derivedata">导出数据</div>
                    <el-radio-group class="weekfromto" v-model="data3.radiozhe" size="medium">
                        <el-radio-button label="昨天" ></el-radio-button>
                        <el-radio-button label="最近7天"></el-radio-button>
                        <el-radio-button label="最近30天"></el-radio-button>
                    </el-radio-group>
                    <el-date-picker
                        class="datefromto"
                        v-model="data3.datefromto"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </div>
            </div>
            <div class="g2linesec">
                <g2bar class="g2bar" :id="data3.id" :datalist="data3.list" :colorarr="data3.colorarr" :axislist="data3.axislist"></g2bar>
            </div>
        </section>
        <!--订单来源构成-->
        <section class="g2pie2sec">
            <div class="divhead margintop20">
                <span>订单来源构成</span>
                <div class="titlec">
                    <div class="app_btn_in_w derivedata">导出数据</div>
                    <el-radio-group class="weekfromto" v-model="data4.radiozhe" size="medium">
                        <el-radio-button label="本月" ></el-radio-button>
                        <el-radio-button label="上月"></el-radio-button>
                    </el-radio-group>
                    <el-date-picker class="datefromto" style="width:6.5rem;" v-model="data4.datefromto" type="month" placeholder="选择月"></el-date-picker>
                </div>
            </div>
            <div class="pie2g2">
                <g2pie2 class="g2pie2" :id="data4.id" :list="data4.list" :colorarr="data4.colorarr"></g2pie2>
                <g2pie2 class="g2pie2_1" :id="data4.id2" :list="data4.list2" :colorarr="data4.colorarr"></g2pie2>
            </div>
            <div class="pielegend mypie2legend"><span v-for="(item, index) in data4.list" :key="index" :style="{'color':data4.colorarr[index]}"><b :style="{'background-color':data4.colorarr[index]}"/>{{item.name}}</span></div>
            <el-table class="data4table" :data="data4.tablelist" tooltip-effect="dark">
                    <el-table-column  label="" prop="name"></el-table-column>
                    <el-table-column  label="体检人数" prop="phynum"></el-table-column>
                    <el-table-column  label="较前一月" prop="agomonth"></el-table-column>
                    <el-table-column  label="自费人数" prop="selfpay"></el-table-column>
                    <el-table-column  label="较前一月" prop="agomonth2"></el-table-column>
            </el-table>
        </section>
    </div>
</template>

<script>
import util from 'src/util/util.js'
import vueutil from 'src/util/vueutil.js'
import g2pie from 'src/components/g2pie'
import g2pie2 from 'src/components/g2pie2'
import g2bar from 'src/components/g2bar'

export default {
    name: 'physicalexam',
    props : [],
    data () {
        return {
            loading:true,
            data1:{
                radiozhe:'昨天',
                datefromto:''
            },
            data2:{
                radiozhe:'本月',
                datefromto:'',
                id:'sexpie',
                list:[
                    {name: '男性', value: 643 },
                    {name: '女性', value: 187}
                ],
                tablelist:[
                    {sex:'女性',phynum:'187',agomonth:'12%',selfpay:'32',agomonth2:'-38%'},
                    {sex:'男性',phynum:'643',agomonth:'/',selfpay:'56',agomonth2:'56%'}
                ],
                colorarr:['#55BECC', '#FA9374']
            },
            data3:{
                radiozhe:'昨天',
                datefromto:'',
                id:'agebar',
                colorarr:['#1CC09F'],
                axislist:['0-50元','51-100元','101-200元','201-500元','501-1000元','1001-5000元','5001-10000元','10001元'],
                list:[
                    {name: '年龄',data: [23, 18, 16, 11, 22, 13, 21, 24]},
                ],
            },
            data4:{
                radiozhe:'本月',
                datefromto:'',
                id:'frompie',
                id2:'frompie2',
                list:[
                    {name: 'APP', value: 187 },
                    {name: 'PC端', value: 187},
                    {name: '小程序', value: 643},
                    {name: '微信端', value: 643},
                    {name: '其它', value: 32}
                ],
                list2:[
                    {name: 'APP', value: 200 },
                    {name: 'PC端', value: 158},
                    {name: '小程序', value: 238},
                    {name: '微信端', value: 230},
                    {name: '其它', value: 12}
                ],
                colorarr:['#4EBECD', '#63D5B2','#A2E698','#668ED6','#E6F4A0'],
                tablelist:[
                    {name:'APP',phynum:'187',agomonth:'/',selfpay:'200',agomonth2:'/'},
                    {name:'微信端',phynum:'643',agomonth:'/',selfpay:'230',agomonth2:'/'},
                    {name:'PC端',phynum:'187',agomonth:'/',selfpay:'158',agomonth2:'/'},
                    {name:'小程序',phynum:'643',agomonth:'/',selfpay:'234',agomonth2:'/'},
                ]
            }
        }
    },
    components: {
        g2pie,
        g2pie2,
        g2bar
    },
    created(){

    },
    methods : {

    },
    mounted(){
        setTimeout(()=>{
            this.loading = false;
        },1000);
    }
}

</script>
<style lang="scss">
    .physicalexam{
        .el-table th{
            text-align:center;
        }
    }
</style>
<style lang="scss" scoped>
    .physicalexam{
        .titlec{
            float:right;
            margin-right:1.4rem;
            line-height: 2.3rem;
        }
        .tradedata{
            .tradein{
                height:6.75rem;
                background-color:$wihte_c;
                >div:nth-child(1){
                    display:inline-block;
                    width:49%;
                    height:6.75rem;
                    @include wh(49%,6.75rem);
                    border-right:1px solid $bordercolor;
                }
                >div:nth-child(2){
                    display:inline-block;
                    @include wh(49%,6.75rem);
                }
                ul{
                    position: relative;
                    display:flex;
                    li{
                        width:33.33%;
                        height: 6.7rem;
                        text-align:center;
                        display:inline-block;
                        >div{
                            width:6rem;
                            text-align:left;
                            margin:0 auto;
                        }
                        >div:nth-child(1){
                            @include font(0.7rem,0.7rem);
                            margin-top:1.6rem;
                        }
                        >div:nth-child(2){
                            @include font(1.8rem,2.5rem);
                            margin-top:0.4rem;
                        }
                    }
                }
            }
        }
        .sexmake{
            .pie1{
                position: relative;
                background-color:$wihte_c;
                height:15.6rem;
                .g2pie{
                    position: absolute;
                    top: 0;
                    left:10%;
                    margin-left:-4.5rem;
                }
                .mypielegend{
                    top:3rem;
                    margin-left:18.35rem;
                    left:10%;
                }
                .data2table{
                    text-align: center;
                    right:1.45rem;
                    left:10%;
                    position: absolute;
                    width:inherit;
                    margin-left:18.35rem;
                    top:5.25rem;
                }
            }
        }
        .phyage{
            margin-top:1rem;
            .g2linesec{
                height:21.5rem;
                background-color:$wihte_c;
                position: relative;
                .g2bar{
                    position: absolute;
                    left: 10%;
                    right: 5%;
                    bottom:.5rem;
                    width: inherit;
                }
            }
        }
        .g2pie2sec{
            position: relative;
            background-color:$wihte_c;
            height:39.55rem;
            .pie2g2{
                width:100%;
                margin:0 auto;
                text-align:center;
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
            .data4table{
                text-align:center;
                position: absolute;
                left:1.45rem;
                right:1.45rem;
                bottom:2.5rem;
                width:inherit;
            }
        }
    }
</style>
