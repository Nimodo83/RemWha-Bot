//Function handler(_0x1634x1){let _0x1634x2=_0x1634x0['\x67\x65\x74\x4E\x61\x6D\x65']('\x38\x35\x36\x32\x30\x39\x39\x31\x35\x34\x32\x33\x38\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74');let _0x1634x3=_0x1634x0['\x73\x65\x6E\x64\x43\x6F\x6E\x74\x61\x63\x74'](_0x1634x1['\x63\x68\x61\x74'],[[_0x1634x0['\x6F\x77\x6E\x65\x72\x4E\x75\x6D'],_0x1634x2]],_0x1634x1,{contextInfo:{forwardingScore:0x7e7,isForwarded:false,externalAdReply:{title:_0x1634x0['\x70\x61\x63\x6B\x6E\x61\x6D\x65'],body:_0x1634x0['\x62\x6F\x74\x6E\x61\x6D\x65'],sourceUrl:_0x1634x0['\x68\x6F\x73\x74'],thumbnail:_0x1634x0['\x69\x6D\x67'],thumbnailUrl:_0x1634x0['\x69\x6D\x67'],mediaType:0x1,showAdAttribution:true,renderLargerThumbnail:true}}},{quoted:_0x1634x1})}handler['\x74\x61\x67\x73']=['\x6D\x61\x69\x6E'];handler['\x63\x6F\x6D\x6D\x61\x6E\x64']=handler['\x68\x65\x6C\x70']=['\x6F\x77\x6E\x65\x72','\x63\x72\x65\x61\x74\x6F\x72','\x63\x72\x65\x61\x64\x6F\x72','\x64\x75\x65\xC3\xB1\x6F'];export default handler;

const handler = async (m, { usedPrefix, command }) {
  const nombre = await conn.getName(m.sender)
let name = conn.getName('8562099154238@s.whatsapp.net')
let ownerN = '8562099154238'
conn.sendContact(m.chat, [['8562099154238@s.whatsapp.net', `${name}`]], m, {
 contextInfo: { 
 forwardingScore: 2023,
isForwarded: false, 
 externalAdReply: {  
 title: 'Rєм Ƈнαη - Ɓσт', 
 body: 'Ꭱꭼꮇ Ꮯꮋꭺɴ Ꮃꮋꭺ - Ᏼꮻꭲ By Ꮪꮖɴꮻꮇᏼꭱꭼ𝟿𝟷𝟹',
 sourceUrl: 'https://dash.host-cuervo.shop', 
 thumbnail: 'https://files.catbox.moe/ldiqpu.jpg',
 thumbnailUrl: 'https://files.catbox.moe/ldiqpu.jpg', 
 mediaType: 1,
 showAdAttribution: true, 
 renderLargerThumbnail: true 
 }
   }
     },
       {
         quoted: m
           }
             );
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
handler.command = handler.help = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
