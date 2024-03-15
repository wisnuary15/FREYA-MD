let handler = async (m, { conn, text, usedPrefix, command }) => {
const deleteMessage = { delete: { remoteJid: m.key.remoteJid, fromMe: false, id: m.key.id, participant: [m.sender] } };
await conn.sendMessage(m.chat, deleteMessage);
conn.sendMessage(m.chat, {text: 'Iyaa kenapa sayang, kenapa kamu manggil aku😗'},{quoted: m, ephemeralExpiration: global.ephemeral})
}

handler.customPrefix = /^(p|sayang|vynaa)$/i
handler.command = new RegExp
export default handler