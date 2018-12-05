const recipes = [
    { base: "SLIME", mate: "DRAGON", offspring: "DrakSlime" },

    { base: "SLIME", mate: "BEAST", offspring: "SpotSlime" },

    { base: "SLIME", mate: "BIRD", offspring: "WingSlime" },

    { base: "SLIME", mate: "PLANT", offspring: "TreeSlime" },

    { base: "SLIME", mate: "BUG", offspring: "Snaily" },

    { base: "SLIME", mate: "DEVIL", offspring: "SlimeNite" },

    { base: "SLIME", mate: "GiantMoth", offspring: "Babble" },
    { base: "SLIME", mate: "Poisongon", offspring: "Babble" },
    { base: "SLIME", mate: "ZOMBIE", offspring: "Babble" },

    { base: "SLIME", mate: "MATERIAL", offspring: "BoxSlime" },

    { base: "SLIME", mate: "PillowRat", offspring: "Healer" },
    { base: "SLIME", mate: "FunkyBird", offspring: "Healer" },
    { base: "SLIME", mate: "MadPlant", offspring: "Healer" },
    { base: "SLIME", mate: "CopyCat", offspring: "Healer" },

    { base: "SLIME", mate: "Almiraj", offspring: "FangSlime" },
    { base: "SLIME", mate: "GulpBeast", offspring: "FangSlime" },
    { base: "SLIME", mate: "Trumpeter", offspring: "FangSlime" },
    { base: "SLIME", mate: "KingLeo", offspring: "FangSlime" },
    { base: "SLIME", mate: "DarkHorn", offspring: "FangSlime" },
    { base: "SLIME", mate: "MadCat", offspring: "FangSlime" },

    { base: "SLIME", mate: "Digster", offspring: "RockSlime" },
    { base: "SLIME", mate: "DeadNite", offspring: "RockSlime" },
    { base: "SLIME", mate: "Golem", offspring: "RockSlime" },
    { base: "SLIME", mate: "StoneMan", offspring: "RockSlime" },
    { base: "SLIME", mate: "BombCrag", offspring: "RockSlime" },

    { base: "DrakSlime", mate: "Swordgon", offspring: "SlimeBorg" },
    { base: "DrakSlime", mate: "Spikerous", offspring: "SlimeBorg" },
    { base: "DrakSlime", mate: "GreatDrak", offspring: "SlimeBorg" },
    { base: "DrakSlime", mate: "BattleRex", offspring: "SlimeBorg" },
    { base: "DrakSlime", mate: "SkyDragon", offspring: "SlimeBorg" },

    { base: "SlimeNite", mate: "Swordgon", offspring: "SlimeBorg" },
    { base: "SlimeNite", mate: "Spikerous", offspring: "SlimeBorg" },
    { base: "SlimeNite", mate: "GreatDrak", offspring: "SlimeBorg" },
    { base: "SlimeNite", mate: "BattleRex", offspring: "SlimeBorg" },
    { base: "SlimeNite", mate: "SkyDragon", offspring: "SlimeBorg" },

    { base: "RockSlime", mate: "Swordgon", offspring: "SlimeBorg" },
    { base: "RockSlime", mate: "Spikerous", offspring: "SlimeBorg" },
    { base: "RockSlime", mate: "GreatDrak", offspring: "SlimeBorg" },
    { base: "RockSlime", mate: "BattleRex", offspring: "SlimeBorg" },
    { base: "RockSlime", mate: "SkyDragon", offspring: "SlimeBorg" },

    { base: "Metabble", mate: "Swordgon", offspring: "SlimeBorg" },
    { base: "Metabble", mate: "Spikerous", offspring: "SlimeBorg" },
    { base: "Metabble", mate: "GreatDrak", offspring: "SlimeBorg" },
    { base: "Metabble", mate: "BattleRex", offspring: "SlimeBorg" },
    { base: "Metabble", mate: "SkyDragon", offspring: "SlimeBorg" },
    { base: "SLIME", mate: "Roboster", offspring: "SlimeBorg" },

    { base: "SLIME", mate: "Skullroo", offspring: "Slabbit" },

    { base: "KingSlime", mate: "GreatDrak", offspring: "SpotKing" },
    { base: "KingSlime", mate: "BattleRex", offspring: "SpotKing" },
    { base: "KingSlime", mate: "Divinegon", offspring: "SpotKing" },
    { base: "KingSlime", mate: "Unicorn", offspring: "SpotKing" },
    { base: "KingSlime", mate: "KingLeo", offspring: "SpotKing" },
    { base: "KingSlime", mate: "MadCondor", offspring: "SpotKing" },
    { base: "KingSlime", mate: "ZapBird", offspring: "SpotKing" },
    { base: "KingSlime", mate: "WhipBird", offspring: "SpotKing" },
    { base: "KingSlime", mate: "Gigantes", offspring: "SpotKing" },
    { base: "KingSlime", mate: "Centasaur", offspring: "SpotKing" },
    { base: "KingSlime", mate: "DeadNoble", offspring: "SpotKing" },
    { base: "KingSlime", mate: "WhiteKing", offspring: "SpotKing" },

    { base: "MetalKing", mate: "GreatDrak", offspring: "SpotKing" },
    { base: "MetalKing", mate: "BattleRex", offspring: "SpotKing" },
    { base: "MetalKing", mate: "Divinegon", offspring: "SpotKing" },
    { base: "MetalKing", mate: "Unicorn", offspring: "SpotKing" },
    { base: "MetalKing", mate: "KingLeo", offspring: "SpotKing" },
    { base: "MetalKing", mate: "MadCondor", offspring: "SpotKing" },
    { base: "MetalKing", mate: "ZapBird", offspring: "SpotKing" },
    { base: "MetalKing", mate: "WhipBird", offspring: "SpotKing" },
    { base: "MetalKing", mate: "Gigantes", offspring: "SpotKing" },
    { base: "MetalKing", mate: "Centasaur", offspring: "SpotKing" },
    { base: "MetalKing", mate: "DeadNoble", offspring: "SpotKing" },
    { base: "MetalKing", mate: "WhiteKing", offspring: "SpotKing" },
    {
        base: "SpotSlime",
        mate: "SpotSlime",
        offspring: "SpotKing",
        notes: "+5 or better",
    },

    { base: "SpotKing", mate: "GreatDrak", offspring: "KingSlime" },
    { base: "SpotKing", mate: "BattleRex", offspring: "KingSlime" },
    { base: "SpotKing", mate: "Divinegon", offspring: "KingSlime" },
    { base: "SpotKing", mate: "Unicorn", offspring: "KingSlime" },
    { base: "SpotKing", mate: "KingLeo", offspring: "KingSlime" },
    { base: "SpotKing", mate: "MadCondor", offspring: "KingSlime" },
    { base: "SpotKing", mate: "ZapBird", offspring: "KingSlime" },
    { base: "SpotKing", mate: "WhipBird", offspring: "KingSlime" },
    { base: "SpotKing", mate: "Gigantes", offspring: "KingSlime" },
    { base: "SpotKing", mate: "Centasaur", offspring: "KingSlime" },
    { base: "SpotKing", mate: "DeadNoble", offspring: "KingSlime" },
    { base: "SpotKing", mate: "WhiteKing", offspring: "KingSlime" },
    {
        base: "Slime",
        mate: "Slime",
        offspring: "KingSlime",
        notes: "+5 or better",
    },
    { base: "SLIME", mate: "BOSS", offspring: "KingSlime" },

    { base: "SLIME", mate: "MetalDrak", offspring: "Metaly" },

    { base: "Metaly", mate: "Metaly", offspring: "Metabble" },

    { base: "SpotKing", mate: "MetalDrak", offspring: "MetalKing" },
    { base: "KingSlime", mate: "MetalDrak", offspring: "MetalKing" },
    { base: "Metabble", mate: "Metabble", offspring: "MetalKing" },

    { base: "SpotKing", mate: "GoldGolem", offspring: "GoldSlime" },
    { base: "KingSlime", mate: "GoldGolem", offspring: "GoldSlime" },
    { base: "MetalKing", mate: "GoldGolem", offspring: "GoldSlime" },
    { base: "MetalKing", mate: "MetalKing", offspring: "GoldSlime" },

    { base: "DRAGON", mate: "SLIME", offspring: "DragonKid" },

    { base: "DRAGON", mate: "BEAST", offspring: "Tortragon" },

    { base: "DRAGON", mate: "BIRD", offspring: "Pteranod" },

    { base: "DRAGON", mate: "PLANT", offspring: "Gasgon" },

    { base: "DRAGON", mate: "BUG", offspring: "FairyDrak" },

    { base: "DRAGON", mate: "DEVIL", offspring: "LizardMan" },

    { base: "DRAGON", mate: "ZOMBIE", offspring: "Poisongon" },

    { base: "DRAGON", mate: "MATERIAL", offspring: "Swordgon" },

    { base: "DragonKid", mate: "DragonKid", offspring: "Dragon" },

    { base: "DRAGON", mate: "Picky", offspring: "MiniDrak" },

    { base: "Gasgon", mate: "BEAST", offspring: "MadDragon" },
    { base: "DRAGON", mate: "GulpBeast", offspring: "MadDragon" },

    { base: "LizardMan", mate: "WingSlime", offspring: "Rayburn" },
    { base: "LizardMan", mate: "Trumpeter", offspring: "Rayburn" },
    { base: "LizardMan", mate: "MadCat", offspring: "Rayburn" },
    { base: "LizardMan", mate: "FaceTree", offspring: "Rayburn" },
    { base: "LizardMan", mate: "Lionex", offspring: "Rayburn" },
    { base: "LizardMan", mate: "GoatHorn", offspring: "Rayburn" },
    { base: "LizardMan", mate: "GateGuard", offspring: "Rayburn" },
    { base: "LizardMan", mate: "Gigantes", offspring: "Rayburn" },
    { base: "DRAGON", mate: "MadCondor", offspring: "Rayburn" },

    { base: "DRAGON", mate: "Voodoll", offspring: "Chamelgon" },

    { base: "DRAGON", mate: "GoHopper", offspring: "LizardFly" },

    { base: "Gasgon", mate: "Goategon", offspring: "Andreal" },
    { base: "Gasgon", mate: "Trumpeter", offspring: "Andreal" },
    { base: "Gasgon", mate: "MadCondor", offspring: "Andreal" },
    { base: "Gasgon", mate: "WhipBird", offspring: "Andreal" },
    { base: "Gasgon", mate: "FunkyBird", offspring: "Andreal" },
    { base: "Gasgon", mate: "ArcDemon", offspring: "Andreal" },
    { base: "Gasgon", mate: "Lionex", offspring: "Andreal" },
    { base: "Gasgon", mate: "GoatHorn", offspring: "Andreal" },
    { base: "Gasgon", mate: "Ogre", offspring: "Andreal" },
    { base: "Gasgon", mate: "Akubar", offspring: "Andreal" },
    { base: "Gasgon", mate: "DeadNoble", offspring: "Andreal" },
    { base: "Gasgon", mate: "Golem", offspring: "Andreal" },

    { base: "MadDragon", mate: "Goategon", offspring: "Andreal" },
    { base: "MadDragon", mate: "Trumpeter", offspring: "Andreal" },
    { base: "MadDragon", mate: "MadCondor", offspring: "Andreal" },
    { base: "MadDragon", mate: "WhipBird", offspring: "Andreal" },
    { base: "MadDragon", mate: "FunkyBird", offspring: "Andreal" },
    { base: "MadDragon", mate: "ArcDemon", offspring: "Andreal" },
    { base: "MadDragon", mate: "Lionex", offspring: "Andreal" },
    { base: "MadDragon", mate: "GoatHorn", offspring: "Andreal" },
    { base: "MadDragon", mate: "Ogre", offspring: "Andreal" },
    { base: "MadDragon", mate: "Akubar", offspring: "Andreal" },
    { base: "MadDragon", mate: "DeadNoble", offspring: "Andreal" },
    { base: "MadDragon", mate: "Golem", offspring: "Andreal" },

    { base: "SkyDragon", mate: "Goategon", offspring: "Andreal" },
    { base: "SkyDragon", mate: "Trumpeter", offspring: "Andreal" },
    { base: "SkyDragon", mate: "MadCondor", offspring: "Andreal" },
    { base: "SkyDragon", mate: "WhipBird", offspring: "Andreal" },
    { base: "SkyDragon", mate: "FunkyBird", offspring: "Andreal" },
    { base: "SkyDragon", mate: "ArcDemon", offspring: "Andreal" },
    { base: "SkyDragon", mate: "Lionex", offspring: "Andreal" },
    { base: "SkyDragon", mate: "GoatHorn", offspring: "Andreal" },
    { base: "SkyDragon", mate: "Ogre", offspring: "Andreal" },
    { base: "SkyDragon", mate: "Akubar", offspring: "Andreal" },
    { base: "SkyDragon", mate: "DeadNoble", offspring: "Andreal" },
    { base: "SkyDragon", mate: "Golem", offspring: "Andreal" },

    { base: "BattleRex", mate: "Goategon", offspring: "Andreal" },
    { base: "BattleRex", mate: "Trumpeter", offspring: "Andreal" },
    { base: "BattleRex", mate: "MadCondor", offspring: "Andreal" },
    { base: "BattleRex", mate: "WhipBird", offspring: "Andreal" },
    { base: "BattleRex", mate: "FunkyBird", offspring: "Andreal" },
    { base: "BattleRex", mate: "ArcDemon", offspring: "Andreal" },
    { base: "BattleRex", mate: "Lionex", offspring: "Andreal" },
    { base: "BattleRex", mate: "GoatHorn", offspring: "Andreal" },
    { base: "BattleRex", mate: "Ogre", offspring: "Andreal" },
    { base: "BattleRex", mate: "Akubar", offspring: "Andreal" },
    { base: "BattleRex", mate: "DeadNoble", offspring: "Andreal" },
    { base: "BattleRex", mate: "Golem", offspring: "Andreal" },
    { base: "DRAGON", mate: "Gulpple", offspring: "Andreal" },

    { base: "DRAGON", mate: "Babble", offspring: "KingCobra" },

    { base: "DRAGON", mate: "ArmyCrab", offspring: "Spikerous" },
    { base: "DRAGON", mate: "Digster", offspring: "Spikerous" },

    { base: "DRAGON", mate: "SpotKing", offspring: "GreatDrak" },
    { base: "DRAGON", mate: "KingSlime", offspring: "GreatDrak" },
    { base: "DRAGON", mate: "MetalKing", offspring: "GreatDrak" },
    { base: "DRAGON", mate: "BattleRex", offspring: "GreatDrak" },
    { base: "DRAGON", mate: "Unicorn", offspring: "GreatDrak" },
    { base: "DRAGON", mate: "ZapBird", offspring: "GreatDrak" },
    { base: "DRAGON", mate: "WhipBird", offspring: "GreatDrak" },
    { base: "DRAGON", mate: "Gigantes", offspring: "GreatDrak" },
    { base: "DRAGON", mate: "Centasaur", offspring: "GreatDrak" },
    {
        base: "DragonKid",
        mate: "DragonKid",
        offspring: "GreatDrak",
        notes: "+4 or better required",
    },
    {
        base: "Dragon",
        mate: "Dragon",
        offspring: "GreatDrak",
        notes: "+4 or better required",
    },

    { base: "DRAGON", mate: "BigRoost", offspring: "Crestpent" },

    { base: "Crestpent", mate: "Crestpent", offspring: "WingSnake" },

    { base: "Pteranod", mate: "DarkHorn", offspring: "Coatol" },
    { base: "Pteranod", mate: "MadKnight", offspring: "Coatol" },
    { base: "Pteranod", mate: "Copycat", offspring: "Coatol" },
    { base: "Pteranod", mate: "StoneMan", offspring: "Coatol" },

    { base: "Gasgon", mate: "DarkHorn", offspring: "Coatol" },
    { base: "Gasgon", mate: "MadKnight", offspring: "Coatol" },
    { base: "Gasgon", mate: "Copycat", offspring: "Coatol" },
    { base: "Gasgon", mate: "StoneMan", offspring: "Coatol" },

    { base: "LizardMan", mate: "DarkHorn", offspring: "Coatol" },
    { base: "LizardMan", mate: "MadKnight", offspring: "Coatol" },
    { base: "LizardMan", mate: "Copycat", offspring: "Coatol" },
    { base: "LizardMan", mate: "StoneMan", offspring: "Coatol" },

    { base: "BattleRex", mate: "DarkHorn", offspring: "Coatol" },
    { base: "BattleRex", mate: "MadKnight", offspring: "Coatol" },
    { base: "BattleRex", mate: "Copycat", offspring: "Coatol" },
    { base: "BattleRex", mate: "StoneMan", offspring: "Coatol" },

    { base: "SkyDragon", mate: "DarkHorn", offspring: "Coatol" },
    { base: "SkyDragon", mate: "MadKnight", offspring: "Coatol" },
    { base: "SkyDragon", mate: "Copycat", offspring: "Coatol" },
    { base: "SkyDragon", mate: "StoneMan", offspring: "Coatol" },
    { base: "WingSnake", mate: "WingSnake", offspring: "Coatol" },

    { base: "Andreal", mate: "MedusaEye", offspring: "Orochi" },
    { base: "GreatDrak", mate: "MedusaEye", offspring: "Orochi" },
    { base: "DRAGON", mate: "BOSS", offspring: "Orochi" },

    { base: "DRAGON", mate: "KingLeo", offspring: "BattleRex" },
    { base: "DRAGON", mate: "Lionex", offspring: "BattleRex" },
    { base: "DRAGON", mate: "Ogre", offspring: "BattleRex" },
    { base: "DRAGON", mate: "MadKnight", offspring: "BattleRex" },
    { base: "DRAGON", mate: "EvilArmor", offspring: "BattleRex" },

    { base: "DRAGON", mate: "Phoenix", offspring: "SkyDragon" },

    { base: "SkyDragon", mate: "Orochi", offspring: "Divinegon" },

    { base: "BEAST", mate: "SLIME", offspring: "Tonguella" },

    { base: "BEAST", mate: "DRAGON", offspring: "Almiraj" },

    { base: "BEAST", mate: "BIRD", offspring: "CatFly" },

    { base: "BEAST", mate: "PLANT", offspring: "PillowRat" },

    { base: "BEAST", mate: "BUG", offspring: "Saccer" },

    { base: "Tonguella", mate: "Digster", offspring: "GulpBeast" },
    { base: "Tonguella", mate: "Skullgon", offspring: "GulpBeast" },
    { base: "Tonguella", mate: "DeadNoble", offspring: "GulpBeast" },
    { base: "Tonguella", mate: "WhiteKing", offspring: "GulpBeast" },
    { base: "Tonguella", mate: "Skeletor", offspring: "GulpBeast" },

    { base: "Grizzly", mate: "Digster", offspring: "GulpBeast" },
    { base: "Grizzly", mate: "Skullgon", offspring: "GulpBeast" },
    { base: "Grizzly", mate: "DeadNoble", offspring: "GulpBeast" },
    { base: "Grizzly", mate: "WhiteKing", offspring: "GulpBeast" },
    { base: "Grizzly", mate: "Skeletor", offspring: "GulpBeast" },

    { base: "Yeti", mate: "Digster", offspring: "GulpBeast" },
    { base: "Yeti", mate: "Skullgon", offspring: "GulpBeast" },
    { base: "Yeti", mate: "DeadNoble", offspring: "GulpBeast" },
    { base: "Yeti", mate: "WhiteKing", offspring: "GulpBeast" },
    { base: "Yeti", mate: "Skeletor", offspring: "GulpBeast" },

    { base: "Unicorn", mate: "Digster", offspring: "GulpBeast" },
    { base: "Unicorn", mate: "Skullgon", offspring: "GulpBeast" },
    { base: "Unicorn", mate: "DeadNoble", offspring: "GulpBeast" },
    { base: "Unicorn", mate: "WhiteKing", offspring: "GulpBeast" },
    { base: "Unicorn", mate: "Skeletor", offspring: "GulpBeast" },

    { base: "WildApe", mate: "Digster", offspring: "GulpBeast" },
    { base: "WildApe", mate: "Skullgon", offspring: "GulpBeast" },
    { base: "WildApe", mate: "DeadNoble", offspring: "GulpBeast" },
    { base: "WildApe", mate: "WhiteKing", offspring: "GulpBeast" },
    { base: "WildApe", mate: "Skeletor", offspring: "GulpBeast" },

    { base: "Trumpeter", mate: "Digster", offspring: "GulpBeast" },
    { base: "Trumpeter", mate: "Skullgon", offspring: "GulpBeast" },
    { base: "Trumpeter", mate: "DeadNoble", offspring: "GulpBeast" },
    { base: "Trumpeter", mate: "WhiteKing", offspring: "GulpBeast" },
    { base: "Trumpeter", mate: "Skeletor", offspring: "GulpBeast" },

    { base: "IronTurt", mate: "MetalDrak", offspring: "GulpBeast" },
    { base: "IronTurt", mate: "Roboster", offspring: "GulpBeast" },
    { base: "IronTurt", mate: "LavaMan", offspring: "GulpBeast" },
    { base: "IronTurt", mate: "IceMan", offspring: "GulpBeast" },
    { base: "IronTurt", mate: "Golem", offspring: "GulpBeast" },
    { base: "IronTurt", mate: "StoneMan", offspring: "GulpBeast" },

    { base: "Grizzly", mate: "MetalDrak", offspring: "GulpBeast" },
    { base: "Grizzly", mate: "Roboster", offspring: "GulpBeast" },
    { base: "Grizzly", mate: "LavaMan", offspring: "GulpBeast" },
    { base: "Grizzly", mate: "IceMan", offspring: "GulpBeast" },
    { base: "Grizzly", mate: "Golem", offspring: "GulpBeast" },
    { base: "Grizzly", mate: "StoneMan", offspring: "GulpBeast" },

    { base: "Yeti", mate: "MetalDrak", offspring: "GulpBeast" },
    { base: "Yeti", mate: "Roboster", offspring: "GulpBeast" },
    { base: "Yeti", mate: "LavaMan", offspring: "GulpBeast" },
    { base: "Yeti", mate: "IceMan", offspring: "GulpBeast" },
    { base: "Yeti", mate: "Golem", offspring: "GulpBeast" },
    { base: "Yeti", mate: "StoneMan", offspring: "GulpBeast" },

    { base: "Unicorn", mate: "MetalDrak", offspring: "GulpBeast" },
    { base: "Unicorn", mate: "Roboster", offspring: "GulpBeast" },
    { base: "Unicorn", mate: "LavaMan", offspring: "GulpBeast" },
    { base: "Unicorn", mate: "IceMan", offspring: "GulpBeast" },
    { base: "Unicorn", mate: "Golem", offspring: "GulpBeast" },
    { base: "Unicorn", mate: "StoneMan", offspring: "GulpBeast" },

    { base: "Goategon", mate: "MetalDrak", offspring: "GulpBeast" },
    { base: "Goategon", mate: "Roboster", offspring: "GulpBeast" },
    { base: "Goategon", mate: "LavaMan", offspring: "GulpBeast" },
    { base: "Goategon", mate: "IceMan", offspring: "GulpBeast" },
    { base: "Goategon", mate: "Golem", offspring: "GulpBeast" },
    { base: "Goategon", mate: "StoneMan", offspring: "GulpBeast" },

    { base: "WildApe", mate: "MetalDrak", offspring: "GulpBeast" },
    { base: "WildApe", mate: "Roboster", offspring: "GulpBeast" },
    { base: "WildApe", mate: "LavaMan", offspring: "GulpBeast" },
    { base: "WildApe", mate: "IceMan", offspring: "GulpBeast" },
    { base: "WildApe", mate: "Golem", offspring: "GulpBeast" },
    { base: "WildApe", mate: "StoneMan", offspring: "GulpBeast" },

    { base: "Grizzly", mate: "DRAGON", offspring: "GulpBeast" },
    { base: "Yeti", mate: "DRAGON", offspring: "GulpBeast" },
    { base: "Trumpeter", mate: "DRAGON", offspring: "GulpBeast" },
    { base: "BigEye", mate: "DRAGON", offspring: "GulpBeast" },
    { base: "Grizzly", mate: "DEVIL", offspring: "GulpBeast" },

    { base: "BEAST", mate: "ZOMBIE", offspring: "Skullroo" },

    { base: "Catfly", mate: "BIRD", offspring: "WindBeast" },
    { base: "BEAST", mate: "MATERIAL", offspring: "WindBeast" },

    { base: "Saccer", mate: "DRAGON", offspring: "Anteater" },

    { base: "Tonguella", mate: "TreeSlime", offspring: "SuperTen" },
    { base: "Tonguella", mate: "FangSlime", offspring: "SuperTen" },
    { base: "Tonguella", mate: "MadDragon", offspring: "SuperTen" },
    { base: "Tonguella", mate: "FunkyBird", offspring: "SuperTen" },
    { base: "Tonguella", mate: "MadPlant", offspring: "SuperTen" },
    { base: "Tonguella", mate: "FaceTree", offspring: "SuperTen" },
    { base: "Tonguella", mate: "Lipsy", offspring: "SuperTen" },
    { base: "Tonguella", mate: "Demonite", offspring: "SuperTen" },
    { base: "Tonguella", mate: "Gremlin", offspring: "SuperTen" },
    { base: "Tonguella", mate: "CopyCat", offspring: "SuperTen" },
    { base: "Tonguella", mate: "JewelBag", offspring: "SuperTen" },
    { base: "Tonguella", mate: "Mimic", offspring: "SuperTen" },

    { base: "GulpBeast", mate: "TreeSlime", offspring: "SuperTen" },
    { base: "GulpBeast", mate: "FangSlime", offspring: "SuperTen" },
    { base: "GulpBeast", mate: "MadDragon", offspring: "SuperTen" },
    { base: "GulpBeast", mate: "FunkyBird", offspring: "SuperTen" },
    { base: "GulpBeast", mate: "MadPlant", offspring: "SuperTen" },
    { base: "GulpBeast", mate: "FaceTree", offspring: "SuperTen" },
    { base: "GulpBeast", mate: "Lipsy", offspring: "SuperTen" },
    { base: "GulpBeast", mate: "Demonite", offspring: "SuperTen" },
    { base: "GulpBeast", mate: "Gremlin", offspring: "SuperTen" },
    { base: "GulpBeast", mate: "CopyCat", offspring: "SuperTen" },
    { base: "GulpBeast", mate: "JewelBag", offspring: "SuperTen" },
    { base: "GulpBeast", mate: "Mimic", offspring: "SuperTen" },
    { base: "BEAST", mate: "Mudron", offspring: "SuperTen" },

    { base: "BEAST", mate: "Tortragon", offspring: "IronTurt" },

    { base: "BEAST", mate: "DuckKite", offspring: "Mommonja" },

    { base: "BEAST", mate: "StubSuck", offspring: "HammerMan" },

    { base: "BEAST", mate: "MetalDrak", offspring: "Grizzly" },
    { base: "BEAST", mate: "Roboster", offspring: "Grizzly" },
    { base: "BEAST", mate: "LavaMan", offspring: "Grizzly" },
    { base: "BEAST", mate: "IceMan", offspring: "Grizzly" },
    { base: "BEAST", mate: "Golem", offspring: "Grizzly" },
    { base: "BEAST", mate: "StoneMan", offspring: "Grizzly" },
    { base: "BEAST", mate: "DEVIL", offspring: "Grizzly" },

    { base: "IronTurt", mate: "Pteranod", offspring: "Yeti" },
    { base: "IronTurt", mate: "Gasgon", offspring: "Yeti" },
    { base: "IronTurt", mate: "Swordgon", offspring: "Yeti" },
    { base: "IronTurt", mate: "MadDragon", offspring: "Yeti" },
    { base: "IronTurt", mate: "BattleRex", offspring: "Yeti" },
    { base: "IronTurt", mate: "SkyDragon", offspring: "Yeti" },

    { base: "Goategon", mate: "Pteranod", offspring: "Yeti" },
    { base: "Goategon", mate: "Gasgon", offspring: "Yeti" },
    { base: "Goategon", mate: "Swordgon", offspring: "Yeti" },
    { base: "Goategon", mate: "MadDragon", offspring: "Yeti" },
    { base: "Goategon", mate: "BattleRex", offspring: "Yeti" },
    { base: "Goategon", mate: "SkyDragon", offspring: "Yeti" },

    { base: "WildApe", mate: "Pteranod", offspring: "Yeti" },
    { base: "WildApe", mate: "Gasgon", offspring: "Yeti" },
    { base: "WildApe", mate: "Swordgon", offspring: "Yeti" },
    { base: "WildApe", mate: "MadDragon", offspring: "Yeti" },
    { base: "WildApe", mate: "BattleRex", offspring: "Yeti" },
    { base: "WildApe", mate: "SkyDragon", offspring: "Yeti" },

    { base: "MadCat", mate: "Pteranod", offspring: "Yeti" },
    { base: "MadCat", mate: "Gasgon", offspring: "Yeti" },
    { base: "MadCat", mate: "Swordgon", offspring: "Yeti" },
    { base: "MadCat", mate: "MadDragon", offspring: "Yeti" },
    { base: "MadCat", mate: "BattleRex", offspring: "Yeti" },
    { base: "MadCat", mate: "SkyDragon", offspring: "Yeti" },
    { base: "BEAST", mate: "Orc", offspring: "Yeti" },

    { base: "BEAST", mate: "SabreMan", offspring: "MadGopher" },

    { base: "BEAST", mate: "LizardFly", offspring: "FairyRat" },

    { base: "Tonguella", mate: "SLIME", offspring: "Unicorn" },
    { base: "GulpBeast", mate: "SLIME", offspring: "Unicorn" },
    { base: "Grizzly", mate: "SLIME", offspring: "Unicorn" },
    { base: "Yeti", mate: "SLIME", offspring: "Unicorn" },
    { base: "Goategon", mate: "SLIME", offspring: "Unicorn" },
    { base: "WildApe", mate: "SLIME", offspring: "Unicorn" },
    { base: "Trumpeter", mate: "SLIME", offspring: "Unicorn" },
    { base: "BEAST", mate: "FangSlime", offspring: "Unicorn" },

    { base: "BEAST", mate: "DrakSlime", offspring: "Goategon" },
    { base: "BEAST", mate: "LizardMan", offspring: "Goategon" },

    { base: "Almiraj", mate: "DRAGON", offspring: "WildApe" },
    { base: "BEAST", mate: "MadPecker", offspring: "WildApe" },

    { base: "Tonguella", mate: "LandOwl", offspring: "Trumpeter" },
    { base: "Tonguella", mate: "MadCondor", offspring: "Trumpeter" },
    { base: "Tonguella", mate: "ZapBird", offspring: "Trumpeter" },
    { base: "Tonguella", mate: "WhipBird", offspring: "Trumpeter" },

    { base: "GulpBeast", mate: "LandOwl", offspring: "Trumpeter" },
    { base: "GulpBeast", mate: "MadCondor", offspring: "Trumpeter" },
    { base: "GulpBeast", mate: "ZapBird", offspring: "Trumpeter" },
    { base: "GulpBeast", mate: "WhipBird", offspring: "Trumpeter" },

    { base: "Grizzly", mate: "LandOwl", offspring: "Trumpeter" },
    { base: "Grizzly", mate: "MadCondor", offspring: "Trumpeter" },
    { base: "Grizzly", mate: "ZapBird", offspring: "Trumpeter" },
    { base: "Grizzly", mate: "WhipBird", offspring: "Trumpeter" },

    { base: "Yeti", mate: "LandOwl", offspring: "Trumpeter" },
    { base: "Yeti", mate: "MadCondor", offspring: "Trumpeter" },
    { base: "Yeti", mate: "ZapBird", offspring: "Trumpeter" },
    { base: "Yeti", mate: "WhipBird", offspring: "Trumpeter" },

    { base: "GulpBeast", mate: "MetalDrak", offspring: "Trumpeter" },
    { base: "GulpBeast", mate: "BalZak", offspring: "Trumpeter" },
    { base: "GulpBeast", mate: "LavaMan", offspring: "Trumpeter" },
    { base: "GulpBeast", mate: "Roboster", offspring: "Trumpeter" },
    { base: "GulpBeast", mate: "LavaMan", offspring: "Trumpeter" },
    { base: "GulpBeast", mate: "IceMan", offspring: "Trumpeter" },
    { base: "GulpBeast", mate: "Golem", offspring: "Trumpeter" },

    { base: "WildApe", mate: "StoneMan", offspring: "Trumpeter" },
    { base: "SuperTen", mate: "DRAGON", offspring: "Trumpeter" },

    { base: "Trumpeter", mate: "GulpBeast", offspring: "KingLeo" },
    { base: "Trumpeter", mate: "MetalDrak", offspring: "KingLeo" },
    { base: "Trumpeter", mate: "Balzak", offspring: "KingLeo" },
    { base: "Trumpeter", mate: "GoldGolem", offspring: "KingLeo" },
    { base: "Roboster", mate: "GulpBeast", offspring: "KingLeo" },
    { base: "Roboster", mate: "SuperTen", offspring: "KingLeo" },
    { base: "Roboster", mate: "Unicorn", offspring: "KingLeo" },
    { base: "Roboster", mate: "Trumpeter", offspring: "KingLeo" },
    { base: "Roboster", mate: "DarkHorn", offspring: "KingLeo" },
    { base: "Roboster", mate: "MadCat", offspring: "KingLeo" },

    { base: "BEAST", mate: "BOSS", offspring: "DarkHorn" },

    { base: "BEAST", mate: "Dragon", offspring: "MadCat" },

    { base: "BEAST", mate: "EyeBall", offspring: "BigEye" },

    { base: "BIRD", mate: "SLIME", offspring: "Picky" },

    { base: "BIRD", mate: "DRAGON", offspring: "Wyvern" },

    { base: "BIRD", mate: "BEAST", offspring: "BullBird" },

    { base: "BIRD", mate: "PLANT", offspring: "FloraJay" },

    { base: "BIRD", mate: "BUG", offspring: "DuckKite" },

    { base: "BIRD", mate: "DEVIL", offspring: "MadPecker" },

    { base: "BIRD", mate: "ZOMBIE", offspring: "MadRaven" },

    { base: "BIRD", mate: "MATERIAL", offspring: "MistyWing" },

    { base: "Picky", mate: "SLIME", offspring: "Dracky" },

    { base: "BIRD", mate: "RockSlime", offspring: "StubBird" },

    { base: "BullBird", mate: "BEAST", offspring: "LandOwl" },

    { base: "Wyvern", mate: "DRAGON", offspring: "MadGoose" },
    { base: "Wyvern", mate: "ZOMBIE", offspring: "MadGoose" },
    { base: "LandOwl", mate: "DRAGON", offspring: "MadGoose" },
    { base: "LandOwl", mate: "ZOMBIE", offspring: "MadGoose" },
    { base: "MadCondor", mate: "DRAGON", offspring: "MadGoose" },
    { base: "MadCondor", mate: "ZOMBIE", offspring: "MadGoose" },
    { base: "Phoenix", mate: "DRAGON", offspring: "MadGoose" },
    { base: "Phoenix", mate: "ZOMBIE", offspring: "MadGoose" },
    { base: "BIRD", mate: "Droll", offspring: "MadGoose" },

    { base: "LandOwl", mate: "DEVIL", offspring: "MadCondor" },
    { base: "BIRD", mate: "CoilBird", offspring: "MadCondor" },

    { base: "BIRD", mate: "Metaly", offspring: "Blizzardy" },
    { base: "BIRD", mate: "Metabble", offspring: "Blizzardy" },
    { base: "BIRD", mate: "SuperTen", offspring: "Blizzardy" },
    { base: "BIRD", mate: "Yeti", offspring: "Blizzardy" },
    { base: "BIRD", mate: "Goategon", offspring: "Blizzardy" },
    { base: "BIRD", mate: "Trumpeter", offspring: "Blizzardy" },
    { base: "BIRD", mate: "Skullgon", offspring: "Blizzardy" },
    { base: "BIRD", mate: "DeadNoble", offspring: "Blizzardy" },
    { base: "BIRD", mate: "WhiteKing", offspring: "Blizzardy" },
    { base: "BIRD", mate: "Skeletor", offspring: "Blizzardy" },
    { base: "BIRD", mate: "Servant", offspring: "Blizzardy" },
    { base: "BIRD", mate: "IceMan", offspring: "Blizzardy" },

    { base: "BIRD", mate: "DrakSlime", offspring: "Phoenix" },
    { base: "BIRD", mate: "GulpBeast", offspring: "Phoenix" },
    { base: "BIRD", mate: "IronTurt", offspring: "Phoenix" },
    { base: "BIRD", mate: "Grizzly", offspring: "Phoenix" },
    { base: "BIRD", mate: "ArcDemon", offspring: "Phoenix" },
    { base: "BIRD", mate: "CopyCat", offspring: "Phoenix" },
    { base: "BIRD", mate: "Gismo", offspring: "Phoenix" },
    { base: "BIRD", mate: "LavaMan", offspring: "Phoenix" },

    { base: "MadCondor", mate: "Gismo", offspring: "ZapBird" },
    { base: "Phoenix", mate: "Gismo", offspring: "ZapBird" },
    { base: "WhipBird", mate: "Gismo", offspring: "ZapBird" },
    { base: "BIRD", mate: "BOSS", offspring: "ZapBird" },

    { base: "LandOwl", mate: "RockSlime", offspring: "WhipBird" },
    { base: "LandOwl", mate: "SlimeBorg", offspring: "WhipBird" },
    { base: "LandOwl", mate: "Digster", offspring: "WhipBird" },
    { base: "LandOwl", mate: "MetalDrak", offspring: "WhipBird" },
    { base: "LandOwl", mate: "Golem", offspring: "WhipBird" },
    { base: "LandOwl", mate: "StoneMan", offspring: "WhipBird" },

    { base: "MadGoose", mate: "RockSlime", offspring: "WhipBird" },
    { base: "MadGoose", mate: "SlimeBorg", offspring: "WhipBird" },
    { base: "MadGoose", mate: "Digster", offspring: "WhipBird" },
    { base: "MadGoose", mate: "MetalDrak", offspring: "WhipBird" },
    { base: "MadGoose", mate: "Golem", offspring: "WhipBird" },
    { base: "MadGoose", mate: "StoneMan", offspring: "WhipBird" },

    { base: "MadCondor", mate: "RockSlime", offspring: "WhipBird" },
    { base: "MadCondor", mate: "SlimeBorg", offspring: "WhipBird" },
    { base: "MadCondor", mate: "Digster", offspring: "WhipBird" },
    { base: "MadCondor", mate: "MetalDrak", offspring: "WhipBird" },
    { base: "MadCondor", mate: "Golem", offspring: "WhipBird" },
    { base: "MadCondor", mate: "StoneMan", offspring: "WhipBird" },

    { base: "Blizzardy", mate: "RockSlime", offspring: "WhipBird" },
    { base: "Blizzardy", mate: "SlimeBorg", offspring: "WhipBird" },
    { base: "Blizzardy", mate: "Digster", offspring: "WhipBird" },
    { base: "Blizzardy", mate: "MetalDrak", offspring: "WhipBird" },
    { base: "Blizzardy", mate: "Golem", offspring: "WhipBird" },
    { base: "Blizzardy", mate: "StoneMan", offspring: "WhipBird" },

    { base: "ZapBird", mate: "RockSlime", offspring: "WhipBird" },
    { base: "ZapBird", mate: "SlimeBorg", offspring: "WhipBird" },
    { base: "ZapBird", mate: "Digster", offspring: "WhipBird" },
    { base: "ZapBird", mate: "MetalDrak", offspring: "WhipBird" },
    { base: "ZapBird", mate: "Golem", offspring: "WhipBird" },
    { base: "ZapBird", mate: "StoneMan", offspring: "WhipBird" },
    { base: "BIRD", mate: "Rayburn", offspring: "WhipBird" },

    { base: "BIRD", mate: "DanceVegi", offspring: "FunkyBird" },

    { base: "Blizzardy", mate: "Phoenix", offspring: "RainHawk" },

    { base: "PLANT", mate: "SLIME", offspring: "MadPlant" },

    { base: "PLANT", mate: "DRAGON", offspring: "FireWeed" },

    { base: "PLANT", mate: "BEAST", offspring: "FloraMan" },

    { base: "PLANT", mate: "BIRD", offspring: "WingTree" },

    { base: "PLANT", mate: "BUG", offspring: "CactiBall" },

    { base: "PLANT", mate: "DEVIL", offspring: "Gulpple" },

    { base: "PLANT", mate: "ZOMBIE", offspring: "Toadstool" },

    { base: "PLANT", mate: "MATERIAL", offspring: "AmberWeed" },

    { base: "AmberWeed", mate: "BEAST", offspring: "StubSuck" },

    { base: "PLANT", mate: "Gophecada", offspring: "Oniono" },

    { base: "MadPlant", mate: "BEAST", offspring: "DanceVegi" },
    { base: "PLANT", mate: "Facer", offspring: "DanceVegi" },

    { base: "PLANT", mate: "Pixy", offspring: "TreeBoy" },

    { base: "HerbMan", mate: "DRAGON", offspring: "FaceTree" },
    { base: "PLANT", mate: "NiteWhip", offspring: "FaceTree" },

    { base: "DanceVegi", mate: "DEVIL", offspring: "HerbMan" },
    { base: "PLANT", mate: "FunkyBird", offspring: "HerbMan" },

    { base: "PLANT", mate: "PillowRat", offspring: "BeanMan" },

    { base: "PLANT", mate: "RockSlime", offspring: "EvilSeed" },
    { base: "PLANT", mate: "BigEye", offspring: "EvilSeed" },
    { base: "PLANT", mate: "DuckKite", offspring: "EvilSeed" },
    { base: "PLANT", mate: "Butterfly", offspring: "EvilSeed" },
    { base: "PLANT", mate: "Eyeder", offspring: "EvilSeed" },
    { base: "PLANT", mate: "DarkEye", offspring: "EvilSeed" },
    { base: "PLANT", mate: "EyeBall", offspring: "EvilSeed" },
    { base: "PLANT", mate: "MadMirror", offspring: "EvilSeed" },

    { base: "EvilSeed", mate: "EvilSeed", offspring: "ManEater" },

    { base: "ManEater", mate: "ManEater", offspring: "Snapper" },

    { base: "PLANT", mate: "BOSS", offspring: "Rosevine" },

    { base: "BUG", mate: "SLIME", offspring: "GiantSlug" },

    { base: "BUG", mate: "DRAGON", offspring: "Catapila" },

    { base: "BUG", mate: "BEAST", offspring: "Gophecada" },

    { base: "BUG", mate: "BIRD", offspring: "Butterfly" },

    { base: "BUG", mate: "PLANT", offspring: "WeedBug" },

    { base: "BUG", mate: "DEVIL", offspring: "GiantWorm" },

    { base: "BUG", mate: "ZOMBIE", offspring: "Lipsy" },

    { base: "BUG", mate: "MATERIAL", offspring: "StagBug" },

    { base: "GiantSlug", mate: "SLIME", offspring: "ArmyAnt" },

    { base: "WeedBug", mate: "PLANT", offspring: "TailEater" },
    { base: "BUG", mate: "FloraMan", offspring: "TailEater" },

    { base: "GiantWorm", mate: "MATERIAL", offspring: "ArmorPede" },
    { base: "Droll", mate: "DRAGON", offspring: "ArmorPede" },
    { base: "BUG", mate: "IronTurt", offspring: "ArmorPede" },

    { base: "Catapila", mate: "BEAST", offspring: "Eyeder" },
    { base: "BUG", mate: "AmberWeed", offspring: "Eyeder" },

    { base: "Butterfly", mate: "DEVIL", offspring: "GiantMoth" },
    { base: "BUG", mate: "Saccer", offspring: "GiantMoth" },

    { base: "Butterfly", mate: "Butterfly", offspring: "Droll" },
    { base: "Butterfly", mate: "TailEater", offspring: "Droll" },
    { base: "Butterfly", mate: "Eyeder", offspring: "Droll" },
    { base: "TailEater", mate: "Butterfly", offspring: "Droll" },
    { base: "TailEater", mate: "TailEater", offspring: "Droll" },
    { base: "TailEater", mate: "Eyeder", offspring: "Droll" },
    { base: "Eyeder", mate: "Butterfly", offspring: "Droll" },
    { base: "Eyeder", mate: "TailEater", offspring: "Droll" },
    { base: "Eyeder", mate: "Eyeder", offspring: "Droll" },
    { base: "Lipsy", mate: "SLIME", offspring: "Droll" },
    { base: "BUG", mate: "Spooky", offspring: "Droll" },

    { base: "BUG", mate: "DarkCrab", offspring: "ArmyCrab" },

    { base: "Eyeder", mate: "ZOMBIE", offspring: "MadHornet" },
    { base: "Eyeder", mate: "FairyRat", offspring: "MadHornet" },
    { base: "Droll", mate: "ZOMBIE", offspring: "MadHornet" },
    { base: "Droll", mate: "FairyRat", offspring: "MadHornet" },
    { base: "BUG", mate: "FairyRat", offspring: "MadHornet" },

    { base: "StagBug", mate: "StagBug", offspring: "HornBeet" },
    { base: "ArmorPede", mate: "DEVIL", offspring: "HornBeet" },

    { base: "HornBeet", mate: "HornBeet", offspring: "Armorpion" },

    { base: "BUG", mate: "BOSS", offspring: "Digster" },

    { base: "DEVIL", mate: "SLIME", offspring: "Pixy" },

    { base: "AgDevil", mate: "SpotKing", offspring: "ArcDemon" },
    { base: "AgDevil", mate: "KingSlime", offspring: "ArcDemon" },
    { base: "AgDevil", mate: "MetalKing", offspring: "ArcDemon" },
    { base: "AgDevil", mate: "Andreal", offspring: "ArcDemon" },
    { base: "AgDevil", mate: "GreatDrak", offspring: "ArcDemon" },
    { base: "AgDevil", mate: "Orochi", offspring: "ArcDemon" },
    { base: "AgDevil", mate: "Trumpeter", offspring: "ArcDemon" },
    { base: "AgDevil", mate: "KingLeo", offspring: "ArcDemon" },
    { base: "AgDevil", mate: "ZapBird", offspring: "ArcDemon" },
    { base: "AgDevil", mate: "WhipBird", offspring: "ArcDemon" },
    { base: "AgDevil", mate: "MetalDrak", offspring: "ArcDemon" },
    { base: "AgDevil", mate: "StoneMan", offspring: "ArcDemon" },

    { base: "Grendal", mate: "SpotKing", offspring: "ArcDemon" },
    { base: "Grendal", mate: "KingSlime", offspring: "ArcDemon" },
    { base: "Grendal", mate: "MetalKing", offspring: "ArcDemon" },
    { base: "Grendal", mate: "Andreal", offspring: "ArcDemon" },
    { base: "Grendal", mate: "GreatDrak", offspring: "ArcDemon" },
    { base: "Grendal", mate: "Orochi", offspring: "ArcDemon" },
    { base: "Grendal", mate: "Trumpeter", offspring: "ArcDemon" },
    { base: "Grendal", mate: "KingLeo", offspring: "ArcDemon" },
    { base: "Grendal", mate: "ZapBird", offspring: "ArcDemon" },
    { base: "Grendal", mate: "WhipBird", offspring: "ArcDemon" },
    { base: "Grendal", mate: "MetalDrak", offspring: "ArcDemon" },
    { base: "Grendal", mate: "StoneMan", offspring: "ArcDemon" },

    { base: "Gigantes", mate: "SpotKing", offspring: "ArcDemon" },
    { base: "Gigantes", mate: "KingSlime", offspring: "ArcDemon" },
    { base: "Gigantes", mate: "MetalKing", offspring: "ArcDemon" },
    { base: "Gigantes", mate: "Andreal", offspring: "ArcDemon" },
    { base: "Gigantes", mate: "GreatDrak", offspring: "ArcDemon" },
    { base: "Gigantes", mate: "Orochi", offspring: "ArcDemon" },
    { base: "Gigantes", mate: "Trumpeter", offspring: "ArcDemon" },
    { base: "Gigantes", mate: "KingLeo", offspring: "ArcDemon" },
    { base: "Gigantes", mate: "ZapBird", offspring: "ArcDemon" },
    { base: "Gigantes", mate: "WhipBird", offspring: "ArcDemon" },
    { base: "Gigantes", mate: "MetalDrak", offspring: "ArcDemon" },
    { base: "Gigantes", mate: "StoneMan", offspring: "ArcDemon" },
    { base: "GateGuard", mate: "ZOMBIE", offspring: "ArcDemon" },
    { base: "Ogre", mate: "DRAGON", offspring: "ArcDemon" },
    { base: "DEVIL", mate: "BOSS", offspring: "ArcDemon" },

    { base: "EvilBeast", mate: "DRAGON", offspring: "AgDevil" },
    { base: "SkulRider", mate: "DRAGON", offspring: "AgDevil" },
    { base: "Gremlin", mate: "DRAGON", offspring: "AgDevil" },
    { base: "MedusaEye", mate: "DRAGON", offspring: "AgDevil" },

    { base: "DEVIL", mate: "BIRD", offspring: "Demonite" },

    { base: "DEVIL", mate: "PLANT", offspring: "DarkEye" },

    { base: "DEVIL", mate: "BUG", offspring: "EyeBall" },

    { base: "DEVIL", mate: "ZOMBIE", offspring: "SkulRider" },

    { base: "DEVIL", mate: "MATERIAL", offspring: "EvilBeast" },

    { base: "Pixy", mate: "SLIME", offspring: "1EyeClown" },
    { base: "Demonite", mate: "SLIME", offspring: "1EyeClown" },
    { base: "EyeBall", mate: "SLIME", offspring: "1EyeClown" },

    { base: "DEVIL", mate: "BEAST", offspring: "Gremlin" },

    { base: "MedusaEye", mate: "ZOMBIE", offspring: "MedusaEye" },
    { base: "1EyeClown", mate: "ZOMBIE", offspring: "MedusaEye" },
    { base: "Gremlin", mate: "ZOMBIE", offspring: "MedusaEye" },
    { base: "DEVIL", mate: "DRAGON", offspring: "MedusaEye" },

    { base: "ArcDemon", mate: "ZOMBIE", offspring: "Lionex" },
    { base: "DEVIL", mate: "LizardMan", offspring: "Lionex" },

    { base: "ArcDemon", mate: "BEAST", offspring: "GoatHorn" },
    { base: "DEVIL", mate: "DarkHorn", offspring: "GoatHorn" },

    { base: "DEVIL", mate: "BeanMan", offspring: "Orc" },

    { base: "AgDevil", mate: "GulpBeast", offspring: "Ogre" },
    { base: "AgDevil", mate: "Unicorn", offspring: "Ogre" },
    { base: "AgDevil", mate: "Digster", offspring: "Ogre" },
    { base: "AgDevil", mate: "Roboster", offspring: "Ogre" },

    { base: "Grendal", mate: "GulpBeast", offspring: "Ogre" },
    { base: "Grendal", mate: "Unicorn", offspring: "Ogre" },
    { base: "Grendal", mate: "Digster", offspring: "Ogre" },
    { base: "Grendal", mate: "Roboster", offspring: "Ogre" },

    { base: "Gigantes", mate: "GulpBeast", offspring: "Ogre" },
    { base: "Gigantes", mate: "Unicorn", offspring: "Ogre" },
    { base: "Gigantes", mate: "Digster", offspring: "Ogre" },
    { base: "Gigantes", mate: "Roboster", offspring: "Ogre" },
    { base: "GateGuard", mate: "DRAGON", offspring: "Ogre" },
    { base: "DEVIL", mate: "HammerMan", offspring: "Ogre" },

    { base: "AgDevil", mate: "SlimeBorg", offspring: "GateGuard" },
    { base: "AgDevil", mate: "Swordgon", offspring: "GateGuard" },
    { base: "AgDevil", mate: "Coatol", offspring: "GateGuard" },
    { base: "AgDevil", mate: "MistyWing", offspring: "GateGuard" },
    { base: "AgDevil", mate: "MadCondor", offspring: "GateGuard" },
    { base: "AgDevil", mate: "Rosevine", offspring: "GateGuard" },
    { base: "AgDevil", mate: "GiantMoth", offspring: "GateGuard" },
    { base: "AgDevil", mate: "Skullgon ", offspring: "GateGuard" },
    { base: "AgDevil", mate: "DeadNoble", offspring: "GateGuard" },
    { base: "AgDevil", mate: "WhiteKing", offspring: "GateGuard" },

    { base: "Grendal", mate: "SlimeBorg", offspring: "GateGuard" },
    { base: "Grendal", mate: "Swordgon", offspring: "GateGuard" },
    { base: "Grendal", mate: "Coatol", offspring: "GateGuard" },
    { base: "Grendal", mate: "MistyWing", offspring: "GateGuard" },
    { base: "Grendal", mate: "MadCondor", offspring: "GateGuard" },
    { base: "Grendal", mate: "Rosevine", offspring: "GateGuard" },
    { base: "Grendal", mate: "GiantMoth", offspring: "GateGuard" },
    { base: "Grendal", mate: "Skullgon ", offspring: "GateGuard" },
    { base: "Grendal", mate: "DeadNoble", offspring: "GateGuard" },
    { base: "Grendal", mate: "WhiteKing", offspring: "GateGuard" },

    { base: "Gigantes", mate: "SlimeBorg", offspring: "GateGuard" },
    { base: "Gigantes", mate: "Swordgon", offspring: "GateGuard" },
    { base: "Gigantes", mate: "Coatol", offspring: "GateGuard" },
    { base: "Gigantes", mate: "MistyWing", offspring: "GateGuard" },
    { base: "Gigantes", mate: "MadCondor", offspring: "GateGuard" },
    { base: "Gigantes", mate: "Rosevine", offspring: "GateGuard" },
    { base: "Gigantes", mate: "GiantMoth", offspring: "GateGuard" },
    { base: "Gigantes", mate: "Skullgon ", offspring: "GateGuard" },
    { base: "Gigantes", mate: "DeadNoble", offspring: "GateGuard" },
    { base: "Gigantes", mate: "WhiteKing", offspring: "GateGuard" },
    { base: "Demonite", mate: "Demonite", offspring: "GateGuard" },
    { base: "Ogre", mate: "ZOMBIE", offspring: "GateGuard" },

    { base: "1EyeClown", mate: "1EyeClown", offspring: "ChopClown" },

    { base: "SkulRider", mate: "BEAST", offspring: "Grendal" },
    { base: "EvilBeast", mate: "BEAST", offspring: "Grendal" },
    { base: "Gremlin", mate: "BEAST", offspring: "Grendal" },
    { base: "MedusaEye", mate: "BEAST", offspring: "Grendal" },
    { base: "DEVIL", mate: "MadDragon", offspring: "Grendal" },

    { base: "ArcDemon", mate: "GateGuard", offspring: "Akubar" },
    { base: "Grendal", mate: "Grendal", offspring: "Akubar" },

    { base: "DEVIL", mate: "RogueNite", offspring: "MadKnight" },

    { base: "SkulRider", mate: "ZOMBIE", offspring: "Gigantes" },
    { base: "EvilBeast", mate: "ZOMBIE", offspring: "Gigantes" },
    { base: "DEVIL", mate: "BigEye", offspring: "Gigantes" },

    { base: "ArcDemon", mate: "DRAGON", offspring: "Centasaur" },
    { base: "Ogre", mate: "BEAST", offspring: "Centasaur" },
    { base: "GateGuard", mate: "BEAST", offspring: "Centasaur" },

    { base: "ArcDemon", mate: "MATERIAL", offspring: "EvilArmor" },
    { base: "Ogre", mate: "MATERIAL", offspring: "EvilArmor" },
    { base: "GateGuard", mate: "MATERIAL", offspring: "EvilArmor" },
    { base: "DEVIL", mate: "ArmorPede", offspring: "EvilArmor" },

    { base: "Akubar", mate: "RainHawk", offspring: "Jamirus" },
    { base: "RainHawk", mate: "Akubar", offspring: "Jamirus" },

    { base: "Centasaur", mate: "GoldGolem", offspring: "Durran" },
    { base: "GoldGolem", mate: "Centasaur", offspring: "Durran" },

    { base: "ZOMBIE", mate: "SLIME", offspring: "Spooky" },

    { base: "Skullgon", mate: "DRAGON", offspring: "??Spooky??" },
    { base: "DeadNoble", mate: "DRAGON", offspring: "??Spooky??" },
    { base: "WhiteKing", mate: "DRAGON", offspring: "??Spooky??" },
    { base: "BoneSlave", mate: "DRAGON", offspring: "??Spooky??" },
    { base: "Skeletor", mate: "DRAGON", offspring: "??Spooky??" },
    { base: "ZOMBIE", mate: "Swordgon", offspring: "Skullgon" },
    { base: "ZOMBIE", mate: "Rayburn", offspring: "Skullgon" },
    { base: "ZOMBIE", mate: "Andreal", offspring: "Skullgon" },
    { base: "ZOMBIE", mate: "GreatDrak", offspring: "Skullgon" },
    { base: "ZOMBIE", mate: "Orochi", offspring: "Skullgon" },
    { base: "ZOMBIE", mate: "BattleRex", offspring: "Skullgon" },
    { base: "ZOMBIE", mate: "Divinegon", offspring: "Skullgon" },
    { base: "DRAGON", mate: "Skullgon", offspring: "Skullgon" },
    { base: "DRAGON", mate: "DeadNoble", offspring: "Skullgon" },
    { base: "DRAGON", mate: "WhiteKing", offspring: "Skullgon" },
    { base: "DRAGON", mate: "Servant", offspring: "Skullgon" },

    { base: "ZOMBIE", mate: "BEAST", offspring: "Putrepup" },

    { base: "ZOMBIE", mate: "BIRD", offspring: "RotRaven" },

    { base: "ZOMBIE", mate: "PLANT", offspring: "Mummy" },

    { base: "ZOMBIE", mate: "BUG", offspring: "DarkCrab" },

    { base: "ZOMBIE", mate: "DEVIL", offspring: "DeadNite" },

    { base: "ZOMBIE", mate: "MATERIAL", offspring: "Shadow" },

    { base: "Spooky", mate: "BEAST", offspring: "Hork" },

    { base: "ZOMBIE", mate: "BoxSlime", offspring: "Mudron" },
    { base: "ZOMBIE", mate: "FangSlime", offspring: "Mudron" },
    { base: "ZOMBIE", mate: "Tonguella", offspring: "Mudron" },
    { base: "ZOMBIE", mate: "Yeti", offspring: "Mudron" },
    { base: "ZOMBIE", mate: "FunkyBird", offspring: "Mudron" },
    { base: "ZOMBIE", mate: "MadPlant", offspring: "Mudron" },
    { base: "ZOMBIE", mate: "DanceVegi", offspring: "Mudron" },
    { base: "ZOMBIE", mate: "GiantSlug", offspring: "Mudron" },
    { base: "ZOMBIE", mate: "Lipsy", offspring: "Mudron" },
    { base: "ZOMBIE", mate: "Droll", offspring: "Mudron" },

    { base: "MadSpirit", mate: "DEVIL", offspring: "NiteWhip" },
    { base: "DarkCrab", mate: "DEVIL", offspring: "NiteWhip" },
    { base: "ZOMBIE", mate: "MistyWing", offspring: "NiteWhip" },

    { base: "Skullgon", mate: "BIRD", offspring: "MadSpirit" },
    { base: "DeadNite", mate: "BIRD", offspring: "MadSpirit" },
    { base: "Mudron", mate: "BIRD", offspring: "MadSpirit" },
    { base: "DeadNoble", mate: "BIRD", offspring: "MadSpirit" },
    { base: "BoneSlave", mate: "BIRD", offspring: "MadSpirit" },
    { base: "Skeletor", mate: "BIRD", offspring: "MadSpirit" },
    { base: "ZOMBIE", mate: "DRAGON", offspring: "MadSpirit" },

    { base: "RotRaven", mate: "BIRD", offspring: "WindMerge" },
    { base: "ZOMBIE", mate: "WindBeast", offspring: "WindMerge" },

    { base: "Spooky", mate: "DEVIL", offspring: "Reaper" },
    { base: "Hork", mate: "DEVIL", offspring: "Reaper" },
    { base: "ZOMBIE", mate: "WeedBug", offspring: "Reaper" },

    { base: "Mudron", mate: "ArcDemon", offspring: "???Reaper???" },
    { base: "MadSpirit", mate: "ArcDemon", offspring: "???Reaper???" },
    { base: "BoneSlave", mate: "ArcDemon", offspring: "???Reaper???" },
    { base: "Skeletor", mate: "ArcDemon", offspring: "???Reaper???" },

    { base: "Mudron", mate: "Lionex", offspring: "???Reaper???" },
    { base: "MadSpirit", mate: "Lionex", offspring: "???Reaper???" },
    { base: "BoneSlave", mate: "Lionex", offspring: "???Reaper???" },
    { base: "Skeletor", mate: "Lionex", offspring: "???Reaper???" },

    { base: "Mudron", mate: "GateGuard", offspring: "???Reaper???" },
    { base: "MadSpirit", mate: "GateGuard", offspring: "???Reaper???" },
    { base: "BoneSlave", mate: "GateGuard", offspring: "???Reaper???" },
    { base: "Skeletor", mate: "GateGuard", offspring: "???Reaper???" },

    { base: "Mudron", mate: "MetalDrak", offspring: "???Reaper???" },
    { base: "MadSpirit", mate: "MetalDrak", offspring: "???Reaper???" },
    { base: "BoneSlave", mate: "MetalDrak", offspring: "???Reaper???" },
    { base: "Skeletor", mate: "MetalDrak", offspring: "???Reaper???" },

    { base: "Mudron", mate: "Roboster", offspring: "???Reaper???" },
    { base: "MadSpirit", mate: "Roboster", offspring: "???Reaper???" },
    { base: "BoneSlave", mate: "Roboster", offspring: "???Reaper???" },
    { base: "Skeletor", mate: "Roboster", offspring: "???Reaper???" },

    { base: "Skullgon", mate: "Copycat", offspring: "DeadNoble" },
    { base: "DeadNite", mate: "Copycat", offspring: "DeadNoble" },
    { base: "Mudron", mate: "Copycat", offspring: "DeadNoble" },
    { base: "BoneSlave", mate: "Copycat", offspring: "DeadNoble" },
    { base: "Skeletor", mate: "Copycat", offspring: "DeadNoble" },
    { base: "DeadNite", mate: "DeadNite", offspring: "DeadNoble" },

    { base: "Skullgon", mate: "SpotKing", offspring: "WhiteKing" },
    { base: "Skullgon", mate: "KingSlime", offspring: "WhiteKing" },
    { base: "Skullgon", mate: "MetalKing", offspring: "WhiteKing" },
    { base: "Skullgon", mate: "Andreal", offspring: "WhiteKing" },
    { base: "Skullgon", mate: "GreatDrak", offspring: "WhiteKing" },
    { base: "Skullgon", mate: "KingLeo", offspring: "WhiteKing" },
    { base: "Skullgon", mate: "Blizzardy", offspring: "WhiteKing" },
    { base: "Skullgon", mate: "ZapBird", offspring: "WhiteKing" },
    { base: "Skullgon", mate: "WhipBird", offspring: "WhiteKing" },
    { base: "Skullgon", mate: "GoldGolem", offspring: "WhiteKing" },

    { base: "DeadNoble", mate: "SpotKing", offspring: "WhiteKing" },
    { base: "DeadNoble", mate: "KingSlime", offspring: "WhiteKing" },
    { base: "DeadNoble", mate: "MetalKing", offspring: "WhiteKing" },
    { base: "DeadNoble", mate: "Andreal", offspring: "WhiteKing" },
    { base: "DeadNoble", mate: "GreatDrak", offspring: "WhiteKing" },
    { base: "DeadNoble", mate: "KingLeo", offspring: "WhiteKing" },
    { base: "DeadNoble", mate: "Blizzardy", offspring: "WhiteKing" },
    { base: "DeadNoble", mate: "ZapBird", offspring: "WhiteKing" },
    { base: "DeadNoble", mate: "WhipBird", offspring: "WhiteKing" },
    { base: "DeadNoble", mate: "GoldGolem", offspring: "WhiteKing" },

    { base: "BoneSlave", mate: "SpotKing", offspring: "WhiteKing" },
    { base: "BoneSlave", mate: "KingSlime", offspring: "WhiteKing" },
    { base: "BoneSlave", mate: "MetalKing", offspring: "WhiteKing" },
    { base: "BoneSlave", mate: "Andreal", offspring: "WhiteKing" },
    { base: "BoneSlave", mate: "GreatDrak", offspring: "WhiteKing" },
    { base: "BoneSlave", mate: "KingLeo", offspring: "WhiteKing" },
    { base: "BoneSlave", mate: "Blizzardy", offspring: "WhiteKing" },
    { base: "BoneSlave", mate: "ZapBird", offspring: "WhiteKing" },
    { base: "BoneSlave", mate: "WhipBird", offspring: "WhiteKing" },
    { base: "BoneSlave", mate: "GoldGolem", offspring: "WhiteKing" },

    { base: "Skeletor", mate: "SpotKing", offspring: "WhiteKing" },
    { base: "Skeletor", mate: "KingSlime", offspring: "WhiteKing" },
    { base: "Skeletor", mate: "MetalKing", offspring: "WhiteKing" },
    { base: "Skeletor", mate: "Andreal", offspring: "WhiteKing" },
    { base: "Skeletor", mate: "GreatDrak", offspring: "WhiteKing" },
    { base: "Skeletor", mate: "KingLeo", offspring: "WhiteKing" },
    { base: "Skeletor", mate: "Blizzardy", offspring: "WhiteKing" },
    { base: "Skeletor", mate: "ZapBird", offspring: "WhiteKing" },
    { base: "Skeletor", mate: "WhipBird", offspring: "WhiteKing" },
    { base: "Skeletor", mate: "GoldGolem", offspring: "WhiteKing" },
    { base: "ZOMBIE", mate: "BOSS", offspring: "WhiteKing" },

    { base: "Mummy", mate: "RockSlime", offspring: "BoneSlave" },
    { base: "Mummy", mate: "SlimeBorg", offspring: "BoneSlave" },
    { base: "Mummy", mate: "LandOwl", offspring: "BoneSlave" },
    { base: "Mummy", mate: "MadGoose", offspring: "BoneSlave" },
    { base: "Mummy", mate: "FloraMan", offspring: "BoneSlave" },
    { base: "Mummy", mate: "HornBeet", offspring: "BoneSlave" },
    { base: "Mummy", mate: "Gremlin", offspring: "BoneSlave" },

    { base: "DeadNite", mate: "RockSlime", offspring: "BoneSlave" },
    { base: "DeadNite", mate: "SlimeBorg", offspring: "BoneSlave" },
    { base: "DeadNite", mate: "LandOwl", offspring: "BoneSlave" },
    { base: "DeadNite", mate: "MadGoose", offspring: "BoneSlave" },
    { base: "DeadNite", mate: "FloraMan", offspring: "BoneSlave" },
    { base: "DeadNite", mate: "HornBeet", offspring: "BoneSlave" },
    { base: "DeadNite", mate: "Gremlin", offspring: "BoneSlave" },

    { base: "Hork", mate: "RockSlime", offspring: "BoneSlave" },
    { base: "Hork", mate: "SlimeBorg", offspring: "BoneSlave" },
    { base: "Hork", mate: "LandOwl", offspring: "BoneSlave" },
    { base: "Hork", mate: "MadGoose", offspring: "BoneSlave" },
    { base: "Hork", mate: "FloraMan", offspring: "BoneSlave" },
    { base: "Hork", mate: "HornBeet", offspring: "BoneSlave" },
    { base: "Hork", mate: "Gremlin", offspring: "BoneSlave" },
    { base: "Hork", mate: "Hork", offspring: "BoneSlave" },

    { base: "Mummy", mate: "GulpBeast", offspring: "Skeletor" },
    { base: "Mummy", mate: "Grizzly", offspring: "Skeletor" },
    { base: "Mummy", mate: "MadCat", offspring: "Skeletor" },
    { base: "Mummy", mate: "MadRaven", offspring: "Skeletor" },
    { base: "Mummy", mate: "MadCondor", offspring: "Skeletor" },
    { base: "Mummy", mate: "EvilBeast", offspring: "Skeletor" },
    { base: "Mummy", mate: "Ogre", offspring: "Skeletor" },
    { base: "Mummy", mate: "Golem", offspring: "Skeletor" },
    { base: "Mummy", mate: "StoneMan", offspring: "Skeletor" },

    { base: "DeadNite", mate: "GulpBeast", offspring: "Skeletor" },
    { base: "DeadNite", mate: "Grizzly", offspring: "Skeletor" },
    { base: "DeadNite", mate: "MadCat", offspring: "Skeletor" },
    { base: "DeadNite", mate: "MadRaven", offspring: "Skeletor" },
    { base: "DeadNite", mate: "MadCondor", offspring: "Skeletor" },
    { base: "DeadNite", mate: "EvilBeast", offspring: "Skeletor" },
    { base: "DeadNite", mate: "Ogre", offspring: "Skeletor" },
    { base: "DeadNite", mate: "Golem", offspring: "Skeletor" },
    { base: "DeadNite", mate: "StoneMan", offspring: "Skeletor" },

    { base: "Mudron", mate: "GulpBeast", offspring: "Skeletor" },
    { base: "Mudron", mate: "Grizzly", offspring: "Skeletor" },
    { base: "Mudron", mate: "MadCat", offspring: "Skeletor" },
    { base: "Mudron", mate: "MadRaven", offspring: "Skeletor" },
    { base: "Mudron", mate: "MadCondor", offspring: "Skeletor" },
    { base: "Mudron", mate: "EvilBeast", offspring: "Skeletor" },
    { base: "Mudron", mate: "Ogre", offspring: "Skeletor" },
    { base: "Mudron", mate: "Golem", offspring: "Skeletor" },
    { base: "Mudron", mate: "StoneMan", offspring: "Skeletor" },
    { base: "Mudron", mate: "GulpBeast", offspring: "Skeletor" },
    { base: "Mudron", mate: "Grizzly", offspring: "Skeletor" },
    { base: "Mudron", mate: "MadCat", offspring: "Skeletor" },
    { base: "Mudron", mate: "MadRaven", offspring: "Skeletor" },
    { base: "Mudron", mate: "MadCondor", offspring: "Skeletor" },
    { base: "Mudron", mate: "EvilBeast", offspring: "Skeletor" },
    { base: "Mudron", mate: "Ogre", offspring: "Skeletor" },
    { base: "Mudron", mate: "Golem", offspring: "Skeletor" },
    { base: "Mudron", mate: "StoneMan", offspring: "Skeletor" },
    { base: "BoneSlave", mate: "BoneSlave", offspring: "Skeletor" },
    { base: "MadSpirit", mate: "DRAGON", offspring: "Skeletor" },

    { base: "Skeletor", mate: "Skeletor", offspring: "Servant" },
    { base: "WhiteKing", mate: "DEVIL", offspring: "Servant" },

    { base: "MATERIAL", mate: "SLIME", offspring: "JewelBag" },

    { base: "MATERIAL", mate: "DRAGON", offspring: "EvilWand" },

    { base: "MATERIAL", mate: "BEAST", offspring: "MadCandle" },

    { base: "MATERIAL", mate: "BIRD", offspring: "CoilBird" },

    { base: "MATERIAL", mate: "PLANT", offspring: "Facer" },

    { base: "MATERIAL", mate: "BUG", offspring: "SpikyBoy" },

    { base: "MATERIAL", mate: "DEVIL", offspring: "MadMirror" },

    { base: "MATERIAL", mate: "ZOMBIE", offspring: "RogueNite" },

    { base: "JewelBag", mate: "SLIME", offspring: "Goopi" },

    { base: "StoneMan", mate: "DrakSlime", offspring: "Voodoll" },
    { base: "StoneMan", mate: "Snaily", offspring: "Voodoll" },
    { base: "StoneMan", mate: "SlimeNite", offspring: "Voodoll" },
    { base: "StoneMan", mate: "RockSlime", offspring: "Voodoll" },

    { base: "Golem", mate: "DrakSlime", offspring: "Voodoll" },
    { base: "Golem", mate: "Snaily", offspring: "Voodoll" },
    { base: "Golem", mate: "SlimeNite", offspring: "Voodoll" },
    { base: "Golem", mate: "RockSlime", offspring: "Voodoll" },
    { base: "MATERIAL", mate: "Lipsy", offspring: "Voodoll" },

    { base: "Andreal", mate: "SlimeBorg", offspring: "MetalDrak" },
    { base: "Andreal", mate: "KingSlime", offspring: "MetalDrak" },
    { base: "Andreal", mate: "Digster", offspring: "MetalDrak" },
    { base: "Andreal", mate: "Skullgon", offspring: "MetalDrak" },
    { base: "Andreal", mate: "Roboster", offspring: "MetalDrak" },
    { base: "Andreal", mate: "Golem", offspring: "MetalDrak" },
    { base: "Andreal", mate: "StoneMan", offspring: "MetalDrak" },

    { base: "Spikerous", mate: "SlimeBorg", offspring: "MetalDrak" },
    { base: "Spikerous", mate: "KingSlime", offspring: "MetalDrak" },
    { base: "Spikerous", mate: "Digster", offspring: "MetalDrak" },
    { base: "Spikerous", mate: "Skullgon", offspring: "MetalDrak" },
    { base: "Spikerous", mate: "Roboster", offspring: "MetalDrak" },
    { base: "Spikerous", mate: "Golem", offspring: "MetalDrak" },
    { base: "Spikerous", mate: "StoneMan", offspring: "MetalDrak" },

    { base: "GreatDrak", mate: "SlimeBorg", offspring: "MetalDrak" },
    { base: "GreatDrak", mate: "KingSlime", offspring: "MetalDrak" },
    { base: "GreatDrak", mate: "Digster", offspring: "MetalDrak" },
    { base: "GreatDrak", mate: "Skullgon", offspring: "MetalDrak" },
    { base: "GreatDrak", mate: "Roboster", offspring: "MetalDrak" },
    { base: "GreatDrak", mate: "Golem", offspring: "MetalDrak" },
    { base: "GreatDrak", mate: "StoneMan", offspring: "MetalDrak" },

    { base: "MetalDrak", mate: "DRAGON", offspring: "MetalDrak" },
    { base: "Roboster", mate: "DRAGON", offspring: "MetalDrak" },
    { base: "MATERIAL", mate: "Andreal", offspring: "MetalDrak" },

    { base: "LavaMan", mate: "DEVIL", offspring: "Balzak" },
    { base: "IceMan", mate: "DEVIL", offspring: "Balzak" },
    { base: "MATERIAL", mate: "BOSS", offspring: "Balzak" },

    { base: "EvilWand", mate: "LandOwl", offspring: "SabreMan" },
    { base: "EvilWand", mate: "MadGoose", offspring: "SabreMan" },
    { base: "EvilWand", mate: "Phoenix", offspring: "SabreMan" },
    { base: "EvilWand", mate: "FunkyBird", offspring: "SabreMan" },

    { base: "Voodoll", mate: "LandOwl", offspring: "SabreMan" },
    { base: "Voodoll", mate: "MadGoose", offspring: "SabreMan" },
    { base: "Voodoll", mate: "Phoenix", offspring: "SabreMan" },
    { base: "Voodoll", mate: "FunkyBird", offspring: "SabreMan" },

    { base: "Golem", mate: "LandOwl", offspring: "SabreMan" },
    { base: "Golem", mate: "MadGoose", offspring: "SabreMan" },
    { base: "Golem", mate: "Phoenix", offspring: "SabreMan" },
    { base: "Golem", mate: "FunkyBird", offspring: "SabreMan" },

    { base: "StoneMan", mate: "LandOwl", offspring: "SabreMan" },
    { base: "StoneMan", mate: "MadGoose", offspring: "SabreMan" },
    { base: "StoneMan", mate: "Phoenix", offspring: "SabreMan" },
    { base: "StoneMan", mate: "FunkyBird", offspring: "SabreMan" },

    { base: "MATERIAL", mate: "GiantWorm", offspring: "SabreMan" },

    { base: "Roboster", mate: "BIRD", offspring: "CurseLamp" },
    { base: "MATERIAL", mate: "WingTree", offspring: "CurseLamp" },

    { base: "SabreMan", mate: "SlimeBorg", offspring: "Roboster" },
    { base: "SabreMan", mate: "GreatDrak", offspring: "Roboster" },
    { base: "SabreMan", mate: "Unicorn", offspring: "Roboster" },
    { base: "SabreMan", mate: "Ogre", offspring: "Roboster" },
    { base: "SabreMan", mate: "Grendal", offspring: "Roboster" },
    { base: "SabreMan", mate: "EvilArmor", offspring: "Roboster" },
    { base: "SabreMan", mate: "DeadNoble", offspring: "Roboster" },
    { base: "SabreMan", mate: "Skeletor", offspring: "Roboster" },

    { base: "MATERIAL", mate: "GulpBeast", offspring: "Roboster" },
    { base: "MATERIAL", mate: "Grizzly", offspring: "Roboster" },
    { base: "MATERIAL", mate: "Trumpeter", offspring: "Roboster" },
    { base: "MATERIAL", mate: "KingLeo", offspring: "Roboster" },
    { base: "MATERIAL", mate: "SkulRider", offspring: "Roboster" },

    { base: "Gismo", mate: "DEVIL", offspring: "EvilPot" },
    { base: "MATERIAL", mate: "Snaily", offspring: "EvilPot" },

    { base: "MadCandle", mate: "DrakSlime", offspring: "Gismo" },
    { base: "MadCandle", mate: "Wyvern", offspring: "Gismo" },
    { base: "MadCandle", mate: "MistyWing", offspring: "Gismo" },
    { base: "MadCandle", mate: "Phoenix", offspring: "Gismo" },
    { base: "MadCandle", mate: "FireWeed", offspring: "Gismo" },
    { base: "MadCandle", mate: "EvilSeed", offspring: "Gismo" },

    { base: "MadMirror", mate: "DrakSlime", offspring: "Gismo" },
    { base: "MadMirror", mate: "Wyvern", offspring: "Gismo" },
    { base: "MadMirror", mate: "MistyWing", offspring: "Gismo" },
    { base: "MadMirror", mate: "Phoenix", offspring: "Gismo" },
    { base: "MadMirror", mate: "FireWeed", offspring: "Gismo" },
    { base: "MadMirror", mate: "EvilSeed", offspring: "Gismo" },

    { base: "Goopi", mate: "DrakSlime", offspring: "Gismo" },
    { base: "Goopi", mate: "Wyvern", offspring: "Gismo" },
    { base: "Goopi", mate: "MistyWing", offspring: "Gismo" },
    { base: "Goopi", mate: "Phoenix", offspring: "Gismo" },
    { base: "Goopi", mate: "FireWeed", offspring: "Gismo" },
    { base: "Goopi", mate: "EvilSeed", offspring: "Gismo" },

    { base: "MetalDrak", mate: "Orochi", offspring: "LavaMan" },
    { base: "MetalDrak", mate: "KingLeo", offspring: "LavaMan" },
    { base: "MetalDrak", mate: "ZapBird", offspring: "LavaMan" },
    { base: "MetalDrak", mate: "ArcDemon", offspring: "LavaMan" },
    { base: "MetalDrak", mate: "Centasaur", offspring: "LavaMan" },

    { base: "MetalDrak", mate: "Skullgon", offspring: "IceMan" },
    { base: "MetalDrak", mate: "WhiteKing", offspring: "IceMan" },
    { base: "Roboster", mate: "KingLeo", offspring: "IceMan" },

    { base: "Roboster", mate: "ZOMBIE", offspring: "Mimic" },
    { base: "MATERIAL", mate: "BoxSlime", offspring: "Mimic" },

    { base: "Goopi", mate: "Goopi", offspring: "MudDoll" },

    { base: "MudDoll", mate: "MudDoll", offspring: "Golem" },

    { base: "Golem", mate: "Golem", offspring: "StoneMan" },
    { base: "MATERIAL", mate: "HornBeet", offspring: "StoneMan" },
    { base: "MATERIAL", mate: "Digster", offspring: "StoneMan" },

    { base: "SpikyBoy", mate: "SpikyBoy", offspring: "BombCrag" },
    { base: "Roboster", mate: "BUG", offspring: "BombCrag" },

    { base: "IceMan", mate: "LavaMan", offspring: "GoldGolem" },

    { base: "Servant", mate: "Andreal", offspring: "DracoLord1" },
    { base: "Servant", mate: "GreatDrak", offspring: "DracoLord1" },

    { base: "DracoLord1", mate: "Divinegon", offspring: "DracoLord2" },

    { base: "WhiteKing", mate: "MetalKing", offspring: "Hargon" },

    { base: "Jamirus", mate: "Rosevine", offspring: "Sidoh" },

    { base: "Hargon", mate: "Orochi", offspring: "Baramos" },

    { base: "DracoLord", mate: "Sidoh", offspring: "Zoma" },

    { base: "DracoLord2", mate: "Sidoh", offspring: "Zoma" },

    { base: "Durran", mate: "Divinegon", offspring: "Pizzaro" },

    { base: "Pizzaro", mate: "KingLeo", offspring: "Esterk" },

    { base: "Esterk", mate: "GoldSlime", offspring: "Mirudraas1" },

    { base: "Mirudraas1", mate: "Spikerous", offspring: "Mirudraas2" },

    { base: "Baramos", mate: "DarkHorn", offspring: "Mudou" },

    { base: "Zoma", mate: "Mirudraas", offspring: "DeathMore1" },

    { base: "Zoma", mate: "Mirudraas2", offspring: "DeathMore1" },

    { base: "DeathMore1", mate: "Armorpion", offspring: "DeathMore2" },

    { base: "DeathMore2", mate: "Mudou", offspring: "DeathMore3" },

    { base: "DeathMore3", mate: "Watabou", offspring: "DarkDrium" },
]

export default recipes
