//let handler=async(_0x56a6x1,{conn:_0x56a6x2})=>{let _0x56a6x3=Object['\x76\x61\x6C\x75\x65\x73'](global['\x70\x6C\x75\x67\x69\x6E\x73'])['\x66\x69\x6C\x74\x65\x72'](_0x56a6x4=>_0x56a6x4['\x63\x6F\x6D\x6D\x61\x6E\x64']&&_0x56a6x4['\x74\x61\x67\x73'])['\x6C\x65\x6E\x67\x74\x68'];_0x56a6x2['\x72\x65\x70\x6C\x79'](_0x56a6x1['\x63\x68\x61\x74'],'\x2A\x🎩\x20\x54\x6F\x74\x61\x6C\x20\x64\x65\x20\x46\x75\x6E\x63\x69\x6F\x6E\x65\x73\x2A\x20\x3A\x20'+_0x56a6x3,_0x56a6x1,rcanal)};handler['\x74\x61\x67\x73']=['\x6D\x61\x69\x6E'];handler['\x63\x6F\x6D\x6D\x61\x6E\x64']=handler['\x68\x65\x6C\x70']=['\x74\x6F\x74\x61\x6C\x66\x75\x6E\x63\x69\x6F\x6E\x65\x73','\x63\x6F\x6D\x61\x6E\x64\x6F\x73','\x66\x75\x6E\x63\x69\x6F\x6E\x65\x73'];handler['\x67\x72\x6F\x75\x70']=true;export default handler;

let handler = async (m, { conn, usedPrefix, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `*Total de Funciones* : ${totalf}`,m,rcanal)
  const nombre = await conn.getName(m.sender)
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

handler.tags = ['main']
handler.command = handler.help = ['totalfunciones', 'comandos', 'funciones']
handler.group = true
export default handler 
