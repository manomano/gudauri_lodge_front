<template>
<div class="row main">
  <div class="row-cols-6 left"></div>
  <div class=" right">

    <form style="max-height:100%">


      <div class="form-group">

        <input type="text" v-model="contact_name" class="form-control" id="contact_name" required aria-describedby="emailHelp"
               :placeholder="$t('contact.p_name')">

      </div>

      <div class="form-group">

        <input type="text" class="form-control" id="contact_surname" v-model="contact_surname" required aria-describedby="emailHelp"
               :placeholder="$t('contact.p_surname')">

      </div>

      <div class="form-group">

        <input type="email" class="form-control" id="contact_email" v-model="contact_email" required aria-describedby="emailHelp"
               :placeholder="$t('contact.p_email')">

      </div>
      <div class="form-group">

        <input type="text" class="form-control" id="contact_phone" v-model="contact_phone" required
               :placeholder="$t('contact.p_phone')">
      </div>

      <div class="form-group">

        <textarea class="form-control" :placeholder="$t('contact.p_text')" v-model="contact_text" required></textarea>
      </div>


      <!--<div id="submit_div">-->
        <button type="submit" class="btn btn-primary submit" v-on:click.prevent="onsubmit">{{$t('contact.p_submit_text')}}</button>
      <!--</div>-->
    </form>



  </div>
</div>
</template>

<script>
    export default {
        name: "contact",
        data () {
            return {
                contact_name: "",
                contact_surname: "",
                contact_email: "",
                contact_phone: "",
                contact_text: "",
                errors:[]
            }
        },
        head () {
            return {
                title:this.$t('contact.title')

            }
        }
    }
</script>

<style scoped>

.bordered{
  border-top: 1px solid #7F828B;
}
  .main{
    width: 100%;
    height: 62vh;
    border: 1px solid #7f828b;
    box-sizing: border-box;
    margin: auto;
  }

  .left{
    background: #EBEBED;
    width: 50%;
    max-height: 100%;
  }
  .right{
    width: 50%;
    padding-left: 10%;
    padding-top: 2.5%;
    max-height: 100%;
  }


  .submit{
    background: #32303f;
    width: 200px;

    border-top-left-radius: 50% 200%;
    border-bottom-left-radius: 50% 200%;

    border-top-right-radius: 50% 200%;
    border-bottom-right-radius: 50% 200%;

  }

  input{
    width:35%;
    border:none;
    border-bottom: 1px solid #2e2f30;
    border-radius: 0%;
  }
  textarea{
    width:35%;
    border:none;
    border-bottom: 1px solid #2e2f30;
    border-radius: 0%;
  }
</style>
