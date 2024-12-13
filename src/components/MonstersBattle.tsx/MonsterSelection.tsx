import { Monster } from "./monster-context";

interface MonsterSelectionProps {
  handleBattleSelect: () => void;
  selectedMonsters: string[];
  setSelectedMonsters: React.Dispatch<React.SetStateAction<[string, string]>>;
  monsters: Monster[];
}

export const MonsterSelection = (props: MonsterSelectionProps) => {
  const {
    handleBattleSelect,
    selectedMonsters,
    setSelectedMonsters,
    monsters,
  } = props;

  return (
    <div>
      <h2 className="text-4xl font-bold">Configurar batalha</h2>

      <div className="sm:col-span-3">
        <label
          htmlFor="monster1"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Monstro 1:
        </label>
        <div className="mt-2 grid grid-cols-1">
          <select
            id="monster1"
            value={selectedMonsters[0]}
            onChange={(e) =>
              setSelectedMonsters([e.target.value, selectedMonsters[1]])
            }
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            <option value="">Selecione o Monstro 1</option>
            {monsters.map((monster) => (
              <option key={monster.name} value={monster.name}>
                {monster.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="sm:col-span-3">
        <label
          htmlFor="monster2"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Monstro 2:
        </label>
        <div className="mt-2 grid grid-cols-1">
          <select
            id="monster2"
            value={selectedMonsters[1]}
            onChange={(e) =>
              setSelectedMonsters([selectedMonsters[0], e.target.value])
            }
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            <option value="">Selecione o Monstro 2</option>
            {monsters.map((monster) => (
              <option key={monster.name} value={monster.name}>
                {monster.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleBattleSelect}
        className=" my-5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Lutar!
      </button>
    </div>
  );
};
