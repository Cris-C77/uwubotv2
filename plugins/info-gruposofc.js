let handler = async (m, { conn, usedPrefix, command }) => {
  let grupos = `*¡Hola! Para consultas puedes entrar a los siguientes links*

   ╭─━━───╼◈◉◈╾───━━─╮
   │ *『 1. Cris soporte oficial』*
   ├─ ❏ 📞 https://wa.me/+573025902495
   ╰─━━────────────━━─╯

   ╭─━━───╼◈◉◈╾───━━─╮
   │ *★Creador oficial★*
   ├─ ❏ 👑 https://wa.me/+50670257898
   ╰─━━────────────━━─╯
   
   ╭─━━───╼◈◉◈╾───━━─╮
   │ *『 2. Milly soporte oficial』*
   ├─ ❏ 📞 https://wa.me/+523222101030
   ╰─━━────────────━━─╯`

  const catalogo1 = 'https://i.postimg.cc/qBWCp6Vm/Logo-Uw-Usbot.png'

  await conn.sendFile(m.chat, catalogo1, 'UwUsBot.jpg', grupos, m, rcanal)
  await m.react(emojis)
}

handler.help = ['comprar']
handler.tags = ['info']
handler.command = ['consultas', 'links', 'soport']

export default handler