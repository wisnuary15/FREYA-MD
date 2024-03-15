//MODULES
import db from "../lib/database.js";
import axios from "axios"
import cheerio from "cheerio"
import FormData from "form-data"
import {
  facebookdlv2,
  facebookdl,
} from "@bochilteam/scraper";
import moment from 'moment-timezone'

//Autorespon other
export async function all(m) {
  if (m.chat.endsWith('status@broadcast')) {
        console.log('YOW!')
    }
    let chat = global.db.data.chats[m.chat]
    let { isBanned } = global.db.data.chats[m.chat]
    let { banned } = global.db.data.users[m.sender]
    let setting = global.db.data.settings[this.user.jid]
    let user = global.db.data.users[m.sender]
    //Responder
    if (m.isGroup) {
      if (m.mentionedJid.includes(this.user.jid)) {
        await this.sendButton(m.chat, isBanned ? "This group is banned by the owner" : banned ? "Anda telah dibanned" : "Bot Status: Online", author, null, [[isBanned ? 'Unban' : banned ? 'Pemilik Bot' : 'Menu',
            isBanned ? '.unban' : banned ? '.owner' : '.menu'
                ]], m)
      }
    }
  }


//Auto downloader
export async function before(m, { isAdmin, isBotAdmin }) {
  let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let set = global.db.data.settings[this.user.jid]
    let teks = m.text //Simple
    if (m.chat.endsWith('broadcast')) return
    if (chat.isBanned || user.banned || !chat.download || m.isBaileys) return
    //hmmm?
    try {
      if (/https?:\/\/(www\.|v(t|m)\.|t\.)?tiktok\.com/i.test(teks)) {
        let res = await axios("https://musicaldown.com/id")
let token = []
let $ = cheerio.load(res.data)
$("form > div > div > input").each(function() {
  let value = $(this).val()
  let name = $(this).attr("name")
  if (!value) value = teks
  token.push(name, value)
})
let form = new FormData
form.append(token[0], token[1])
form.append(token[2], token[3])
form.append(token[4], token[5])
let resu = await axios({
  url: "https://musicaldown.com/id/download",
  method: "post",
  data: form,
  headers: {
    ...form.getHeaders(),
    cookie: res.headers["set-cookie"]
  }
})
let resul = await axios({
  url: "https://musicaldown.com/id/mp3",
  method: "post",
  headers: {
    cookie: res.headers["set-cookie"]
  }
})
let $$ = cheerio.load(resu.data)
let $$$ = cheerio.load(resul.data)
let result = {
  video: $$("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(5)").attr("href"),
  audio: $$$("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(5)").attr("href"),
  video_original: $$("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(9)").attr("href"),
  audio_original: $$$("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(9)").attr("href"),
  preview: $$("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l4 > img").attr("src")
}
conn.sendFile(m.chat, result.video || result.video_original, "tiktok.mp4", `*Tiktok AutoDownloader*`, m)
      }
      
    } catch (e){
      m.reply("Eror")
    }
}

function ucapan() {
    const time = moment.tz('Asia/Karachi').format('HH')
    let res = "Good night 🌙"
    if (time >= 4) {
        res = "Good morning 🌄"
    }
    if (time > 10) {
        res = "Good afternoon ☀️"
    }
    if (time >= 15) {
        res = "Good evening 🌅"
    }
    if (time >= 18) {
        res = "Good night 🌙"
    }
    return res
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}