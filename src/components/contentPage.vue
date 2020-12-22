<template>
  <div class="contentPage">

    <!--ヘッダー-->
    <header>
        <p class="button is-info is-small">{{ step }}</p>
        <p class="instruction">{{ instruction }}</p>
    </header>

    <!--内容-->
    <div class="content">

        <!--ご相談内容-->
        <label class="title">{{ consultation }}</label>
        <textarea cols="100" rows="10" v-model="ansConsultation" @change="storeSave"></textarea>
  
    </div>

    <!--ページ移動-->
    <span class="buttons">
      <router-link class="transition-button" to="/QuestionnairePage">{{ back }}</router-link>
      <router-link class="transition-button" to="/">{{ next }}</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ContentPage',
  data () {
    return {
      step:'STEP3',
      instruction:'ご相談内容をご記入ください',
      consultation:'-ご相談内容-',
      ansConsultation:'',
      back:'前へ戻る',
      next:'次へ進む'
    }
  },
  methods: {
    //ストアに保存
    storeSave(){
        this.$store.state.ansConsultation = this.ansConsultation;
    }
  }
}
</script>