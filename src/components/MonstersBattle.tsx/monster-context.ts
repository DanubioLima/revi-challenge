import { createContext } from "react";

// Types
export interface Monster {
  name: string;
  attack: number;
  defense: number;
  speed: number;
  hp: number; // Health Points
  image_url: string;
}

export interface BattleResult {
  winner: Monster;
  loser: Monster;
  rounds: Round[];
}

export interface Round {
  attacker: string;
  defender: string;
  damage: number;
  remainingHp: number;
}

export const MonsterContext = createContext<{
  monsters: Monster[];
  addMonster: (monster: Monster) => void;
  battle: BattleResult | null;
  startBattle: (monster1: Monster, monster2: Monster) => void;
}>({
  monsters: [],
  addMonster: () => {},
  battle: null,
  startBattle: () => {},
});
