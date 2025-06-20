/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
import { search, download } from 'aptoide-scraper'

var handler = async (m, {conn, usedPrefix, command, text}) => {
if (!text) return conn.reply(m.chat, '✐ *Ingrese el nombre de la apk para descargarlo.*', m, rcanal)
try {
 const nombre = await conn.getName(m.sender)
conn.reply(m.chat, '✐ *Descargando su aplicación...*', m, rcanal)
let searchA = await search(text)
let data5 = await download(searchA[0].id)
let txt = `*✐  APTOIDE - DESCARGAS*\n\n`
txt += `🜸 *Nombre* : ${data5.name}\n`
txt += `🜸 *Package* : ${data5.package}\n`
txt += `🜸 *Update* : ${data5.lastup}\n`
txt += `🜸 *Peso* :  ${data5.size}`
await conn.sendFile(m.chat, data5.icon, 'thumbnail.jpg', txt, m, null, rcanal) 
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await conn.reply(m.chat, '✐ *El archivo es demaciado pesado*', m, rcanal)}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: txtl}, {quoted: m})
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
return conn.reply(m.chat, '✐ *Ocurrió un fallo*', m, rcanal)}}

handler.tags = ['dl']
handler.help = ['apk']
handler.command = ['apk', 'modapk', 'aptoide']
handler.group = true

export default handler
