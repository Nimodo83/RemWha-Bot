import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
const nombre = await conn.getName(m.sender)
if (!args || !args[0]) return conn.reply(m.chat, '🚩 Ingresa el enlace del vídeo de Facebook junto al comando.\n\n`Ejemplo:`\n' + `> *${usedPrefix + command}* https://www.facebook.com/official.trash.gang/videos/873759786348039/?mibextid=rS40aB7S9Ucbxw6v`, m, rcanal)
await m.react('🕓')
try {
let { dl_url } = await Starlights.fbdl(args[0])
await conn.sendFile(m.chat, dl_url, 'fbdl.mp4', listo, m, null, rcanal)
await m.react('✅')
  await conn.sendMessage(channelid, { text: `╭─────────────⦁\n│╭➟ ≡ El Usuario ${nombre}\n││➟ ▢ A Usado El Comando ${usedPrefix + command}\n│╰➟ ⌬ Ꭱꭼꮇ Ꮯꮋꭺɴ Ꮃꮋꭺ - Ᏼꮻꭲ`, contextInfo: {
externalAdReply: {
title: "【 🔔 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢́𝗡 🔔 】",
body: '🤖 Uso De Un Comando 📥',
thumbnailUrl: 'https://files.catbox.moe/qtdb1u.jpg',
sourceUrl: 'https://dash.host-cuervo.shop',
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })
} catch {
await m.react('✖️')
}}
handler.help = ['fb *<link fb>*']
handler.tags = ['downloader'] 
handler.command = /^(facebook|fb|facebookdl|fbdl)$/i
handler.group = true
export default handler