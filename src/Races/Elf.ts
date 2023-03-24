import Race from './Race';

export default class Elf extends Race {
  #maxLifePoints: number;
  static #numbersInstanceElf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.#maxLifePoints = 99;
    Elf.#numbersInstanceElf += 1;
  }

  get maxLifePoints(): number {
    return this.#maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.#numbersInstanceElf;
  }
}