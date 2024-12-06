import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch' 
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
try{
const { levelling } = '../lib/levelling.js'
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let user = global.db.data.users[m.sender]
//user.registered = false

let pp = gataVidMenu
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu)).buffer(), sourceUrl: redesMenu }}}

const temaX = [[]]

if (command == 'audioefectomenu'){ //audio
let menuA = `🎧 ${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱

⠇ ${lenguajeGB['smsTex2']()} 🧰
∘ _${usedPrefix}bass_
∘ _${usedPrefix}blown_
∘ _${usedPrefix}deep_
∘ _${usedPrefix}earrape_
∘ _${usedPrefix}fast_
∘ _${usedPrefix}fat_
∘ _${usedPrefix}nightcore_
∘ _${usedPrefix}reverse_
∘ _${usedPrefix}robot_
∘ _${usedPrefix}slow_
∘ _${usedPrefix}smooth_
∘ _${usedPrefix}tupai_
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex2']()} 🧰`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'buscarmenu'){ //buscador
let menuA = `🎈 ${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex1']()} 🔍
∘ _${usedPrefix}animeinfo *texto*_
∘ _${usedPrefix}mangainfo *texto*_
∘ _${usedPrefix}ia | chatgpt *texto*_ 
∘ _${usedPrefix}iavoz_
∘ _${usedPrefix}dalle | ia2 *texto*_
∘ _${usedPrefix}google *texto*_
∘ _${usedPrefix}letra | lirik *texto*_
∘ _${usedPrefix}ytsearch | yts *texto*_
∘ _${usedPrefix}spotifysearch_
∘ _${usedPrefix}wiki | wikipedia *texto*_
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex1']()} 🧰`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)


let menuA = `😏 ${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇
╰━━━✦ *${vs}* ✦━━━⬣
${wm}`,
title: null,
buttonText: lenguajeGB.smsList6(),
sections }
conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
  
  
} if (command == 'convertidormenu'){ //convertidor
let menuA = `📍 ${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex8']()} 🛰️
∘ _${usedPrefix}toimg | img | jpg *sticker*_
∘ _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
∘ _${usedPrefix}tovn | vn *video o audio*_
∘ _${usedPrefix}tovideo *audio*_
∘ _${usedPrefix}tourl *video, imagen*_
∘ _${usedPrefix}toenlace  *video, imagen o audio*_
∘ _${usedPrefix}tts es *texto*_
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex8']()}  🛰️`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)  

  
} if (command == 'descargasmenu'){ //descargas
let menuA = `🪄 ${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex9']()} 🚀
∘ _${usedPrefix}imagen | image *texto*_
∘ _${usedPrefix}pinterest | dlpinterest *texto*_
∘ _${usedPrefix}wallpaper|wp *texto*_
∘ _${usedPrefix}play | play2 *texto o link*_
∘ _${usedPrefix}play.1 *texto o link*_
∘ _${usedPrefix}play.2 *texto o link*_ 
∘ _${usedPrefix}ytmp3 | yta *link*_
∘ _${usedPrefix}ytmp4 | ytv *link*_
∘ _${usedPrefix}playdoc | play3 *texto o link*_
∘ _${usedPrefix}play4 | playdoc2 *texto o link*_
∘ _${usedPrefix}pdocaudio | ytadoc *link*_
∘ _${usedPrefix}pdocvieo | ytvdoc *link*_
∘ _${usedPrefix}tw | twdl | twitter *link*_
∘ _${usedPrefix}spotify | music *text*_
∘ _${usedPrefix}facebook | fb *link*_
∘ _${usedPrefix}instagram *link video o imagen*_
∘ _${usedPrefix}verig | igstalk *usuario(a)*_
∘ _${usedPrefix}ighistoria | igstory *usuario(a)*_
∘ _${usedPrefix}tiktok *link*_
∘ _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
∘ _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
∘ _${usedPrefix}mediafire | dlmediafire *link*_
∘ _${usedPrefix}clonarepo | gitclone *link*_
∘ _${usedPrefix}clima *país ciudad*_
∘ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'consejo' : 'advice'}_ 
∘ _${usedPrefix}frase_
∘ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'frase2' : 'phrase2'}_
∘ _${usedPrefix}morse codificar *texto*_
∘ _${usedPrefix}morse decodificar *morse*_
∘ _${usedPrefix}drive | dldrive *link*_
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex9']()} 🚀`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu }}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'juegosmenu'){ //fun
let menuA = `🎠 ${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex10']()} 🎡
∘ _${usedPrefix}mates | matemáticas | math_
∘ _${usedPrefix}ppt *piedra : papel : tijera*_
∘ _${usedPrefix}tictactoe | ttt *sala*_
∘ _${usedPrefix}deltictactoe | delttt_
∘ _${usedPrefix}topotakus_
∘ _${usedPrefix}toppajer@s_
∘ _${usedPrefix}topput@s_
∘ _${usedPrefix}topintegrantes | topintegrante_
∘ _${usedPrefix}toplagrasa | topgrasa_
∘ _${usedPrefix}toppanafrescos | toppanafresco_
∘ _${usedPrefix}topshiposters | topshipost_
∘ _${usedPrefix}toplindos | toplind@s_
∘ _${usedPrefix}topfamosos | topfamos@s_
∘ _${usedPrefix}topparejas | top5parejas_
∘ _${usedPrefix}manca *nombre : @tag*_
∘ _${usedPrefix}manco *nombre : @tag*_
∘ _${usedPrefix}pajero *nombre : @tag*_
∘ _${usedPrefix}pajera *nombre : @tag*_
∘ _${usedPrefix}puto *nombre : @tag*_
∘ _${usedPrefix}puta *nombre : @tag*_
∘ _${usedPrefix}rata *nombre : @tag*_
∘ _${usedPrefix}love *nombre : @tag*_
∘ _${usedPrefix}doxear *nombre : @tag*_
∘ _${usedPrefix}doxxeame_
∘ _${usedPrefix}pregunta *texto*_
∘ _${usedPrefix}apostar | slot *cantidad*_
∘ _${usedPrefix}formarpareja_
∘ _${usedPrefix}acentijo_
∘ _${usedPrefix}cancion_
∘ _${usedPrefix}adivinaza_
∘ _${usedPrefix}pelicula
∘ _${usedPrefix}dado_
∘ _${usedPrefix}verdad_
∘ _${usedPrefix}reto_
∘ _${usedPrefix}multijuegos_
∘ _${usedPrefix}ruleta_
∘ _${usedPrefix}suerte_
∘ _${usedPrefix}ruletadelban_
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex10']()} 🎡`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'grupomenu' || command == 'menugrupo'){ //grupo
let menuA = `🔰 ${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex11']()} 🌐
∘ _${usedPrefix}add *numero*_
∘ _${usedPrefix}sacar | ban | kick  *@tag*_
∘ _${usedPrefix}grupo *abrir : cerrar*_
∘ _${usedPrefix}group *open : close*_
∘ _${usedPrefix}daradmin | promote *@tag*_
∘ _${usedPrefix}quitar | demote *@tag*_
∘ _${usedPrefix}banchat_
∘ _${usedPrefix}unbanchat_
∘ _${usedPrefix}banuser *@tag*_
∘ _${usedPrefix}unbanuser *@tag*_
∘ _${usedPrefix}admins *texto*_
∘ _${usedPrefix}invocar *texto*_
∘ _${usedPrefix}tagall *texto*_
∘ _${usedPrefix}hidetag *texto*_
∘ _${usedPrefix}infogrupo | infogroup_
∘ _${usedPrefix}grupotiempo | grouptime *Cantidad*_
∘ _${usedPrefix}advertencia *@tag*_
∘ _${usedPrefix}deladvertencia *@tag*_
∘ _${usedPrefix}delwarn *@tag*_
∘ _${usedPrefix}crearvoto | startvoto *texto*_
∘ _${usedPrefix}sivotar | upvote_
∘ _${usedPrefix}novotar | devote_
∘ _${usedPrefix}vervotos | cekvoto_
∘ _${usedPrefix}delvoto | deletevoto_
∘ _${usedPrefix}enlace | link_
∘ _${usedPrefix}newnombre | nuevonombre *texto*_
∘ _${usedPrefix}newdesc | descripcion *texto*_
∘ _${usedPrefix}setwelcome | bienvenida *texto*_
∘ _${usedPrefix}setbye | despedida *texto*_
∘ _${usedPrefix}nuevoenlace | resetlink_
∘ _${usedPrefix}on_
∘ _${usedPrefix}off_
`.trim()
await conn.sendFile(m.chat, gataImg.getRandom(), 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex11']()} 🌐`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu.getRandom()}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'herramientasmenu'){ //herramientas
let menuA = `🔩 ${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex12']()} 🛠️
∘ _${usedPrefix}afk *motivo*_
∘ _${usedPrefix}acortar *url*_
∘ _${usedPrefix}calc *operacion math*_
∘ _${usedPrefix}del *respondre a mensaje del Bot*_
∘ _${usedPrefix}qrcode *texto*_
∘ _${usedPrefix}readmore *texto1|texto2*_
∘ _${usedPrefix}spamwa *numero|texto|cantidad*_
∘ _${usedPrefix}styletext *texto*_
∘ _${usedPrefix}traducir *texto*_
∘ _${usedPrefix}morse codificar *texto*_
∘ _${usedPrefix}morse decodificar *morse*_
∘ _${usedPrefix}encuesta | poll *Motivo*_
∘ _${usedPrefix}horario_
`.trim()
await conn.sendFile(m.chat, pp, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex12']()} 🛠️`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

 
} if (command == 'infomenu'){ //info
let menuA = `🌟 ${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex13']()} 💫
∘ _${usedPrefix}cuentasgatabot | cuentasgb_
∘ _${usedPrefix}gruposgb | grupos | groupgb_
∘ _${usedPrefix}donar | donate_
∘ _${usedPrefix}listagrupos | grouplist_
∘ _${usedPrefix}estado | heygata | status_
∘ _${usedPrefix}infogata | infobot_
∘ _${usedPrefix}instalarbot | installbot_
∘ _${usedPrefix}creadora | owner_
∘ _${usedPrefix}velocidad | ping_
∘ _${usedPrefix}serbot | jadibot_
∘ _${usedPrefix}serbot --code | jadibot --code_
∘ _${usedPrefix}bots | listjadibots_
∘ _${usedPrefix}detener | stop_
∘ _${usedPrefix}reporte *texto*_
∘ _términos y condiciones_
∘ _Bot_ 
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex13']()} 💫`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'makermenu'){ //maker
let menuA = `✨ ${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex14']()} ⛺
∘ _${usedPrefix}logos *efecto texto*_
∘ _${usedPrefix}simpcard *@tag*_
∘ _${usedPrefix}lolice *@tag*_
∘ _${usedPrefix}ytcomment *texto*_
∘ _${usedPrefix}itssostupid_
∘ _${usedPrefix}pixelar_
∘ _${usedPrefix}blur_
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex14']()} ⛺`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'menulogos2'){ //marker
let menuA = `⛲ ${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex15']()} 🌅
∘ ${usedPrefix}logocorazon *Texto*
∘ ${usedPrefix}3dtext *Texto*
∘ ${usedPrefix}angels *Texto*
∘ ${usedPrefix}batshalloween *Texto*
∘ ${usedPrefix}bear2 *Texto*
∘ ${usedPrefix}boom *Texto*
∘ ${usedPrefix}graffiticartoon *Texto*
∘ ${usedPrefix}girlgamer *Texto*
∘ ${usedPrefix}firework *Texto*
∘ ${usedPrefix}gold *Texto*
∘ ${usedPrefix}handlove *Texto*
∘ ${usedPrefix}heartcup *Texto*
∘ ${usedPrefix}heartflashlight *Texto*
∘ ${usedPrefix}birthdaycake *Texto*
∘ ${usedPrefix}birthdaycake2 *Texto*
∘ ${usedPrefix}birthdaycake3 *Texto*
∘ ${usedPrefix}facebooksilverplay *Texto*
∘ ${usedPrefix}facebooksilverplay2 *Texto*
∘ ${usedPrefix}neonsantin *Texto*
∘ ${usedPrefix}womenday *Texto*
∘ ${usedPrefix}summerysand *Texto*
∘ ${usedPrefix}wetglass *Texto*
∘ ${usedPrefix}mylove *Texto*
∘ ${usedPrefix}pikachu *Texto*
∘ ${usedPrefix}logochristmas *Texto*
∘ ${usedPrefix}cardchristmas *Texto*
∘ ${usedPrefix}flowercard *Texto*
`.trim()
await conn.sendFile(m.chat, pp, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex15']()} 🌅`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
// conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'ownermenu'){ //propietario(a)
let menuA = `🛂 ${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex20']()} 💎
∘ _${usedPrefix}join *enlace*_
∘ _${usedPrefix}unete *enlace*_
∘ _${usedPrefix}dardiamantes *cantidad*_
∘ _${usedPrefix}darxp *cantidad*_
∘ _${usedPrefix}dargatacoins *cantidad*_
∘ _${usedPrefix}addprem | userpremium *@tag* *cantidad*_
∘ _${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*_
∘ _${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*_
∘ _${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*_
∘ _${usedPrefix}idioma | language *código*_
∘ _${usedPrefix}cajafuerte_
∘ _${usedPrefix}comunicar | broadcastall | bc *texto*_
∘ _${usedPrefix}broadcastchats | bcc *texto*_
∘ _${usedPrefix}comunicarpv *texto*_
∘ _${usedPrefix}broadcastgc *texto*_
∘ _${usedPrefix}comunicargrupos *texto*_
∘ _${usedPrefix}borrartmp | cleartmp_
∘ _${usedPrefix}delexp *@tag*_
∘ _${usedPrefix}delgatacoins *@tag*_
∘ _${usedPrefix}deldiamantes *@tag*_
∘ _${usedPrefix}reiniciar | restart_
∘ _${usedPrefix}actualizar | update_
∘ _${usedPrefix}addprem | +prem *@tag*_
∘ _${usedPrefix}delprem | -prem *@tag*_
∘ _${usedPrefix}listapremium | listprem_
∘ _${usedPrefix}añadirdiamantes *@tag cantidad*_
∘ _${usedPrefix}añadirxp *@tag cantidad*_
∘ _${usedPrefix}añadirgatacoins *@tag cantidad*_
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex20']()} 💎`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'randommenu'){ //randomm
let menuA = `⛩️ ${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex23']()} 🧩
∘ _${usedPrefix}chica_
∘ _${usedPrefix}chico_
∘ _${usedPrefix}cristianoronaldo_
∘ _${usedPrefix}messi_
∘ _${usedPrefix}meme_
∘ _${usedPrefix}meme2_
∘ _${usedPrefix}itzy_
∘ _${usedPrefix}blackpink_
∘ _${usedPrefix}kpop *blackpink : exo : bts*_
∘ _${usedPrefix}lolivid_
∘ _${usedPrefix}loli_
∘ _${usedPrefix}navidad_
∘ _${usedPrefix}ppcouple_
∘ _${usedPrefix}neko_
∘ _${usedPrefix}waifu_
∘ _${usedPrefix}akira_
∘ _${usedPrefix}akiyama_
∘ _${usedPrefix}anna_
∘ _${usedPrefix}asuna_
∘ _${usedPrefix}ayuzawa_
∘ _${usedPrefix}boruto_
∘ _${usedPrefix}chiho_
∘ _${usedPrefix}chitoge_
∘ _${usedPrefix}deidara_
∘ _${usedPrefix}erza_
∘ _${usedPrefix}elaina_
∘ _${usedPrefix}eba_
∘ _${usedPrefix}emilia_
∘ _${usedPrefix}hestia_
∘ _${usedPrefix}hinata_
∘ _${usedPrefix}inori_
∘ _${usedPrefix}isuzu_
∘ _${usedPrefix}itachi_
∘ _${usedPrefix}itori_
∘ _${usedPrefix}kaga_
∘ _${usedPrefix}kagura_
∘ _${usedPrefix}kaori_
∘ _${usedPrefix}keneki_
∘ _${usedPrefix}kotori_
∘ _${usedPrefix}kurumi_
∘ _${usedPrefix}madara_
∘ _${usedPrefix}mikasa_
∘ _${usedPrefix}miku_
∘ _${usedPrefix}minato_
∘ _${usedPrefix}naruto_
∘ _${usedPrefix}nezuko_
∘ _${usedPrefix}sagiri_
∘ _${usedPrefix}sasuke_
∘ _${usedPrefix}sakura_
∘ _${usedPrefix}cosplay_
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex23']()} 🧩`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'rpgmenu'){ //rpg
let menuA = `🪅 ${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex21']()} ⚗️
∘ _${usedPrefix}botemporal *enlace* *cantidad*_
∘ _${usedPrefix}addbot *enlace* *cantidad*_
∘ _${usedPrefix}pase premium_
∘ _${usedPrefix}pass premium_
∘ _${usedPrefix}listapremium | listprem_
∘ _${usedPrefix}transfer *tipo cantidad @tag*_
∘ _${usedPrefix}dar *tipo cantidad @tag*_
∘ _${usedPrefix}enviar *tipo cantidad @tag*_
∘ _${usedPrefix}balance_
∘ _${usedPrefix}cartera | wallet_
∘ _${usedPrefix}experiencia | exp_
∘ _${usedPrefix}top | lb | leaderboard_
∘ _${usedPrefix}nivel | level | lvl_
∘ _${usedPrefix}rol | rango_
∘ _${usedPrefix}inventario | inventory_
∘ _${usedPrefix}listaparejas | listship_
∘ _${usedPrefix}mipareja | mylove_
∘ _${usedPrefix}pareja | couple *@tag*_
∘ _${usedPrefix}aceptar | accept *@tag*_
∘ _${usedPrefix}rechazar | decline *@tag*_
∘ _${usedPrefix}terminar | finish *@tag*_
∘ _${usedPrefix}aventura | adventure_
∘ _${usedPrefix}caza | cazar | hunt_
∘ _${usedPrefix}pescar | fishing_
∘ _${usedPrefix}animales_
∘ _${usedPrefix}alimentos_
∘ _${usedPrefix}curar | heal_
∘ _${usedPrefix}buy_
∘ _${usedPrefix}sell_
∘ _${usedPrefix}verificar | registrar_
∘ _${usedPrefix}perfil | profile_
∘ _${usedPrefix}myns_
∘ _${usedPrefix}unreg *numero de serie*_
∘ _${usedPrefix}minardiamantes | minargemas_
∘ _${usedPrefix}minargatacoins | minarcoins_
∘ _${usedPrefix}minarexperiencia | minarexp_
∘ _${usedPrefix}minar *:* minar2 *:* minar3_
∘ _${usedPrefix}reclamar | regalo | claim_
∘ _${usedPrefix}cadahora | hourly_
∘ _${usedPrefix}cadasemana | semanal | weekly_
∘ _${usedPrefix}cadames | mes | monthly_
∘ _${usedPrefix}cofre | abrircofre | coffer_
∘ _${usedPrefix}trabajar | work_
∘ _${usedPrefix}rob | robar_
∘ _${usedPrefix}crime_
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex21']()} ⚗️`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)


} if (command == 'stickermenu'){ //sticker
let menuA = `🧸 ${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex22']()} 🎐🧸
∘ _${usedPrefix}sticker | s *imagen o video*_
∘ _${usedPrefix}sticker | s *url de tipo jpg*_
∘ _${usedPrefix}emojimix *😺+😆*_
∘ _${usedPrefix}scircle | círculo *imagen*_
∘ _${usedPrefix}semoji | emoji *tipo emoji*_
∘ _${usedPrefix}attp *texto*_
∘ _${usedPrefix}attp2 *texto*_
∘ _${usedPrefix}ttp *texto*_
∘ _${usedPrefix}ttp2 *texto*_
∘ _${usedPrefix}ttp3 *texto*_
∘ _${usedPrefix}ttp4 *texto*_
∘ _${usedPrefix}ttp5 *texto*_
∘ _${usedPrefix}ttp6 *texto*_
∘ _${usedPrefix}palmaditas | pat *@tag*_
∘ _${usedPrefix}bofetada | slap *@tag*_
∘ _${usedPrefix}besar | kiss *@tag*_
∘ _${usedPrefix}alimentar | food *@tag*_
∘ _${usedPrefix}dado_
∘ _${usedPrefix}wm *packname|author*_
∘ _${usedPrefix}wm *texto1|texto2*_
∘ _${usedPrefix}stickermarker *efecto : responder a imagen*_
∘ _${usedPrefix}stickerfilter *efecto : responder a imagen*_
∘ _${usedPrefix}cs *:* cs2_
`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex22']()} 🧸`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
///conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)
} 
} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
}
handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = ['audioefectomenu', 'buscarmenu', 'hornymenu', 'listaporno', 'listhorny', 'convertidormenu', 'descargasmenu', 'juegosmenu', 'grupomenu',
'herramientasmenu', 'infomenu', 'makermenu', 'menulogos2', 'ownermenu', 'randommenu', 'rpgmenu', 'stickermenu', 'menu18', 'menugrupo'] 
//handler.register = true
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
