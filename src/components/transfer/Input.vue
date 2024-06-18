<template>
    <div class="components-input-demo-presuffix">
      <a-input v-model:value="userName" placeholder="Select or Insert your token address">
        <template #prefix>
          <user-outlined />
        </template>
        <template #suffix>
          <a-tooltip title="Extra information">
            <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
          </a-tooltip>
        </template>
      </a-input>
      <br />
      <br />
      <a-input prefix="$" suffix="HBAR" placeholder="Insert your bitch"/>
    </div>
  </template>
  <script setup>
    import { ref } from 'vue';
    const userName = ref('');
  </script>