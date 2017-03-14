<style>  
body, html {
    background-image: url('../assets/matsim.svg');
    background-position: top center;
    background-size: 100% auto;
    background-attachment: fixed
}
  .card-container.card {
    max-width: 400px;
    padding: 40px 40px;
  }
  
  .card {
    background-color: #F7F7F7;
    /* just in case there no content*/
    padding: 20px 25px 30px;
    margin: 0 auto 25px;
    margin-top: 50px;
    /* shadows and rounded borders */
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }
  
  .profile-img-card {
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
  }
  .text-center {
    text-align: center;
  }
</style>

<template>
  <div class="card card-container">
    <h1 class="text-center">Login</h1>
    <h2 class="text-center">Rekeningrijden Deutschland</h2>
    <img id="profile-img" class="profile-img-card" src="../assets/germany-flag.png" />
    <i-form ref="formdata" :model="formdata" :rules="ruleInline">
      <Form-item prop="user">
        <Input type="text" v-model="formdata.user" placeholder="Username">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item prop="password">
        <Input type="password" v-model="formdata.password" placeholder="Password">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item>
        <Button type="primary" @click.native="handleSubmit('formdata')" long>Login</Button>
      </Form-item>
      <Form-item>
        <Checkbox>Remember me</Checkbox>
      </Form-item>
    </i-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formdata: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '', trigger: 'blur' },
            { type: 'string', min: 6, message: '', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            console.log('success');
          } else {
            console.log('fail')
          }
        })
      }
    }
  }

</script>