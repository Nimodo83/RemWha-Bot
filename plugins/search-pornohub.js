//Créditos del código DanielDiod 

import cheerio from 'cheerio';
import axios from 'axios';
import fetch from 'node-fetch';

let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw conn.reply(m.chat, `*Formato incorrecto*\nEjemplo:\n\n${usedPrefix + command} con mi prima`, m, rcanal);
try {
const nombre = await conn.getName(m.sender)
let searchResults = await searchPornhub(args[0]);
let teks = searchResults.result.map((v, i) => 
`「 *P O R N H U B  - S E A R C H* 」
• *Título:* ${v.title}
• *Duración:* ${v.duration}
• *Vistas:* ${v.views}
• *Link:* ${v.url}
---------------------------------------------------\n`).join('\n\n');
if (searchResults.result.length === 0) {
teks = '*Sin resultados*';
}
await conn.reply(m.chat, teks, m, rcanal);
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
} catch (e) {
}};
handler.tags = ['search'] 
handler.help = ['pornhubsearch *<texto>*'] 
handler.command = /^(phsearch|pornhubsearch)$/i;
export default handler;
async function searchPornhub(search) {
  try {
    const response = await axios.get(`https://www.pornhub.com/video/search?search=${search}`);
    const html = response.data;
    const $ = cheerio.load(html);
    const result = [];
    $('ul#videoSearchResult > li.pcVideoListItem').each(function(a, b) {
      const _title = $(b).find('a').attr('title');
      const _duration = $(b).find('var.duration').text().trim();
      const _views = $(b).find('var.views').text().trim();
      const _url = 'https://www.pornhub.com' + $(b).find('a').attr('href');
      const hasil = { title: _title, duration: _duration, views: _views, url: _url };
      result.push(hasil);
    });

    return { result };
  } catch (error) {
    console.error('Ocurrió un error al buscar en Pornhub:', error);
    return { result: [] };
  }
}