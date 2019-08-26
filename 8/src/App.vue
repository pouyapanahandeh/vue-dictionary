<template>
  <div id="app">
    <Header />
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <QuestionBox 
            :question="questions[index]"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import QuestionBox from './components/QuestionBox.vue'

export default {
  name: 'app',
  components: {
    Header,
    QuestionBox
  },
  // as you can see, we write data in different way, but still data include the information of the 
  // application and returns opbject data.
  data(){
    return {
      questions: [],
      index: 0
    }
  },
  // Mounting hooks are often the most-used hooks, for better or worse. They allow you to access your component immediately before and after the first render. They do not, however, run during server-side rendering.
  mounted: function(){
    // Use if: You need to access or modify the DOM of your component immediately before or after the initial render.
    // Do not use if: You need to fetch some data for your component on initialization. Use created (or created + activated for keep-alive components) for this instead, especially if you need that data during server-side rendering.
    fetch('https://opentdb.com/api.php?amount=10&category=19&type=multiple',{
      method:'get'
    })
    .then((response) => {
      return response.json()
    })
    .then((jsonData) =>{
      this.questions = jsonData.results
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
