import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*Bot aktif kak*\n@${m.sender.split('@')[0]}`
await conn.reply(m.chat, info, m, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: author, body: bottime, sourceUrl: syt, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

export default handler