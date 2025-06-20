/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
import fetch from 'node-fetch'
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) return conn.reply(m.chat, `✐ *Ingrese el nombre de un repositorio de github*\n\nEjemplo, ${usedPrefix + command} Cuervo-Team-Supreme.`, m, rcanal)
try {
const res = await fetch(global.API('https://api.github.com', '/search/repositories', {
q: text,
}))
const nombre = await conn.getName(m.sender)
const json = await res.json()
if (res.status !== 200) throw json
let str = json.items.map((repo, index) => {
return `
✐ *Resultado:* ${1 + index}
🜸 *Enlace:* ${repo.html_url}
🜸 *Creador:* ${repo.owner.login}
🜸 *Nombre:* ${repo.name}
🜸 *Creado:* ${formatDate(repo.created_at)}
🜸 *Actualizado:* ${formatDate(repo.updated_at)}
🜸 *Visitas:* ${repo.watchers}
🜸 *Bifurcado:* ${repo.forks}
🜸 *Estrellas:* ${repo.stargazers_count}
🜸 *Issues:* ${repo.open_issues}
🜸 *Descripción:* ${repo.description ? `${repo.description}` : 'Sin Descripción'}
🜸 *Clone:* ${repo.clone_url}
`.trim()}).join('\n\n─────────────────\n\n') 
// await m.react(done)
let img = await (await fetch(json.items[0].owner.avatar_url)).buffer()
//await conn.sendMini(m.chat, '✐ G I T H U B - S E A R C H', dev, str, img, img, enlace, estilo)
await conn.sendButton2(m.chat, str, '✐ G I T H U B - S E A R C H', img, [
['MI MENU !!', `${usedPrefix}men`],
['MI CREADOR !!', `${usedPrefix}owner`]
], null, [['!! HOST CUERVO ¡¡', host]], m);
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
await m.react(done)
conn.reply(m.chat, '✐ *No se encontró resultados de:* ' + text, m, rcanal)}}
handler.help = ['githubsearch']
handler.tags = ['search']
handler.command = ['githubsearch']
handler.group = true
export default handler 

function formatDate(n, locale = 'es') {
const d = new Date(n)
return d.toLocaleDateString(locale, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})}
