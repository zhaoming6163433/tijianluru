<template>
    <div class="caseadd">
        <div class="myalert">
            <div class="title">添加病例</div>
            <el-form class="ruleForm inputsizeout2" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="110px">
                <el-form-item prop="caseno" label="病历号">
                    <el-input class="inputsize2" :maxlength="30"  type="text" v-model="ruleForm.caseno" auto-complete="new-password"></el-input>
                </el-form-item>
                <el-form-item prop="name" label="姓名">
                    <el-input class="inputsize2" type="text" v-model="ruleForm.name" auto-complete="new-password"></el-input>
                </el-form-item>
                <el-form-item prop="sex" label="性别">
                    <el-select style="width:15.5rem" v-model="ruleForm.sex" placeholder="请选择">
                        <el-option :label="item.name" :value="item.value" v-for="(item, index) in seloption.sexlist" :key="index" ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="cardtype" label="证件类型">
                    <el-select style="width:15.5rem" v-model="ruleForm.cardtype" placeholder="请选择">
                        <el-option :label="item.name" :value="item.value" v-for="(item, index) in seloption.cardlist" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="cardno" label="证件号">
                    <el-input class="inputsize2" type="text" v-model="ruleForm.cardno" auto-complete="new-password"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="联系方式">
                    <el-input class="inputsize2" type="text" v-model="ruleForm.phone" auto-complete="new-password"></el-input>
                </el-form-item>
                <el-form-item prop="companyname" label="公司名称">
                    <el-input class="inputsize2" type="text" v-model="ruleForm.companyname" auto-complete="new-password"></el-input>
                </el-form-item>
                <el-form-item prop="profession" label="职业">
                    <el-input class="inputsize2" type="text" v-model="ruleForm.profession" auto-complete="new-password"></el-input>
                </el-form-item>
                <el-form-item label="家庭住址" prop="address">
                    <el-select style="width:7.2rem" v-model="ruleForm.province" @change="selprovince(ruleForm.province)" placeholder="选择省">
                        <el-option :label="item.text" :value="item" v-for="(item, index) in province" :key="index"></el-option>
                    </el-select>
                    <el-select style="width: 7.2rem;margin-left: 0.9rem;" v-model="ruleForm.city" placeholder="选择市">
                        <el-option :label="item.text" :value="item.text" v-for="(item, index) in citys" :key="index"></el-option>
                    </el-select>
                    <el-input class="inputsize2" type="text" placeholder="请输入详细地址" v-model="ruleForm.addressinfo" auto-complete="new-password"></el-input>
                </el-form-item>
                <el-form-item prop="statu" label="账户启用状态" style="height:20px">
                    <el-switch v-model="ruleForm.statu" @change="checkstatu(ruleForm.statu)" active-color="#1CC09F" inactive-color="#999999"></el-switch>
                </el-form-item>
                <div class="app_btn_in app_btn_in2" @click="commitc('ruleForm')">提交</div>
            </el-form>
        </div>
    </div>
</template>

<script>
import util from 'src/util/util.js'
import citys from 'static/js/citydata.js'
import checkreg from 'src/util/checkreg.js'
import seloption from 'src/util/seloption.json'

export default {
    name: 'caseadd',
    props : [],
    data () {
        return {
            seloption:seloption,
            province:citys,
            citys:[],
            ruleForm:{
                caseno:'',
                name:'',
                sex:'',
                cardtype:'',
                cardno:'',
                phone:'',
                companyname:'',
                profession:'',
                province:'',
                provincer:'',
                city:'',
                addressinfo:'',
                statu:false
            },
            rules: {
                sex:[
                    { required: true, message: checkreg.warntip.sextext, trigger: 'change' }
                ],
                cardtype:[
                    { required: true, message: checkreg.warntip.cardtypetext, trigger: 'change' }
                ],
                cardno:[
                    { required: true, message: checkreg.warntip.cardno, trigger: 'blur' }
                ]
            }
        }
    },
    components: {

    },
    watch:{

    },
    created(){

    },
    methods : {
        //省份选择
        selprovince(info){
            this.citys = info.children;
            this.ruleForm.provincer = info.text;
            this.ruleForm.city = info.children[0].text;
            console.log(this.ruleForm)
        },
        commitc(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    },
    mounted(){

    }
}

</script>

<style lang="scss" scoped>
    .caseadd{
        height:100%;
        min-height:38rem;
        position: relative;
        .myalert{
            width:27.65rem;
            height:36.65rem;
            position: absolute;
            top:50%;
            left: 50%;
            margin-top:-18.32rem;
            margin-left:-13.82rem;
            background: $wihte_c;
            .title{
                height:2.95rem;
                border-top:4px solid $bordercolor;
                border-bottom:1px solid $bordercolor;
                padding-left:1.15rem;
                @include font(0.8rem,2.95rem);
            }
        }
        .ruleForm{
            margin: 1.5rem 0 0 2rem;
            .app_btn_in2{
                width: 6.15rem;
                position: absolute;
                right: 4.6rem;
            }
        }
    }
</style>
