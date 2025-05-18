let handler = async (m, { conn }) => {
  const info = `
╭─❒ 「 *INFO DEL BOT* 」
│ 🐈‍⬛ *Nombre:* UwUsBot 
│ 👑 *Creador:* Lalin G
│ 🧠 *Base:* UwUsBot-MD
│ 🌐 *Plataforma:* Baileys MD
│ 📆 *Fecha:* ${new Date().toLocaleDateString()}
╰───────────────`;

  await conn.sendMessage(m.chat, {
    text: info,
    contextInfo: {
      externalAdReply: {
        title: "Información del Bot",
        body: "Bot desarrollado con amor",
        sourceUrl: "https://wa.me/+50670257898",
        thumbnailUrl: "https://i.postimg.cc/yYPVjnC3/UwUsbot.jpg",
        mediaType: 1,
        renderLargerThumbnail: true,
        showAdAttribution: true
      }
    }
  });
};

handler.command = ['infobot'];
handler.tags = ['main'];
handler.help = ['infobot'];
export default handler;