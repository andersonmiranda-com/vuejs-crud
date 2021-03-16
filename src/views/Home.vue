<template>
  <form @submit.prevent="sendForm">
    <Input :task="task" />
  </form>

  <hr />

  <ItemsList />
</template>

<script>
import Input from "../components/Input";
import ItemsList from "../components/ItemsList";
import { mapActions } from "vuex";
const shortid = require("shortid");

export default {
  name: "Home",
  components: {
    Input,
    ItemsList,
  },
  data() {
    return {
      task: {
        id: "",
        name: "",
        categories: [],
        status: "",
        number: 0,
      },
    };
  },
  methods: {
    ...mapActions(["addItem"]),
    sendForm() {
      console.log(this.task);

      this.task.id = shortid.generate();
      this.addItem(this.task);
      this.task = {
        name: "",
        categories: [],
        status: "",
        number: 0,
      };
    },
  },
};
</script>
