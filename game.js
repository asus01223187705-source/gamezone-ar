const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
let coins = 266;

function startGame(players) {
  document.getElementById('start').classList.remove('active');
  document.getElementById('game').classList.add('active');
  drawBoard();
}

function drawBoard() {
  const size = 450;
  const cell = size / 15;
  
  ctx.fillStyle = '#e2e8f0';
  ctx.fillRect(0, 0, size, size);
  
  // البيوت 4 الوان
  ctx.fillStyle = '#ef4444'; // احمر
  ctx.fillRect(0, 0, cell*6, cell*6);
  ctx.fillStyle = '#3b82f6'; // ازرق
  ctx.fillRect(9*cell, 0, cell*6, cell*6);
  ctx.fillStyle = '#eab308'; // اصفر
  ctx.fillRect(0, 9*cell, cell*6, cell*6);
  ctx.fillStyle = '#22c55e'; // اخضر
  ctx.fillRect(9*cell, 9*cell, cell*6, cell*6);
  
  // المسار الابيض
  ctx.fillStyle = 'white';
  ctx.strokeStyle = '#94a3b8';
  for(let i=0; i<15; i++) {
    if(i<6 || i>8) {
      ctx.fillRect(6*cell, i*cell, cell, cell);
      ctx.strokeRect(6*cell, i*cell, cell, cell);
      ctx.fillRect(i*cell, 6*cell, cell, cell);
      ctx.strokeRect(i*cell, 6*cell, cell, cell);
    }
  }
  
  // المثلث النص
  ctx.fillStyle = '#ef4444';
  ctx.beginPath();
  ctx.moveTo(7*cell, 7*cell);
  ctx.lineTo(7*cell, 6*cell);
  ctx.lineTo(6*cell, 7*cell);
  ctx.fill();
  
  // دواير البداية
  ctx.fillStyle = 'white';
  for(let i=0; i<4; i++) {
    for(let j=0; j<4; j++) {
      let x = (i%2)*2*cell + cell*1.5;
      let y = Math.floor(i/2)*2*cell + cell*1.5;
      ctx.beginPath();
      ctx.arc(x, y, cell*0.8, 0, Math.PI*2);
      ctx.fill();
      ctx.stroke();
    }
  }
}

function rollDice() {
  const num = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice').innerText = num;
  
  if(num == 6 && Math.random() > 0.8) {
    document.getElementById('game').classList.remove('active');
    document.getElementById('winner').classList.add('active');
    coins += 500;
    document.getElementById('coins').innerText = coins;
  }
}

function watchAd() {
  // حط رابط exe.io بتاعك هنا
  window.open('https://exe.io/رابطك', '_blank');
  setTimeout(() => {
    coins += 100;
    document.getElementById('coins').innerText = coins;
    alert('تم! +100 عملة');
  }, 3000);
                     }
