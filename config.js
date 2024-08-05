//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "aidenstudios84@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "2348124030911";
global.owner = process.env.OWNER_NUMBER || "2348124030911";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUg3cFE3ZjAvZTZOb0ZmWkVrUVdHd1I3TzVPRWx1M1hXbGM2RVRnWkEzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUcvdE9tVTJuMUp5U21HcnhvVEFmMkFKdTVkakQwM0tnZkhGUllFWUJIYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQjM4ZmNkQ0lVTlpZeitvMk1YNHB4dFBtTzZ0MTV3TjVMb1hETkd3cGtvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiaU1HN3BpZDhsSzNoK2hxcW1GMUJFYXdtckFDS0tiT1pqZW9lVjlZNno4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklLWjJWbGtlYTMvaFlBT211aFUxSVFDMnJPYnR5bzE3TjZldjYrZURwVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNDVy9zbnNXdGFIRjBEaGR1SmJjUVgybjhja3FHd2Fmei82Z01Jc3V2MnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYURmOERMbXdBdC9aTC9VUUo3Z2NNSzNtbks2MTluS2I3NjFGSDNiQzVXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUNsTU1VaEpTUEdOeVovbWFaQkwxMXZNNGhDN0NmY2dZbWpPZHV1RTN4bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJJNFhvdFlPSHRhV2s1eDZrUGRmakZrTVg4c0NNYnVPdyt5VDZuRkpEcDNpeW50ZStvY0N0Vi9QejF5cThxS2syRFNZYW1ON1BlZ2gxczRyczZtWUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE2LCJhZHZTZWNyZXRLZXkiOiJCUHVwY0xhWUMzY29rMFR3WUVHUVNjMFpJcWFZYVhlaStPcGRzTnhZcURVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkS19Ld0p6OFJwLUJ6ZUxjQUJveWFRIiwicGhvbmVJZCI6IjQ5MmEyMGVmLTllMDEtNDZjNy05ZmY1LTFiMWQwZDExMmE5OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvVmJBc0RCcDhFK3pJcHBnbFJhWkxLNDhmelk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjNteEtneGNZVnEyVmtRZ0Y1SG9TTkZoTWdVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlE1SExaSDhMIiwibWUiOnsiaWQiOiIyMzQ4MTI0MDMwOTExOjMxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFpZGVuX29mOTk5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKKytpN1FIRUoyT3hMVUdHQllnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCOVpEdGFLTnhmWHcyZDhPVkpYZ2Zzc2xObHl3djNEejBKaEZHRGdzSUJvPSIsImFjY291bnRTaWduYXR1cmUiOiJMV0VDMUUxL0RhSmZORlBINkhXb20vMGhnMVFPZHRkN1NiWm9HN28wVGFSenVENXBxVmRJaVUvQlh3S0NzRVJoMXhmQ3hlVGo3eWNxVTh2UndIT0hEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL1NheGlURTFGMElxWUU5V21LSVRjdG83djNqSTZ3eDhyZmkvcVhDN2NnbUxBWVJMUk5UY21FOTFZK1EzTk5TRGp2anZEL2E5SEt5WVNQeHU4TytsQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTI0MDMwOTExOjMxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFmV1E3V2lqY1gxOE5uZkRsU1Y0SDdMSlRaY3NMOXc4OUNZUlJnNExDQWEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI4Nzc3NDIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS0I0In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`mz_999`",
  author: process.env.PACK_AUTHER || "mz_999",
  packname: process.env.PACK_NAME || "mz_999",
  botname: process.env.BOT_NAME || "mz_999",
  ownername: process.env.OWNER_NAME || "Aiden_of999",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "mz_999").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
