<template>
  <div class="questionnairePage">
    <!--ヘッダー-->
    <header>
      <p class="button is-info is-small">STEP2</p>
      <p class="instruction">以下に答えてください</p>
    </header>

    <!--内容-->
    <div class="content">
      <!--1問目-->
      <div v-if="ques1_display">
        <label class="title">現在、生命保険に加入されていますか？</label>

        <div>
          <input
            type="radio"
            id="yesInstruction"
            value="Y"
            v-model="ansInstruction"
            @change="ques2_display = true"
          />
          <label for="yesInstruction">はい</label>
          <input
            type="radio"
            id="noInstruction"
            value="N"
            v-model="ansInstruction"
            @change="ques2_display = true"
          />
          <label for="noInstruction">いいえ</label>
        </div>
      </div>

      <!--2問目-->
      <div v-if="ques2_display">
        <label class="title"
          >現在入院中ですか。または、最近3ヵ月以内に医師の診察・検察の結果、入院・手術をすすめられたことはありますか？</label
        >

        <div>
          <input
            type="radio"
            id="yesHospitalization"
            value="Y"
            v-model="ansHospitalization"
            @change="ques3_display = true"
          />
          <label for="yesHospitalization">はい</label>
          <input
            type="radio"
            id="noHospitalization"
            value="N"
            v-model="ansHospitalization"
            @change="ques3_display = true"
          />
          <label for="noHospitalization">いいえ</label>
        </div>
      </div>

      <!--3問目-->
      <div v-if="ques3_display">
        <label class="title"
          >過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</label
        >

        <div>
          <input
            type="radio"
            id="yesHospitalizationHistory"
            value="Y"
            v-model="ansHospitalizationHistory"
          />
          <label for="yesHospitalizationHistory">はい</label>
          <input
            type="radio"
            id="noHospitalizationHistory"
            value="N"
            v-model="ansHospitalizationHistory"
          />
          <label for="noHospitalizationHistory">いいえ</label>
        </div>
      </div>
    </div>

    <!--ページ移動-->
    <span class="buttons">
      <button class="transition-button" @click="movePage('/')">前へ戻る</button>
      <button class="transition-button" @click="movePage('contentPage')">次へ進む</button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'questionnairePage',
  data() {
    return {
      ansInstruction: '',
      ansHospitalization: '',
      ansHospitalizationHistory: '',
      ques1_display: true,
      ques2_display: false,
      ques3_display: false,
    };
  },
  methods: {
    //ページ遷移
    movePage(pageName) {
      //ストアに保存
      this.$store.commit('setUser', {
        ansInstruction: this.ansInstruction,
        ansHospitalization: this.ansHospitalization,
        ansHospitalizationHistory: this.ansHospitalizationHistory,
      });

      //指定のパスへ移動
      this.$router.push(pageName);
    },
  },
};
</script>
