<template>
  <input
    type="text"
    class="form-control mt-2"
    placeholder="Enter the name"
    v-model.trim="task.name"
  />

  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="checkbox"
      id="check-1"
      value="Javascript"
      v-model="task.categories"
    />
    <label class="form-check-label" for="check-1">Javascript</label>
  </div>

  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="checkbox"
      id="check-2"
      value="NodeJs"
      v-model="task.categories"
    />
    <label class="form-check-label" for="check-2">NodeJs</label>
  </div>

  <div class="form-check mt-2">
    <input
      class="form-check-input"
      type="radio"
      name="exampleRadios"
      id="Radio1"
      value="Urgente"
      v-model="task.status"
      checked
    />
    <label class="form-check-label" for="Radio1"> Urgente </label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="exampleRadios"
      id="Radio2"
      value="Normal"
      v-model="task.status"
    />
    <label class="form-check-label" for="Radio2"> Normal </label>
  </div>

  <div class="mt-2">
    <input type="number" class="form-control" v-model.number="task.number" />
  </div>

  <button
    class="btn btn-success btn-block mt-3"
    type="submit"
    :disabled="disableSend"
  >
    Send
  </button>
</template>

<script>
export default {
  props: {
    task: Object,
  },
  computed: {
    disableSend() {
      return this.task.name == "";
    },
  },
};
</script>

