// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    // ***** Seleccionar un saxon aleatorio *****
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const selectedSaxon = this.saxonArmy[saxonIndex];
    
    // ***** Seleccionar un viking aleatorio *****
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const selectedViking = this.vikingArmy[vikingIndex];
    
    // ***** El saxon recibe daño igual a la fuerza del viking *****
    const result = selectedSaxon.receiveDamage(selectedViking.strength);
    
    // ***** Eliminar al saxon si está muerto *****
    if (selectedSaxon.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }
    
    return result;
  }

  saxonAttack() {
    // ***** Seleccionar un vikingo aleatorio *****
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const selectedViking = this.vikingArmy[vikingIndex];
    
    // ***** Seleccionar un saxon aleatorio *****
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const selectedSaxon = this.saxonArmy[saxonIndex];
    
    // ***** El vikingo recibe daño igual a la fuerza del saxon *****
    const result = selectedViking.receiveDamage(selectedSaxon.strength);
    
    // ***** Eliminar al vikingo si está muerto *****
    if (selectedViking.health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1);
    }
    
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}