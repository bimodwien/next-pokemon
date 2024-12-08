export interface IPokemon {
  name: string;
  url: string;
}

export interface IType {
  type: {
    name: string;
  };
}

export interface IAbility {
  ability: {
    name: string;
  };
}

export interface IStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface IPokemonDetails {
  abilities: IAbility[];
  base_experience: number;
  height: number;
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  stats: IStat[];
  types: IType[];
  weight: number;
}
