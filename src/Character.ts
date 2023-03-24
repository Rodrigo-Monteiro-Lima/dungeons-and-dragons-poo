import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter/Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  #lifePoints: number;
  #strength: number;
  #defense: number;
  #energy: Energy;
  #race: Race;
  #archetype: Archetype;
  #maxLifePoinst: number;
  #dexterity: number;

  constructor(name: string) {
    this.#dexterity = getRandomInt(1, 10);
    this.#race = new Elf(name, this.#dexterity);
    this.#archetype = new Mage(name);
    this.#maxLifePoinst = this.#race.maxLifePoints / 2;
    this.#lifePoints = this.#maxLifePoinst;
    this.#strength = getRandomInt(1, 10);
    this.#defense = getRandomInt(1, 10);
    this.#energy = {
      type_: this.#archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.#strength);
  }

  special(enemy: Fighter): void {
    const crit = getRandomInt(0, 1);
    enemy.receiveDamage(this.#strength * (2 + crit));
  }

  levelUp(): void {
    this.#maxLifePoinst += getRandomInt(1, 10);
    this.#strength += getRandomInt(1, 10);
    this.#dexterity += getRandomInt(1, 10);
    this.#defense += getRandomInt(1, 10);
    this.#energy.amount = 10;
    if (this.#maxLifePoinst > this.#race.maxLifePoints) {
      this.#maxLifePoinst = this.#race.maxLifePoints;
    }
    this.#lifePoints = this.#maxLifePoinst;
  }

  receiveDamage(injure: number): number {
    const dmg = injure - this.#defense;
    if (dmg > 0) { this.#lifePoints -= dmg; } else { this.#lifePoints -= 1; }
    if (this.#lifePoints <= 0) this.#lifePoints = -1;
    return this.#lifePoints;
  }

  get lifePoints(): number {
    return this.#lifePoints;
  }

  get strength(): number {
    return this.#strength;
  }

  get defense(): number {
    return this.#defense;
  }

  get energy(): Energy {
    return { ...this.#energy };
  }

  get race(): Race {
    return this.#race;
  }

  get archetype(): Archetype {
    return this.#archetype;
  }

  get maxLifePoinst(): number {
    return this.#maxLifePoinst;
  }
   
  get dexterity(): number {
    return this.#dexterity;
  }
}