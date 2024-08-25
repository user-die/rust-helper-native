class Build {
  constructor(value, hp, decay, key, img, type) {
    this.value = value;
    this.hp = hp;
    this.decay = decay;
    this.key = key;
    this.img = `assets/images/builds/${img}.jpg`;
    this.type = type;
  }
}

var builds = Array(8);

builds[0] = new Build(
  "Деревянная дверь",
  200,
  3,
  0,
  "door.hinged.wood",
  "woodenDoor"
);
builds[1] = new Build(
  "Дверь из листового металла",
  250,
  8,
  1,
  "door.hinged.metal",
  "metalDoor"
);
builds[2] = new Build(
  "Гаражная дверь",
  600,
  8,
  2,
  "wall.frame.garagedoor",
  "metalDoor"
);
builds[3] = new Build(
  "Бронированная дверь",
  1000,
  12,
  3,
  "door.hinged.toptier",
  "metalDoor"
);
builds[4] = new Build("Деревянные сооружения", 250, 3, 4, "wall1", "wood");
builds[5] = new Build("Каменные сооружения", 500, 5, 5, "wall2", "stone");
builds[6] = new Build("Металлические сооружения", 1000, 8, 6, "wall3", "metal");
builds[7] = new Build(
  "Сооружения из броне-металла",
  2000,
  12,
  7,
  "wall4",
  "metal"
);

/*
builds[8] = new Build(
  "High External Wooden Wall",
  500,
  8,
  9,
  "wall.external.high.png"
);
builds[9] = new Build(
  "High External Stone Wall",
  500,
  8,
  10,
  "wall.external.high.stone.png"
);
builds[10] = new Build("Tool Cupboard", 100, 48, 11, "cupboard.tool.png");
builds[11] = new Build(
  "Concrete Barricade",
  500,
  72,
  12,
  "barricade.concrete.png"
);
builds[12] = new Build(
  "Large Water Catcher",
  300,
  8,
  13,
  "water.catcher.large.png"
);
builds[13] = new Build("Locker", 500, 96, 14, "locker.png");
builds[14] = new Build("Drop Box", 100, 0, 15, "dropbox.png");
builds[15] = new Build("Vending Machine", 1250, 0, 16, "vending.machine.png");
builds[16] = new Build("Workbench Level 1", 500, 96, 17, "workbench1.png");
builds[17] = new Build("Workbench Level 2", 500, 96, 18, "workbench2.png");
builds[18] = new Build("Workbench Level 3", 750, 96, 19, "workbench3.png");
builds[19] = new Build("Shop Front", 500, 3, 20, "wall.frame.shopfront.png");
builds[20] = new Build(
  "High External Wooden Gate",
  500,
  8,
  21,
  "gates.external.high.wood.png"
);
builds[21] = new Build(
  "High External Stone Gate",
  500,
  8,
  22,
  "gates.external.high.stone.png"
);
builds[22] = new Build("Wooden Barricade", 250, 8, 23, "barricade.wood.png");
builds[23] = new Build("Wooden Ladder", 100, 0, 24, "ladder.wooden.wall.png");
builds[24] = new Build(
  "Wooden Barricade Cover",
  120,
  2,
  25,
  "barricade.wood.cover.png"
);
builds[25] = new Build(
  "Wooden Window Bars",
  250,
  3,
  26,
  "wall.window.bars.wood.png"
);
builds[26] = new Build("Wood Shutters", 200, 3, 27, "shutter.wood.a.png");
builds[27] = new Build("Stone Barricade", 100, 8, 28, "barricade.stone.png");
builds[28] = new Build(
  "Barbed Wooden Barricade",
  400,
  8,
  29,
  "barricade.woodwire.png"
);
builds[29] = new Build("Ladder Hatch", 250, 8, 30, "floor.ladder.hatch.png");
builds[30] = new Build(
  "Small Water Catcher",
  200,
  8,
  31,
  "water.catcher.small.png"
);
builds[31] = new Build("Metal Barricade", 600, 8, 32, "barricade.metal.png");
builds[32] = new Build(
  "Metal embrasure",
  500,
  8,
  33,
  "shutter.metal.embrasure.b.png"
);
builds[33] = new Build(
  "Metal Shop Front",
  750,
  8,
  34,
  "wall.frame.shopfront.metal.png"
);
builds[34] = new Build(
  "Metal Window Bars",
  500,
  8,
  35,
  "wall.window.bars.metal.png"
);
builds[35] = new Build(
  "Sandbag Barricade",
  200,
  8,
  36,
  "barricade.sandbags.png"
);
builds[36] = new Build("Floor grill", 250, 8, 37, "floor.grill.png");
builds[37] = new Build("Netting", 100, 3, 38, "wall.frame.netting.png");
builds[38] = new Build(
  "Chainlink Fence Gate",
  75,
  8,
  39,
  "wall.frame.fence.gate.png"
);
builds[39] = new Build("Chainlink Fence", 100, 8, 40, "wall.frame.fence.png");
builds[40] = new Build("Watch Tower", 200, 2, 41, "watchtower.wood.png");
builds[41] = new Build(
  "Legacy Wood Shelter",
  500,
  0,
  42,
  "legacy.shelter.wood.png"
);
builds[42] = new Build(
  "Prison Cell Gate",
  300,
  8,
  43,
  "wall.frame.cell.gate.png"
);
builds[43] = new Build("Prison Cell Wall", 300, 8, 44, "wall.frame.cell.png");
builds[44] = new Build(
  "Reinforced Glass Window",
  500,
  12,
  45,
  "wall.window.bars.toptier.png"
);
builds[45] = new Build(
  "Strengthened Glass Window",
  350,
  12,
  46,
  "wall.window.glass.reinforced.png"
);
builds[46] = new Build("Large Furnace", 1500, 8, 47, "furnace.large.png");
builds[47] = new Build(
  "Small Oil Refinery",
  1500,
  8,
  48,
  "small.oil.refinery.png"
);
builds[48] = new Build("Furnace", 500, 96, 49, "furnace.png");
builds[49] = new Build("Composter", 500, 96, 50, "composter.png");
builds[50] = new Build("Large Planter Box", 250, 48, 51, "planter.large.png");
builds[51] = new Build("Research Table", 200, 8, 52, "research.table.png");
builds[52] = new Build("Repair Bench", 200, 8, 53, "box.repair.bench.png");
builds[53] = new Build("Small Planter Box", 100, 48, 54, "planter.small.png");
builds[54] = new Build("Salvaged Shelves", 500, 0, 55, "shelves.png");
builds[55] = new Build("Stone Fireplace", 500, 48, 56, "fireplace.stone.png");
builds[56] = new Build("Water Barrel", 250, 8, 57, "water.barrel.png");
builds[57] = new Build("Auto Turret", 1000, 0, 58, "autoturret.png");
builds[58] = new Build(
  "Large Solar Panel",
  100,
  8,
  59,
  "electric.solarpanel.large.png"
);
builds[59] = new Build("Water Pump", 250, 8, 60, "waterpump.png");
builds[60] = new Build("Computer Station", 500, 0, 61, "computerstation.png");
builds[61] = new Build("Elevator", 600, 8, 62, "elevator.png");
builds[62] = new Build("Modular Car Lift", 250, 16, 63, "modularcarlift.png");
builds[63] = new Build("Search Light", 150, 8, 64, "searchlight.png");
builds[64] = new Build("PTZ CCTV Camera", 150, 48, 65, "ptz.cctv.camera.png");
builds[65] = new Build("Electric Furnace", 500, 96, 66, "electric.furnace.png");
builds[66] = new Build("Electric Heater", 200, 0, 67, "electric.heater.png");
builds[67] = new Build(
  "Powered Water Purifier",
  300,
  0,
  68,
  "powered.water.purifier.png"
);
builds[68] = new Build("Wind Turbine", 250, 8, 69, "generator.wind.scrap.png");
builds[69] = new Build(
  "Medium Rechargeable Battery",
  100,
  0,
  70,
  "electric.battery.rechargable.medium.png"
);
builds[70] = new Build(
  "Large Rechargeable Battery",
  100,
  0,
  71,
  "electric.battery.rechargable.large.png"
);
*/
export default builds;
