import { useState } from "react";
import { MonsterCreationForm } from "./MonsterCreationForm";
import { Monster, MonsterContext, BattleResult } from "./monster-context";
import { MonsterSelection } from "./MonsterSelection";
import { calculateBattle } from "./calculate-battle";
import toast, { toastConfig } from "react-simple-toasts";


toastConfig({ position: "top-center", theme: "dark" });

export default function MonstersBattle() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [battle, setBattle] = useState<BattleResult | null>(null);
  const [selectedMonsters, setSelectedMonsters] = useState<[string, string]>([
    "",
    "",
  ]);

  const addMonster = (monster: Monster) => {
    setMonsters([...monsters, monster]);
    toast(`Monstro ${monster.name} criado!`);
  };

  const startBattle = (monster1: Monster, monster2: Monster) => {
    const result = calculateBattle(monster1, monster2);
    setBattle(result);
  };

  const handleBattleSelect = () => {
    const monster1 = monsters.find((m) => m.name === selectedMonsters[0]);
    const monster2 = monsters.find((m) => m.name === selectedMonsters[1]);
    if (monster1 && monster2) {
      startBattle(monster1, monster2);
    }
  };

  return (
    <MonsterContext.Provider
      value={{ monsters, addMonster, battle, startBattle }}
    >
      <div className="container px-10 mx-auto h-screen flex justify-center">
        <div className="max-w-full">
          <h1 className="py-10">Batalha de monstros</h1>

          <MonsterCreationForm />

          <MonsterSelection
            monsters={monsters}
            handleBattleSelect={handleBattleSelect}
            selectedMonsters={selectedMonsters}
            setSelectedMonsters={setSelectedMonsters}
          />

          {battle && (
            <div className="mt-4 h-screen">
              <h2 className="text-4xl font-bold mb-4">Resultado da batalha</h2>
              <p className="block text-base/6 font-medium text-green-900 mb-3">
                Vencedor: {battle.winner.name}{" "}
                <img
                  className="w-10 h-10 rounded-full"
                  src={battle.winner.image_url}
                  alt="Rounded avatar"
                />
              </p>
              <p className="block text-base/6 font-medium text-red-900">
                Perdedor: {battle.loser.name}
                <img
                  className="w-10 h-10 rounded-full"
                  src={battle.loser.image_url}
                  alt="Rounded avatar"
                />
              </p>
              <h3 className="text-3xl font-bold">Rounds:</h3>
              {battle.rounds.map((round, index) => (
                <div key={index} className="sm:col-span-3">
                  <label className="block text-sm/6 font-medium text-gray-900">
                    Round {index + 1}
                  </label>
                  <div className="mt-1 grid grid-cols-1">
                    <p>
                      {round.attacker} ataca {round.defender} com {round.damage}{" "}
                      dano. HP de {round.defender}: {round.remainingHp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MonsterContext.Provider>
  );
}
