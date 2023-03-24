import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  #energyType: EnergyType;
  static #numbersInstanceNecromancer = 0;
  constructor(name: string) {
    super(name);
    this.#energyType = 'mana';
    Necromancer.#numbersInstanceNecromancer += 1;
  }

  get energyType(): EnergyType {
    return this.#energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.#numbersInstanceNecromancer;
  }
}