<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Categories</th>
        <th scope="col">Status</th>
        <th scope="col">Number</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tasks" :key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.name }}</td>
        <td>
          <span
            class="badge bg-primary me-2"
            v-for="(cat, index) in item.categories"
            :key="index"
            >{{ cat }}</span
          >
        </td>
        <td>{{ item.status }}</td>
        <td>{{ item.number }}</td>
        <td>
          <router-link
            class="btn btn-primary btn-sm me-2"
            :to="{
              name: 'Edit',
              params: {
                id: item.id,
              },
            }"
            >Edit</router-link
          >
          <button class="btn btn-danger btn-sm" @click="deleteItem(item.id)">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    ...mapActions(["deleteItem"]),
  },
};
</script>

