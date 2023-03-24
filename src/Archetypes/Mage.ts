import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  #energyType: EnergyType;
  static #numbersInstanceMage = 0;
  constructor(name: string) {
    super(name);
    this.#energyType = 'mana';
    Mage.#numbersInstanceMage += 1;
  }

  get energyType(): EnergyType {
    return this.#energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.#numbersInstanceMage;
  }
}