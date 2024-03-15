import fetch from 'node-fetch';
import fs from 'fs';
import { exec } from 'child_process';


let handler = async (m, { conn, command, text }) => {
  // Define the API endpoint
  const apiUrl = 'https://api.itsrose.life/sovits/inference_voice';

  const voiceIDs = {
"adele": "adele",
"among_us": "among_us",
"amr_diab": "amr_diab",
"amy_winehouse": "amy_winehouse",
"andrew_tate": "andrew_tate",
"angry_cat": "angry_cat",
"antimage_dota": "antimage_dota",
"ariana_grande": "ariana_grande",
"assala_nasri": "assala_nasri",
"aw_aw_cat": "aw_aw_cat",
"bad_bunny": "bad_bunny",
"bang_chan": "bang_chan",
"barbie_margot": "barbie_margot",
"barry_white": "barry_white",
"bart_simpson_en": "bart_simpson_en",
"bart_simpson_spa": "bart_simpson_spa",
"batman_christian_bale": "batman_christian_bale",
"batman_kevin_conroy": "batman_kevin_conroy",
"beyonce": "beyonce",
"bill_clinton": "bill_clinton",
"bill_kaulitz": "bill_kaulitz",
"billie_eilish": "billie_eilish",
"bjork": "bjork",
"bob_marley": "bob_marley",
"brazilian_lord_x": "brazilian_lord_x",
"britney_spears": "britney_spears",
"bruno_mars": "bruno_mars",
"butters_stotch": "butters_stotch",
"captain_america": "captain_america",
"car_burnout": "car_burnout",
"car_horn": "car_horn",
"cardi_b": "cardi_b",
"central_cee": "central_cee",
"chainsaw": "chainsaw",
"chapolin_colorado": "chapolin_colorado",
"chicken": "chicken",
"chorao": "chorao",
"chris_evans": "chris_evans",
"cogumelando": "cogumelando",
"counter_strike_radio": "counter_strike_radio",
"cristiano_ronaldo": "cristiano_ronaldo",
"crying_baby": "crying_baby",
"darth_vader": "darth_vader",
"darwin_watterson_tr": "darwin_watterson_tr",
"diego": "diego",
"dinho": "dinho",
"doc_hudson": "doc_hudson",
"doctor_strange": "doctor_strange",
"doja_cat": "doja_cat",
"dolores_umbridge": "dolores_umbridge",
"donald_duck": "donald_duck",
"donald_trump": "donald_trump",
"dota_crystal_maiden": "dota_crystal_maiden",
"dota_puck": "dota_puck",
"dota_rubick": "dota_rubick",
"dota_shadow_fiend": "dota_shadow_fiend",
"dota_slardar": "dota_slardar",
"dota_sniper": "dota_sniper",
"dota_sven": "dota_sven",
"drake": "drake",
"dwight_eisenhower": "dwight_eisenhower",
"eazy_e": "eazy_e",
"ed_sheeran": "ed_sheeran",
"elissa": "elissa",
"ella_fitzgerald": "ella_fitzgerald",
"elon_musk": "elon_musk",
"elsa": "elsa",
"elton_john": "elton_john",
"elvis_presley": "elvis_presley",
"eminem": "eminem",
"eren_yeager": "eren_yeager",
"eric_cartman": "eric_cartman",
"erkin_koray": "erkin_koray",
"ezreal_lol": "ezreal_lol",
"frank_sinatra": "frank_sinatra",
"franklin_roosevelt": "franklin_roosevelt",
"freddie_mercury": "freddie_mercury",
"fredo": "fredo",
"gabriel_diniz": "gabriel_diniz",
"garen_lol": "garen_lol",
"giveon": "giveon",
"goku_dragonball": "goku_dragonball",
"gollum": "gollum",
"goofy": "goofy",
"gumball_en": "gumball_en",
"gumball_spa": "gumball_spa",
"haerin": "haerin",
"hailey_bieber": "hailey_bieber",
"half_life_2_zombie": "half_life_2_zombie",
"han_jisung": "han_jisung",
"harry_styles": "harry_styles",
"heesung_hypen": "heesung_hypen",
"homer_simpson": "homer_simpson",
"hugh_jackman": "hugh_jackman",
"hulk": "hulk",
"hulk_hogan": "hulk_hogan",
"hwang_hyunjin": "hwang_hyunjin",
"iggy_azalea": "iggy_azalea",
"invoker_dota": "invoker_dota",
"iron_man": "iron_man",
"iron_man_brazil": "iron_man_brazil",
"itachi_uchiha": "itachi_uchiha",
"iu_idol": "iu_idol",
"jake_enhypen": "jake_enhypen",
"james_hetfield": "james_hetfield",
"janet_jackson": "janet_jackson",
"jay_enhypen": "jay_enhypen",
"jennie_idol": "jennie_idol",
"jeon_somi": "jeon_somi",
"jeongin": "jeongin",
"jerry_seinfeld": "jerry_seinfeld",
"jesse_pinkman": "jesse_pinkman",
"jhope_idol": "jhope_idol",
"jimin_idol": "jimin_idol",
"jimmy_fallon": "jimmy_fallon",
"jin_idol": "jin_idol",
"jisoo_idol": "jisoo_idol",
"joe_rogan": "joe_rogan",
"john_cena": "john_cena",
"joker": "joker",
"jonny_bravo": "jonny_bravo",
"juice_wrld": "juice_wrld",
"jungkook": "jungkook",
"justin_bieber": "justin_bieber",
"kanye_west": "kanye_west",
"katsuki_bakugo": "katsuki_bakugo",
"kemal_sunal": "kemal_sunal",
"kendall_roy": "kendall_roy",
"kendric_lamar": "kendric_lamar",
"kenny_mccormick": "kenny_mccormick",
"kim_chaewon": "kim_chaewon",
"kim_namjoon": "kim_namjoon",
"kim_seungmin": "kim_seungmin",
"kratos": "kratos",
"kufurbaz_haydo": "kufurbaz_haydo",
"kurt_cobain": "kurt_cobain",
"kyle_south_park": "kyle_south_park",
"lady_gaga": "lady_gaga",
"lana_del_rey": "lana_del_rey",
"lee_felix": "lee_felix",
"lee_know": "lee_know",
"leno_brega": "leno_brega",
"lightsaber": "lightsaber",
"liltay": "liltay",
"lisa_idol": "lisa_idol",
"lissandra_lol": "lissandra_lol",
"lizzo": "lizzo",
"lois_griffin": "lois_griffin",
"luciano_pavarotti": "luciano_pavarotti",
"lucoa": "lucoa",
"luke_skywalker": "luke_skywalker",
"madison_beer": "madison_beer",
"madonna": "madonna",
"manoel_gomes": "manoel_gomes",
"marceline": "marceline",
"marge_simpson": "marge_simpson",
"margot_robbie": "margot_robbie",
"marilia_mendonca": "marilia_mendonca",
"markiplier": "markiplier",
"martin_luther_king_jr": "martin_luther_king_jr",
"mauro_icardi": "mauro_icardi",
"meg_griffin": "meg_griffin",
"melanie_martinez": "melanie_martinez",
"messi": "messi",
"michael_jackson": "michael_jackson",
"michael_scott": "michael_scott",
"mickey_mouse": "mickey_mouse",
"miley_cyrus": "miley_cyrus",
"minecraft_door": "minecraft_door",
"minecraft_footsteps": "minecraft_footsteps",
"minecraft_pig": "minecraft_pig",
"minecraft_villager": "minecraft_villager",
"minions": "minions",
"mohammed_abdu": "mohammed_abdu",
"morgan_freeman": "morgan_freeman",
"morty_smith": "morty_smith",
"morty_smith_brazil": "morty_smith_brazil",
"mr_beast": "mr_beast",
"mr_krabs": "mr_krabs",
"muslum_gurses": "muslum_gurses",
"nami_one_piece": "nami_one_piece",
"nancy_ajram": "nancy_ajram",
"naruto_uzumaki": "naruto_uzumaki",
"nick_fury": "nick_fury",
"nicki_minaj": "nicki_minaj",
"nico_robin": "nico_robin",
"niki_enhypen": "niki_enhypen",
"obama": "obama",
"olivia_rodrigo": "olivia_rodrigo",
"one_piece_luffy": "one_piece_luffy",
"one_piece_sanji": "one_piece_sanji",
"perfect_cell": "perfect_cell",
"peter_griffin": "peter_griffin",
"phoebe_buffay": "phoebe_buffay",
"pikachu": "pikachu",
"pinkydoll": "pinkydoll",
"plankton": "plankton",
"pop_smoke": "pop_smoke",
"pudge_dota": "pudge_dota",
"raiden_shogun": "raiden_shogun",
"raluca_granola": "raluca_granola",
"randy_marsh": "randy_marsh",
"rashed_almaged": "rashed_almaged",
"richard_nixon": "richard_nixon",
"rick_sanchez": "rick_sanchez",
"ricky_gervais": "ricky_gervais",
"rihanna": "rihanna",
"roronoa_zoro": "roronoa_zoro",
"rose_idol": "rose_idol",
"roxanne_wolf": "roxanne_wolf",
"rubber_chicken": "rubber_chicken",
"rupaul": "rupaul",
"ryan_gosling": "ryan_gosling",
"sasuke_uchiha": "sasuke_uchiha",
"scary_little_girl": "scary_little_girl",
"selena_gomez": "selena_gomez",
"seo_changbin": "seo_changbin",
"shaco_lol": "shaco_lol",
"shakira": "shakira",
"sherine": "sherine",
"shrek": "shrek",
"shrek_donkey": "shrek_donkey",
"sia": "sia",
"sid": "sid",
"snoop_dogg": "snoop_dogg",
"spider_man_tobey_maguire": "spider_man_tobey_maguire",
"spongebob": "spongebob",
"squidward": "squidward",
"stewie_griffin": "stewie_griffin",
"suga_idol": "suga_idol",
"sunghoon_enhypen": "sunghoon_enhypen",
"sunoo_enhypen": "sunoo_enhypen",
"super_mario": "super_mario",
"super_mario_toad": "super_mario_toad",
"super_xandao": "super_xandao",
"sza": "sza",
"taylor_swift": "taylor_swift",
"ted_kaczynski": "ted_kaczynski",
"the_kid_laroi": "the_kid_laroi",
"the_notorious_big": "the_notorious_big",
"theodore_roosevelt": "theodore_roosevelt",
"thomas_shelby": "thomas_shelby",
"thor": "thor",
"tom_waits": "tom_waits",
"tony_soprano": "tony_soprano",
"toothbrush": "toothbrush",
"tow_mater": "tow_mater",
"travis_scott": "travis_scott",
"tuncel_kurtiz": "tuncel_kurtiz",
"tupac_shakur": "tupac_shakur",
"twentyone_savage": "twentyone_savage",
"venom": "venom",
"voldemort": "voldemort",
"walter_white": "walter_white",
"warwick_lol": "warwick_lol",
"washing_machine": "washing_machine",
"weeknd": "weeknd",
"whitney_houston": "whitney_houston",
"winnie_the_pooh": "winnie_the_pooh",
"winston_churchill": "winston_churchill",
"xxxtentacion": "xxxtentacion",
"yae_miko": "yae_miko",
"yungblud": "yungblud",
"yungwon_enhypen": "yungwon_enhypen",
"zeki_muren": "zeki_muren",
  // Add more voice IDs here
};
    let [voiceID, inputText] = text.split(" ", 2); // Split the text into two parts: voice ID and text
voiceID = voiceIDs[voiceID] || "default_voice_id"; // Use a default voice ID if the specified one is not found
    
    if (!inputText) {
    return conn.reply(m.chat, `Mana model suara/link youtube nya? Contoh:\n\n*.aicover yae_miko https://www.youtube.com/watch?v=Ci_zad39Uhw*\n\nUntuk melihat list model bisa dengan *.acl*`), m;
  }
    
  const requestBody = {
    youtube_url: inputText,
    voice_id: voiceID,
    watermark: false
  };
    m.reply('_Bentar ya, lagi di proses kok😊_')

 
    try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${global.rose}`
      }
    });

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const responseBody = await response.json();

    if (responseBody.status === true) {
  // Download the video
  const videoUrl = responseBody.result.video;
  const videoResponse = await fetch(videoUrl);
  const videoBuffer = await videoResponse.buffer();

  // Save the video as a temporary file
  const videoFilename = 'output.mp4'; // Use the appropriate video format and extension
  fs.writeFileSync(videoFilename, videoBuffer);

  // Use ffmpeg to extract audio from the video
  exec(`ffmpeg -i ${videoFilename} -q:a 0 -map a audio.mp3`, (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      conn.reply(m.chat, 'Error convert audio nya.', m);
      return;
    }

    // Send the audio file to the user
    conn.sendFile(m.chat, 'audio.mp3', 'audio.mp3', m);

    // Delete temporary files
    fs.unlinkSync(videoFilename);
    fs.unlinkSync('audio.mp3');
  });
};

} catch (error) {
    console.error(error);
    conn.reply(m.chat, 'Error tidak diketahui', m);
  }
};
handler.command = handler.help = ['aicover'];
handler.tags = ['ai'];
handler.limit = true;

export default handler;