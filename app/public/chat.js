var socket = io();

const btnSend = document.querySelector('#send');
const messageForm = document.querySelector('#message-form');
const input = document.querySelector('#input');
const messageBox = document.querySelector('.chat-message-box');

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input.value.trim() !== '') {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

socket.on('chat message', (message) => {
    const newMessage = document.createElement('div');
    newMessage.classList.add('chat-message');
    newMessage.textContent = message;

    messageBox.append(newMessage);
    messageBox.scrollTop = messageBox.scrollHeight;
});

socket.on('server message', (message) => {
    const newMessage = document.createElement('div');
    newMessage.classList.add('chat-message');
    newMessage.textContent = message;

    messageBox.append(newMessage);
    messageBox.scrollTop = messageBox.scrollHeight;
});
