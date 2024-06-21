// script.js
document.getElementById('call-button').addEventListener('click', function() {
    alert('支払い方法についてのお問い合わせは、直接お電話にてお願いいたします。');
});

fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const ipElement = document.querySelector('.ip');
        ipElement.textContent = 'IPアドレス: ' + data.ip;
    })
    .catch(error => console.error('エラー:', error));
