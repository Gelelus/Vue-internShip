<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button @click.prevent="activate('poor')">Poor</button>
    </li>
    <!-- или просто можно type = "button" вместо @click.prevent, что в свою очередь отменит срабатывания submit на форме при нажатии на button  -->
    <li :class="{ active: modelValue === 'average' }">
      <button @click.prevent="activate('average')">Average</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button @click.prevent="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  // по сути когда навешиваем v-model на кастомный компонент в него по дефолту родительский компонент опрокидывает prop `modelValue` и вешает `@update:modelValue` евент
  props: ['modelValue'],
  emits: ['update:modelValue'],
  //
  // data() {
  //   return {
  //     activeOption: this.modelValue // не будет работать т.к. дата взяла изначальное значение
  //   };
  // },

  methods: {
    activate(option) {
      this.activeOption = option;
      this.$emit('update:modelValue', option);
    }
  }
};
</script>

<style scoped>
.active {
  border-color: purple;
}

.active button {
  color: purple;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
}
</style>
