/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
import yts from 'yt-search'

let handler = async (m, { text, conn, args, command, usedPrefix }) => {

if (!text) return conn.reply(m.chat, `✐ *Escriba el título de algún vídeo de Youtube*\n\nEjemplo, ${usedPrefix + command} Yue Arifureta`, m, rcanal)

conn.reply(m.chat, 'ESPERA ENVIANDO RESULTADOS', m, rcanal)
const nombre = await conn.getName(m.sender)
let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `✐ *Título:* 
» ${v.title}

🜸 *Enlace:* 
» ${v.url}

🜸 *Duración:*
» ${v.timestamp}

🜸 *Subido:* 
» ${v.ago}

🜸 *Vistas:* 
» ${v.views}`}}).filter(v => v).join('\n\n••••••••••••••••••••••••••••••••••••\n\n')

conn.sendFile(m.chat, 'https://files.catbox.moe/ldiqpu.jpg', 'yts.jpeg', teks, m, null, rcanal)
  await conn.sendMessage(channelid, { text: `╭─────────────⦁\n│╭➟ ≡ El Usuario ${nombre}\n││➟ ▢ A Usado El Comando ${usedPrefix + command}\n│╰➟ ⌬ Ꭱꭼꮇ Ꮯꮋꭺɴ Ꮃꮋꭺ - Ᏼꮻꭲ\n╰─────────────⦁`, contextInfo: {
externalAdReply: {
title: "【 🔔 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢́𝗡 🔔 】",
body: '🤖 Uso De Un Comando 📥',
thumbnailUrl: 'https://files.catbox.moe/qtdb1u.jpg',
sourceUrl: 'https://dash.host-cuervo.shop',
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })

}
handler.help = ['ytsearch']
handler.tags = ['search']
handler.command = ['playlist', 'ytbuscar', 'yts', 'ytsearch']
handler.group = true

export default handler
