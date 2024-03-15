import { sticker } from '../lib/sticker.js'

import fs from 'fs'

import path from 'path'

import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {

global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

//m.reply(`Wait ${command} sedang proses🐦`)

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())

let name = await conn.getName(who)

let stiker = await sticker(null, global.API(`https://telegra.ph/file/d34b2ab2cb233c749776c.png`), global.packname, global.author)


let res = await fetch('https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json')

  //if (!res.ok) throw await res.json()

  let asup = await res.json()

  let json = asup[Math.floor(Math.random() * asup.length)]

 conn.sendFile(m.chat, json.url, 'mp4', command, m, null, { fileLength: 100, contextInfo: {

          externalAdReply :{

          showAdAttribution: true,

    mediaUrl: sgc,

    mediaType: 2,

    description: '_© 2021 2023 VynaaMD_', 

    title: `${command} Sedang Di Proses`,

    body: botdate,

    thumbnail: await(await fetch(pp)).buffer(),

    sourceUrl: sgc

     }}

  })

 

}


handler.tags = ['sound']

handler.command = /^(test)$/i

handler.limit = true

export default handler

