<template>
    <div class="inforegister">
        <section class="stepdiv">
            <el-steps class="stepin" :active="active" align-center>
                <el-step title="填写基本信息" :description="finish1" icon="oneimg">12</el-step>
                <el-step title="上传职业证书" :description="finish2" icon="twoimg"></el-step>
                <el-step title="填写住院、门特资格" :description="finish3" icon="threeimg"></el-step>
            </el-steps>
        </section>
        <section class="infoc">
            <section class="fadeIn animated" v-show="active==1">
                <div class="divhead searchcon"><span class="bigsize">填写基本信息</span></div>
                <div class="infoin">
                    <el-form class="ruleForm" :label-position="'right'" :model="ruleForm" status-icon :rules="rules" label-width="120px" ref="ruleForm">
                        <el-form-item class="itemform" prop="structname" label="医疗机构名称">
                            <el-input class="inputsize" :maxlength="30"  placeholder="请输入医疗机构名称" type="text" v-model="ruleForm.structname"></el-input>
                        </el-form-item>

                        <el-form-item class="itemform" prop="officename" label="科室名称">
                            <el-cascader class="inputsize" :options="ruleForm.officelist" v-model="ruleForm.officename" placeholder="请依次选择一级、二级科室名称"></el-cascader>
                        </el-form-item>

                        <el-form-item class="itemform" prop="othername" label="其它科室名称">
                            <el-input class="inputsize" :maxlength="30"  placeholder="请输入其它科室名称" type="text" v-model="ruleForm.othername"></el-input>
                        </el-form-item>

                        <el-form-item class="itemform"></el-form-item>

                        <el-form-item class="itemform" prop="doctorname" label="医师姓名">
                            <el-input class="inputsize" :maxlength="30"  placeholder="请输入医师姓名" type="text" v-model="ruleForm.doctorname"></el-input>
                        </el-form-item>

                        <el-form-item class="itemform" prop="phone" label="联系电话">
                            <el-input class="inputsize" :maxlength="30"  placeholder="请输入联系电话" type="text" v-model="ruleForm.phone"></el-input>
                        </el-form-item>

                        <el-form-item class="itemform" prop="sex" label="性别">
                            <el-select  class="inputsize" v-model="ruleForm.sex" placeholder="请选择性别">
                                <el-option :label="item.name" :value="item.value" v-for="(item, index) in seloption.sexlist" :key="index" ></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item class="itemform" prop="nation" label="民族">
                            <el-select class="inputsize" v-model="ruleForm.nation" placeholder="请选择民族">
                                <el-option :label="item.name" :value="item.value" v-for="(item, index) in seloption.nationlist" :key="index"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item class="itemform" prop="idcard" label="身份证号码">
                            <el-input class="inputsize" type="text" v-model="ruleForm.idcard"></el-input>
                        </el-form-item>

                        <el-form-item class="itemform" prop="birthdate" label="出生日期">
                            <el-date-picker class="inputsize" v-model="ruleForm.birthdate" type="date" placeholder="请选择出生日期"></el-date-picker>
                        </el-form-item>
                        <el-form-item class="itemform" style="width:100%" prop="imageUrl" label="个人照片（上传照片建议120*160）">
                            <div class="uploadimg uploadimg1">
                                <el-upload  class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                    <div v-if="ruleForm.imageUrl" class="avatarimg">重新上传</div>
                                    <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar"/>
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                                <div class="example"><img src="../../../static/img/img_shili_1.png"/></div>
                            </div>
                        </el-form-item>
                        <el-form-item class="itemform" prop="nation" label="职称">
                            <el-select class="inputsize" v-model="ruleForm.dutyname" placeholder="请选择职称">
                                <el-option :label="item.name" :value="item.value" v-for="(item, index) in seloption.nationlist" :key="index"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item class="itemform" prop="duty" label="职务">
                            <el-select class="inputsize" v-model="ruleForm.duty" placeholder="请选择职务">
                                <el-option :label="item.name" :value="item.value" v-for="(item, index) in seloption.nationlist" :key="index"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item class="itemform" style="width:100%;padding-right:40px" prop="mygood" label="个人擅长">
                            <el-input class="inputsize" type="textarea" :rows="5" placeholder="请输入个人擅长" v-model="ruleForm.mygood"></el-input>
                        </el-form-item>

                        <el-form-item class="itemform" style="width:100%;padding-right:40px" prop="abstract" label="医师简介">
                            <el-input class="inputsize" type="textarea" :rows="5" placeholder="请输入医师简介" v-model="ruleForm.abstract"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </section>
            <section class="fadeIn animated" v-show="active==2">
                <div class="divhead searchcon"><span class="bigsize">上传职业证书</span></div>
                <div class="infoin">
                    <el-form class="ruleForm" :label-position="'right'" :model="ruleForm1" status-icon :rules="rules" ref="ruleForm1" label-width="120px">
                        <el-form-item class="itemform" prop="certno" label="资格证书编号">
                            <el-input class="inputsize" :maxlength="30"  placeholder="请输入资格证书编号" type="text" v-model="ruleForm1.certno"></el-input>
                        </el-form-item>

                        <el-form-item class="itemform" prop="domicile" label="注册地">
                            <el-input class="inputsize" :maxlength="30"  placeholder="请输入注册地" type="text" v-model="ruleForm1.domicile"></el-input>
                        </el-form-item>

                        <el-form-item class="itemform" style="width:100%" prop="imageUrl1" label="资格证书">
                            <div class="uploadimg uploadimg2">
                                <el-upload  class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess1"
                                    :before-upload="beforeAvatarUpload">
                                    <div v-if="ruleForm1.imageUrl1" class="avatarimg">重新上传</div>
                                    <img v-if="ruleForm1.imageUrl1" :src="ruleForm1.imageUrl1" class="avatar"/>
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                                <div class="example"><img src="../../../static/img/img_shili_2.png"/></div>
                            </div>
                        </el-form-item>

                        <el-form-item class="itemform" prop="pertno" label="职业证书编号">
                            <el-input class="inputsize" :maxlength="30"  placeholder="请输入职业证书编号" type="text" v-model="ruleForm1.pertno"></el-input>
                        </el-form-item>

                        <el-form-item class="itemform" prop="perlimit" label="职业范围">
                            <el-input class="inputsize" :maxlength="30"  placeholder="请输入职业范围" type="text" v-model="ruleForm1.perlimit"></el-input>
                        </el-form-item>

                        <el-form-item class="itemform" style="width:auto" prop="imageUrl2" label="职业证书">
                            <div class="uploadimg uploadimg3">
                                <el-upload  class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess2"
                                    :before-upload="beforeAvatarUpload">
                                    <div v-if="ruleForm1.imageUrl2" class="avatarimg">重新上传</div>
                                    <img v-if="ruleForm1.imageUrl2" :src="ruleForm1.imageUrl2" class="avatar"/>
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                                <div class="example"><img src="../../../static/img/img_shili_3.png"/></div>
                            </div>
                        </el-form-item>
                        <el-form-item class="itemform" style="width:auto" prop="imageUrl3">
                            <div class="uploadimg uploadimg4">
                                <el-upload  class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess3"
                                    :before-upload="beforeAvatarUpload">
                                    <div v-if="ruleForm1.imageUrl3" class="avatarimg">重新上传</div>
                                    <img v-if="ruleForm1.imageUrl3" :src="ruleForm1.imageUrl3" class="avatar"/>
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                                <div class="example"><img src="../../../static/img/ing_shili_4.png"/></div>
                            </div>
                        </el-form-item>
                    </el-form>
                </div>
            </section>
            <section class="fadeIn animated" v-show="active>2">
                <div class="divhead searchcon"><span class="bigsize">上传职业证书</span></div>
                <div class="infoin">
                    <el-form class="ruleForm" :label-position="'right'" :model="ruleForm2" status-icon :rules="rules" ref="ruleForm2" label-width="120px">
                        <el-form-item class="itemform" prop="hospitalcer" label="住院资格">
                            <el-select class="inputsize" v-model="ruleForm2.hospitalcer" placeholder="请选择住院资格">
                                <el-option :label="item.name" :value="item.value" v-for="(item, index) in seloption.nationlist" :key="index"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="itemform"></el-form-item>
                        <el-form-item class="itemform" prop="mentorcer" label="门特资格">
                            <el-select class="inputsize" v-model="ruleForm2.mentorcer" placeholder="请选择门特资格">
                                <el-option :label="item.name" :value="item.value" v-for="(item, index) in seloption.nationlist" :key="index"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="itemform"></el-form-item>
                        <el-form-item style="width:100%" class="itemform checkbox" prop="entity" label="请选择病种">
                            <el-checkbox-group v-model="ruleForm2.entity">
                                <el-checkbox  name="entity"  v-for="(item, index) in ruleForm2.entitylist" :key="index" :label="item.label"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </el-form>
                </div>
            </section>
            <section class="stepbtn">
                <div class="app_btn_in" @click="gostep(1)" v-show="active!=1">上一步</div>
                <div class="app_btn_in" @click="gostep(2)" v-show="active<3">下一步</div>
                <div class="app_btn_in" @click="gostep(3)" v-show="active>=3">完成</div>
            </section>
        </section>
    </div>
</template>

<script>
    import util from 'src/util/util.js'
    import checkreg from 'src/util/checkreg.js'
    import seloption from 'src/util/seloption.json'

    export default {
        name: 'inforegister',
        props: [],
        data() {
            var imgcheck = (rule, value, callback) => {
                if (!checkreg.checkreg.checkempty(value)) {
                    callback(new Error(checkreg.warntip.uploadimg));
                } else {
                    callback();
                }
            };
            return {
                active:1,//第几步
                seloption:seloption,//下拉选择的内容固定的
                finish1:'未完成',
                finish2:'未完成',
                finish3:'未完成',
                ruleForm:{
                    structname:'',//医疗结构名称
                    othername:'',//其它科室名称
                    doctorname:'',//医师姓名
                    phone:'',//联系电话
                    sex:'',//性别
                    nation:'',//民族
                    idcard:'',//身份证号码
                    birthdate:'',//出生日期
                    dutyname:'',//职称
                    duty:'',//职务
                    mygood:'',//个人擅长
                    abstract:'',//医师简介
                    imageUrl:'',//成功后图片的url
                    officename:[],//科室名称选择
                    officelist: [{//科室名称选项
                        value: '0',
                        label: '外科',
                        children: [{
                            value: '0',
                            label: '基本检查'
                        },
                        {
                            value: '1',
                            label: '全身检查'
                        },
                        {
                            value: '2',
                            label: '基本检查'
                        }]
                    },{
                        value: '1',
                        label: '内科',
                        children: [{
                            value: '0',
                            label: '基本检查'
                        },
                        {
                            value: '1',
                            label: '全身检查'
                        },
                        {
                            value: '2',
                            label: '基本检查'
                        }]
                    }]
                },
                ruleForm1:{
                    certno:'',//资格证书编号
                    domicile:'',//注册地
                    imageUrl1:'',//资格证书
                    pertno:'',//职业证书编号
                    perlimit:'',//职业范围
                    imageUrl2:'',//执业证书1
                    imageUrl3:''//执业证书2
                },
                ruleForm2:{
                    hospitalcer:'',//住院资格
                    mentorcer:'',//门特资格
                    entity:[],//选择的列表
                    entitylist:[
                        {label:'癌症'},{label:'冠心病'},{label:'肝硬化'},{label:'胃溃疡、十二指肠溃疡'},
                        {label:'脑血管后遗症并发精神病'},{label:'脑血管后遗症并发帕金森'},{label:'高血压'},{label:'并发肾病'},
                        {label:'脑血管病后遗症'},{label:'脑血管后遗症并发癫痫'},{label:'慢性心功能病不全'},
                        {label:'心脏瓣膜置换需抗凝治疗'},{label:'恶性血液病'},{label:'溃疡性结肠'},{label:'糖尿病伴有并发症'},{label:'慢性肝炎'},
                        {label:'重症肌无力'},{label:'慢性肾脏病'},{label:'血小板较少性紫癫'},{label:'类风湿、类风湿关节炎'},{label:'血友病'}
                    ]
                },
                rules:{//校验规则
                    imageUrl:[
                        { required: true,validator: imgcheck}
                    ],
                    imageUrl1:[
                        { required: true,validator: imgcheck }
                    ],
                    imageUrl2:[
                        { required: true,validator: imgcheck }
                    ],
                    imageUrl3:[
                        { required: true,validator: imgcheck }
                    ],
                    entity: [
                        { type: 'array', required: true, message: checkreg.warntip.entity, trigger: 'change' }
                    ],
                }
            }
        },
        components: {

        },
        watch: {
            //步骤条第几步
            active(val){
                const text0 = '未完成';
                const text1 = '已完成';

                switch (val) {
                    case 1:
                        this.isfinishtext(text0,text0,text0);
                        break;
                    case 2:
                        this.isfinishtext(text1,text0,text0);
                        break;
                    case 3:
                        this.isfinishtext(text1,text1,text0);
                        break;
                }
            }
        },
        created() {

        },
        methods: {
            //顶部步骤条是否完成
            isfinishtext(text1,text2,text3){
                this.finish1 = text1;
                this.finish2 = text2;
                this.finish3 = text3;
            },
            //处理科室名称
            handleofficename(val){

            },
            //步骤1上传的图片
            handleAvatarSuccess(res, file) {
                this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
                this.checkimg('uploadimg1');
            },
            //步骤2上传的图片上传资格证书
            handleAvatarSuccess1(res, file) {
                this.ruleForm1.imageUrl1 = URL.createObjectURL(file.raw);
                this.checkimg('uploadimg2');
            },
            //步骤2上传的图片上传第一页
            handleAvatarSuccess2(res, file) {
                this.ruleForm1.imageUrl2 = URL.createObjectURL(file.raw);
                this.checkimg('uploadimg3');
            },
            //步骤2上传的图片上传第二页
            handleAvatarSuccess3(res, file) {
                this.ruleForm1.imageUrl3 = URL.createObjectURL(file.raw);
                this.checkimg('uploadimg4');
            },
            //校验表单
            checkimg(name){
                $("."+name).parent().find(".el-form-item__error").remove();
            },
            //步骤1上传图片限制
            beforeAvatarUpload(file) {
                console.log(file)
                const isJPG = file.type === 'image/jpeg'||'image/png'||'image/jpg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG/PNG/JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            //上下一步按钮
            gostep(val){
                let formName = '';
                if(this.active==1){
                    formName = 'ruleForm';
                }else if(this.active==2){
                    formName = 'ruleForm1';
                }else{
                    formName = 'ruleForm2';
                }

                switch (val) {
                    case 1:
                        if(this.active>2) this.active=3;
                        this.active--;
                        break;
                    case 2:
                        this.$refs[formName].validate((valid) => {
                            if (valid) {
                                this.active++;
                            } else {
                                console.log('error submit!!');
                                return false;
                            }
                        });
                        break;
                    case 3:
                        this.$refs[formName].validate((valid) => {
                            if (valid) {
                                this.active++;
                            } else {
                                console.log('error submit!!');
                                return false;
                            }
                        });
                        break;
                }
            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
    .inforegister {
        .animated{
            animation-duration:.5s;
        }
        .checkbox{
            .el-form-item__content{
                margin-left:-30px;
            }
            .el-form-item__error{
                margin-left:30px;
            }
        }
        .el-step__title{
            color:$gray;
        }
        .el-step__line-inner{
            display: none;
        }
        .el-checkbox{
            margin-left: 30px;
        }
        .el-step__head.is-finish{
            .oneimg{
                @include bis('../../../static/img/icon_jiben_hover.png');
            }
            .twoimg{
                @include bis('../../../static/img/icon_zhengshu_hover.png');
            }
            .threeimg{
                @include bis('../../../static/img/btn_jiancha1.png');
            }
        }
        .el-step__title.is-finish {
            color: $topgreen;
        }
        .el-step__description.is-process{
            color:$gray2;
        }
        .el-step__line{
            height: 1.2rem !important;
            width: 1.2rem;
            left: 95% !important;
            top: 1.5rem !important;
            background-color: #ffffff;
            @include bis('../../../static/img/icon_jiantou0.png');
        }
        .el-step__head.is-finish{
            .el-step__line{
                @include bis('../../../static/img/icon_jiantou1.png');
            }
        }
        .oneimg {
            display: block;
            background-color: #ffffff;
            @include wh(2.25rem,2.25rem);
            @include bis('../../../static/img/icon_jiben.png');
        }
        .twoimg {
            display: block;
            background-color: #ffffff;
            @include wh(2rem,2.25rem);
            @include bis('../../../static/img/icon_zhengshu.png');
        }
        .threeimg {
            display: block;
            background-color: #ffffff;
            @include wh(2rem,2.25rem);
            @include bis('../../../static/img/icon_zige.png');
        }
    }
</style>
<style lang="scss" scoped>
    .inforegister {
        .app_btn_in{
            width:4.4rem;
        }
        .stepbtn{
            padding: 10px 0 30px 24px;
        }
        .stepdiv{
            margin:0 auto;
            background-color:#ffffff;
            position: relative;
            border-top:4px solid $bordercolor;
            height: 8.4rem;
            min-width:49rem;
            width:70%;
            .stepin{
                margin-top:1.9rem;
            }
        }
        .itemform{
            width: 49%;
            display: inline-block;
            padding: 0rem 1.2rem 0 1.2rem;
            box-sizing: border-box;
        }
        .infoc{
            min-width: 49rem;
            width: 70%;
            margin: 0 auto;
            background-color:#ffffff;
            .infoin{
                padding-top:1.5rem;
            }
            .inputsize{
                width:100%;
            }
        }
        .uploadimg{
            .avatar-uploader{
                @include wh(6rem,8rem);
                overflow: hidden;
                display: inline-block;
                vertical-align: top;
                border: 1px dashed $bordercolor;
                background-color:$pageback;
                .el-icon-plus:before{
                    content:'上传照片';
                    position: absolute;
                    border-radius: 2px;
                    text-align:center;
                    padding-top: .35rem;
                    box-sizing: border-box;
                    background-color:$topgreen;
                    display:block;
                    color:#ffffff;
                    margin-top: 2rem;
                    margin-left: 1rem;
                    @include font(.7rem,.7rem);
                    @include wh(4rem,1.5rem);
                }
            }
            .avatarimg{
                    position: absolute;
                    border-radius: 2px;
                    text-align:center;
                    padding-top: .35rem;
                    box-sizing: border-box;
                    background-color:rgba(0,0,0,0.4);
                    display:block;
                    color:#ffffff;
                    margin-top: 3rem;
                    margin-left: 1rem;
                    @include font(.7rem,.7rem);
                    @include wh(4rem,1.5rem);
            }
            .example{
                display: inline-block;
                margin-left:1rem;
            }
        }
        .uploadimg2{
            .avatar-uploader{
                @include wh(8rem,6rem);
                .el-icon-plus:before{
                    content:'上传资格证书';
                    margin-top: 1rem;
                    margin-left: 1.3rem;
                    @include wh(5.5rem,1.5rem);
                }
            }
            .avatarimg{
                margin-top: 2.2rem;
                margin-left: 2rem;
            }
        }
        .uploadimg3{
            display:inline-block;
            .avatar-uploader{
                @include wh(8rem,6rem);
                .el-icon-plus:before{
                    content:'上传第一页';
                    margin-top: 1rem;
                    margin-left: 1.3rem;
                    @include wh(5.5rem,1.5rem);
                }
            }
            .avatarimg{
                margin-top: 2.2rem;
                margin-left: 2rem;
            }
        }
        .uploadimg4{
            display:inline-block;
            margin-left: -5.5rem;
            .avatar-uploader{
                @include wh(8rem,6rem);
                .el-icon-plus:before{
                    content:'上传第二页';
                    margin-top: 1rem;
                    margin-left: 1.3rem;
                    @include wh(5.5rem,1.5rem);
                }
            }
            .avatarimg{
                margin-top: 2.2rem;
                margin-left: 2rem;
            }
        }
    }
</style>
