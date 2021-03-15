<template>
  <li>
    <h2>
      <span>{{ name }} ({{ valid ? "valid" : "invalid" }})</span>
      <button class="delete" @click="deleteContact">X</button>
    </h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleValid">Toggle Valid</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAdress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    phoneNumber: String,
    emailAdress: String,
    valid: Boolean,
  },
  emits: ["toggle-valid", "delete-contact"],
  name: "contact",
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleValid() {
      this.$emit("toggle-valid", this.id);
    },
    deleteContact() {
      this.$emit("delete-contact");
    },
  },
};
</script>

<style scoped>
.delete {
  color: red !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  float: right;
}
</style>
