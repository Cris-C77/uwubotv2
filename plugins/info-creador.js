let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;LALIN-G⁩;;\nFN:LALIN-G⁩⁩\nORG:LALIN-G\nTITLE:\nitem1.TEL;waid=522227515102:522227515102\nitem1.X-ABLabel:LALIN-G\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:LALIN-G\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おLalin.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler