/* 
- Downloader Terabox By Angel-OFC 
- https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y
*/
import axios from 'axios';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Ejemplo:\n${usedPrefix + command} https://terabox.com/s/1kReYr_2pyxLZ2c2kEAHF3A`);
await m.react('🕓')
  try {
    const result = await terabox(text);
    if (!result.length) return m.reply('ingresa un url válido.');
    const nombre = await conn.getName(m.sender)
    for (let i = 0; i < result.length; i++) {
      const { fileName, type, thumb, url } = result[i];
      const caption = `📄 *Nombre File:* ${fileName}\n📂 *Formato:* ${type}`;

      await m.react('✅')      
      await conn.sendFile(m.chat, url, fileName, caption, m, false, {
        thumbnail: thumb ? await getBuffer(thumb) : null
      });
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
  } catch (err) {
    console.error(err);
    m.reply('error al descargar el archivo.');
  }
};
handler.help = ["terabox *<url>*"];
handler.tags = ["dl"];
handler.command = ["terabox"];

export default handler;

async function terabox(url) {
  return new Promise(async (resolve, reject) => {
    await axios
      .post('https://teradl-api.dapuntaratya.com/generate_file', {
        mode: 1,
        url: url
      })
      .then(async (a) => {
        const array = [];
        for (let x of a.data.list) {
          let dl = await axios
            .post('https://teradl-api.dapuntaratya.com/generate_link', {
              js_token: a.data.js_token,
              cookie: a.data.cookie,
              sign: a.data.sign,
              timestamp: a.data.timestamp,
              shareid: a.data.shareid,
              uk: a.data.uk,
              fs_id: x.fs_id
            })
            .then((i) => i.data)
            .catch((e) => e.response);

          if (!dl.download_link) continue;

          array.push({
            fileName: x.name,
            type: x.type,
            thumb: x.image,
            url: dl.download_link.url_1
          });
        }
        resolve(array);
      })
      .catch((e) => reject(e.response.data));
  });
}


async function getBuffer(url) {
  try {
    const res = await axios({
      method: 'get',
      url,
      responseType: 'arraybuffer'
    });
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
