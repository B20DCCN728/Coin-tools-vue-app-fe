<template>
  <div>
    <h1>Batch Hedera Network Transfer</h1>
    <p>Batch Associtate, transfer, deploy, mint nft, check balance</p>
    <a-row :gutter="16">
      <a-col :span="12">
        <Input />
      </a-col>
      <a-col :span="12">
        <a-textarea v-model:value="value" placeholder="Paste or Insert your Privatekey List" :rows="4" />
        <br />
        <br />
        <a-textarea :rows="4" placeholder="Paste or Insert your Address List" :maxlength="6" />
      </a-col>
    </a-row>
    <a-space>
      <a-button type="primary" loading>Primary</a-button>
    </a-space>
    <Terminal
      welcomeMessage="Welcome to Ph Plus"
      prompt="Dead-$"
      aria-label="Ph Terminal Service"
    />

  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import Terminal from 'primevue/terminal';
import TerminalService from 'primevue/terminalservice'
import Input from './components/transfer/Input.vue';
</script>
