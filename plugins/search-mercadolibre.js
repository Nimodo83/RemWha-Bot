/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
import axios from 'axios';
import cheerio from 'cheerio';

let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
if (!text) throw conn.reply(m.chat, `✐ *Formato incorrecto*\n*Ejemplo:*\n\n${usedPrefix + command}  TV Pantalla plana`, m, rcanal);
const nombre = await conn.getName(m.sender)
let res = await mercado(text);
let libre = '`✐ M E R C A D O - L I B R E`\n\n';
const coin = 1;
for (let i = 0; i < limit && i < res.length; i++) {
let link = res[i].link.length > 30 ? res[i].link.substring(0, 30) + '...' : res[i].link;
libre += `*🜸 Nombre:* ${res[i].title}\n*🜸 Estado:* ${res[i].state}\n*🜸 Link:* ${res[i].link}\n`;
libre += '\n' + '••••••••••••••••••••••••' + '\n';
}
  await conn.reply(m.chat, libre, m, rcanal)
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
} catch (error) {
}};
handler.help = ['mercadolibre <búsqueda>']
handler.tags = ['search']
handler.command = ['mercadolibre']
handler.group = true
export default handler;

async function mercado(query) {
try {
const url = `https://listado.mercadolibre.com.mx/${query}`;
const response = await axios.get(url);
const html = response.data;
const $ = cheerio.load(html);
const results = $('.ui-search-layout__item').map((i, element) => {
const title = $(element).find('.ui-search-item__title').text();
const state = $(element).find('.ui-search-item__group__element').last().text().trim();
const link = $(element).find('a').attr('href');
return {
title,
state,
link
};
}).get();
return results;
} catch (error) {
}}
