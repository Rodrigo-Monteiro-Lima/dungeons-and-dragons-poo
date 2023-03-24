import Race from './Race';

export default class Halfling extends Race {
  #maxLifePoints: number;
  static #numbersInstanceHalfling = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.#maxLifePoints = 60;
    Halfling.#numbersInstanceHalfling += 1;
  }

  get maxLifePoints(): number {
    return this.#maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.#numbersInstanceHalfling;
  }
}