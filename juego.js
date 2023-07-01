// Initial player and enemy life
var mainPlayerLife = 100;
var enemyLife = 100;
var message;
var player;
var waterAttack = 10;
var fireAttack = 20;
var airAttack = 30;



function playerAttack(attackName) {
    var defense = Math.floor(Math.random() * 3);
    var reduceLife = 0;
    if (attackName == 'agua') {
      if (defense == 0) {
        reduceLife = 10;
        defenseName = 'agua';
      } else if (defense == 1) {
        reduceLife = 20;
        defenseName = 'aire';
      } else if (defense == 2) {
        reduceLife = 0;
        defenseName = 'fuego';
      } 
    }
    // Air attack
    else if (attackName == 'aire') {
      if (defense == 0) {
        reduceLife = 5;
        defenseName = 'agua';
      } else if (defense == 1) {
        reduceLife = 0;
        defenseName = 'aire';
      } else if (defense == 2) {
        reduceLife = 20;
        defenseName = 'fuego';
      } 
    }
    else if (attackName == 'fuego') {
      if (defense == 0) {
        reduceLife = 0;
        defenseName = 'agua';
      } else if (defense == 1) {
        reduceLife = 10;
        defenseName = 'aire';
      } else if (defense == 2) {
        reduceLife = 5;
        defenseName = 'fuego';
      } 
    }
    
    document.getElementById('defense').className = 'defense active';
    document.getElementById('attacks').className = 'inactive';
    enemyLife -= reduceLife;
    document.getElementById('enemyLife').innerHTML = enemyLife;
    showLife(attackName, defenseName, reduceLife);
  }

function enemyLife() {
var msgEnemyLife = "La vida del enemigo es: " + enemyLife;
  document.getElementById("message").innerHTML = msgEnemyLife;
  console.log(text);
}

function mainPlayerLife() {
  var msgMainPlayerLife = "Tu vida es: " + mainPlayerLife;
  document.getElementById("message").innerHTML = msgMainPlayerLife;
  console.log(text);
}

function showLife(name, action, subtract) {
  if (enemyLife <= 0) {
    message = "Ganaste";
    document.getElementById("message").innerHTML = message;
    showEnemyDead();
    disableAttacks();
    console.log(message);
  } else {
    message =
      "Tu ataque fue con " +
      name +
      ", tu enemigo se defendió con " +
      action +
      ", y le quitoó " +
      subtract +
      " de vida";
    document.getElementById("message").innerHTML = message;
    console.log(message);
  }
}

function showDefense(name, action, subtract) {
  if (mainPlayerLife <= 0) {
    message = "Perdiste";
    document.getElementById("message").innerHTML = message;
    showMainPlayerDead();
    disableAttacks();
    console.log(message);
  } else {
    message =
      "Tedefendiste con " +
      name +
      ", tu amigo atacó " +
      action +
      ", y te quitó " +
      subtract +
      " de vida";
    document.getElementById("message").innerHTML = message;
    console.log(message);
  }
}



function playerDefense(defenseName) {
  var attack = Math.floor(Math.random() * 3);

  if (defenseName == 'agua') {
    if (attack == 0) {
      mainPlayerLife -= 10;
      showDefense(defenseName, "agua", 10);
    } else if (attack == 1) {
      mainPlayerLife -= 0;
      showDefense(defenseName, "aire", 0);
    } else if (attack == 2) {
      mainPlayerLife -= 5;
      showDefense(defenseName, "fuego", 5);
    } 
  }
  else if (defenseName == 'aire') {
    if (attack == 0) {
      mainPlayerLife -= 0;
      showDefense(defenseName, "agua", 0);
    } else if (attack == 1) {
      mainPlayerLife -= 5;
      showDefense(defenseName, "aire", 5);
    } else if (attack == 2) {
      mainPlayerLife -= 20;
      showDefense(defenseName, "fuego", 20);
    } 
  }
  else if (defenseName == 'fuego') {
    if (attack == 0) {
      mainPlayerLife -= 20;
      showDefense(defenseName, "agua", 20);
    } else if (attack == 1) {
      mainPlayerLife -= 10;
      showDefense(defenseName, "aire", 10);
    } else if (attack == 2) {
      mainPlayerLife -= 0;
      showDefense(defenseName, "fuego", 0);
    }
  }

  document.getElementById('playerLife').innerHTML = mainPlayerLife;
  document.getElementById('defense').className = 'inactive';
    document.getElementById('attacks').className = 'attacks';
    
}

function showEnemyDead() {
    document.getElementById('imgEnemy').src = "assets/imgs/dead2.png"
}

function showMainPlayerDead() {
    document.getElementById('imgMainPlayer').src = "assets/imgs/dead2.png"
}

function disableAttacks() {
    document.getElementById('attacks').className = 'inactive';
    document.getElementById('defense').className = 'inactive';
}