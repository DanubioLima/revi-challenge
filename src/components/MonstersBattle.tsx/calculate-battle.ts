import { Monster, Round } from "./monster-context";

export function calculateBattle(monster1: Monster, monster2: Monster) {
  let attacker = determineFirstAttacker(monster1, monster2);
  let defender = attacker === monster1 ? monster2 : monster1;

  const rounds: Round[] = [];
  let m1Hp = monster1.hp;
  let m2Hp = monster2.hp;

  while (m1Hp > 0 && m2Hp > 0) {
    const damage = Math.max(1, attacker.attack - defender.defense);

    if (defender === monster1) {
      m1Hp -= damage;
      rounds.push({
        attacker: attacker.name,
        defender: defender.name,
        damage,
        remainingHp: m1Hp,
      });
    } else {
      m2Hp -= damage;
      rounds.push({
        attacker: attacker.name,
        defender: defender.name,
        damage,
        remainingHp: m2Hp,
      });
    }

    [attacker, defender] = [defender, attacker];
  }

  return {
    winner: m1Hp <= 0 ? monster2 : monster1,
    loser: m1Hp <= 0 ? monster1 : monster2,
    rounds,
  };
}

function determineFirstAttacker(monster1: Monster, monster2: Monster): Monster {
  if (monster1.speed > monster2.speed) return monster1;
  if (monster2.speed > monster1.speed) return monster2;
  return monster1.attack >= monster2.attack ? monster1 : monster2;
}
