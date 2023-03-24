import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  #energyType: EnergyType;
  static #numbersInstanceRanger = 0;
  constructor(name: string) {
    super(name);
    this.#energyType = 'stamina';
    Ranger.#numbersInstanceRanger += 1;
  }

  get energyType(): EnergyType {
    return this.#energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.#numbersInstanceRanger;
  }
}