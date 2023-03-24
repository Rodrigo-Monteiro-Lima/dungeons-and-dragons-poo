import { EnergyType } from '../Energy';

export default abstract class Archetype {
  #name: string;
  #special: number;
  #cost: number;

  constructor(name: string) {
    this.#name = name;
    this.#special = 0;
    this.#cost = 0;
  }

  get name(): string {
    return this.#name;
  }

  get special(): number {
    return this.#special;
  }

  get cost(): number {
    return this.#cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}