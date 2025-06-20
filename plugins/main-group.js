/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
let handler = async(m, { conn, usedPrefix, command }) => {
    let nombre = await conn.getName(m.sender)
    let img = 'https://files.catbox.moe/qtdb1u.jpg';
    let bonus = '⌬ Ꭱꭼꮇ Ꮯꮋꭺɴ Ꮃꮋꭺ - Ᏼꮻꭲ by Ꮪꮖɴꮻꮇᏼꭱꭼ𝟿𝟷𝟹';
    let txt = `
╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║➤ *𝗛ola, ${nombre}.*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║    *◉— ᴳʳᵒᵘᵖ ᴿᵉᵐᵂʰᵃ-ᴮᵒᵗ —◉*
║ https://chat.whatsapp.com/FaNQ1elPcm34hjTn4a44Kq
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║    *◉— ᶜʰᵃⁿⁿᵉˡ ᴿᵉᵐᵂʰᵃ-ᴮᵒᵗ —◉*
║ https://whatsapp.com/channel/0029VbBBfdLCXC3RJRicY51t
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║    *◉— ᶜʳᵉᵃᵗᵒʳ ᴿᵉᵐᵂʰᵃ-ᴮᵒᵗ —◉*
║ https://wa.me/8562099154238
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯
`;

await conn.sendButton2(m.chat, txt, bonus, img, [
['MI MENU COMPLETO !!', `${usedPrefix}allmenu`],
['MI INFORMACIÓN !!', `${usedPrefix}system`]
], null, [['HOST CUERVO', host]], m);
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

handler.help = ['group', 'allmenu']
handler.tags = ['main']
handler.command = ['group', 'grupos', 'groups', 'grupo'] 

export default handler
