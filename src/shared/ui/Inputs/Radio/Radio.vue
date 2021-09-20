<template>
  <div>
    <label>
      <input name="name" type="radio" value="value1" @click="handleChange" />
      Value 1
    </label>

    <label>
      <input name="name" type="radio" value="value2" @click="handleChange" />
      Value 2
    </label>
    Value: {{ value }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useField, useForm } from "vee-validate";

export default defineComponent({
  name: "Radio",
  setup() {},
});
</script>

<style lang="scss" scoped></style>
