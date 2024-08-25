export type Build = {
  value: string;
  hp: number;
  decay: number;
  key: number;
  img: string;
  type: string;
};

export interface IExplosive {
  text: string;
  damage: {
    wood: number;
    stone: number;
    metal: number;
    woodenDoor: number;
    metalDoor: number;
  };
  id: number;
  img: string;
  resources: { [key: string]: number }[];
  workbenchLevel: number;
  totalScrap: number;
  sulfur: number;
  charcoal: number;
  gunpowder: number;
  count: number;

  calcCount: (builds: { hp: number; material: string }[]) => void;
  calcResources: () => { [key: string]: number }[];
}
