//import _0x2727x1 from '\x63\x68\x69\x6C\x64\x5F\x70\x72\x6F\x63\x65\x73\x73';
//import {promisify as _0x2727x2} from '\x75\x74\x69\x6C';
//const _0x2727=['\x65\x78\x65\x63','\x62\x69\x6E\x64','\x63\x68\x61\x74','\x72\x65\x70\x6C\x79','\x53\x70\x65\x65\x64\x20\x54\x65\x73\x74\x2E\x2E\x2E','\x70\x79\x74\x68\x6F\x6E\x33\x20\x2E\x2F\x6C\x69\x62\x2F\x73\x70\x65\x65\x64\x2E\x70\x79\x20\x2D\x2D\x73\x65\x63\x75\x72\x65\x20\x2D\x2D\x73\x68\x61\x72\x65','\x73\x74\x64\x6F\x75\x74','\x74\x72\x69\x6D','\x6D\x61\x74\x63\x68','\x68\x74\x74\x70\x5B\x5E\x22\x5D\x2B\x5C\x2E\x70\x6E\x67','\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65','\x69\x6D\x61\x67\x65','\x75\x72\x6C','\x63\x61\x70\x74\x69\x6F\x6E','\x71\x75\x6F\x74\x65\x64','\x73\x74\x64\x65\x72\x72','\x6D\x2E\x72\x65\x70\x6C\x79','\x6D\x65\x73\x73\x61\x67\x65','\x68\x65\x6C\x70','\x73\x70\x65\x65\x64\x74\x65\x73\x74','\x74\x61\x67\x73','\x69\x6E\x66\x6F','\x63\x6F\x6D\x6D\x61\x6E\x64','\x73\x74\x65\x73\x74','\x67\x72\x6F\x75\x70'];const exec=_0x2727x2(_0x2727x1[_0x2727[0]])[_0x2727[1]](_0x2727x1);const handler=async(_0x2727x3)=>{let _0x2727x4;try{conn[_0x2727[3]](_0x2727x3[_0x2727[2]],_0x2727[4],_0x2727x3);_0x2727x4=await exec(_0x2727[5]);const{stdout:_0x2727x5,stderr:_0x2727x6}=_0x2727x4;if(_0x2727x5[_0x2727[7]]()){const _0x2727x7=_0x2727x5[_0x2727[8]](_0x2727[9]);const _0x2727x8=_0x2727x7?_0x2727x7[0x0]:null;await conn[_0x2727[10]](_0x2727x3[_0x2727[2]],{image:{url:_0x2727x8},caption:_0x2727x5[_0x2727[7]]()},{quoted:fkontak})}if(_0x2727x6[_0x2727[7]]()){const _0x2727x9=_0x2727x6[_0x2727[8]](_0x2727[9]);const _0x2727xa=_0x2727x9?_0x2727x9[0x0]:null;await conn[_0x2727[10]](_0x2727x3[_0x2727[2]],{image:{url:_0x2727xa},caption:_0x2727x6[_0x2727[7]]()},{quoted:_0x2727x3})}}catch(_0x2727xb){_0x2727x4=_0x2727xb[_0x2727[17]];return _0x2727x3[_0x2727[16]](_0x2727x4)}};handler[_0x2727[18]]=[_0x2727[19]];handler[_0x2727[20]]=[_0x2727[21]];handler[_0x2727[22]]=[_0x2727[19],_0x2727[23]];handler[_0x2727[24]]=true;export default handler;

import cp from 'child_process';
import { promisify } from 'util';
const exec = promisify(cp.exec).bind(cp);

const handler = async (m, { usedPrefix, command }) => {
    let o;
    const nombre = await conn.getName(m.sender)
    try {
      conn.reply(m.chat, `Speed Test....`, m, rcanal)
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
      o = await exec('python3 ./lib/speed.py --secure --share');
        const {stdout, stderr} = o;
        if (stdout.trim()) {
            const match = stdout.match(/http[^"]+\.png/);
            const urlImagen = match ? match[0] : null;
            //await conn.sendMessage(m.chat, {image: {url: urlImagen}, caption: stdout.trim()}, {quoted: m });
            await conn.sendFile(m.chat, urlImagen, 'img-error.jpg', stdout.trim(), m, null, rcanal)
        }
        if (stderr.trim()) { 
            const match2 = stderr.match(/http[^"]+\.png/);
            const urlImagen2 = match2 ? match2[0] : null;    
            //await conn.sendMessage(m.chat, {image: {url: urlImagen2}, caption: stderr.trim()}, {quoted: m });
            await conn.sendFile(m.chat, urlImagen2, 'img-error.jpg', stderr.trim(), m, null, rcanal)
        }
    } catch (e) {
        o = e.message;
        return m.reply(o)
    }
};
handler.help = ['speedtest'];
handler.tags = ['info'];
handler.command = ['speedtest', 'stest'];
handler.group = true;

export default handler;
