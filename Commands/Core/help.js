module.exports = {
  name: "help",
  alias: ["menu", "h", "helpm", "helpmenu"],
  desc: "Gives all bot commands list",
  react: "💌",
  category: "Core",
  start: async (Miku, m, {prefix,pushName,NSFWstatus,args,commands,text}) => {

if (args[0]) {
            let data = []
            let name = args[0].toLowerCase()
            let cmd = commands.get(name) || Array.from(commands.values()).find((v) => v.alias.includes(name))
            if (!cmd || cmd.type == "hide") return m.reply("No Command Found")
            else data.push(`📌Command : ${cmd.name.replace(/^\w/, c => c.toUpperCase())}`)
            if (cmd.alias) data.push(`👾Alias : ${cmd.alias.join(", ")}`) 
            if(cmd.cool) data.push(`⏱️Cooldown: ${cmd.cool}`)       
            if (cmd.desc) data.push(`🧾Description : ${cmd.desc}`)
            if (cmd.usage) data.push(`💡Example : ${cmd.usage.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)
            var buttonss = [
				{buttonId: `${prefix}help`, buttonText: {displayText: `help`}, type: 1},]
            let buth={
                text:`ℹ️Command Info\n\n${data.join("\n")}`,
                footer: `${botName}`,
                buttons:buttonss,
                headerType:1
            }    
            return Miku.sendMessage(m.from,buth,{quoted:m})
        } else {

let textHelpMenu = `┌─❖ *𖠌*
│ *「 ᴋᴏɴɴɪᴄʜɪᴡᴀ ꜱᴇɴᴘᴀɪ 」*
└┬❖ 「 *${botName}* 」
┌┤✑ 「 ᴍʏ ᴘʀᴇғɪꭗ ɪꜱ: *${prefix}* 」
││✑ ✨😋💌!!
│└───────────────┈ ⳹
└┬─────────┈ ⳹
   │ *ʜᴇʀᴇ'ꜱ ᴛʜᴇ ʟɪꜱᴛ ᴏғ*
   │ *ᴍʏ ᴄᴏᴍᴍᴀɴᴅꜱ*
   └───────────────┈ ⳹\n             
╭────ꕥ ᴄᴏʀᴇ ꕥ────╮
├
├・🎐 ʜɪ, ʜᴇʟᴘ, 
├・🎐 ᴄᴏᴜᴘʟᴇᴘᴘ, ᴏᴡɴᴇʀ, 
├・🎐 ꜱᴄʀɪᴘᴛ, ꜱᴛᴀʟᴋ, 
├・🎐 ꜱᴜᴘᴘᴏʀᴛ, ʀᴀɴᴋ
├
╰──────────────────╯
╭────ꕥ ɢʀᴏᴜᴘ ꕥ────╮
├
├・🏮 ᴀᴅᴍɪɴꜱ, ᴀɴɴᴏᴜɴᴄᴇ,
├・🏮 ᴀɴᴛɪʟɪɴᴋɢᴄ, ʙᴏᴛꜱᴡɪᴛᴄʜ, 
├・🏮 ᴄʜᴀᴛʙᴏᴛɢᴄ, 
├・🏮 ᴄʜᴀɴɢᴇɢᴄɴᴀᴍᴇ, 
├・🏮 ᴅᴇʟᴇᴛᴇ, ᴘʀᴏᴍᴏᴛᴇ, 
├・🏮 ᴅᴇᴍᴏᴛᴇ, ɢᴄʟɪɴᴋ, 
├・🏮 ɢʀᴏᴜᴘ, ɢʀᴏᴜᴘɪɴꜰᴏ, 
├・🏮 ʜɪᴅᴇᴛᴀɢ, ʟᴇᴀᴠᴇ, 
├・🏮 ɴꜱꜰᴡ, ʀᴇᴍᴏᴠᴇ, 
├・🏮 ʀᴇᴘᴏʀᴛ, ʀᴇᴠᴏᴋᴇ, 
├・🏮 ꜱᴇᴛɢᴄᴅᴇꜱᴄ, ꜱᴇᴛᴘᴘɢᴄ, 
├・🏮 ᴛᴀɢᴀʟʟ, ᴡᴇʟᴄᴏᴍᴇ
├
╰──────────────────╯
╭────ꕥ ᴍᴏᴅꜱ ꕥ────╮
├
├・🎀 ᴀᴅᴅᴍᴏᴅ, ᴅᴇʟᴇᴛᴇᴍᴏᴅ, 
├・🎀 ʙᴀɴ, ᴜɴʙᴀɴ, 
├・🎀 ʙᴀɴɢᴄ, ᴜɴʙᴀɴɢᴄ, 
├・🎀 ʙʟᴏᴄᴋ, ᴜɴʙʟᴏᴄᴋ, 
├・🎀 ʙʀᴏᴀᴅᴄᴀꜱᴛ, ᴄʜᴀʀʟɪꜱᴛ, 
├・🎀 ᴍᴏᴅᴇ, ʙᴀɴʟɪꜱᴛ, 
├・🎀 ᴘᴍᴄʜᴀᴛʙᴏᴛ, ᴄʜᴀʀʟɪꜱᴛ, 
├・🎀 ꜱᴇᴛᴄʜᴀʀᴀᴄᴛᴇʀ
├
╰──────────────────╯          
╭────ꕥ ᴍᴇᴅɪᴀ ꕥ────╮
├
├・💫 ɪɢᴅʟ, ɪɢᴅʟ2, 
├・💫 ᴘʟᴀʏʟɪꜱᴛ, ᴘʟᴀʏ, 
├・💫 ʏᴛᴀᴜᴅɪᴏ, ʏᴛᴠɪᴅᴇᴏ, 
├・💫 ʏᴛꜱ
├
╰──────────────────╯
╭────ꕥ ꜱᴇᴀʀᴄʜ ꕥ────╮
├
├・🔎 ᴀɴɪᴍᴇ, ɢɪꜰꜱᴇᴀʀᴄʜ, 
├・🔎 ɢɪᴍᴀɢᴇ, ᴘɪɴᴛᴇʀᴇꜱᴛ, 
├・🔎 ɢɪᴛʜᴜʙ, ɢᴏᴏɢʟᴇ, 
├・🔎 ʟʏʀɪᴄꜱ, ʀɪɴɢᴛᴏɴᴇ, 
├・🔎 ᴡᴇᴀᴛʜᴇʀ,
├・🔎 ꜱᴛɪᴄᴋᴇʀꜱᴇᴀʀᴄʜ,  
├・🔎 ʏᴏᴜᴛᴜʙᴇꜱᴇᴀʀᴄʜ
├
╰──────────────────╯
╭────ꕥ ᴜᴛɪʟɪᴛɪᴇꜱ ꕥ────╮
├
├・🎗 ᴇᴍᴏᴊɪᴍɪꭗ, ϙ / ϙᴜᴏᴛᴇ, 
├・🎗 ꜱᴛɪᴄᴋᴇʀ, ꜱᴛɪᴄᴋᴇʀᴄʀᴏᴘ, 
├・🎗 ꜱᴛᴇᴀʟ, ᴛᴏᴀᴜᴅɪᴏ, 
├・🎗 ᴛᴏᴍᴘ3, ᴛᴏᴍᴘ4, 
├・🎗 ᴛᴏᴜʀʟ
├
╰──────────────────╯
╭────ꕥ ɪᴍᴀɢᴇ ᴇᴅɪᴛ ꕥ────╮
├
├・💠 ʙʟᴜʀ, ᴄɪʀᴄʟᴇ, 
├・💠 ᴊᴀɪʟ, ʀᴇᴍᴏᴠᴇʙɢ, 
├・💠 ᴛʀɪɢɢᴇʀ
├
╰──────────────────╯
╭────ꕥ ᴀᴜᴅɪᴏ ᴇᴅɪᴛ ꕥ────╮
├
├・🎧 ʙᴀꜱꜱ, ʙʟᴏᴡɴ, 
├・🎧 ᴅᴇᴇᴘ, ꜰᴀᴛ, 
├・🎧 ɴɪɢʜᴛᴄᴏʀᴇ, ʀᴇᴠᴇʀꜱᴇ, 
├・🎧 ʀᴏʙᴏᴛ, ꜱʟᴏᴡ, 
├・🎧 ꜱᴍᴏᴏᴛʜ, ᴛᴇᴍᴘᴏ
╰──────────────────╯
╭────ꕥ ᴇꜱꜱᴇɴᴛɪᴀʟꜱ ꕥ────╮
├
├・🧩 ᴇʟᴇᴍᴇɴᴛ, ɪɢᴜꜱᴇʀ, 
├・🧩 ꜱᴄʀᴇᴇɴꜱʜᴏᴛ, ꜱᴀʏ, 
├・🧩 ꜱᴀʏᴊᴀᴘᴀɴᴇꜱᴇ, ϙᴜᴇꜱᴛɪᴏɴ, 
├・🧩 ᴜᴅɪᴄᴛɪᴏɴᴀʀʏ
├
╰──────────────────╯
╭────ꕥ ᴡᴇᴇʙ ꕥ────╮
├
├・ 🧧 ᴀɴɪᴍᴇϙᴜᴏᴛᴇ, ᴄᴏꜱᴘʟᴀʏ, 
├・ 🧧 ᴄᴏꜱᴘʟᴀʏᴠɪᴅᴇᴏ, ꜰᴏꭗɢɪʀʟ, 
├・ 🧧 ᴍᴀɪᴅ, ᴡᴀʟʟᴘᴀᴘᴇʀ, 
├・ 🧧 ᴡᴀɪꜰᴜ
├
╰──────────────────╯
╭────ꕥ ʀᴇᴀᴄᴛɪᴏɴꜱ ꕥ────╮
├
├・ 🎋 ʙᴇʜᴀᴘᴘʏ, ʙɪᴛᴇ, 
├・ 🎋 ʙᴏɴᴋ, ʙᴜʟʟʏ, 
├・ 🎋 ᴄʀʏ, ᴅᴀɴᴄᴇ, 
├・ 🎋 ʜᴀɴᴅʜᴏɴᴅ, ʜᴀᴘᴘʏ, 
├・ 🎋 ʜɪɢʜꜰɪᴠᴇ, ʜᴜɢ, 
├・ 🎋 ᴋɪᴄᴋ, ᴋɪʟʟ, 
├・ 🎋 ᴋɪꜱꜱ, ᴘᴀᴛ, 
├・ 🎋 ꜱʟᴀᴘ, ꜱᴍɪʟᴇ, 
├・ 🎋 ᴡᴀᴠᴇ, ᴡɪɴᴋ, 
├・ 🎋 ʏᴇᴇᴛ
├
╰──────────────────╯
╭────ꕥ ʟᴏɢᴏ ꕥ────╮
├
├・ 🎄 3ᴅᴄʜʀɪꜱᴛᴍᴀꜱ, 3ᴅɴᴇᴏɴ, 
├・ 🎄 3ᴅꜱᴘᴀᴄᴇ, 3ᴅꜱᴛᴏɴᴇ,
├・ 🎄 ʙᴇᴀʀ, ʙʟᴀᴄᴋᴘɪɴᴋ,
├・ 🎄 ʙʟᴏᴏᴅ, ʙᴏᴋᴇʜ, 
├・ 🎄 ᴄᴀɴᴅʏ, ᴄᴀʀʙᴏɴ, 
├・ 🎄 ᴄʜᴏᴄᴏʟᴀᴛᴇ, ᴄʜʀɪꜱᴛᴍᴀꜱ, 
├・ 🎄 ᴄɪʀᴄᴜɪᴛ, ᴄʟᴏᴜᴅ, 
├・ 🎄 ᴅᴇᴇᴘꜱᴇᴀ, ᴅᴇᴍᴏɴ, 
├・ 🎄 ᴅʀᴏᴘᴡᴀᴛᴇʀ, ɢʟɪᴛᴄʜ, 
├・ 🎄 ᴄʟɪᴛᴄʜ2, ɢʟɪᴛᴄʜ3 
├・ 🎄 ɢʀᴀꜰꜰɪᴛɪ, ʜᴏʟʟᴏɢʀᴀᴘʜɪᴄ, 
├・ 🎄 ᴊᴏᴋᴇʀ, ʟɪᴏɴ , ᴍᴀɢᴍᴀ, 
├・ 🎄 ᴍᴀᴛʀɪꭗ, ɴᴇᴏɴ, 
├・ 🎄 ɴᴇᴏɴᴅᴇᴠɪʟ, ɴᴇᴏɴɢʀᴇᴇɴ, 
├・ 🎄 ɴᴇᴏɴʟɪɢʜᴛ, ᴘᴀᴘᴇʀᴄᴜᴛ, 
├・ 🎄 ᴘᴇɴᴄɪʟ, ᴘᴏʀɴʜᴜʙ, 
├・ 🎄 ꜱᴄɪꜰɪ, ᴡᴏʟꜰ, 
├・ 🎄 ᴛʜᴜɴᴅᴇʀ, ᴛʜᴜɴᴅᴇʀ2, 
├・ 🎄 ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ, ᴡᴀʟʟ,
├・ 🎄 ꜱᴘᴀʀᴋʟᴇᴄʜʀɪꜱᴛᴍᴀꜱ 
├
╰──────────────────╯
╭────ꕥ ʀᴘɢ ꕥ────╮
├
├・ 🎒 ʙᴜʏ, ɪɴᴠᴇɴᴛᴏʀʏ, 
├・ 🎒 ᴍɪɴᴇ, ᴍɪɴᴇᴄʀᴀꜰᴛ, 
├・ 🎒 ʀᴇɢ-ɪɴᴠ, ꜱʜᴏᴘ
├
╰──────────────────╯
╭────ꕥ ᴇᴄᴏɴᴏᴍʏ ꕥ────╮
├
├・ 🔖 ʙᴀɴᴋ, ᴄᴀᴘᴀᴄɪᴛʏ, 
├・ 🔖 ᴅᴀɪʟʏ, ᴅᴇᴘᴏꜱɪᴛ, 
├・ 🔖 ɢᴀᴍʙʟᴇ, ʟʙ, 
├・ 🔖 ʀᴏʙ, ꜱʟᴏᴛ, 
├・ 🔖 ᴛʀᴀɴꜱꜰᴇʀ, ᴡᴀʟʟᴇᴛ, 
├・ 🔖 ᴡɪᴛʜᴅʀᴀᴡ
├
╰──────────────────╯\n\n`
          
if (NSFWstatus == "true"){
textHelpMenu += `╭────ꕥ ɴꜱғᴡ ꕥ────╮
├
├・ 💦 ᴘᴜꜱꜱʏ, ꜱᴘʀᴇᴀᴅᴘᴜꜱꜱʏ,
├・ 💦 ɢᴇɴꜱʜɪɴ, ꜱϙᴜɪʀᴛ,
├・ 💦 ɢʟᴀꜱꜱᴇꜱ, ꜱᴜɴɢʟᴀꜱꜱᴇꜱ,
├・ 💦 ꜱᴡɪᴍꜱᴜɪᴛ, ꜱᴄʜᴏᴏʟꜱᴡɪᴍꜱᴜɪᴛ,
├・ 💦 ʜᴏʟᴏ ʟɪᴠᴇ, ᴀꜱꜱ,
├・ 💦 ᴜɴᴅᴇʀᴡᴇᴀʀ, ɴɪᴘᴘʟᴇꜱ,
├・ 💦 ᴜɴᴄᴇɴꜱᴏʀᴇᴅ, ɴɪᴘᴘʟᴇꜱ,
├・ 💦 ᴜɴᴄᴇɴꜱᴏʀᴇᴅ, ꜱᴇꭗ,
├・ 💦 ꜱᴇꭗ2, ꜱᴇꭗ3,
├・ 💦 ʙʟᴏɴᴅᴇ, ᴛᴡɪɴᴛᴀɪʟꜱ,
├・ 💦 ʙʀᴇᴀꜱᴛꜱ, ᴛʜɪɢʜʜɪɢʜꜱ,
├・ 💦 ꜱᴋɪʀᴛ, ɢᴀᴍᴇᴄɢ,
├・ 💦 ᴀɴɪᴍᴀʟᴇᴀʀꜱ, ꜰᴏꭗɢɪʀʟ,
├・ 💦 ᴅʀᴇꜱꜱ, ꜱᴄʜᴏᴏʟᴜɴɪꜰᴏʀᴍ,
├・ 💦 ᴛᴡᴏɢɪʀʟꜱ, ɢʟᴏᴠᴇꜱ,
├・ 💦 ᴠᴏᴄᴀʟᴏɪᴅ, ᴛᴏᴜʜᴏᴜ,
├・ 💦 ᴡᴇᴀᴘᴏɴ, ᴡɪᴛʜꜰʟᴏᴡᴇʀꜱ,
├・ 💦 ᴘɪɴᴋʜᴀɪʀ, ᴄʟᴏᴜᴅꜱᴠɪᴇᴡ,
├・ 💦 ᴡʜɪᴛᴇ, ᴀɴɪᴍᴀʟ,
├・ 💦 ᴛᴀɪʟ, ɴᴜᴅᴇ,
├・ 💦 ᴘᴏɴʏᴛᴀɪʟ, ʙᴇᴅ,
├・ 💦 ᴡʜɪᴛᴇ ʜᴀɪʀ, ʀɪʙʙᴏɴꜱ,
├・ 💦 ᴊᴀᴘᴀɴᴇꜱᴇᴄʟᴏᴛʜꜱ, 
├・ 💦 ʜᴀᴛꜱᴜɴᴇᴍɪᴋᴜ,
├・ 💦 ʙɪᴋɪɴɪ, ʙᴀʀᴇꜰᴏᴏᴛ,
├・ 💦 ɴᴏʙʀᴀ, ꜰᴏᴏᴅ,
├・ 💦 ᴡɪɴɢꜱ, ᴘᴀɴᴛʏʜᴏꜱᴇ,
├・ 💦 ᴏᴘᴇɴꜱʜɪʀᴛ, ʜᴇᴀᴅʙᴀɴᴅ,
├・ 💦 ᴘᴇɴɪꜱ, ᴄʟᴏꜱᴇ,
├・ 💦 ᴡᴇᴛ, ᴄᴀᴛɢɪʀʟ,
├・ 💦 ᴡᴏʟꜰɢɪʀʟ, ɴᴇᴋᴏ,
├・ 💦 ʟᴏʟɪ, ꜱᴘʀᴇᴀᴅʟᴇɢꜱ,
├・ 💦 ʙʀᴀ, ꜰᴀᴛᴇꜱᴇʀɪᴇꜱ,
├・ 💦 ᴛʀᴇᴇ, ᴇʟʙᴏᴡɢʟᴏᴠᴇꜱ,
├・ 💦 ɢʀᴇᴇɴʜᴀɪʀ, ʜᴏʀɴꜱ,
├・ 💦 ᴡɪᴛʜᴘᴇᴛᴀʟꜱ, ᴅʀᴜɴᴋ,
├・ 💦 ᴄᴜᴍ, ʜᴇᴀᴅ ᴅʀᴇꜱꜱ,
├・ 💦 ᴛɪᴇ, ꜱʜᴏʀᴛꜱ,
├・ 💦 ᴍᴀɪᴅ, ʜᴇᴀᴅᴘʜᴏɴᴇꜱ,
├・ 💦 ᴀɴᴜꜱᴠɪᴇᴡ, ɪᴅᴏʟ,
├・ 💦 ɢᴜɴ, ꜱᴛᴏᴄᴋɪɴɢꜱ,
├・ 💦 ᴛᴇᴀʀꜱ, ʙʀᴇᴀꜱᴛʜᴏʟᴅ,
├・ 💦 ɴᴇᴄᴋʟᴀᴄᴇ, ꜱᴇᴇᴛʜʀᴏᴜɢʜ,
├・ 💦 ʙᴜɴɴʏᴇᴀʀꜱ, ʙᴜɴɴʏɢɪʀʟ,
├・ 💦 ᴛᴏᴘʟᴇꜱꜱ, ʙᴇᴀᴄʜ,
├・ 💦 ᴇʀᴇᴄᴛɴɪᴘᴘʟᴇꜱ, ʏᴜʀɪ,
├・ 💦 ᴠᴀᴍᴘɪʀᴇ, ꜱʜɪʀᴛ,
├・ 💦 ᴘᴀɴᴛʏᴘᴜʟʟ, ᴛᴏʀɴᴄʟᴏᴛʜᴇꜱ,
├・ 💦 ʙᴏɴᴅᴀɢᴇ, ᴅᴇᴍᴏɴ,
├・ 💦 ʙᴇʟʟ, ꜱʜɪʀᴛʟɪꜰᴛ,
├・ 💦 ᴛᴀᴛᴛᴏᴏ, ᴄʜᴀɪɴ,
├・ 💦 ꜰʟᴀᴛᴄʜᴇꜱᴛ, ꜰɪɴɢᴇʀɪɴɢ 
├
╰──────────────────╯\n\n`
}
textHelpMenu +=`┌─❖ 「 *ꜱᴀʏ.ꜱᴄᴏᴛᴄʜ 💔* 」 *𖠌*
└┬❖ 「 ${botName} 」
│└───────────────┈ ⳹
│ 「 *ʙᴏᴛ ɪɴғᴏ* 」
│✙ _ᴘᴏᴡᴇʀᴇᴅ ʙʏ:_ *© ᴛᴇᴀᴍ ᴀᴛʟᴀꜱ*
│✙ 🎐 *ʀᴇ-ᴄᴏᴅᴇᴅ ʙʏ ꜱᴄᴏᴛᴄʜ*
│✙ ꜱᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ ʟɪɴᴋ
│✙ 「 *${prefix}ꜱᴜᴘᴘᴏʀᴛ* 」
│✙ ʀᴇᴘᴏʀᴛ ᴛᴏ *ᴅᴇᴠᴇʟᴏᴘᴇʀ*
│✙ *${prefix}ʀᴇᴘᴏʀᴛ 〘 ᴅᴇꜱᴄʀɪʙᴇ ɪꜱꜱᴜᴇ 〙*
│✙ 「 *✨😴🎐 ᴛʜᴀɴᴋ ʏᴏᴜ* 」
└───────────────┈ ⳹
   └──────────────┈ ⳹\n`

let buttons = [
    {
      buttonId: `${prefix}owner`,
      buttonText: { displayText: "🕯️✨ᴏᴡɴᴇʀ✨🕯️" },
      type: 1,
    },
  ];
  let buttonMessage = {
    video: botVideo, gifPlayback: true,
    caption: textHelpMenu,
    buttons: buttons,
    headerType: 4,
  };

  await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
}
  }
}
