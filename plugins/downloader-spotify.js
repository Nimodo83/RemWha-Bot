/* 

*❀ By JTxs*

[ Canal Principal ] :
https://whatsapp.com/channel/0029VaeQcFXEFeXtNMHk0D0n

[ Canal Rikka Takanashi Bot ] :
https://whatsapp.com/channel/0029VaksDf4I1rcsIO6Rip2X

[ Canal StarlightsTeam] :
https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S

[ HasumiBot FreeCodes ] :
https://whatsapp.com/channel/0029Vanjyqb2f3ERifCpGT0W
*/

// *[ ❀ SPOTIFY PLAY ]*
import fetch from 'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `❀ Ingresa el texto de lo que quieras buscar`, m)

try {
let apiSearch = await fetch(`https://api.vreden.web.id/api/spotifysearch?query=${text}`)
let jsonSearch = await apiSearch.json()
let { popularity, url } = jsonSearch.result[0]
let apiDL = await fetch(`https://api.vreden.web.id/api/spotify?url=${url}`)
let jsonDL = await apiDL.json()
let { title, artists, cover, music } = jsonDL.result.result  
const nombre = await conn.getName(m.sender)
let HS = `- *Titulo :* ${title}
- *autor :* ${artists}
- *Popularidad :* ${popularity}
- *Link :* ${url}
`
await conn.sendFile(m.chat, cover, 'HasumiBotFreeCodes.jpg', HS, m, null, rcanal)
await conn.sendFile(m.chat, music, 'HasumiBotFreeCodes.mp4', m, null, rcanal)
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
} catch (error) {
console.error(error)
}}

handler.command = handler.help = ['spotify']
handler.tags = ['dl']
handler.group = true 
export default handler