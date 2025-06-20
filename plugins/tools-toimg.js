import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
const notStickerMessage = `🚩 Responde a un *Sticker.*`
if (!m.quoted) return conn.reply(m.chat, notStickerMessage, m, rcanal)
const q = m.quoted || m
let mime = q.mediaType || ''
if (!/sticker/.test(mime)) return conn.reply(m.chat, notStickerMessage, m, rcanal)
await m.react('🕓')
try {
const nombre = await conn.getName(m.sender)
let media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'thumbnail.jpg', listo, m, null, rcanal)
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
handler.help = ['toimg *<sticker>*']
handler.tags = ['sticker', 'tools']
handler.command = ['toimg', 'jpg', 'aimg'] 
handler.register = true

export default handler