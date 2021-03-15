<template>
  <form @submit.prevent="addContact">
    <div>
      <label>Name</label>
      <input type="text" v-model="contactName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="contactPhone" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="contactEmail" />
    </div>
    <button>
      add contact
    </button>
  </form>
</template>

<script>
export default {
  name: "new-contact",
  data() {
    return {
      contactName: "",
      contactPhone: "",
      contactEmail: "",
    };
  },
  emits: ["new-contact"],
  computed: {
    formValid() {
      return (
        this.contactEmail !== "" &&
        this.contactPhone !== "" &&
        this.contactEmail !== ""
      );
    },
  },
  methods: {
    addContact() {
      this.formValid &&
        this.$emit("new-contact", {
          name: this.contactName,
          email: this.contactEmail,
          phone: this.contactPhone,
        });
      this.resetForm()  
    },
    resetForm() {
      this.contactName = "";
      this.contactPhone = "";
      this.contactEmail = "";
    },
  },
};
</script>

<style></style>
