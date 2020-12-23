<template>
  <div class="questionnairePage">

    <!--ヘッダー-->
    <header>
        <p class="button is-info is-small">{{ step }}</p>
        <p class="instruction">{{ instruction }}</p>
    </header>

    <!--内容-->
    <div class="content">

      <!--1問目-->
      <div v-if="ques1_display">
        <label class="title">{{ lifeInsurance }}</label>

        <div>
          <input type="radio" id="yesInstruction" value="Y" v-model="ansInstruction" @change="ques2_display = true">
            <label for="yesInstruction">{{ yes }}</label>
          <input type="radio" id="noInstruction" value="N" v-model="ansInstruction" @change="ques2_display = true">
            <label for="noInstruction">{{ no }}</label>
        </div>
      </div>

      <!--2問目-->
      <div v-if="ques2_display">
        <label class="title">{{ hospitalization }}</label>

        <div>
          <input type="radio" id="yesHospitalization" value="Y" v-model="ansHospitalization" @change="ques3_display = true">
            <label for="yesHospitalization">{{ yes }}</label>
          <input type="radio" id="noHospitalization" value="N" v-model="ansHospitalization" @change="ques3_display = true">
            <label for="noHospitalization">{{ no }}</label>
        </div>
      </div>

      <!--3問目-->
      <div v-if="ques3_display">
        <label class="title">{{ hospitalizationHistory }}</label>

        <div>
          <input type="radio" id="yesHospitalizationHistory" value="Y" v-model="ansHospitalizationHistory">
            <label for="yesHospitalizationHistory">{{ yes }}</label>
          <input type="radio" id="noHospitalizationHistory" value="N" v-model="ansHospitalizationHistory">
            <label for="noHospitalizationHistory">{{ no }}</label>
        </div>
      </div>
      
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
  name: 'questionnairePage',
  data () {
    return {
      step:'STEP2',
      instruction:'以下に答えてください',
      lifeInsurance:'現在、生命保険に加入されていますか？',
      hospitalization:'現在入院中ですか。または、最近3ヵ月以内に医師の診察・検察の結果、入院・手術をすすめられたことはありますか？',
      hospitalizationHistory:'過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？',
      ansInstruction:'',
      ansHospitalization:'',
      ansHospitalizationHistory:'',
      ques1_display: true,
      ques2_display: false,
      ques3_display: false,
      yes:'はい',
      no:'いいえ',
      back:'前へ戻る',
      next:'次へ進む',
      backPage:'/',
      nextPage:'contentPage'
    }
  },
  methods: {
    //ページ遷移
    movePage(pageName){
      //ストアに保存
      this.$store.state.ansInstruction = this.ansInstruction;
      this.$store.state.ansHospitalization = this.ansHospitalization;
      this.$store.state.ansHospitalizationHistory = this.ansHospitalizationHistory;

      //指定のパスへ移動
      this.$router.push(pageName);
    }
  }
}
</script>