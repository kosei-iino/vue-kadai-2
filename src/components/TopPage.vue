<template>
  <div class="TopPage">

    <!--ヘッダー-->
    <header>
        <p class="button is-info is-small">{{ step }}</p>
        <p class="instruction">{{ instruction }}</p>
    </header>

    <!--内容-->
    <div class="content">
      
      <!--性別-->
      <label class="title">{{ sex }}</label>

      <div>
        <!--男-->
        <input type="radio" id="man" value="man" v-model="ansSex">
        <label for="man">{{ sexMan }}</label>

        <!--女-->
        <input type="radio" id="woman" value="woman" v-model="ansSex">
        <label for="woman">{{ sexWoman }}</label>
      </div>

      <!--生年月日確認-->
      <label class="title">{{ birthday }}</label>

      <div>
        <!--年-->
        <select v-model="ansBirthYear" @change="getSelectDay">
          <option v-for="(num,key) in yearNum" :key="key">{{ yearNow - num }}</option>
        </select>
        <label>{{ birthdayYear }}</label>

        <!--月-->
        <select v-model="ansBirthMonth" @change="getSelectDay">
          <option v-for="(num,key) in monthNum" :key="key">{{ num }}</option>
        </select>
        <label>{{ birthdayManth }}</label>

        <!--日-->
        <select v-model="ansBirthDay" @change="storeSave">
          <option v-for="(num,key) in daysNum" :key="key">{{ num }}</option>
        </select>
        <label>{{ birthdayDay }}</label>
      </div>
      
    </div>

    <!--ページ移動-->
    <span class="buttons">
      <router-link class="transition-button" to="/QuestionnairePage">{{ next }}</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TopPage',
  data () {
    return {
      step:'STEP1',
      instruction:'お客様の情報を入力してください',
      sex:'-性別-',
      sexMan:'男性',
      sexWoman:'女性',
      ansSex:'',
      birthday:'-生年月日-',
      birthdayYear:'年',
      birthdayManth:'月',
      birthdayDay:'日',
      yearNow:'',
      ansBirthYear:'',
      yearNum:50,
      ansBirthMonth:'',
      monthNum:12,
      ansBirthDay:'',
      daysNum:'',
      next:'次へ進む >'
    }
  },
  created: function(){
    this.getYearNow();
  },
  methods: {
    //ストアに保存
    storeSave(){
     this.$store.state.ansSex = this.ansSex;
     this.$store.state.ansBirthYear = this.ansBirthYear;
     this.$store.state.ansBirthMonth = this.ansBirthMonth;
     this.$store.state.ansBirthDay = this.ansBirthDay;
    },
    //今の年を取得
    getYearNow: function()
    {
      const today = new Date()
      this.yearNow = today.getFullYear();
    },
    //指定年月の最大日付を取得
    getSelectDay: function () 
    {
      this.daysNum = new Date(this.ansBirthYear, this.ansBirthMonth, 0).getDate();
      
    }
  }
}
</script>