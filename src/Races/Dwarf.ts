import Race from './Race';

export default class Dwarf extends Race {
  #maxLifePoints: number;
  static #numbersInstanceDwarf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.#maxLifePoints = 80;
    Dwarf.#numbersInstanceDwarf += 1;
  }

  get maxLifePoints(): number {
    return this.#maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.#numbersInstanceDwarf;
  }
}