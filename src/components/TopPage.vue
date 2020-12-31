<template>
  <div class="topPage">
    <!--ヘッダー-->
    <header>
      <p class="button is-info is-small">STEP1</p>
      <p class="instruction">お客様の情報を入力してください</p>
    </header>

    {{ this.$store.state.user }}

    <!--内容-->
    <div class="content">
      <!--性別-->
      <label class="title">-性別-</label>

      <div>
        <!--男-->
        <input type="radio" id="man" value="man" v-model="ansSex" />
        <label for="man">男性</label>

        <!--女-->
        <input type="radio" id="woman" value="woman" v-model="ansSex" />
        <label for="woman">女性</label>
      </div>

      <!--生年月日確認-->
      <label class="title">-生年月日-</label>

      <div>
        <!--年-->
        <select v-model="ansBirthYear" @change="getSelectDays">
          <option v-for="(num, key) in 50" :key="key">{{ yearNow - num }}</option>
        </select>
        <label>年</label>

        <!--月-->
        <select v-model="ansBirthMonth" @change="getSelectDays">
          <option v-for="(num, key) in 12" :key="key">{{ num }}</option>
        </select>
        <label>月</label>

        <!--日-->
        <select v-model="ansBirthDay">
          <option v-for="(num, key) in daysNum" :key="key">{{ num }}</option>
        </select>
        <label>日</label>
      </div>
    </div>

    <!--ページ移動-->
    <span class="buttons">
      <button class="transition-button" @click="movePage('QuestionnairePage')">
        次へ進む >
      </button>
    </span>
  </div>
</template>

<script>
//今の年を取得
import getNowYear from '../js/getNowYear';

//指定年月の最大日付を取得
import getSelectDay from '../js/getSelectDay';

export default {
  name: 'topPage',
  data() {
    return {
      ansSex: '',
      yearNow: '',
      ansBirthYear: '',
      ansBirthMonth: '',
      ansBirthDay: '',
      daysNum: '',
    };
  },
  mounted() {
    //今の年を取得
    this.yearNow = getNowYear();
  },
  methods: {
    //ページ遷移
    movePage(pageName) {
      //ストアに保存
      this.$store.commit('setUser', {
        ansSex: this.ansSex,
        ansBirthYear: this.ansBirthYear,
        ansBirthMonth: this.ansBirthMonth,
        ansBirthDay: this.ansBirthDay,
      });

      //指定のパスへ移動
      this.$router.push(pageName);
    },
    //指定年月の最大日付を取得
    getSelectDays() {
      this.daysNum = getSelectDay(this.ansBirthYear, this.ansBirthMonth);
    },
  },
};
</script>
