<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from "../users/UserItem.vue";

export default {
  props: ["teamId"],
  inject: ["users", "teams"],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: "",
      members: []
    };
  },
  methods: {
    setTeam(teamId) {
      console.log(teamId)
      const team = this.teams.find(el => el.id === teamId);
      this.teamName = team.team;
      this.members = team.members.map(userId =>
        this.users.find(user => user.id === userId)
      );
    }
  },
  created() {
    this.setTeam(this.teamId)
  },
  watch:{
    teamId(id){
      this.setTeam(id)
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
