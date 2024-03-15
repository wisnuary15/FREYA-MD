import maker from 'mumaker'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
switch (command) {
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas': 
case 'holographic':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'karbon': 
case 'neonlight2': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case '3dbox': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'greenneon': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'lion2': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike': 
case '3davengers': 
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'whitebear': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {
if (!text) return m.reply(`Masukkan Teks`) 
m.reply('Proses...')
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/neonlight2/.test(command)) link = 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/whitebear/.test(command)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'
if (/holographic/.test(command)) link = 'https://textpro.me/holographic-3d-text-effect-975.html'
if (/3davengers/.test(command)) link = 'https://textpro.me/create-3d-avengers-logo-online-974.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/greenneon/.test(command)) link = 'https://textpro.me/green-neon-text-effect-874.html'
if (/lion2/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
if (/3dbox/.test(command)) link = 'https://textpro.me/3d-box-text-effect-online-880.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/karbon/.test(command)) link = 'https://textpro.me/carbon-text-effect-833.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await maker.textpro(link, text)
conn.sendMessage(m.chat, { image: { url: anu }, caption: `Dah Jadi` }, { quoted: m })
}
break
case 'glitch2': 
case 'harrypot': 
case 'graffiti': 
case 'pornhub': 
case 'glitch3': 
case '3dspace': 
case 'lion': 
case 'wolf': 
case 'retro': 
case '8bit': {
if (!text) return m.reply(`Masukkan Teks text|text`) 
m.reply('Proses...')
let teks1 = text.split("|")[0]
let teks2 = text.split("|")[1]
let link
if (/glitch3/.test(command)) link = 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html'
if (/harrypot/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/graffiti/.test(command)) link = 'https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html'
if (/pornhub/.test(command)) link = 'https://textpro.me/pornhub-style-logo-online-generator-free-977.html'
if (/glitch2/.test(command)) link = 'https://textpro.me/create-a-glitch-text-effect-online-free-1026.html'
if (/3dspace/.test(command)) link = 'https://textpro.me/create-space-3d-text-effect-online-985.html'
if (/lion/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
if (/wolf/.test(command)) link = 'https://textpro.me/create-wolf-logo-galaxy-online-936.html'
if (/retro/.test(command)) link = 'https://textpro.me/create-3d-retro-text-effect-online-free-1065.html'
if (/8bit/.test(command)) link = 'https://textpro.me/video-game-classic-8-bit-text-effect-1037.html'
let anu = await maker.textpro(link, [`${teks1}`,`${teks2}`])
conn.sendMessage(m.chat, { image: { url: anu }, caption: `Dah Jadi ` }, { quoted: m })
break
    }
  }
}
handler.help = ['candy', 'christmas', '3dchristmas', 'sparklechristmas', 'holographic',
'deepsea', 
'scifi', 
'rainbow', 
'waterpipe', 
'spooky',
'karbon', 
'neonlight2', 
'pencil', 
'circuit', 
'discovery', 
'metalic', 
'fiction', 
'demon',
'3dbox', 
'transformer', 
'berry', 
'thunder',
'magma', 
'3dstone', 
'greenneon', 
'neonlight', 
'glitch', 
'harrypotter', 
'brokenglass', 
'papercut', 
'lion2', 
'watercolor', 
'multicolor', 
'neondevil', 
'underwater', 
'graffitibike', 
'3davengers', 
'snow', 
'cloud', 
'honey', 
'ice', 
'fruitjuice', 
'biscuit', 
'wood', 
'whitebear', 
'chocolate', 
'strawberry', 
'matrix', 
'blood', 
'dropwater', 
'toxic', 
'lava', 
'rock', 
'bloodglas', 
'hallowen', 
'darkgold', 
'joker', 
'wicker',
'firework', 
'skeleton', 
'blackpink', 
'sand', 
'glue', 
'1917', 
'leaves',
'glitch2', 
'harrypot', 
'graffiti', 
'pornhub', 
'glitch3', 
'3dspace', 
'lion', 
'wolf', 
'retro', 
'8bit'];
handler.tags = ['maker']
handler.command = ['candy', 'christmas', '3dchristmas', 'sparklechristmas', 'holographic',
'deepsea', 
'scifi', 
'rainbow', 
'waterpipe', 
'spooky',
'karbon', 
'neonlight2', 
'pencil', 
'circuit', 
'discovery', 
'metalic', 
'fiction', 
'demon',
'3dbox', 
'transformer', 
'berry', 
'thunder',
'magma', 
'3dstone', 
'greenneon', 
'neonlight', 
'glitch', 
'harrypotter', 
'brokenglass', 
'papercut', 
'lion2', 
'watercolor', 
'multicolor', 
'neondevil', 
'underwater', 
'graffitibike', 
'3davengers', 
'snow', 
'cloud', 
'honey', 
'ice', 
'fruitjuice', 
'biscuit', 
'wood', 
'whitebear', 
'chocolate', 
'strawberry', 
'matrix', 
'blood', 
'dropwater', 
'toxic', 
'lava', 
'rock', 
'bloodglas', 
'hallowen', 
'darkgold', 
'joker', 
'wicker',
'firework', 
'skeleton', 
'blackpink', 
'sand', 
'glue', 
'1917', 
'leaves',
'glitch2', 
'harrypot', 
'graffiti', 
'pornhub', 
'glitch3', 
'3dspace', 
'lion', 
'wolf', 
'retro', 
'8bit'];
export default handler;