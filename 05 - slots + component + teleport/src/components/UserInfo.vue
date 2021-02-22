<template>
  <card-wrapper>
    <template v-slot:header><!--<div> <header>  -->
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template><!--<div>  </header> -->
    <p>{{ infoText }}</p>
  </card-wrapper>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>

section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>