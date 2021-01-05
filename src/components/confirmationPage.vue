<template>
  <div class="confirmationPage">
    <!--ヘッダー-->
    <header>
      <p class="button is-info is-small">STEP4</p>
      <p class="instruction">以下の内容をご確認ください</p>
    </header>

    <!--内容-->
    <div class="content">
      <!--性別-->
      <label class="title">-性別-</label>
      <p>{{ this.$store.state.user.ansSex }}</p>

      <!--生年月日-->
      <label class="title">-生年月日-</label>
      <p>
        {{ this.$store.state.user.ansBirthYear }}年
        {{ this.$store.state.user.ansBirthMonth }}月
        {{ this.$store.state.user.ansBirthDay }}日
      </p>

      <!--現在、生命保険に加入されていますか？-->
      <label class="title">-現在、生命保険に加入されていますか？-</label>
      <p>
        {{ this.$store.state.user.ansInstruction }}
      </p>

      <!--現在入院中ですか。または、最近3ヵ月以内に医師の診察・検察の結果、入院・手術をすすめられたことはありますか？-->
      <label class="title">
        -現在入院中ですか。または、最近3ヵ月以内に医師の診察・検察の結果、入院・手術をすすめられたことはありますか？-
      </label>
      <p>
        {{ this.$store.state.user.ansHospitalization }}
      </p>

      <!--過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-->
      <label class="title">
        -過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-
      </label>
      <p>
        {{ this.$store.state.user.ansHospitalizationHistory }}
      </p>

      <!--ご相談内容-->
      <label class="title">-ご相談内容-</label>
      <p>
        {{ this.$store.state.user.ansConsultation }}
      </p>
    </div>

    <!--ページ移動-->
    <span class="buttons">
      <button class="transition-button" @click="movePage('QuestionnairePage')">
        前へ戻る
      </button>
      <button class="transition-button">送信</button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'confirmationPage',
  methods: {
    //ページ遷移
    movePage(pageName) {
      //指定のパスへ移動
      this.$router.push(pageName);
    },
  },
};
</script>
