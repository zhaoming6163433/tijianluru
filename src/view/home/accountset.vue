<template>
    <div class="accountset">
        <div class="myalert">
            <div class="leftc">
               <div class="touxiang"><img :src="touxiang"/></div>
               <div class="app_btn_in update">上传头像</div>
            </div>
            <div class="rightc" id="rightc">
                <div class="accset">账户设置</div>
                <el-form :label-position="'left'" class="ruleForm" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="90px">
                    <el-form-item label="用户名" prop="username">
                        <el-input class="inputsize" :maxlength="30"  type="text" v-model="ruleForm.username" auto-complete="new-password"></el-input>
                    </el-form-item>
                    <el-form-item prop="email" label="EMAIL">
                        <el-input class="inputsize" v-model="ruleForm.email" auto-complete="new-password"></el-input>
                    </el-form-item>
                    <el-form-item label="旧密码" prop="oldpass">
                        <el-input class="inputsize" type="password" v-model="ruleForm.oldpass" auto-complete="new-password"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="newpass">
                        <el-input class="inputsize" type="password" v-model="ruleForm.newpass" auto-complete="new-password"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkpass" >
                        <el-input class="inputsize" type="password" v-model="ruleForm.checkpass" auto-complete="new-password"></el-input>
                    </el-form-item>
                    <div class="app_btn_in app_btn_in2" @click="commitc('ruleForm')">提交</div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import util from 'src/util/util.js'
import checkreg from 'src/util/checkreg.js'
import icon_touxiang from '../../../static/img/icon_touxiang.png'

export default {
    name: 'accountset',
    props : [],
    data () {
        var validateCheck = (rule, value, callback) => {
            if (value !== this.ruleForm.newpass) {
                callback(new Error(checkreg.warntip.doublepass));
            } else {
                callback();
            }
        };
        return {
            touxiang:icon_touxiang,
            ruleForm:{
                username:'',
                email:'',
                oldpass:'',
                newpass:'',
                checkpass:''
            },
            rules: {
                username:[
                    { required: true, message: checkreg.warntip.usernametext, trigger: 'blur' }
                ],
                email:[
                    { required: true, message: checkreg.warntip.emailempty, trigger: 'blur' },
                    { type: 'email', message: checkreg.warntip.emailreal, trigger: 'blur' }
                ],
                oldpass:[
                    { required: true, message: checkreg.warntip.oldpass, trigger: 'blur' }
                ],
                newpass:[
                    { required: true, message: checkreg.warntip.newpass, trigger: 'blur' }
                ],
                checkpass: [
                    { required: true, message: checkreg.warntip.aginpass, trigger: 'blur' },
                    { validator: validateCheck, trigger: 'blur' }
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
<style lang="scss">
.accountset{
    .inputlabale{
        color:$gray2;
        width:6.25rem;
        display: inline-block;
        text-align: center;
        @include font(0.8rem,1.1rem);
    }
    .inputext{
        width: 15.5rem;
        @include font(0.9rem,1rem);
        >input{
            height:2.25rem;
            padding-right:2.35rem;
            border-radius: 2px;
        }
    }
    .el-form-item__label{
        font-size: 0.8rem;
        color:$gray2;
    }
}
</style>
<style lang="scss" scoped>
    .accountset{
        height:100%;
        min-height:26rem;
        position: relative;
        .myalert{
            width:31.6rem;
            height:25.05rem;
            position: absolute;
            top:50%;
            left: 50%;
            margin-top:-12.5rem;
            margin-left:-15.8rem;
            background: $wihte_c;
            box-shadow: 0 0 15px 0 rgba(41,53,57,0.32);
            border-radius: 4px;
            .leftc{
                border-radius: 4px 0 0 4px;
                width:7.75rem;
                height:25.05rem;
                background-color:$topgreen;
                display: inline-block;
                .touxiang{
                    width: 4rem;
                    height: 4rem;
                    margin: 0 auto;
                    margin-top:1.6rem;
                }
                .update{
                    display: block;
                    cursor: pointer;
                    border: 1px solid $wihte_c;
                    border-radius: 2px;
                    width:3.65rem;
                    height:1.3rem;
                    color:$wihte_c;
                    text-align:center;
                    margin:0 auto;
                    margin-top:0.5rem;
                    @include font(0.6rem,1.3rem);
                }
            }
            .rightc{
                left:7.75rem;
                height:25.05rem;
                position: absolute;
                top: 0;
                width: 23.85rem;
                .accset{
                    @include font(1.2rem,1.2rem);
                    @include marginlt(1.95rem,1.6rem);
                    margin-bottom:1.3rem;
                }
            }
            .app_btn_in2{
                position: absolute;
                width:6.2rem;
                right: 2.1rem;
                bottom:1.8rem;
            }
        }
        .ruleForm{
            margin: 1.5rem 0 0 2rem;
        }
    }

</style>
