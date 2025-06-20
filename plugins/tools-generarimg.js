//import _0x2719x1 from '\x6E\x6F\x64\x65\x2D\x66\x65\x74\x63\x68';
//const _0x2719=['\x72\x65\x70\x6C\x79','\x63\x68\x61\x74','\x2A\xF0\x9F\x91\xA8\x20\x49\x6E\x67\x72\x65\x73\x61\x20\x75\x6E\x20\x74\x65\x78\x74\x20\x70\x61\x72\x61\x20\x67\x65\x6E\x65\x72\x61\x72\x20\x74\x75\x20\x69\x6D\x61\x67\x65\x6E\x20\x61\x20\x74\x75\x20\x67\x75\x73\x74\x2A','\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65','\x74\x65\x78\x74','\x2A\xF0\x9F\x91\xA8\x20\x45\x73\x70\x65\x72\x65\x2C\x20\x45\x73\x74\x61\x6D\x6F\x73\x20\x54\x72\x61\x62\x61\x6A\x61\x6E\x64\x6F\x20\x65\x6E\x20\x73\x75\x20\x69\x6D\x61\x67\x65\x6E\x2A','\x71\x75\x6F\x74\x65\x64','\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x64\x6F\x72\x72\x61\x74\x7A\x2E\x63\x6F\x6D\x2F\x76\x33\x2F\x74\x65\x78\x74\x2D\x69\x6D\x61\x67\x65\x3F\x74\x65\x78\x74\x3D','\x66\x6F\x6E\x74\x53\x69\x7A\x65\x3D\x35\x30','\x6F\x6B','\x4E\x65\x74\x77\x6F\x72\x6B\x20\x72\x65\x73\x70\x6F\x6E\x73\x65\x20\x77\x61\x73\x20\x6E\x6F\x74\x20\x6F\x6B','\x62\x75\x66\x66\x65\x72','\x69\x6D\x61\x67\x65','\x63\x6F\x6E\x73\x6F\x6C\x65','\x65\x72\x72\x6F\x72','\x2A\x26\x61\x6C\x65\x72\x74\x3B\x20\x4C\x6F\x20\x73\x65\x6E\x74\x69\x6D\x6F\x73\x2C\x20\x68\x61\x20\x6F\x63\x75\x72\x72\x69\x64\x6F\x20\x75\x6E\x20\x65\x72\x72\x6F\x72\x20\xF0\x9F\x98\A5\x2A','\x74\x61\x67\x73','\x74\x6F\x6F\x6C\x73','\x68\x65\x6C\x70','\x63\x6F\x6D\x6D\x61\x6E\x64','\x74\x65\x78\x74\x69\x6D\x67','\x69\x6D\x67\x67','\x67\x72\x6F\x75\x70'];const handler=async(_0x2719x2,{conn:_0x2719x3,text:_0x2719x4,usedPrefix:_0x2719x5,command:_0x2719x6})=>{if(!_0x2719x4)throw _0x2719x3[_0x2719[0]](_0x2719x2[_0x2719[1]],_0x2719[2],_0x2719x2,rcanal);await _0x2719x3[_0x2719[3]](_0x2719x2[_0x2719[1]],{[_0x2719[4]]:_0x2719[5]},{[_0x2719[6]]:_0x2719x2});try{const _0x2719x7=await _0x2719x1(`${_0x2719[7]}${encodeURIComponent(_0x2719x4)}&${_0x2719[8]}`);if(!_0x2719x7[_0x2719[9]])throw new Error(_0x2719[10]);const _0x2719x8=await _0x2719x7[_0x2719[11]]();await _0x2719x3[_0x2719[3]](_0x2719x2[_0x2719[1]],{[_0x2719[12]]:_0x2719x8},{[_0x2719[6]]:_0x2719x2})}catch(_0x2719x9){_0x2719[13][_0x2719[14]](_0x2719x9);throw _0x2719x3[_0x2719[0]](_0x2719x2[_0x2719[1]],_0x2719[15],_0x2719x2,rcanal)}};handler[_0x2719[16]]=[_0x2719[17]];handler[_0x2719[18]]=handler[_0x2719[19]]=[_0x2719[20],_0x2719[21]];handler[_0x2719[22]]=true;export default handler;

import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw conn.reply(m.chat, `*🧑‍💻 Ingresa un texto para generar tu imagen a tu gusto*`, m, rcanal);
await conn.sendMessage(m.chat, {text: '*🧑‍💻 Espere, Estamos Trabajando en su imagen*'}, {quoted: m});
try {
const nombre = await conn.getName(m.sender)
const response = await fetch(`https://api.dorratz.com/v3/text-image?text=${encodeURIComponent(text)}&fontSize=50`);
if (!response.ok) throw new Error('Network response was not ok');
const buffer = await response.buffer();
await conn.sendMessage(m.chat, {image: buffer}, {quoted: m});
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
console.error(error);
throw conn.reply(m.chat,`*🚨 Lo sentimos, ha ocurrido un error 😔*`,m,rcanal);
}
}
handler.tags = ['tools'];
handler.help = handler.command = ['textimg', 'imgg'];
handler.group = true;
export default handler;
