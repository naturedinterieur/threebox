import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json()

        if (!name || !email || !message) {
            return NextResponse.json({ success: false, error: "Champs manquants" }, { status: 400 })
        }

        const transporter = nodemailer.createTransport({
            host: "linkfirst-smtp.linkeo.org",
            port: 465,
            secure: true, // utilisation SSL
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        })


        const info = await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: "guillaume@naturedinterieur.com",
            subject: `Message de ${name}`,
            text: message,
        })

        console.log("✅ Email envoyé :", info.messageId)
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("❌ Erreur côté serveur :", error)
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
    }
}
