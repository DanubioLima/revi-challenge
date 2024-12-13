import { useContext, useState } from "react";
import { Monster, MonsterContext } from "./monster-context";

export const MonsterCreationForm = () => {
  const { addMonster } = useContext(MonsterContext);
  const [formData, setFormData] = useState<Monster>({
    name: "",
    attack: 0,
    defense: 0,
    speed: 0,
    hp: 0,
    image_url: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMonster(formData);
    setFormData({
      name: "",
      attack: 0,
      defense: 0,
      speed: 0,
      hp: 0,
      image_url: "",
    });
  };

  return (
    <div>
      <h2 className="text-4xl font-bold">Crie um Monstro</h2>
      <form onSubmit={handleSubmit} className="mt-10">
        <div className="sm:col-span-4 my-3">
          <label
            htmlFor="name"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Nome:
          </label>

          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <input
                id="name"
                placeholder="Nome"
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4 my-3">
          <label
            htmlFor="attack"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Ataque:
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <input
                id="attack"
                type="number"
                max={100}
                min={0}
                placeholder="Ataque"
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                value={formData.attack}
                onChange={(e) =>
                  setFormData({ ...formData, attack: parseInt(e.target.value) })
                }
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4 my-3">
          <label
            htmlFor="defense"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Defesa:
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <input
                id="defense"
                type="number"
                placeholder="Defesa"
                max={100}
                min={0}
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                value={formData.defense}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    defense: parseInt(e.target.value),
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4 my-3">
          <label
            htmlFor="speed"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Velocidade:
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <input
                id="speed"
                type="number"
                placeholder="Velocidade"
                max={100}
                min={0}
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                value={formData.speed}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    speed: parseInt(e.target.value),
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4 my-3">
          <label
            htmlFor="hp"
            className="block text-sm/6 font-medium text-gray-900"
          >
            HP (Health Points):
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <input
                id="hp"
                type="number"
                placeholder="HP"
                max={100}
                min={0}
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                value={formData.hp}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    hp: parseInt(e.target.value),
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4 my-3">
          <label
            htmlFor="image_url"
            className="block text-sm/6 font-medium text-gray-900"
          >
            URL da Imagem:
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <input
                id="image_url"
                placeholder="URL da Imagem:"
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                value={formData.image_url}
                onChange={(e) =>
                  setFormData({ ...formData, image_url: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className=" my-5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Criar monstro
        </button>
      </form>
    </div>
  );
};
