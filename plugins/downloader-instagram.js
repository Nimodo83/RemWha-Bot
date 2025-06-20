import { igdl } from 'ruhend-scraper';

const handler = async (m, { args, conn, usedPrefix, command }) => {
  if (!args[0]) {
    return conn.reply(m.chat, `Por favor, ingresa un enlace de Instagram.`, m, rcanal);
  }

  try {
    const res = await igdl(args[0]);
    const data = res.data;
    const nombre = await conn.getName(m.sender)

    for (let media of data) {
      await conn.sendFile(m.chat, media.url, 'instagram.mp4', `Aqui tienes ${nombre} ฅ^•ﻌ•^ฅ.`, m, null, rcanal);
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
  } catch (e) {
    return conn.reply(m.chat, `Ocurrió un error.`, m, rcanal);
  }
};

handler.command = ['instagram', 'ig'];
handler.tags = ['dl'];
handler.help = ['instagram', 'ig'];
handler.group = true;
export default handler;