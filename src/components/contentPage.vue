<template>
  <div class="contentPage">
    <!--ヘッダー-->
    <header>
      <p class="button is-info is-small">STEP3</p>
      <p class="instruction">ご相談内容をご記入ください</p>
    </header>

    <!--内容-->
    <div class="content">
      <!--ご相談内容-->
      <label class="title">-ご相談内容-</label>
      <textarea cols="100" rows="10" v-model="ansConsultation"></textarea>
    </div>

    <!--ページ移動-->
    <span class="buttons">
      <button class="transition-button" @click="movePage('QuestionnairePage')">
        前へ戻る
      </button>
      <button class="transition-button" @click="movePage('/')">次へ進む</button>
    </span>
  </div>
</template>

<script>
export default {
  name: "contentPage",
  data() {
    return {
      ansConsultation: "",
    };
  },
  methods: {
    //ページ遷移
    movePage(pageName) {
      //ストアに保存
      this.$store.commit("setContentPage", { ansConsultation: this.ansConsultation });
      //指定のパスへ移動
      this.$router.push(pageName);
    },
  },
};
</script>
