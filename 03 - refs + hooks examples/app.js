const app = new Vue({
  data() {
    return {
      currentUserInput: '',
      message: '1',
    };
  },
  methods: {
    saveInput(event, g) {
      console.log(g)
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.$refs.userText.focus()
      this.message = this.currentUserInput;
      // this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("beforeCreate hook")
  },
  created() {
    console.log("Created hook")
  },
  beforeMount() {
    console.log("beforeMount hook")
  },
  mounted() {
    console.log("mounted hook")
  },
  beforeUpdate() {
    console.log("something going to update")
  },
  updated() {
    console.log("something updated")
  }, 
  beforeDestroy() {
    console.log("beforeDestroy hook -------")
  },
  destroyed() {
    console.log("destroyed Hook ------")
  }
});

 console.log("------ was created instance -----")

app.$mount('#app');

// setTimeout(()=>app.$destroy('#app'), 5000)

