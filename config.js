module.exports = {
  setting: {

    Prefix: "=",
    
  },
  protection: {
    //الحد الاقصى لكل حماية
    AntiChannelsDelete: 4,
    AntiChannelsCreate: 6,
    AntiKicks: 4,
    AntiBans: 4,
    AntiBots: 2,
    AntiRolesDelete: 4,
    AntiRolesCreate: 6,
    SpamWarning: 4,
    AntiSpam: 6,
    AntiLinks: 8,
    Links: ["discord", "discord.gg", "https" , "http"]//الروابط الممنوعة
  },
  ready: {
    //الحالة ونوع الحالة
    Activity: "IM READY",
    Activity_TYPE: "WATCHING",// PLAYING , STREMING , WATCHING
  },
  embed: {
    //لون امبيد التحذيرات
    warnColor: "#8f00f5",
  },
  react:{
    //ضع ايدي الرياكشن بكل مكان مخحصص
    ON: "✔",// رياكشن المفعل
    OFF: "❌",// رياكشن المطفي
    HAMMER: "🪓",// رياكشن المطرقة
  },

}


