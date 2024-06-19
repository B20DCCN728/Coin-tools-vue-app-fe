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
  <h1>
    {{ serverData.receivedAddress }}
  </h1>
</template>
<script setup>
import { ref, onMounted, computed, watch, defineEmits } from 'vue';
import SockJS from 'sockjs-client';
import TerminalService from 'primevue/terminalservice'
import Stomp from 'stompjs';

const userName = ref('');
const serverData = ref({
  "receivedAddress": "Hello",
  "status": "SUCCESS"
});

const emit = defineEmits(['data-changed']);

// Set up the WebSocket connection
const socketUrl = "http://localhost:8080/ws"; 
const socket = new SockJS(socketUrl);
const stompClient = Stomp.over(socket);

// Callback function to handle received data
const onDataReceived = (message) => {
  const data = JSON.parse(message.body);
  serverData.value = data;
  console.log('Received data:', data);
};

// Watch server data to change color of value
watch(serverData, (newServerData) => {
  console.log(newServerData);
  emit('data-changed', newServerData);
});

// Subscribe to a specific STOMP destination to get real-time data
onMounted(async () => {
    console.log('Connecting to WebSocket...');
    stompClient.connect({}, (frame) => {
    console.log('Connected to WebSocket');
        // Subscribe to a specific STOMP destination to get real-time data
    const subscription = stompClient.subscribe('/topic/transfer', onDataReceived);
        // subscription.unsubscribe();
    // loading.value = false;
  });
});
</script>