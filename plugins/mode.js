let handler = async(m, { conn, usedPrefix, command }) => {
  try{let isPublic = command === "public";
  let self = global.opts["self"]
  if(self === !isPublic) return conn.sendB(m.chat, `Bye ${!isPublic ? "Self" : "Public"} from earlier ${m.sender.split("@")[0] === global.owner[0] ? "miss" : "Bang"} :v`, wm, false, [[`${!isPublic ? "Public" : "Self"}`, `${usedPrefix}${!isPublic ? "public" : "self"}`]], m)
  global.opts["self"] = !isPublic
  conn.sendB(m.chat, `${!isPublic ? "Self" : "Public"} bot Activated!`, wm, false, [[`${!isPublic ? "Public" : "Self"}`, `${usedPrefix}${!isPublic ? "public" : "self"}`]], m)    
}catch(e){
conn.reply(m.chat,`${e}`)
  conn.reply('120363022211098165@g.us',`ð¨ðµð¼ðµ! ð®ð» ð²ð¿ð¿ð¼ð¿ ð¢ð°ð°ðð¿ð²ð± 

ðð¿ð¿ð¼ð¿ : ${util.format(e)}

  ðð¼ðºðºð®ð»ð± : ${usedPrefix+command}
  
  ð£ð¼ððð¶ð¯ð¹ð² ð¥ð²ð®ðð¼ð»ð :
     â¢ ðð»ðð®ð¹ð¶ð± ð¨ðð®ð´ð² ð¢ð³ ðð¼ðºðºð®ð»ð±
     â¢ ð¦ð²ð¿ðð²ð¿ ðð¿ð¿ð¼ð¿
     â¢ ð¥ðð»ðð¶ðºð² ðð¿ð¿ð¼ð¿ð
     â¢ ðð¿ð¿ð¼ð¿ ð®ð ð±ð²ðð²ð¹ð¼ð½ð²ð¿ð ðð»ð±
     â¢ ðð®ðð® ð¡ð²ððð¼ð¿ð¸ ððððð²ð `, null, {})
}}
handler.help = ["sá´ÊÒ", "á´á´ÊÊÉªá´"]
handler.tags = ["owner"]
handler.command = /^(self|public)/i

handler.rowner = true 

module.exports = handler
