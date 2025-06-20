/*import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true

  let who = m.messageStubParameters[0]
  let taguser = `@${who.split('@')[0]}`
  let chat = global.db.data.chats[m.chat]
  let defaultImage = ;

  if (chat.welcome) {
    let img;
    try {
      let pp = await conn.profilePictureUrl(who, 'image');
      img = await (await fetch(pp)).buffer();
    } catch {
      img = await (await fetch(defaultImage)).buffer();
    }

  const welcomeMessage = global.db.data.chats[m.chat]?.welcomeMessage || '> edita con /setwelcome';

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
    let bienvenida = `╭┈──̇─̇─̇────̇─̇─̇──◯◝
┊ *「 ${groupMetadata.subject} 」*
┊︶︶︶︶︶︶︶︶︶❀࿆⃧፝྅⃕
┊ *\`ゲ◜៹ New Member ៹◞ゲ\`*
┊╭┈──̇─̇─̇───᭥ꩌ゚໋.ᩦ୭✧ࣶᭂ
┊╰┈─➤ ❝ @${m.messageStubParameters[0].split`@`[0]} ❞
┊ ︿︿︿︿︿︿︿︿︿︿︿
╰─────────────────╯\n${welcomeMessage}`
      await conn.sendMessage(m.chat, { image: img, caption: bienvenida, mentions: [who] }, { quoted: null })
    } else if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE || m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE) {

const despMessage = global.db.data.chats[m.chat]?.despMessage || '> Edita Con /setbye';

     let bye = `╭┈──̇─̇─̇────̇─̇─̇──◯◝
┊ *「 ${groupMetadata.subject} 」*
┊︶︶︶︶︶︶︶︶︶❀࿆⃧፝྅⃕
┊ *\`ゲ◜៹ Bye Member ៹◞ゲ\`*
┊╭┈──̇─̇─̇───᭥ꩌ゚໋.ᩦ୭✧ࣶᭂ
┊╰┈─➤ ❝ @${m.messageStubParameters[0].split`@`[0]} ❞
┊ ︿︿︿︿︿︿︿︿︿︿︿
╰─────────────────╯\n${despMessage}`
      await conn.sendMessage(m.chat, { image: img, caption: bye, mentions: [who] }, { quoted: null })
    }
  }

  return true
}*/

import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true


  let who = m.messageStubParameters[0]
  let taguser = `@${who.split('@')[0]}`
  let chat = global.db.data.chats[m.chat]
  
  if (chat.welcome) {
  
  