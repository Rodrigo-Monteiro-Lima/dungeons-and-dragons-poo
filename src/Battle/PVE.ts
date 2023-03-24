import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  #player: Fighter;
  #monster: (Fighter | SimpleFighter)[];

  constructor(player: Fighter, monsters: (Fighter | SimpleFighter)[]) {
    super(player);
    this.#player = player;
    this.#monster = monsters;
  }

  fight(): number {
    this.#monster.forEach((monster) => {
      do {
        this.#player.attack(monster);
        monster.attack(this.#player);
      } while (this.#player.lifePoints > 0 && monster.lifePoints > 0);
      this.#player.attack(monster);
      monster.attack(this.#player);
    }); 
    return this.#player.lifePoints === -1 ? -1 : 1;
  }
}
