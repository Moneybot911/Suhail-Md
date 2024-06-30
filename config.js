const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347087808527";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_12_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExLFxuICAgICAgICAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjksXG4gICAgICAgIDU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI2LFxuICAgICAgICAzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNixcbiAgICAgICAgOTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDgyLFxuICAgICAgICA2OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NixcbiAgICAgICAgODgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDYxLFxuICAgICAgICA1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDk1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDkxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDYyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYzLFxuICAgICAgICA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDksXG4gICAgICAgIDIzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiamt2RFgrS2JuRWFJS3pvSFQ0WGdNWFUwZXVQeHIxMytBZVFWNUsvdlBDYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaUxraWNSZlRTeEN0Qzc4WDhUaS14Z1wiLFxuICBcInBob25lSWRcIjogXCI2ZWUzYTJlOS00MmI1LTRhNGMtYTgwNS05ODM0NTYxMGFkMDFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTEsXG4gICAgICAxNTEsXG4gICAgICAxOTMsXG4gICAgICA3OCxcbiAgICAgIDQ3LFxuICAgICAgMTcsXG4gICAgICA1NixcbiAgICAgIDE0MSxcbiAgICAgIDIxNSxcbiAgICAgIDI5LFxuICAgICAgMTU4LFxuICAgICAgODgsXG4gICAgICA1NixcbiAgICAgIDUwLFxuICAgICAgMTYxLFxuICAgICAgMTYwLFxuICAgICAgMTg0LFxuICAgICAgMjQwLFxuICAgICAgNzAsXG4gICAgICAxMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ4LFxuICAgICAgMyxcbiAgICAgIDE3OCxcbiAgICAgIDI0NixcbiAgICAgIDE5NSxcbiAgICAgIDIzMSxcbiAgICAgIDE2NixcbiAgICAgIDE0MixcbiAgICAgIDY5LFxuICAgICAgMTQyLFxuICAgICAgMjU0LFxuICAgICAgMTg3LFxuICAgICAgMTI4LFxuICAgICAgMjcsXG4gICAgICAxNDgsXG4gICAgICAyMjMsXG4gICAgICAxNDcsXG4gICAgICAzMCxcbiAgICAgIDk0LFxuICAgICAgMTEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkoxSzlEVERUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDg3ODA4NTI3OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjYwMDE0NzIzNzY4NDk6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHZEcDVNQkVLdVhoYlFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqL25GMldvU1BOdmVDVTJ2bjN6Z2NCMFZaU2lSKzNycW02MkswdmhyR0dvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllhKzhQdkhhd2JqRUsrL1NwclROb21FN09XRG9zUVZJeG5jUVpNNmVBdWFuSjhncmpTQkRRRlFSUFptRWt6eEFzOUNpQ1RvVHpFZDlWeExrRmQ2YkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldIY0J4czMxVWZZN0QyRU5xV3F6bmdYMXNXYWFCZGgybkladmFtK3VpKzI5ZGFTUXFlTUcrWDhFU0l0SHorL1llZHByamdnYUM2dnQ2dnVqOERzb0FBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODc4MDg1Mjc6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3NDk1NTFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
