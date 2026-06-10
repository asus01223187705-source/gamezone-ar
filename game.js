const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
let coins = 266;

function startGame(mode) {
  document.getElementById('startScreen').classList.remove('active');
  document.getElementById('gameScreen').classList.add('active');
  drawBoard();
}

function drawBoard() {
  const size = canvas.width;
  const cell = size / 15;
  
  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = '#e2e8f0';
  ctx.fillRect(0, 0, size, size);
  
  // رسم البيوت 4 الوان
  drawHome(0, 0, cell*6, '#ef4444'); // احمر
  drawHome(9*cell, 0, cell*6, '#3b82f6'); // ازرق
  drawHome(0, 9*cell, cell*6, '#eab308'); // اصفر
  drawHome(9*cell, 9*cell, cell*6, '#22c55e'); // اخضر
  
  // رسم المسار
  ctx.fillStyle = 'white';
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 1;
  
  // المسار الأفقي والرأسي
  for(let i=0; i<15; i++) {
    if(i>=6 && i<=8) continue; // النص فاضي
    ctx.fillRect(6*cell, i*cell, cell, cell);
    ctx.strokeRect(6*cell, i*cell, cell, cell);
    ctx.fillRect(i*cell, 6*cell, cell, cell);
    ctx.strokeRect(i*cell, 6*cell, cell, cell);
  }
  
  // المثلث النص
  ctx.fillStyle = '#ef4444';
  ctx.beginPath();
  ctx.moveTo(7*cell, 7*cell);
  ctx.lineTo(7*cell, 6*cell);
  ctx.lineTo(6*cell, 7*cell);
  ctx.fill();
  
  ctx.fillStyle = '#3b82f6';
  ctx.beginPath();
  ctx.moveTo(7*cell, 7*cell);
  ctx.lineTo(7*cell, 6*cell);
  ctx.lineTo(8*cell, 7*cell);
  ctx.fill();
  
  // قطع حمرا مثال
  drawPiece(1*cell, 1*cell, cell*0.8, '#dc2626');
}

function drawHome(x, y, size, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
  ctx.fillStyle = 'white';
  for(let i=0; i<2; i++) {
    for(let j=0; j<2; j++) {
      ctx.beginPath();
      ctx.arc(x + size/4 + i*size/2, y + size/4 + j*size/2, size/8, 0, Math.PI*2);
      ctx.fill();
    }
  }
}

function drawPiece(x, y, size, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, size/2, 0, Math.PI*2);
  ctx.fill();
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.stroke();
}

function rollDice() {
  const num = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice').innerText = num;
  
  // تجربة: بعد رمية رقم 6 نطلع فوز
  if(num == 6 && Math.random() > 0.7) {
    showWinner();
  }
}

function showWinner() {
  document.getElementById('gameScreen').classList.remove('active');
  document.getElementById('winnerScreen').classList.add('active');
  coins += 500;
  document.getElementById('coins').innerText = coins;
}

function watchAd() {
  // هنا رابط exe.io بتاعك
  window.open('https://exe.io/رابط_اعلانك', '_blank');
  setTimeout(() => {
    coins += 100;
    document.getElementById('coins').innerText = coins;
    alert('مبروك +100 عملة!');
  }, 3000);
}
