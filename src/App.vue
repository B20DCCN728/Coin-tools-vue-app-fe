<template>
  <div>
    <h1>Batch Hedera Network Transfer</h1>
    <p>Batch Associtate, transfer, deploy, mint nft, check balance</p>
    <a-row :gutter="16">
      <a-col :span="12">
        <Input @data-changed="handleTerminal"></Input>
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
      :ref="terminalRef"
      welcomeMessage="Welcome to Ph Plus"
      prompt="Dead-$"
      aria-label="Ph Terminal Service"
    />

  </div>
  
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Terminal from 'primevue/terminal';
import TerminalService from 'primevue/terminalservice'
import Input from './components/transfer/Input.vue';

const handleTerminal = (result) => {
  console.log('Received data:', result.receivedAddress);
  let response = `Transaction from ${result.receivedAddress} is ${result.status}!`;
  TerminalService.emit('response', response);
};
const terminalRef = ref(null);  
onMounted(() => {
  // Example response message when terminal mounts
  const responseMessage = "Terminal is ready.";

  // Emit the response message to be displayed in the terminal
  TerminalService.emit('response', responseMessage);
});

</script>
