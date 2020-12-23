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
        <textarea cols="100" rows="10" v-model="ansConsultation"></textarea>
  
    </div>

    <!--ページ移動-->
    <span class="buttons">
      <button class="transition-button" @click="movePage(backPage)">{{ back }}</button>
      <button class="transition-button" @click="movePage(nextPage)">{{ next }}</button>
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
      next:'次へ進む',
      backPage:'QuestionnairePage',
      nextPage:'/'
    }
  },
  methods: {
    //ページ遷移
    movePage(pageName){
      //ストアに保存
      this.$store.state.ansConsultation = this.ansConsultation;

      //指定のパスへ移動
      this.$router.push(pageName);
    }
  }
}
</script>