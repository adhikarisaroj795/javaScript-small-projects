const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 21;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);
function endRound(){
    const PlayerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= PlayerDamage;
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
       alert('you won!');
    }else if(currentPlayerHealth <= 0 && currentMonsterHealth >0)
    {
       alert('you lost');
    }
    else if(currentMonsterHealth <= 0 && currentPlayerHealth <= 0){
       alert('you have a draw');
    }
   
}

function attackMonster(mode){
    let maxDAmage;
    if(mode === 'ATTACK'){
        maxDAmage = ATTACK_VALUE;
    }else if(mode === 'STRONG_ATTACK'){
        maxDAmage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDAmage);
    currentMonsterHealth -= damage;
    endRound();
    
   
   

}

function attackHandler(){
attackMonster('ATTACK');
}
function strongAttackHandler(){
 attackMonster('STRONG_ATTACK');

}
function healPlayerHandler(){
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert('you cant heal more than max health');
        healValue = chosenMaxLife - currentPlayerHealth;
    }else{
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE
    endRound(); 
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);