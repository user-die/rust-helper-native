import { IExplosive } from "./types";

class Explosive implements IExplosive {
  text;
  damage;
  id;
  img;
  resources;
  workbenchLevel;
  totalScrap;
  sulfur;
  charcoal;
  gunpowder;
  count = 0;

  constructor(
    text: string,
    damage: {
      wood: number;
      stone: number;
      metal: number;
      woodenDoor: number;
      metalDoor: number;
    },
    id: number,
    img: string,
    resources: { [key: string]: number }[],
    workbenchLevel: number,
    totalScrap: number,
    sulfur: number,
    charcoal: number,
    gunpowder: number
  ) {
    this.text = text;
    this.damage = damage;
    this.id = id;
    this.img = `assets/images/explosives/${img}.webp`;
    this.resources = resources;
    this.workbenchLevel = workbenchLevel;
    this.totalScrap = totalScrap;
    this.sulfur = sulfur;
    this.charcoal = charcoal;
    this.gunpowder = gunpowder;
  }

  calcCount(builds: { hp: number; material: string }[]) {
    this.count = builds.reduce((out, build) => {
      out += Math.ceil((build.hp / this.damage[build.type]) * build.count);
      return out;
    }, 0);
  }

  calcResources() {
    const string = JSON.stringify(this.resources);
    const copy = JSON.parse(string);

    copy.map((obj) => {
      for (let key in obj) {
        obj[key] = obj[key] * this.count;
      }
    });

    return copy;
  }
}

var explosives = Array(7);

explosives[0] = new Explosive(
  "Timed Explosive Charge",
  {
    wood: 275,
    stone: 275,
    metal: 275,
    woodenDoor: 440,
    metalDoor: 440,
  },
  0,
  "explosive.timed",
  [{ metalFragmenst: 200 }, { cloth: 20 }, { techTrash: 2 }, { animalFat: 45 }],
  3,
  2550,
  2200,
  3000,
  1100
);

explosives[1] = new Explosive(
  "Rocket",
  {
    wood: 247,
    stone: 137.5,
    metal: 137.5,
    woodenDoor: 220,
    metalDoor: 220,
  },
  1,
  "ammo.rocket.basic",
  [{ metalFragmenst: 100 }, { cloth: 20 }, { metalPipe: 2 }, { animalFat: 24 }],
  3,
  2700,
  1400,
  1950,
  700
);

explosives[2] = new Explosive(
  "Satchel Charge",
  {
    wood: 91.5,
    stone: 51.5,
    metal: 43.5,
    woodenDoor: 170,
    metalDoor: 70,
  },
  2,
  "explosive.satchel",
  [{ metalFragmenst: 80 }, { cloth: 10 }, { rope: 1 }],
  1,
  840,
  480,
  720,
  240
);

explosives[3] = new Explosive(
  "Beancan Grenade",
  {
    wood: 19.5,
    stone: 11,
    metal: 9,
    woodenDoor: 35,
    metalDoor: 14.5,
  },
  3,
  "grenade.beancan",
  [{ metalFragmenst: 20 }],
  1,
  715,
  120,
  180,
  60
);

explosives[4] = new Explosive(
  "High Velocity Rocket",
  {
    wood: 29,
    stone: 15.7,
    metal: 15,
    woodenDoor: 63.5,
    metalDoor: 24,
  },
  4,
  "ammo.rocket.hv",
  [{ metalPipe: 1 }],
  2,
  2676,
  200,
  300,
  100
);

explosives[5] = new Explosive(
  "ExplosiveAmmo",
  {
    wood: 5.3,
    stone: 2.78,
    metal: 2.5,
    woodenDoor: 10.6,
    metalDoor: 4,
  },
  5,
  "ammo.rifle.explosive",
  [{ metalFragmenst: 5 }],
  3,
  1350,
  25,
  30,
  15
);

// 4 в большую печь
// 2.5 в торгомат
// 2.9 в полки, 2, 3 верстак, дропбокс
// 9 в ремстол, локер, печь, 1 верстак, нпз,  бочку с водой

explosives[6] = new Explosive(
  "F1 Grenade",
  {
    wood: 4.25,
    stone: 2.75,
    metal: 1,
    woodenDoor: 8.7,
    metalDoor: 5,
  },
  6,
  "grenade.f1",
  [{ metalFragmenst: 25 }],
  2,
  939,
  60,
  90,
  30
);

/*
var HEgrenade = new Explosive(
  "40mm HE Grenade",
  28.2,
  70,
  17.5,
  31.5,
  17.5,
  17,
  "assets/images/explosives/ammo.grenadelauncher.he.png",
  [],
  0,
  0,
  0,
  0
);

var IncendiaryRocket = new Explosive(
  "Incendiary Rocket",
  0

  // есть сплеш
);
*/

export default explosives;
