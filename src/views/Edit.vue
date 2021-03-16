<template>
  <h2>Editing Task</h2>

  <form @submit.prevent="updateTask(task)">
    <Input :task="task" />
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
import router from "../router";
import Input from "../components/Input";

export default {
  components: {
    Input,
  },
  computed: {
    ...mapState(["task"]),
  },
  methods: {
    ...mapActions(["getItem", "updateItem"]),
    updateTask() {
      this.updateItem(this.task);
      router.push("/");
    },
  },
  created() {
    this.getItem(this.$route.params.id);
  },
};
</script>

