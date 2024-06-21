// script.js
document.getElementById('call-button').addEventListener('click', function() {
    alert('支払い方法についてのお問い合わせは、直接お電話にてお願いいたします。');
});

fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const ipElement = document.querySelector('.ip');
        ipElement.textContent = 'あなたのIPアドレス: ' + data.ip;
    })
    .catch(error => console.error('エラー:', error));

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById('countdown-timer');
    const locationInfoElement = document.getElementById('location-info');
    const endTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

    function updateCountdown() {
        const now = new Date();
        const remainingTime = endTime - now;

        if (remainingTime <= 0) {
            countdownElement.textContent = '期限切れ';
            return;
        }

        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        countdownElement.textContent = `${hours}時間 ${minutes}分 ${seconds}秒`;
    }

    setInterval(updateCountdown, 1000);

    fetch('https://ipinfo.io/json?token=1c93e3eb65ad8b') // Replace 'YOUR_API_TOKEN' with your actual token
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            const city = data.city;
            const region = data.region;
            const country = data.country;
            locationInfoElement.textContent = `IPアドレス: ${ip} | 地域: ${city}, ${region}, ${country}`;
        })
        .catch(error => {
            locationInfoElement.textContent = 'IPアドレスと地域情報を取得できませんでした。';
            console.error('Error fetching location info:', error);
        });
});
