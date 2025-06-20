//import _0x27f2x1 from '\x6E\x6F\x64\x65\x2D\x67\x74\x74\x73';
//import {readFileSync as _0x27f2x2,unlinkSync as _0x27f2x3} from '\x66\x73';
//import {join as _0x27f2x4} from '\x70\x61\x74\x68';
//const _0x27f2=['\x65\x73\x2D\x65\x73','\x71\x75\x6F\x74\x65\x64','\x74\x65\x78\x74','\x6C\x65\x6E\x67\x74\x68','\x6A\x6F\x69\x6E','\x72\x65\x70\x6C\x79','\x63\x68\x61\x74','\x2A\x5B\x21\xEF\xBF\xBD\x49\x4E\x46\x4F\xEF\xBF\xBD\x5D\n\x2A\n\x24\x7B\x75\x73\x65\x64\x50\x72\x65\x66\x69\x78\x7D\x24\x7B\x63\x6F\x6D\x6D\x61\x6E\x64\x7D\x20\x65\x6E\20\x68\x65\x6C\x6C\x6F\x20\x77\x6F\x72\x6C\x64','\x73\x65\x6E\x64\x46\x69\x6C\x65','\x74\x74\x73\x2E\x6F\x70\x75\x73','\x68\x65\x6C\x70','\x63\x6F\x6D\x6D\x61\x6E\x64','\x74\x74\x73\x20\x3C\x6C\x61\x6E\x67\x3E\x20\x3C\x74\x65\x6B\x73\x3E','\x74\x61\x67\x73','\x74\x6F\x6F\x6C\x73','\x67\x72\x6F\x75\x70','\x63\x6F\x6E\x73\x6F\x6C\x65','\x6C\x6F\x67','\x50\x72\x6F\x6D\x69\x73\x65','\x5F\x5F\x64\x69\x72\x6E\x61\x6D\x65','\x2E\x2E\x2F\x74\x6D\x70','\x2E\x77\x61\x76','\x73\x61\x76\x65'];const defaultLang=_0x27f2[0];let handler=async(_0x27f2x5,{conn:_0x27f2x6,args:_0x27f2x7,usedPrefix:_0x27f2x8,command:_0x27f2x9})=>{let _0x27f2xa=_0x27f2x7[0x0];let _0x27f2xb=_0x27f2x7[_0x27f2[4]](0x1)[_0x27f2[4]]('\x20');if((_0x27f2x7[0x0]||'')[_0x27f2[3]]!==0x2){_0x27f2xa=defaultLang;_0x27f2xb=_0x27f2x7[_0x27f2[4]]('\x20')}if(!_0x27f2xb&&_0x27f2x5[_0x27f2[1]]?.[_0x27f2[2]])_0x27f2xb=_0x27f2x5[_0x27f2[1]][_0x27f2[2]];let _0x27f2xc;try{_0x27f2xc=await tts(_0x27f2xb,_0x27f2xa)}catch(_0x27f2xd){_0x27f2x5[_0x27f2[5]](_0x27f2xd+'');_0x27f2xb=_0x27f2x7[_0x27f2[4]]('\x20');if(!_0x27f2xb)throw _0x27f2x6[_0x27f2[5]](_0x27f2x5[_0x27f2[6]],_0x27f2[7],_0x27f2x5,_0x27f2e);_0x27f2xc=await tts(_0x27f2xb,defaultLang)}finally{if(_0x27f2xc)_0x27f2x6[_0x27f2[8]](_0x27f2x5[_0x27f2[6]],_0x27f2xc,_0x27f2[9],null,_0x27f2x5,true)}};handler[_0x27f2[10]]=handler[_0x27f2[11]]=[_0x27f2[12]];handler[_0x27f2[13]]=[_0x27f2[14]];handler[_0x27f2[15]]=true;export default handler;function tts(_0x27f2x11,_0x27f2x12=_0x27f2[0]){_0x27f2[16][_0x27f2[17]](_0x27f2x12,_0x27f2x11);return new _0x27f2[18]((_0x27f2x13,_0x27f2x14)=>{try{let _0x27f2x15=_0x27f2x1(_0x27f2x12);let _0x27f2x16=_0x27f2x4(global[_0x27f2[19]](import[_0x27f2[4]]('\x75\x72\x6C')),_0x27f2[20],(0x1*new Date)+_0x27f2[21]);_0x27f2x15[_0x27f2[22]](_0x27f2x16,_0x27f2x11,()=>{_0x27f2x13(_0x27f2x2(_0x27f2x16));_0x27f2x3(_0x27f2x16)})}catch(_0x27f2xd){_0x27f2x14(_0x27f2xd)}})}

import gtts from 'node-gtts'
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'

const defaultLang = 'es-es'
let handler = async (m, { conn, args, usedPrefix, command }) => {

  const nombre = await conn.getName(m.sender)
  let lang = args[0]
  let text = args.slice(1).join(' ')
  if ((args[0] || '').length !== 2) {
    lang = defaultLang
    text = args.join(' ')
  }
  if (!text && m.quoted?.text) text = m.quoted.text

  let res
  try { res = await tts(text, lang) }
  catch (e) {
    m.reply(e + '')
    text = args.join(' ')
    if (!text) throw conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗]\n${usedPrefix}${command} en hello world`, m, rcanal)
    res = await tts(text, defaultLang)
  } finally {
    if (res) conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
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
}
handler.help = handler.command = ['tts <lang> <teks>']
handler.tags = ['tools']
handler.group = true 

export default handler

function tts(text, lang = 'es-es') {
  console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath))
        unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}
