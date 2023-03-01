const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messagesList = document.getElementById('messages-list');

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message.trim() !== '') {
    addMessage(message, 'sent');
    messageInput.value = '';
  }
});

function addMessage(message, className) {
  const li = document.createElement('li');
  li.classList.add(className);
  const messageText = document.createElement('div');
  messageText.classList.add('message-text');
  messageText.textContent = message;
  li.appendChild(messageText);
  messagesList.appendChild(li);
  messagesList.scrollTop = messagesList.scrollHeight;
}
