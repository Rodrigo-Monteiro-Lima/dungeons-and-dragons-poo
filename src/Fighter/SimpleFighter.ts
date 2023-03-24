export default interface SimpleFighter {
  lifePoints: number,
  strength: number,
  attack(e: SimpleFighter): void,
  receiveDamage(a: number): number,
}