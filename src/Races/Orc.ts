import Race from './Race';

export default class Orc extends Race {
  #maxLifePoints: number;
  static #numbersInstanceOrc = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.#maxLifePoints = 74;
    Orc.#numbersInstanceOrc += 1;
  }

  get maxLifePoints(): number {
    return this.#maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.#numbersInstanceOrc;
  }
}