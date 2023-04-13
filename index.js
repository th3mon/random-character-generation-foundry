// Create Random Character 0.1
// System: Mothership 0e
// Based on script by the_bowmanizer#6318

const nameAndBio = [
  {name:"G'Shoza", bio: "Female Felinoid Engineer. G'Shoza has grey fur and soft white eyes. She wears current fashion and carries a tablet computer. G'Shoza is serious and clever."},
  {name:"Ronin", bio: "Assassin Robot. Ronin has an open chassis and glowing blue eyes, and is armed with a concealed laser pistol. It speaks with a strange accent."},
  {name:"Deby Marte", bio: "Female Explorer. Deby is slender, with thick red hair and red eyes. She wears a technical jumpsuit and carries a laser pistol. Deby relies on a tablet computer to remember things."},
  {name:"Jackev Cotte", bio: "Male Smuggler. Jackev is tall and heavyset, with messy violet hair and hazel eyes. He wears a technical jumpsuit and carries a needlegun. Jackev is impatient and depressed."},
  {name:"Loisa Richy", bio: "Female Technician. Loisa has a square face, with long blue hair and narrow silver eyes. She wears a military uniform and carries a laser cutter/welder. Loisa is insane but courageous."},
  {name:"Henroy Kinson", bio: "Male Smuggler. Henroy has tangled blue hair and blue eyes, and a distinctive scar on his arm. He wears a technical jumpsuit and carries a laser pistol. Henroy is bold and lewd."},
  {name:"Viny Lere", bio: "Male Explorer. Viny is short, with black hair and large grey eyes. He wears a technical jumpsuit and carries a needlegun. Viny is a jaded thrillseeker."},
  {name:"Nisa Sones", bio: "Female Explorer. Nisa has long golden hair and light silver eyes, and a thin mouth. She wears a gray jumpsuit and carries a laser pistol. Nisa has no idea what she's doing, but has confidence doing it."},
  {name:"Loria Pete", bio: "Female Technician. Loria is willowy, with copper hair and dark green eyes. She wears a technical jumpsuit and carries a needlegun. Loria is impatient, and actually might not understand how time works."},
  {name:"Drini", bio: "Male Saurian Scientist. Drini has blue scales and rows of horns. He wears a silver jumpsuit and carries a tablet computer. Drini seeks to fulfill an ancient prophecy."},
  {name:"Jony Ames", bio: "Male Mercenary. Jony has violet hair and red eyes. He wears a silver jumpsuit and carries a tablet computer. Jony is daring and shrewd."},
  {name:"XPP-70", bio: "Combat Robot. XPP-70 has a reinforced frame and a targeting laser, and is armed with a heavy laser rifle. It speaks with a deep voice."},
  {name:"Lese Baker", bio: "Male Scientist. Lese has long brown hair and light amber eyes. He wears an old uniform and carries a stunner. Lese is depressed and aloof."},
  {name:"A-168", bio: "Technical Robot. A-168 has an open chassis and glowing red eyes, and is equipped with various fine tools and manipulators. It speaks with an electronic voice."},
  {name:"Suse Binson", bio: "Female Mercenary. Suse has straight red hair and sharp hazel eyes. She wears an old uniform and carries a needlegun. Suse has a paralyzing fear of injury."},
  {name:"Jenne Cooker", bio: "Female Paramedic. Jenne is overweight, with red hair and sharp cyan eyes. She wears a military uniform and carries a tablet computer. Jenne is a jaded thrillseeker."},
  {name:"Foame", bio: "Female Phytoid Rogue. Foame has bark-like skin and fern-like limbs. She wears an old uniform and carries a tablet computer. Foame is wrongly sought by the law for murder."},
  {name:"Pike", bio: "Exploration Robot. Pike has a reinforced frame and a pair of heavy arms, and is equipped with various sensors and survey tools. It is Personality Traits II."},
  {name:"Olenz", bio: "Male Android Paramedic. Olenz has four thin arms. He wears current fashion and carries a tablet computer. Olenz has a mild allergy to human blood."},
  {name:"Zalda", bio: "Male Avian Pilot. Zalda has green feathers and three pairs of thin wings. He wears a black jumpsuit and carries a needlegun. Zalda seeks to uphold the honor of his clan."},
  {name:"Tr'Eman", bio: "Male Crystalline Scientist. Tr'Eman is tall and stout, with a topaz body. He wears an utility jumpsuit and carries a tablet computer. Tr'Eman is a wanderer, seeking new discoveries and experiences."},
  {name:"M-249", bio: "Technical Robot. M-249 has six multi-jointed arms and glowing green eyes, and is equipped with various fine tools and manipulators. It speaks with a purring voice."},
  {name:"GEX-40", bio: "Exploration Robot. GEX-40 has a pair of heavy arms and a radio antenna, and is equipped with various sensors and survey tools. It is Personality Traits II."},
  {name:"Kelley Coly", bio: "Female Scientist. Kelley has grey hair and dark silver eyes. She wears a technical jumpsuit and carries a laser pistol. Kelley lost her left eye to an injury."},
  {name:"Jeffry Mitchy", bio: "Male Smuggler. Jeffry has blonde hair and bright grey eyes. He wears an utility jumpsuit and carries a tablet computer. Jeffry is searching for his lost sister."},
  {name:"Rony Jamill", bio: "Male Pilot. Rony has a long face, with red hair and sharp brown eyes. He wears a gray jumpsuit and carries a laser pistol. Rony is a jaded thrillseeker."},
  {name:"Z'Loni", bio: "Male Arachnid Scientist. Z'Loni is tall, with four spider-like arms and large, spider-like fangs. He wears current fashion and carries a tablet computer. Z'Loni is a terrible liar."},
  {name:"Jackev Cooker", bio: "Male Technician. Jackev is short and heavyset, with auburn hair and bright grey eyes. He wears a black jumpsuit and carries a laser pistol. Jackev is fascinated by xenobiology."},
  {name:"Kathy Mithy", bio: "Female Mercenary. Kathy is tall, with red hair and dark white eyes. She wears an utility jumpsuit and carries a tablet computer. Kathy is paranoid and zealous."},
  {name:"Mela Manand", bio: "Female Mercenary. Mela is short, with black hair and light silver eyes. She wears an old uniform and carries a laser pistol. Mela is covetous, and always has her eye on something she wants."},
  {name:"Denne Gerson", bio: "Male Smuggler. Denne is short, with brown hair and white eyes. He wears a silver jumpsuit and carries a laser pistol. Denne speaks with a shrill voice."},
  {name:"Harlie Bellee", bio: "Male Scientist. Harlie has a narrow face, with long copper hair and light red eyes. He wears classical fashion and carries a laser pistol. Harlie is soft-hearted and foolish."},
  {name:"Katha Howood", bio: "Female Smuggler. Katha is thin, with curly cyan hair and blue eyes. She wears classical fashion and carries a laser pistol. Katha is fascinated by terraforming."},
  {name:"Anniet Gonzal", bio: "Female Engineer. Anniet has blonde hair and bright opalescent eyes. She wears classical fashion and carries a semi-automatic pistol. Anniet has an a paralyzing fear of alien technology."},
  {name:"Chadi Droni", bio: "Female Arachnid Smuggler. Chadi has a gray body and six spider-like legs. She wears a technical jumpsuit and carries a stunner. Chadi is pessimistic and modest."},
  {name:"Athan Coopatt", bio: "Male Technician. Athan has a long face, with matted blue hair and bright white eyes. He wears an utility jumpsuit and carries a semi-automatic pistol. Athan is competitive and anxious."},
  {name:"Scrudai", bio: "Male Humanoid Rogue. Scrudai is short, with matted green hair and soft blue eyes. He wears classical fashion and carries a tablet computer. Scrudai is searching for a legendary lost artifact."},
  {name:"HW-947", bio: "Assassin Robot. HW-947 has seamless plastic skin and two multi-jointed arms, and is armed with a concealed pulse laser carbine. It is Personality Traits II."},
  {name:"Vorta", bio: "Female Crystalline Rogue. Vorta is tall, with a sapphire body and two clawed arms. She wears an utility jumpsuit and carries a tablet computer. Vorta is fascinated by physics and chemistry."},
  {name:"Damy Hilley", bio: "Male Technician. Damy is slender, with golden hair and bright hazel eyes. He wears a military uniform and carries a laser cutter/welder. Damy is much older than he appears."},
];

const CharacterClassEnum = {
  TEAMSTER: 'Teamster',
  ANDROID: 'Android',
  SCIENTIST: 'Scientist',
  MARINE: 'Marine'
};

const AttributeEnum = {
  STRENGTH: 'strength',
  SPEED: 'speed',
  INTELLECT: 'intellect',
  COMBAT: 'combat'
};

const CharacterClass = [
  CharacterClassEnum.TEAMSTER,
  CharacterClassEnum.ANDROID,
  CharacterClassEnum.SCIENTIST,
  CharacterClassEnum.MARINE
];

const CharacterClassBonus = {
  [CharacterClassEnum.TEAMSTER]: {
    [AttributeEnum.STRENGTH]: 5,
    [AttributeEnum.SPEED]: 5,
    [AttributeEnum.INTELLECT]: 0,
    [AttributeEnum.COMBAT]: 0
  },
  [CharacterClassEnum.ANDROID]: {
    [AttributeEnum.STRENGTH]: 0,
    [AttributeEnum.SPEED]: 5,
    [AttributeEnum.INTELLECT]: 5,
    [AttributeEnum.COMBAT]: 0
  },
  [CharacterClassEnum.SCIENTIST]: {
    [AttributeEnum.STRENGTH]: 0,
    [AttributeEnum.SPEED]: 0,
    [AttributeEnum.INTELLECT]: 10,
    [AttributeEnum.COMBAT]: 0
  },
  [CharacterClassEnum.MARINE]: {
    [AttributeEnum.STRENGTH]: 0,
    [AttributeEnum.SPEED]: 0,
    [AttributeEnum.INTELLECT]: 0,
    [AttributeEnum.COMBAT]: 5
  }
};

const SavesEnum = {
  SANITY: 'sanity',
  FEAR: 'fear',
  BODY: 'body',
  ARMOR: 'armor'
};

const CharacterClassSavesEnum = {
  [CharacterClassEnum.TEAMSTER]: {
    [SavesEnum.SANITY]: 30,
    [SavesEnum.FEAR]: 35,
    [SavesEnum.BODY]: 30,
    [SavesEnum.ARMOR]: 35
  },
  [CharacterClassEnum.ANDROID]: {
    [SavesEnum.SANITY]: 20,
    [SavesEnum.FEAR]: 85,
    [SavesEnum.BODY]: 40,
    [SavesEnum.ARMOR]: 25
  },
  [CharacterClassEnum.SCIENTIST]: {
    [SavesEnum.SANITY]: 40,
    [SavesEnum.FEAR]: 25,
    [SavesEnum.BODY]: 25,
    [SavesEnum.ARMOR]: 30
  },
  [CharacterClassEnum.MARINE]: {
    [SavesEnum.SANITY]: 25,
    [SavesEnum.FEAR]: 30,
    [SavesEnum.BODY]: 35,
    [SavesEnum.ARMOR]: 40
  }
};

const Rolls = {
  stat: '6d10',
  credits: '5d10*10'
};

const statRoll = () =>
  new Roll(Rolls.stat)
    .roll({ async : false })
    .total;

const statRollWithBonus = (characterClass, attribute) =>
  statRoll() + CharacterClassBonus[characterClass][attribute];

const getSave = (characterClass, save) =>
  CharacterClassSavesEnum[characterClass][save];

// const classRoll = () => CharacterClassEnum.TEAMSTER
// const classRoll = () => CharacterClassEnum.ANDROID;
// const classRoll = () => CharacterClassEnum.SCIENTIST;
// const classRoll = () => CharacterClassEnum.MARINE;
const classRoll = () => randomElement(CharacterClass);
const randomElement = array => array[Math.floor(Math.random() * array.length)];

const healthRoll = (strength) => strength * 2;
const creditsRoll = () =>
  new Roll(Rolls.credits)
    .roll({ async : false })
    .total;

const currentNameAndBio = randomElement(nameAndBio);
const currentCharacterClass = classRoll();
const strength = statRollWithBonus(currentCharacterClass, AttributeEnum.STRENGTH);
const speed = statRollWithBonus(currentCharacterClass, AttributeEnum.SPEED);
const intellect = statRollWithBonus(currentCharacterClass, AttributeEnum.INTELLECT);
const combat = statRollWithBonus(currentCharacterClass, AttributeEnum.COMBAT);
const sanity = getSave(currentCharacterClass, SavesEnum.SANITY);
const fear = getSave(currentCharacterClass, SavesEnum.FEAR);
const body = getSave(currentCharacterClass, SavesEnum.BODY);
const armor = getSave(currentCharacterClass, SavesEnum.ARMOR);
const health = healthRoll(strength);
const credits = creditsRoll();

let instantPC = await Actor.create({
  name: currentNameAndBio.name,
  type: 'character',
  system: {
    other: {
      stress: {
        min: 2
      }
    },
    class: {
      value: currentCharacterClass
    },
    health: {
      value: health,
      max: health
    },
    credits: {
      value: credits
    },
    biography: currentNameAndBio.bio,
    stats: {
      strength: {
        value: strength
      },
      speed: {
        value: speed
      },
      intellect: {
        value: intellect
      },
      combat: {
        value: combat
      },
      sanity: {
        value: sanity
      },
      fear: {
        value: fear
      },
      body: {
        value: body
      },
      armor: {
        value: armor
      }
    }
  }
});

await instantPC.sheet.render(true);
