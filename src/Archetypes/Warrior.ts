import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  #energyType: EnergyType;
  static #numbersInstanceWarrior = 0;
  constructor(name: string) {
    super(name);
    this.#energyType = 'stamina';
    Warrior.#numbersInstanceWarrior += 1;
  }

  get energyType(): EnergyType {
    return this.#energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.#numbersInstanceWarrior;
  }
}