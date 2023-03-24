import Energy from '../Energy';

export default interface Fighter{
  lifePoints: number,
  strength: number,
  receiveDamage(a: number): number,
  defense:number,
  energy?: Energy,
  attack(e: Fighter): void,
  special?(e: Fighter): void,
  levelUp(): void,
}