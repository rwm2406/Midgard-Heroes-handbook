/* -WHAT IS THIS?-
This file adds optional material to "MPMB's Character Record Sheet" found at [https://flapkan.com/mpmb/charsheets](https://flapkan.com/mpmb/charsheets)
Import this file using the "Add Extra Materials" bookmark.
\-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
 */

/* -INFORMATION-
Subject:    Primary Source
Effect:     This script adds all material from the Midgard Heroes Handbook to MPMB's Character Record Sheet
This is made by Kobold Press in their Midgard Heroes Handbook (https://koboldpress.com/kpstore/product/midgard-heroes-handbook-for-5th-edition-dnd-5e/)
Code by:    rwm2406
Date:       2019-04-26 (sheet v12.999)
 */
 
var iFileName = "New Subclasses and Spells (Midgard Heroes Handbook).js";
RequiredSheetVersion(12.999);
SourceList.Midgard={
name : "Midgard Heroes Handbook",
abbreviation : "Midgard",
group : "Primary Sources",
 };

AddSubClass("barbarian", "primal path of the ancestors", {
regExpSearch : /^(?=.*primal ancestors)(?=.*(warrior|fighter|marauder|barbarian|viking|(norse|tribes?|clans?)(wo)?m(a|e)n)).*$/i,
subname : "Primal Path of the Ancestors",
	
features : {
"subclassfeature3" : {
name : "Wisdom of the Ancients",
minlevel : 3,
description : "\n   " + " When I rage I have advantage on Wisdom saving throws against spells and other magical effects.",
	savetxt : { text : ["adv. on Wisdom saves vs. magical effects in rage"] }
		},
	
"subclassfeature6" : {
name : "Spiritual Leader",
minlevel : 6,
name : "Spiritual Leader",
minlevel : 6,
description : "\n   " + "I can cast Calm Emotions (DC 8 + Prof. bonus + Wis mod) once without expedning a spell slot",
spellcastingBonus : {
	name : "Spiritual Leader",
	spells : ["calm emotions"],
	selection : ["calm emotions"],
usages : 1,
recovery : "short rest"
			}
		},
	
"subclassfeature10" : {
name : "Wrath of the Ancients",
minlevel : 10,
description : desc([
		"While raging, my melee weapon attacks deal additional psychic damage equal to Wisdom modifier (minimum of 1)."]),
calcChanges : {
	atkCalc : [
	function (fields, v, output) {
	if (classes.known.barbarian && classes.known.barbarian.level > 2 && !v.isSpell && (/^(?=.*melee)(?=.*weapon).*$/i).test(v.WeaponText)) 
	{output.extraHit += What('Wis Mod'); };
						},
						],
	}
},

"subclassfeature14" : {
name : "Unfettered Soul",
minlevel : 14,
description : desc([
		"While raging I am always under the effect of a Freedom of Movement spell",					]),
		}
	}
});

AddSubClass("bard", "college of entropy", {
regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*entropy).*$/i,
subname : "College of Entropy",
source : ["Midgard", 33],
features : {
		
"subclassfeature3" : {
name : "Bonus Proficiencies",
source : ["Midgard", 33], 
description : desc([
	"I gain proficiency with Acrobatics, Athletics, and a gaming set of my choice", ]),
skills : ["Athletics", "Acrobatics"],
toolProfs : [["Gaming set", 1]],
	},

"subclassfeature3.1" : {
name : "Luck Stealer",
source : ["Midgard", 33],
minlevel : 3,
action : ["reaction", ""],
description : desc([
	"When a creature within 60 feet of me that I can see makes an ability check, attack roll, or saving throw with advantage, as a reaction I can expend one use of Bardic Inspiration.",
	"The creature takes a penalty to their roll equal to the number I rolled on my Bardic Inspiration die.",
	"For a number of rounds equal to the number rolled on the bardic inspiration die, I can add that same number to one ability check, Attack roll, or saving throw."]),
			},
			
"subclassfeature6" : {
name : "Infusion of Fortune",
source : ["Midgard", 33],
minlevel : 6,
recovery : "short rest",
usages : 1,
description : desc([
	"Whenenever I cast a spell with the chaos descriptor I cause a chaos surge, and regain 1 use of Bardic Inspiration",
	"I can use this ability once, and regain the ability to do so after a short or long rest."]),
	},
	
"subclassfeature14" : {
name : "Belief is a Tool",
source : ["Midgard", 34],
minlevel : 14,
action : ["action", ""],
description : desc([
	"As an action, I can change one of my spells known into any other spell of equal or lower level on the Bard spell list. ",
	"At the end of my next turn my list of spells known returns to normal.",
	"Using this ability causes a chaos magic surge."])
		}
	}
});
AddSubClass("bard", "greenleaf college", {
regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*greenleaf).*$/i,
subname : "Greenleaf College",
source : ["Midgard", 34],
spellcastingExtra : ["entangle", "goodberry", "pass without trace", "spike growth", "conjure animals", "daylight", "conjure woodland beings", "dominate beast", "commune with nature", "tree stride"],
	features : {
    
"subclassfeature3" : {
name : "Rejuvinating Inspiration",
source : ["Midgard", 34],
minlevel : 3,
description : desc([
	"A creature that uses one of my Bardic Inspiration die gains temporary hit points equal to the number rolled on the Bardic Inspiration die + my Charisma modifier,"]),
	},
	
"subclassfeature6" : {
name : "Land's Stride",
source : ["Midgard", 34],
minlevel : 6,
description : desc([
	"I can travel through nonmagical, difficult terrain without penalty",
	"I have advantage on saves vs. plants that impede movement via magical influence.",]),
savetxt : { adv_vs : ["magical plants that impede movement"] }
	},

"subclassfeature14" : {
name : "Surge of Vitality",
source : ["Midgard", 35],
minlevel : 14,
action : ["action", ""],
description : desc([
	"As an action, I can expend 1 use of Bardic Inspiration to remove a single disease or condition affecting a creature I can see within 60 ft. ",
	"The condition can be blinded, charmed, deafened, frightened, paralyzed, or poisoned",])
		}
	}
});
AddSubClass("paladin", "oath of radiance", {
regExpSearch : /^((?=.*(oath|radiance))|((?=.*(light|power|cleanse))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
subname : "Oath of Radiance",
source : ["Midgard", 40],
spellcastingExtra : ["guiding bolt", "protection from evil and good", "magic weapon", "scorching ray", "beacon of hope", "daylight", "aura of life", "fire shield", "banishing smite", "greater restoration"],
features : {
		
"subclassfeature3" : {
name : "Channel Divinity: Dawn's Radiance",
source : ["Midgard", 40],
minlevel : 3,
description : desc([
	"As an action,  I present my holy symbol or weapon",
	"Magical darkness created by spells of 3rd level or lower are dispelled",
	"It also emits bright light in a 20-ft radius and dim light 20-ft beyond that",
	"This light is sunlight." ]),
action : ["action", ""],
	},

"subclassfeature3.1" : {
name : "Channel Divinity: Turn the Corrupted",
source : ["Midgard", 41], 
minlevel : 3,
action : ["action"],
description : desc([
	"As an action, all undead/creatures native to Shadow Realm/creatures with levels of Shadow Corruption within 30 ft that can hear me must make a Wisdom save",
	"If one of them fails this save, it is turned for 1 minute or until it takes damage",
	"Turned: move away, never within 30 ft of me, no reactions or actions other than Dash",
	"Turned: may Dodge instead of Dash when nowhere to move and unable to escape bonds"]),
	},
	
"subclassfeature7" : {
name : "Aura of Resolve",
source : ["Midgard", 41], 
minlevel : 7,
description : "\n   " + "While I'm conscious, allies within range and I have advantage on saves vs. spells cast by undead/creatures native to Shadow Realm/creatures with levels of Shadow Corruption",
additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
savetxt : { immune : ["charmed"] }
	},

"subclassfeature15" : {
name : "Soul of Light",
source : ["Midgard", 41], 
minlevel : 15,
description : desc([
	"I can't gain levels of Shadow Corruption",
	"I am resistant to necrotic damage",
	"My ability scores and hitpoint maximum can't be reduced"]),
dmgres : ["Necrotic"],	
    	},	

"subclassfeature20" : {
name : "Radiant Champion",
source : ["Midgard", 41],
minlevel : 20,
description : desc([
	"As an action, I suffuse my being with light and for 1 minute and gain benefits:",
	"At the start of each of my turns, I regain 10 hit points",
	"When an undead, creature native to the Shadow Realm, or creature with levels of Shadow Corrutption touches me or hits me with a melee attack within 5 feet, they take 2d8 radiant damage", 
	"Once per turn when I hit an undead, creature native to the Shadow Realm, or creature with levels of Shadow Corrutption they must make a Wisdom save or be incapacitated until the end of their next turn"]),	
recovery : "long rest",
usages : 1,
action : ["action", ""]
		}
	}	
});
AddSubClass("paladin", "oath of thunder", {
regExpSearch : /^((?=.*(thor|perun))|((?=.*(storm|thunder|stealth))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
subname : "Oath of Thunder",
source : ["Midgard", 41],
spellcastingExtra : ["heroism", "thunderwave", "find steed", "gust of wind", "call lightning", "elemental weapon", "freedom of movement", "stoneskin", "conjure volley", "swift quiver"],
features : {
		
"subclassfeature3" : {
name : "Bonus Proficiency",
source : ["Midgard", 42],
minlevel : 3,
description : desc([
	"I gain proficiency with the Stealth skill" ]),
skills : ["Stealth"],
skillstxt : "\n\n" + toUni("Paladin (Oath of Thunder)") + ": Stealth."
      },
      
"subclassfeature3.1" : {
name : "Channel Divinity: Storm Strike",
source : ["Midgard", 42],
minlevel : 3,
description : desc([
	"As an action, I infuse a ranged or thrown weapon with lightning and make a ranged weapon attack as normal.",
	"I create a line of lightning 5 ft wide and 60 ft long, that does 2d10 + my level lightning damage (Dex save for half) to all creatures in the line.",
	"The target of the weapon attack has disadvantage on save if the weapon attack hits. "]),
	action : ["action", ""]
		},
	
"subclassfeature3" : {
name : "Channel Divinity: Turn the Unclean",
source : ["Midgard", 42],
minlevel : 3,
description : desc([
	"As an action, all abberations/fiends within 30 ft that can see or hear me must make a Wis save",
	"If one of them fails this save, it is turned for 1 minute or until it takes damage",
	"Turned: move away, never within 30 ft of me, no reactions or actions other than Dash",
	"Turned: may Dodge instead of Dash when nowhere to move and unable to escape bonds"]),
	},
"subclassfeature7" : {
name : "Aura of Alacrity",
minlevel : 7,
description : desc([
	"While I'm conscious, allies within range and I add my proficiency bonus to Initative rolls" ]),
additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
addMod : { type : "skill", field : "Init", mod : "Prof. Bonus", text : "I can add my proficiency bonus to initiative rolls." }

	},
"subclassfeature15" : {
name : "Strike Like Lightning",
minlevel : 15,
description : desc([
	"If I hit a creature that hasn't taken it's fist turn in combat, or if I was hidden from it when I attacked, that creature has disadvantage on attack rolls, ability checks, and saving throws until the start of my next turn."]),
		},
		
"subclassfeature20" : {
name : "Child of the Storm",
source : ["Midgard", 42],
minlevel : 20,
description : desc([
	"As an action, I can gain the following benefits for 1 hour:",
	"- I don't have disadvantage on Dexterity (Stealth) checks because of armor",
	"- I have advantage on Dexterity (Stealth) checks and initiative rolls",
	"- My weapon attacks deal and extra 1d10 lightning or thunder damage",
	"- I can use an action to unleash a war cry that Frightens creatures on failed Wis save",
	"- The cry affects those in a 30 ft. cone",
	"- Those that succeed on the save, can not be affected for 24 hours by another"]),
recovery : "long rest",
usages : 1,
action : ["action", ""]
		}
	}	
});
AddSubClass("cleric", "apocalypse domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(death|apocalypse|destruction)\b).*$/i,
	subname : "Apocalypse Domain",
	spellcastingExtra : ["dissonant whispers", "hellish rebuke", "enthrall", "magic mouth", "fear", "stinking cloud", "blight", "phantasmal killer", "contact other plane", "telekinesis"],
	features : {
					    
"subclassfeature1" : { 
name : "Ranting Ruin",
minlevel : 1,
description : desc([ 
	"I gain proficiency with either the Arcana or Survival skill and 1 language of my choice",
	"I also learn the Vicious Mockery cantrip" ]),
spellcastingBonus : {
name : "Ranting Ruin",
spells : ["vicious mockery"],
skillstxt : "\n\n" + toUni("Apocalypse Domain") + ": Choose Arcana or Survival."},	
languageProfs : [1]

	},
	
"subclassfeature2" : {
name : "Channel Divinity: Damnation",
minlevel : 2,
description : desc([
	"As an action, all hostile creatures within 30 ft. that I can see must make a Wis save", 
	"If failed, each takes (3d6 + my cleric level) necrotic damage, or half as much on a success. If they have total cover, they take no damage."]),
	action : ["action", ""]
		},
		
"subclassfeature6" : {
name : "Channel Divinity: Weight of Guilt",
minlevel : 6,
description : desc([ 
	"As an action, one creature within 60 ft that I can see must make a Wis save",
	"If failed, for 1 minute I can cast a Zone of Truth spell, affecting only them, without expending a spell slot",
	"The target automatically fails their save for Zone of Truth."]),
	action : ["action", ""]
	},
	
"subclassfeature8" : {
name : "Divine Strike",
minlevel : 8,
description : desc([
	"Once per turn, when I hit a creature with a weapon attack, I do extra necrotic damage", ]),
additional : levels.map(function (n) {if (n < 8) return ""; return "+" + (n < 14 ? 1 : 2) + "d8 necrotic damage";}),
		calcChanges : {atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 necrotic damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra necrotic damage."]}
		},
		
"subclassfeature17" : {
name : "Herald of the Apocalypse",
minlevel : 17,
description : desc([
	"I have resistance to acid, fire, and poison damage", ]),
dmgres : ["Acid", "Fire", "Poison"],

		}
	}
});
AddSubClass("cleric", "beer domain", {
regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(beer|hearth|comfort)\b).*$/i,
subname : "Beer Domain",
spellcastingExtra : ["comprehend languages" , "heroism", "blur", "suggestion", "aura of vitality", "hypnotic pattern", "confusion", "resilient sphere", "dream", "modify memory"],
features : {


"subclassfeature1" : {
name : "Disciple of the Draught",
minlevel : 1,
description : desc([
	"I gain proficiency with either the Insight or Medicine skill (my choice).",
	"I learn the Message cantrip", 
	"I also gain proficiency with Brewer's supplies. Ability checks that I make with them use double my proficiency bonus." ]),

skillstxt : "\n\n" + toUni("Beer Domain") + ": Choose Insight or Medicine.",
spellcastingBonus : {
name : "Disciple of the Draught",
spells : ["message"],
selection : ["message"],
toolProfs : ["Brewer's supplies"]},

},	

"subclassfeature2" : {
name : "Channel Divinity: Blessed Brew",
minlevel : 2,
description : desc([
	"As an action I can turn any liquid into a number of doses of Blessed Brew equal to 1 + my Wisdom modifier.",
	"Anyone who drinks one dose of Blessed Brew can choose one of the following benefits for 1 hour:", 
	"- Advantage on Charisma-based skill checks",
	"- A +1 bonus to AC", 
	"- A +1 increase to the DC of saving throws against their castings of enchantment spells.",
	"Creatures can only be affected by 1 dose of Blessed Brew at a time."]),
		},
		
"subclassfeature6" : {
name : "Boot and Rally",
minlevel : 6,
action : ["action"],
description : desc([
	"All friendly creatures within 30 feet of me who are Frightened, Paralyzed, Poisoned, or Stunned gain an immediate saving throw with advantage to remove the effect.",
	"Creatures that succeed on the saving throw also heal 2d6 hit points."]),			
		},
"subclassfeature8" : {
name : "Divine Strike",
minlevel : 8,
description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
additional : levels.map(function (n) {if (n < 8) return ""; return "+" + (n < 14 ? 1 : 2) + "d8 radiant damage"; }),
	calcChanges : {atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 radiant damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra radiant damage."]},	
		},
		
"subclassfeature17" : {
name : "Fire in the Belly",
source : ["Midgard", 57],
minlevel : 17,
description : desc([
	"I have resistance to cold, poision, and psychic damage" ]),
dmgres : ["Cold", "Poison", "Psychic"],

		}
	}
});

AddSubClass("cleric", "cat domain", {
regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(cat|animal|wild)\b).*$/i,
subname : "Cat Domain",
source : ["P", 62],
spellcastingExtra : ["find familiar", "speak with animals", "beast sense", "pass without trace", "bestow curse", "nondetection", "dimension door", "locate creature", "commune with nature", "mislead"],
features : {
	
"subclassfeature1" : {
name : "A Claw in the Clowder",
source : ["Midgard", 58],
minlevel : 1,
description : desc([
	"I gain proficiency in Acrobatics and Stealth",
	"I learn the True Strike cantrip" ]),
spellcastingBonus : {
name : "A Claw in the Clowder",
spells : ["True Strike"],
selection : ["true strike"],
skills : ["Stealth", "Acrobatics"]	
		},
	},		
"subclassfeature2" : {
name : "Channel Divinity: Feline Finesse",
source : ["Midgard", 58],
minlevel : 2,
description : desc([
	"I can add a +10 bonus to any Dexterity ability or skill check made by me or someone I choose within 30 ft."	]),
	},
	
"subclassfeature6" : {
name : "Eyes of the Cat",
minlevel : 6,
description : desc([
	"I gain darkvision out to 60 ft.",
    "If I already have darkvision the range increases to 90 ft."]),
vision : [["Darkvision", "fixed60"], ["Darkvision", "+30"]]
	},

"subclassfeature8" : {
name : "Divine Strike",
source : ["Midgard", 55],
minlevel : 8,
description : desc([
	"Once per turn, when I hit a creature with a weapon attack, I do extra damage", ]),
	additional : levels.map(function (n) {if (n < 8) return ""; return "+" + (n < 14 ? 1 : 2) + "d8 weapon damage";}),
	calcChanges : {atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 weapon damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra damage of the weapon's type."]}
	},

"subclassfeature17" : {
name : "Emissary of the Cat",

minlevel : 17,
description : desc([
	"At 17th level, I become a natural lycanthrope of the weretiger or werelion type, whichever is appropriate to my deity." ]),
		}
	}
});

AddSubClass("cleric", "clockwork domain", {
regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(clockwork|machine|time)\b).*$/i,
subname : "Clockwork Domain",
spellcastingExtra : ["grease", "floating disk", "heat metal", "enlarge/reduce", "conjure barrage", "haste", "fabricate", "secret chest", "animate objects", "soul forging"],
features : {
					    
"subclassfeature1" : {
name : "Acolyte of Artifice",
minlevel : 1,
description : desc([
	"I gain proficiency in either carpenter's tools, jeweler's tools, mason's tools, smith's tools, or weaver's tools.", 
	"I also learn the Mage Hand cantrip",
	"I can understand machine speech, but can't speak it." ]),
toolProfs : ["Carpenter, Jewler, Mason or Smith's",  1],
spellcastingBonus : {
name : "Acolyte of Artifice",
spells : ["mage hand"],
selection : ["mage hand"]
		},
},
"subclassfeature1.1" : {
name : "Bonus Proficiency",
source : ["Midgard", 59],
minlevel : 1,
description : "\n   " + "I gain proficiency with heavy armor",
armor : [false, false, true, false]
		
       },
"subclassfeature2" : {
name : "Channel Divinity: Fade from False Eyes",
minlevel : 2,
description : desc([
	"As an action I can become invisible to constructs",
	"Constructs who currently see me must make a Wisdom save, or lose track of me for 1 round per cleric level",
	"This effect ends early if I attack or take a hostile action agaisnt any construct." 	]),
    	
    	},
"subclassfeature6" : {
name : "Clockwork Companion",
minlevel : 6,
description : desc([
" I build or acquire a clockwork companion which functions in most ways as a ranger's companion.", 
	"It adds my proficiency bonus to AC, attacks, damage, and save/skill proficiencies",
	"Its hit point maximum equals four times my cleric level.",
	"It takes a turn on my initiative; It only takes the Dodge action unless I command it otherwise",
	"As a bonus action, I can have it take the Attack, Dash, Disengage, or Help action on its turn", ]),
additional :  "up to CR 1/4th medium sized construct, or clockwork version of Tiny or Small beast CR 1/4th or lower",
action : ["action", " (Command)"]
	
	},
"subclassfeature8" : {
name : "Divine Strike",
minlevel : 8,
description : desc([
	"Once per turn, when I hit a creature with a weapon attack, I do extra lightning damage", ]),
	additional : levels.map(function (n) {if (n < 8) return ""; return "+" + (n < 14 ? 1 : 2) + "d8 lightning damage";}),
	calcChanges : {
	atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 lightning damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra lightning damage."]}
	},
	
"subclassfeature17" : {
name : "Metal-Graced",
minlevel : 17,
description : desc([
	"I have resistance to bludgeoning, piercing, and slashing damage from non-magical weapons",
	"I also learn how to create gearforged"  ]),
dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]

		}			
		
	}
});

AddSubClass("cleric", "darkness domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(darkness|shadow|night)\b).*$/i,
	subname : "Darkness Domain",

	spellcastingExtra : ["shadow armor", "sleep", "darkness", "dark path", "legion", "nondetection", "night terrors", "phantasmal killer", "dark dementing", "mislead"],
	features : {

"subclassfeature1" : {
name : "Creature of Darkness",

minlevel : 1,
description : desc([
       "I gain proficiency with either the Deception or Stealth skill",
       "I can Hide as a bonus action"
        ]),  
skillstxt : "\n\n" + toUni("Creature of Darkness") + ": Choose one from Deception or Stealth",
action : ["bonus action", "hide"]
    
},
"subclassfeature2" : {
name : "Channel Divinity: Shadowsight",
minlevel : 2,
action : ["action"],
vision : ["Darkvision", "fixed60"],
description : desc([
    "As an action I gain darkvision out to 60 feet for 1 hour.",
    "If I already have darkvision, I can also see through magical darkness as dim light up to 30 feet." 
	]), 
	
},
"subclassfeature6" : {
name : "Shadow Meld",
minlevel : 6,
action : ["action"],
description : desc([
  "As an action I summon a sphere of darkness with a 60-foot radius centered on me",
  "In the sphere, bright light becomes dim light, dim light becomes darkness, and darkness becomes equivalent to magical darkness",
  "All creatures in the sphere other than me that at the end of their turn must make a Con save or take 1d8 cold damage",
  "The sphere lasts for 1 minute or until you dismiss it as a bonus action",
  "There’s a chance that creatures from the plane of shadow might step through into the world when the effect ends", 
  "See the \"Notes\" page for the table."  ]),
  },
  
Shadowmeldtable : "\u25C6 Shadow Meld Table (Midgard 59) [results 01-100]" + desc([
"d100  Effect",
"01-74 Nothing happens.",
"75-80 2d4 shadows.",
"81-84 1d4 shadow fey forest hunters",
"85-89 2 shadow beasts",
"90-94 2 shadow fey enchantress",
"95-98 2 elder shadow drakes",
"99-100 1 young shadow dragon",
	]),
	
"subclassfeature8" : {
name : "Divine Strike",
minlevel : 8,
description : desc([
	"Once per turn, when I hit a creature with a weapon attack, I do extra necrotic damage", ]),
additional : levels.map(function (n) {if (n < 8) return ""; return "+" + (n < 14 ? 1 : 2) + "d8 necrotic damage";}),
calcChanges : {
atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 necrotic damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra necrotic damage."]}

},
"subclassfeature17" : {
name : "Shadow Shield",
minlevel : 17,
description : desc([
	"Each time I am hit by a nonmagical attack or effect that causes damage, my shadow absorbs half of the damage",
	"When my shadow has absorbed damage equal to one-fourth of my max HP, it vanishes until I finish a long rest."  ]),
		}			
		
	}
});

AddSubClass("cleric", "dragon domain", {
regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(drake|dragon|magic)\b).*$/i,
subname : "Dragon Domain",
spellcastingExtra : ["detect magic", "thunderwave", "lair sense", "enthrall", "catch the breath", "fear", "blight", "scale rot", "claws of the earth dragon", "legend lore"],
features : {
					    
"subclassfeature1" : {
name : "Bonus Proficiency",
minlevel : 1,
description : desc([
	"I gain proficiency with the Arcana skill and I double my proficiency bonus for ability checks made with the Arcana skill",
	"I also have advantage on saves against being frightened" ]),

skillstxt : "\n\n" + toUni("Dragon Domain (Bonus Proficiency)") + ": Arcana proficiency and expertise.",
eval : "AddSkillProf('Arcana', true, true)",
savetxt : { adv_vs : ["frightened"]}
	
},
"subclassfeature2" : {
name : "Channel Divinity: Charmer of Reptiles",
minlevel : 2,
 action : ["action", ""],
description : desc([
	"As an action, all reptilian creatures within 30 feet that can see me must make a Wisdom save", 
	"If failed, they are charmed by me for 1 minute or until they take damage." ]),
        },
"subclassfeature6" : {
	name : "Channel Divinity: Dragon's Resistance",
	minlevel : 6,
 	action : ["reaction", ""],
	description : desc([ 
		"If I fail a saving throw, I can expend a use of Channel Divinity and choose to succeed instead" ]),
	},
"subclassfeature8" : {
name : "Divine Strike",

minlevel : 8,
description : desc([
	"Once per turn, when I hit a creature with a weapon attack, I do extra fire damage", ]),
	additional : levels.map(function (n) {if (n < 8) return ""; return "+" + (n < 14 ? 1 : 2) + "d8 fire damage";}),
	calcChanges : {
	atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 fire damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra fire damage."]}
	},
	
"subclassfeature17" : {
name : "Frightful Presence",

minlevel : 17,
description : desc([
	"I can use an action to Frighten hostile creatures in a 60 foot cone on a failed Wis save for 1 minute",
    "Frightned creatures make can make additional saves at end of each turn",
	"Once a creature has saved, they can not be affected again for 24 hours."]),
recovery : "short rest",
usages : 1,
action : ["action", ""] 
		}
	}
});

AddSubClass("cleric", "hunger domain", {
regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(hunger|famished|cannibal)\b).*$/i,
subname : "Hunger Domain",
source : ["Midgard", 60],
spellcastingExtra : ["goodberry", "ray of sickness", "locate animals or plants", "suggestion", "hunger of hadar", "vampiric touch", "blight", "grasping vine", "cloudkill", "cone of cold"],
features : {
					    
"subclassfeature1" : {
name : "Unsated",
source : ["Midgard", 60],
minlevel : 1,
description : desc([
	"I gain proficiency with Cook's utensils.", 
	"I learn the Poison Spray cantrip",
	"I also gain proficiency in the Survival skill."
	]),
toolProfs : ["Cook's utensils"],
skills : ["Survival"],

spellcastingBonus : {
name : "Bonus Cantrip (Poison Spray)",
spells : ["poison spray"],
Selection : ["poison spray"]
	},
},

"subclassfeature1.2" : {
name : "Bonus Proficiency",

minlevel : 1,
description : "\n   " + "I gain proficiency with heavy armor",
armor : [false, false, true, false]
		       },

"subclassfeature2" : {
name : "Channel Divinity: Ferocious Feast",
minlevel : 2,
description : desc([
	"I can use my Channel Divinity to gain a bite attack for 1 minute",
	"The bite does 1d6+ my Str mod piercing damage",
	"On a critical hit I also add my Wis mod to the total damage." 	]),
       	},

"subclassfeature6" : {
name : "Anthropophage",
minlevel : 6,
description : desc([
	"As an action I can engage in a ritual of cannibalism and consume 1/2 lb of meat from a sentient humanoid's corpse",
	"Doing so allows me remove the effects of diseases, poisons or the poisoned condition, or one level of exhaustion from myself",
	"My dieity protects me from negative health consequences associated with cannibalism while doing so." ]),
action : ["action"]
	},

"subclassfeature8" : {
name : "Divine Strike",
minlevel : 8,
description : desc([
	"Once per turn, when I hit a creature with a weapon attack, I do extra necrotic damage", ]),
	additional : levels.map(function (n) {if (n < 8) return ""; return "+" + (n < 14 ? 1 : 2) + "d8 lnecrotic damage";}),
	calcChanges : {
	atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 necrotic damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra necrotic damage."]}
	},
	
"subclassfeature17" : {
name : "Ravening Horde",
minlevel : 17,
description : desc([
"As an action, all creatures within 60 feet of me  except those I choose must make a Charisma save",
"If they fail, they take 10d8 necrotic damage, drop what they are holding and mindlessly attack with their hands, teeth, or natural weapons, anybody who was unaffected by this ability",
"This effect lasts for (3 + my Wisdom modifier) rounds. Creatures repeat the saving throw at the end of their turns to end the effect on themselves",
"This ability does not work on constructs or undead." 
]),
usages : 1,
recovery : "long rest",
action : ["action"]
		},
	},
});
AddSubClass("cleric", "hunting domain", {
regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(hunt|wild|hunting)\b).*$/i,
subname : "Hunting Domain",
spellcastingExtra : ["ensaring strike", "hunter's mark", "locate animals or plants", "pass without trace", "tiny hut", "speak with plants", "faithful hound", "grasping vine", "commune with nature", "hold monster"],
features : {
					    
"subclassfeature1" : {
name : "Forest Master",
minlevel : 1,
description : "\n   " + "I gain proficiency with longbows and heavy crossbows",
skills : ["Survival","Nature"],
weaponprofs : [false, false, ["longbow", "heavy crossbow"]],

},
"subclassfeature2" : {
name : "Channel Divinity: Unseen",
minlevel : 2,
action : ["action", ""],
description : desc([
	"As an action I can use my channel divinity to gain advantage on Stealth ability checks to move quietly and hide. I also leave no scent.",
	"This ability lasts for rounds equal to my cleric level + my Wisdom modifier.", ]),
	},
	
"subclassfeature6" : {
	name : "Resolute Hunter",
	minlevel : 6,
	description : desc([ 
		"Use the \"Choose Feature\" button above to add a favored enemy to the third page.",
		"I choose a Favored Enemy as if I was a ranger, and gain all the same benefits as that feature.",
		"I gain an additional Favored Enemy at 10th level, and 16th level." ]),
additional :  levels.map(function (n) {
					return n < 10 ? "1 favored enemy" : (n < 16 ? 1 : 2) + " favored enemies";
				}),
extraname : "Favored Enemy",
extrachoices : ["Aberrations", "Beasts", "Celestials", "Constructs", "Dragons", "Elementals", "Fey", "Fiends", "Giants", "Monstrosities", "Oozes", "Plants", "Undead", "Two Races of Humanoids"],
extraTimes : levels.map(function (n) { return n < 10 ? 1 : n < 16 ? 1 : 2; }),
	"aberrations" : {
		name : "Aberrations",
		description : "",
		languageProfs : [1]
				},
	"beasts" : {
		name : "Beasts",
		description : "",
		languageProfs : [1]
				},
	"celestials" : {
		name : "Celestials",
		description : "",
		languageProfs : [1]
				},
	"constructs" : {
		name : "Constructs",
		description : "",
		languageProfs : [1]
				},
	"dragons" : {
		name : "Dragons",
		description : "",
		languageProfs : [1]
				},
	"elementals" : {
		name : "Elementals",
		description : "",
		languageProfs : [1]
				},
	"fey" : {
		name : "Fey",
		description : "",
		languageProfs : [1]
				},
	"fiends" : {
		name : "Fiends",
		description : "",
		languageProfs : [1]
				},
	"giants" : {
		name : "Giants",
		description : "",
		languageProfs : [1]
				},
	"monstrosities" : {
		name : "Monstrosities",
		description : "",
		languageProfs : [1]
				},
	"oozes" : {
		name : "Oozes",
		description : "",
		languageProfs : [1]
				},
	"plants" : {
		name : "Plants",
		description : "",
		languageProfs : [1]
				},
	"undead" : {
		name : "Undead",
		description : "",
		languageProfs : [1]
				},
	"two races of humanoids" : {
		name : "Two Races of Humanoids",
		description : "",
		languageProfs : [1]
				}
			},
  
  "subclassfeature8" : {
name : "Divine Strike",
minlevel : 8,
description : desc([
	"Once per turn, when I hit a creature with a weapon attack, I do extra weapon damage", ]),
	additional : levels.map(function (n) {if (n < 8) return ""; return "+" + (n < 14 ? 1 : 2) + "d8 weapon damage";}),
	calcChanges : {
	atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 radiant damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra weapon damage."]}
	},
  
"subclassfeature17" : {
name : "Hunting Quest",
minlevel : 17,
description : desc([
	"I can begin a holy quest to slay a known quarry. If it is slain within 3 months I can create the following regional effect after a week of residence in a particular location.",
	 "Wisdom (Survival) checks made to procure food from hunting, locate fresh water, or to find campsites that are secure against predators are made with advantage within 3 miles of my home."]),
		}
	}
});

AddSubClass("cleric", "Justice domain", {
regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(justice|law|order)\b).*$/i,
subname : "Justice Domain",
spellcastingExtra : ["longstrider", "thorn whip", "hold person", "see invisibility", "blade of wrath", "fear", "inspiring speech", "faithful hound", "arcane hand", "holy ground"],
features : {
					    
"subclassfeature1" : {
name : "Bonus Proficiency",
source : ["Midgard", 62],
minlevel : 1,
description : "\n   " + "I gain proficiency with martial weapons and heavy armor",
armor : [false, false, true, false],
weapons : [false, true]
	
},
"subclassfeature2" : {
name : "Channel Divinity: No Hiding Place",
minlevel : 2,
action : ["action", ""],
description : desc([
	"As an action, I can learn the general direction of creature that has commited a crime or injustice", 
	"At 7th level, I also learn the distance in miles that creature is from me." ]),
        },
        
"subclassfeature6" : {
	name : "Hand of Justice",
	minlevel : 6,
	description : desc([ 
		"I am immunue to the Frightened condition" ]),
  savetxt : { immune : ["charmed"] }
  	},

  "subclassfeature8" : {
name : "Divine Strike",
source : ["Midgard", 55],
minlevel : 8,
description : desc([
	"Once per turn, when I hit a creature with a weapon attack, I do extra radiant damage", ]),
	additional : levels.map(function (n) {if (n < 8) return ""; return "+" + (n < 14 ? 1 : 2) + "d8 radiant damage";}),
	calcChanges : {
	atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 radiant damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra radiant damage."]}
	},
  
"subclassfeature17" : {
name : "Channel Divinity: Holy Denunciation",
source : ["Midgard", 60],
minlevel : 17,
action : ["action", ""],
description : desc([
	"As an action I can expend a use of Channel Divinity and invoke my deity's authority.",
  "As long as my deity is openly worshipped in the land I am in, I gain advantage on all Wisdom and Charisma checks involving justice, judgment, and the law."]),
		}
	}
});

AddSubClass("cleric", "Labyrinth domain", {
regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(maze|labyrinth|minotaur)\b).*$/i,
subname : "Labyrinth Domain",
spellcastingExtra : ["alarm", "expeditious retreat", "misty step", "pass without trace", "hypnotic pattern", "nondetection", "dimension door", "hallucinatory terrain", "mislead", "passwall"],
features : {

"subclassfeature1" : {
name : "First Passage",
minlevel : 1,
description : desc([
       "I gain proficiency in the Survival skill",
       "I learn the Abyssal and Rue-Thothka languages"
        ]),  
skills : ["Survival","Nature"],
 languageProfs : ["Abyssal", "Rue-Thothka"]
   },
   
"subclassfeature2" : {
name : "Channel Divinity: Wisdom of the Winding Way",
minlevel : 2,
action : ["action"],
description : desc([
    "As an action I gain advantage on Wisdom (Survival) checks for tracking for 1 hour.",
	]), 
},

"subclassfeature6" : {
name : "Befuddling Touch",
minlevel : 6,
action : ["action"],
description : desc([
    "As an action I can make a melee attack that causes no damage, but puts the target under the effect of the confusion spell.",
    "This effect lasts until the start of my next turn, and each attempt expends 1 use of this ability.",
    "This ability has no effect on minotaurs, or creatures of a CR higher than my cleric level."
	]), 
usages : "3 + Wisdom modifier per ",
	usagescalc : "event.value = Math.max(3, What('Wis Mod'));",
recovery : "long rest",

},
 "subclassfeature8" : {
name : "Divine Strike",
source : ["Midgard", 55],
minlevel : 8,
description : desc([
	"Once per turn, when I hit a creature with a weapon attack, I do extra weapon damage", ]),
	additional : levels.map(function (n) {if (n < 8) return ""; return "+" + (n < 14 ? 1 : 2) + "d8 weapon damage";}),
	calcChanges : {
	atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 weapon damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra weapon damage."]}
	},
  
"subclassfeature17" : {
name : "Channel Divinity: Banish to the Maze",
source : ["Midgard", 60],
minlevel : 17,
action : ["action", ""],
description : desc([
	"As an action I can invoke my deity's authority and gain advantage on all Wisdom and Charisma checks involving justice, judgment, and the law",
  "This ability only works if my deity is openly worshipped in the land I am in."]),
		}

	}
});
SpellsList["blade of wrath"] = {
	name : "Blade of Wrath",
	classes : ["cleric","paladin","warlock","wizard"],
	source : ["Midgard", 153],
	level : 3,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V,S,M", 
	compMaterial : "a rebuke of evil, written in Celestial",
	duration : "Conc, 10 mins",
	save : "Wis",
	description : "melee attack, 2d8 fire dmg + 2d8 rad dmg + 1d8/SL; aberrations/fey/fiends struck make a Wisdom save or be frightened for 1 round; bright light 20-ft, dim light 20-ft.",
	descriptionFull : "You create a sword of pure white fire in your free hand. The blade is similar in size and shape to a longsword, and it lasts for the duration" + "\n   " + "If you let go of the blade it disappears, but you can call it forth again as a bonus action." + "\n   " + "You can use your action to make a melee spell attack with the blade." + "\n   " + "On a hit, the target takes 2d8 fire damage and 2d8 radiant damage." + "\n   " + "An aberration, fey, fiend, or undead creature damaged by the blade must succeed on a Wisdom saving throw or be frightened until the start of your next turn." + "\n   " + "The blade sheds bright light in a 20-foot radius and dim light for an additional 20 feet." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the fire damage or the radiant damage (your choice) increases by 1d8 for each slot level above 3rd."

};
SpellsList["catch the breath"] = {
	name : "Catch the Breath",
	classes : ["bard", "cleric", "warlock", "wizard"],
	source : ["Midgard", 156],
	level : 3,
	school : "Trans",
	time : "1 rea",
	range : "Self",
	components : "V", 
	duration : "Instantaneous",
	description : "Cast as a reaction when you are targeted by a breath weapon to take no damage if your pass, on your next turn deal 3d10 force damage",
	descriptionFull : "You can cast this spell as a reaction when you're targeted by a breath weapon." + "\n   " + "Doing so gives you advantage on your saving throw against the breath weapon." + "\n   " + "If your saving throw succeeds, you take no damage from the attack even if a successful save normally only halves the damage." + "\n   " + "Whether your saving throw succeeded or failed, you absorb and store energy from the attack" + "\n   " + "On your next turn, you can make a ranged spell attack against a target within 60 feet." + "\n   " + "On a hit, the target takes 3d10 force damage. If you opt not to make this attack, the stored energy dissipates harmlessly." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage done by your attack increases by 1d10 for each slot level above 3rd."
};
SpellsList["claws of the earth dragon"] = {
	name : "Claws of the Earth Dragon",
	classes : ["bard", "cleric", "sorcerer", "wizard"],
	source : ["Midgard", 158],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V", 
	duration : "Instantaneous",
	save : "Str",
	description : "Str save for 6d8+1d8/SL bludgeoning damage and knocked prone, additional 1d6/10-ft bludgeoning damage if flying or leviatating; save halves & not prone",
	descriptionFull : "You summon the power of the earth dragon and shoot a ray at one target within 60 feet." + "\n   " + "The target falls prone and takes 6d8 bludgeoning damage from being slammed to the ground." + "\n   " + "If the target was flying or levitating, it takes an additional 1d6 bludgeoning damage per 10 feet it falls." + "\n   " + "If the target makes a successful Strength saving throw, damage is halved, it doesn't fall, and it isn't knocked prone." + AtHigherLevels + "At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the damage done by the attack increases by 1d8 and the range increases by 10 feet for each slot level above 5th."
};
SpellsList["dark dementing"] = {
	name : "Dark Dementing",
	classes : ["sorcerer","warlock", "wizard"],
	source : ["Midgard", 161],
	level : 5,
  	school : "Illus",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "a moonstone",
	duration : "10 mins",
	save : "Cha",
	description : "A creature must save or become frightened; extra save each time it takes damage; add additional effects; see book",
	descriptionFull : "A dark shadow creeps across the target's mind and leaves a small bit of shadow essence behind, triggering a profound fear of the dark." + "\n   " + "The target creature must make a Charisma saving throw. If it fails, the target becomes frightened of you for the duration." + "\n   " + "The creature willnot willingly enter or attack into a space that isn't brightly lit." + "\n   " + "If it's in dim light or darkness, the creature must either move toward bright light or create its own (by lighting a lantern, casting a light spell, etc." + "\n   " + "A frightened creature repeats the saving throw each time it takes damage, ending the effect on a success."
	};

SpellsList["dark path"] = {
	name : "Dark Path",
	classes : ["sorcerer","warlock", "wizard"],
	source : ["Midgard", 162],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M", 
	compMaterial : "a lodestone",
	duration : "Conc, 1 min",
	description : "Create a 10-ft. wide, 50-ft. long bridge or path that can support up to 500 lbs.",
	descriptionFull : "You conjure a shadowy road between points to create a bridge or path where there was none before." + "\n   " + "This can bridge a chasm or create a smooth path through difficult terrain to speed movement." + "\n   " + "The dark path is 10 feet wide and up to 50 feet long. It can support up to 500 pounds of weight at one time." + "\n   " + "A creature that adds more weight than the path can support sinks through the path as if it didn't exist."
};

SpellsList["holy ground"] = {
	name : "Holy Ground",
	classes : ["cleric", "paladin"],
	source : ["Midgard", 174],
	level : 5,
  	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "a vial of holy water that is consumed in the casting)",
	duration : "Con, 10 mins",
	description : "60-ft rad protected agaisnt being raised as undead; add additional effects; see B",
	descriptionFull : "You invoke the divine powers to bless the ground within 60 feet of you." + "\n   " + "Creatures slain in the area of effect cannot be raised as undead by magic or by the abilities of monsters, even if the corpse is later removed from the area." + "\n   " + "Any spell of 4th level or lower that would summon or animate undead within the area fails automatically." + "\n   " + "Such spells cast with spell slots of 5th level or higher function normally." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the level of spells that are prevented from functioning increases by 1 for each slot level above 5th."
};

SpellsList["inspiring speech"] = {
	name : "Inspiring Speech",
	classes : ["bard", "cleric", "paladin"],
	source : ["Midgard", 175],
	level : 4,
	school : "Ench",
	time : "10 mins",
	range : "60 ft",
	components : "V", 
	duration : "1 hour",
	description : "Each creature that listens +1 to attack rolls, advt agaisnt charm and frightened conditions; temp hp=spellcasting mod",
	descriptionFull : "The verbal component of this spell is a 10-minute-long, rousing speech by you." + "\n   " + "At the end of the speech, all your allies within the area of effect who heard the speech gain a +1 bonus on attack rolls and have advantage on saving throws against effects that cause the charmed or frightened condition for 1 hour." + "\n   " + "Additionally, each recipient gains temporary hit points equal to your spellcasting ability modifier." + "\n   " + "If you move farther than 1 mile from your allies or you die, this spell ends." + "\n   " + "A character can be affected by only one inspiring speech at a time; subsequent, overlapping castings have no additional effect and don't extend the spell's duration."
};
SpellsList["lair sense"] = {
	name : "Lair Sense",
	classes : ["wizard"],
	source : ["Midgard", 178],
	level : 2,
  	school : "Div",
	time : "1 min",
	range : "120 ft",
	components : "V,S,M\u0192",
	compMaterial : "treasure worth at least 500 gp,which is not consumed in casting",
	duration : "24 hours",
	description : "You know if any Tiny or larger creature enters an area you designate no larger than 100-ft. cube +50-ft&12 hours/SL. ; see book for more details",
	descriptionFull : "You set up a magical boundary around your lair. The boundary can't exceed the dimensions of a 100-foot cube,but within that maximum, you can shape it as you like—to follow the walls of a building or cave, for example." + "\n   " + "While the spell lasts, you instantly become aware of any Tiny or larger creature that enters the enclosed area. You know the creature's type but nothing else about it." + "\n   " + "You are also aware when creatures leave the area." + "\n   " + "This awareness is enough to wake you from sleep, and you receive the knowledge as long as you're on the same plane of existence as your lair." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, add 50 feet to the maximum dimensions of the cube and add 12 hours to the spell's duration for each slot level above 2nd."
};
SpellsList["legion"] = {
	name : "Legion",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["Midgard", 178],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M", 
	compMaterial : "a toy soldier",
	duration : "Conc, 1 min",
	description : "Call down a 10-ft. cube of shadowy soliders that deal damage and create difficult terrain.",
	descriptionFull : "You call down a legion of shadowy soldiers in a 10-foot cube. They are conjured from the Shadow Realm, and their features resemble a mockery of once-living creatures." + "\n   " + "Whenever a creature starts its turn inside the cube, within 5 feet of it, or enters the cube for the first time on its turn, the conjured shades make an attack using your spell attack modifier" + "\n   " + "If it  hits, the target takes 3d8 necrotic damage." + "\n   " + "The space inside the cube is difficult terrain."
};
SpellsList["night terrors"] = {
	name : "Night Terrors",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["Midgard", 184],
	level : 1,
	school : "Illus",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M", 
	compMaterial : "a crow's eye",
	duration : "Instantaneous",
 	 save : "Wis",
	description : "You frighten and paralyze creatures in a 20-ft radius that fail a Wisdom save.",
	descriptionFull : "You amplify the fear of darkness that lurks in the heart of all creatures. Select a target point you can see within the spell's range." + "\n   " + "Every creature within 20 feet of that point becomes frightened of you until the start of your next turn and must make a successful Wisdom saving throw or also become paralyzed." + "\n   " + "A paralyzed creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a success." + "\n   " + "Creatures immune to being frightened are not affected by night terrors."
};
SpellsList["scale rot"] = {
	name : "Scale Rot",
	classes : ["bard", "cleric", "ranger", "sorcerer", "warlock", "wizard"],
	source : ["Midgard", 189],
	level : 4,
  	school : "Necro",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "a piece of rotten meat",
	duration : "Conc, 1 min",
	save : "Cha",
	description : "1 crea with natural armor/SL save or attacks against it have advtg and it can't regain hitpoints",
	descriptionFull : "You summon death and decay to plague your enemies. One creature of your choosing within 30 feet of you that has natural armor must make a Constitution saving throw" + "\n   " + "If it fails, attacks against that creature are made with advantage, and the creature can't regain hit points through any means." + "\n   " + "An effected creature can end the effect by using an action to make a successful Constitution saving throw." + "\n  " + "A successful saving throw ends he effect on that creature and makes the creature immune to further castings of scale rot for 24 hours." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the number of affected targets increases by 1 per slot level above 4th."
};
SpellsList["shadow armor"] = {
	name : "Shadow Armor",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["Midgard", 190],
	level : 1,
	school : "Abjur",
	time : "1 rea",
	range : "Self",
	components : "V,S",
	duration : "Instantaneous",
	description : "As a reaction to being attacked you impose disadvantage on the attack and gain resistance to radiant damage",
	descriptionFull : "You siphon energy from the Shadow Realm to protectyourself from an immediate threat. As a reaction, you pull shadows around yourself to distort reality." + "\n   " + "The attack against you is made with disadvantage, and you have resistance to radiant damage until the start of your next turn." 
};

