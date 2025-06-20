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
    let bonus = '⌬ Ꭱꭼꮇ Ꮯꮋꭺɴ Ꮃꮋꭺ - Ᏼꮻꭲ by Ꮪꮖɴꮻꮇᏼꭱꭼ913';
    let txt = `
 ╭━━━━━━━✦✗✦━━━━━━━━
> ┋✣➸ Hola?? ${name2}
> ┋✣➸ Tenemos Diversas
> ┋✣➸ Opciones En Los 
> ┋✣➸ Botones Escoja 
> ╰◆━━━━━━◆❃◆━━━━━━◆
> ╭─────────────⦁
> │ ‣ ︎  *Opciones* 
> │ 
> │ ‣ ︎  ${usedPrefix}allmenu
> │ ‣ ︎  ${usedPrefix}group
> │ ‣ ︎  ${usedPrefix}system
> │ ‣ ︎  ${usedPrefix}ping
> │ ‣ ︎  ${usedPrefix}stest
> │ ‣ ︎  ${usedPrefix}owner
> ╰─────────────⦁
`;

await conn.sendButton2(m.chat, txt, bonus, img, [
['MI MENU COMPLETO !!', `${usedPrefix}allmenu`],
['MIS ENLACES !!', `${usedPrefix}group`],
['MI CREADOR !!', `${usedPrefix}owner`]
], null, [['HOST CUERVO', host]], m);
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
}


handler.tags = ['main']
handler.command = handler.help = ['menu', 'help', 'menú'] 

export default handler
