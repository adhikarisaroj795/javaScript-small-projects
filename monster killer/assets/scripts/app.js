
 const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 21;
const HEAL_VALUE = 20;
const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACCK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('maximum life for yo and the monster', '100');

let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];
if(isNaN(chosenMaxLife) || chosenMaxLife <= 0){
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);
function writeToLog(ev, val, monsterHealth){
    
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealthBar
    };
    if(ev === LOG_EVENT_PLAYER_ATTACCK){
       
           logEntry.target = 'MONSTER';
       
        battleLog.push(logEntry); 
    }else if(ev === LOG_EVENT_PLAYER_STRONG_ATTACK){
        logEntry = {
            event: ev,
            value: val,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealthBar
        };
        battleLog.push(logEntry); 
    }else if (ev === LOG_EVENT_MONSTER_ATTACK){
        logEntry = {
            event: ev,
            value: val,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealthBar
        };
        
    } else if (ev === LOG_EVENT_PLAYER_HEAL){
        logEntry = {
            event: ev,
            value: val,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealthBar
        };
        
    }else if (ev === LOG_EVENT_GAME_OVER){
        logEntry = {
            event: ev,
            value: val,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealthBar
        };
         
    }
    battleLog.push(logEntry);

}

function reset(){

         currentMonsterHealth = chosenMaxLife;
         currentPlayerHealth = chosenMaxLife;
         resetGame(chosenMaxLife);
}
function endRound(){
    const initialPlayerHealth = currentPlayerHealth;
    const PlayerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= PlayerDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, PlayerDamage, currentMonsterHealth, currentPlayerHealth);

    if(currentPlayerHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('you would be dead but the bonus life saved you!');
        
    }
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
       alert('you won!');
       writeToLog(LOG_EVENT_GAME_OVER, 'Player won', currentMonsterHealth, currentPlayerHealth);
       
    }else if(currentPlayerHealth <= 0 && currentMonsterHealth >0)
    {
       alert('you lost');
       writeToLog(LOG_EVENT_GAME_OVER, 'Player lost', currentMonsterHealth, currentPlayerHealth);
       
    }
    else if(currentMonsterHealth <= 0 && currentPlayerHealth <= 0){
       alert('you have a draw');
       writeToLog(LOG_EVENT_GAME_OVER, 'Player Draw', currentMonsterHealth, currentPlayerHealth);
       
    }
    if(currentMonsterHealth <= 0 || currentPlayerHealth <= 0){
            reset();

    }
   
}

function attackMonster(mode){
    const maxDAmage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    let logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACCK : LOG_EVENT_PLAYER_STRONG_ATTACK;
    // if(mode === MODE_ATTACK){
    //     maxDAmage = ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_ATTACCK;
    // }else if(mode === MODE_STRONG_ATTACK){
    //     maxDAmage = STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    // }
    const damage = dealMonsterDamage(maxDAmage);
    currentMonsterHealth -= damage;
    writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
    endRound();
    
   
   

}

function attackHandler(){
attackMonster(MODE_ATTACK);
}
function strongAttackHandler(){
 attackMonster(MODE_STRONG_ATTACK);

}
function healPlayerHandler(){
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert('you cant heal more than max health');
        healValue = chosenMaxLife - currentPlayerHealth;
    }else{
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);
    endRound(); 
}
function printLogHandler(){
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);