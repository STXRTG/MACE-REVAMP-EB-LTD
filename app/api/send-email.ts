import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, project } = req.body;

    if (!name || !email || !project) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'MACE REVAMP <inquiries@scaming.fans>',
            to: [email],
            subject: 'Inquiry Confirmation | MACE REVAMP',
            html: `
<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Inquiry Confirmation | MACE REVAMP</title>
    <!--[if mso]>
    <style>
        * { font-family: sans-serif !important; }
    </style>
    <![endif]-->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@600;700&display=swap');
        
        body {
            margin: 0;
            padding: 0;
            width: 100% !important;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            background-color: #0A0A0A;
        }

        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }

        table {
            border-collapse: collapse !important;
        }

        @media screen and (max-width: 600px) {
            .container {
                width: 100% !important;
                padding: 10px !important;
            }
            .content-padding {
                padding: 40px 25px !important;
            }
            .hero-title {
                font-size: 30px !important;
            }
            .section-detail {
                padding: 20px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #0A0A0A; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #F3EFE7;">
    <div style="display: none; max-height: 0px; overflow: hidden;">
        Confirmation Received: We've received your project details. Our team will be in touch shortly to discuss the next steps.
    </div>
    <div style="display: none; max-height: 0px; overflow: hidden;">
        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </div>

    <div role="article" aria-roledescription="email" lang="en" style="background-color: #0A0A0A; width: 100%;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0A0A0A;">
            <tr>
                <td align="center" style="padding: 60px 15px;">
                    <!--[if mso]>
                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                    <tr>
                    <td align="center" valign="top" width="600">
                    <![endif]-->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="container" style="max-width: 600px; background-color: #141414; border: 1px solid rgba(198, 142, 78, 0.25); border-radius: 16px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);">
                        <tr>
                            <td align="center" style="padding: 60px 40px 40px 40px;" class="content-padding">
                                <h1 style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 700; color: #C68E4E; text-transform: uppercase; letter-spacing: 0.2em;">
                                    MACE REVAMP EB LTD
                                </h1>
                                <div style="height: 2px; background: linear-gradient(90deg, transparent, #C68E4E, transparent); width: 120px; margin: 30px auto 40px auto; opacity: 0.5;"></div>
                                
                                <h2 class="hero-title" style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-size: 42px; font-weight: 600; line-height: 1.1; color: #FFFFFF; letter-spacing: -0.02em;">
                                    Request Received
                                </h2>
                                <p style="margin: 15px 0 0 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.25em; color: #C68E4E;">
                                    Inquiry Confirmation
                                </p>
                                <p style="font-size: 17px; line-height: 1.8; color: rgba(243, 239, 231, 0.85); margin-top: 40px;">
                                    Hello <strong>${name}</strong>, thank you for inviting us to your project. Our specialists are reviewing your requirements to provide an exceptional consultation.
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td style="padding: 0 40px 40px 40px;" class="content-padding">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: rgba(198, 142, 78, 0.03); border-radius: 12px; border: 1px solid rgba(198, 142, 78, 0.2);">
                                    <tr>
                                        <td style="padding: 30px;" class="section-detail">
                                            <p style="margin: 0 0 20px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: #C68E4E;">Next Steps</p>
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                <tr>
                                                    <td width="28" valign="top" style="padding-top: 6px;"><div style="width: 6px; height: 6px; background-color: #C68E4E; border-radius: 50%;"></div></td>
                                                    <td style="padding-bottom: 20px; font-size: 15px; line-height: 1.6; color: rgba(243, 239, 231, 0.9);">
                                                        <strong style="color: #FFFFFF;">Scope Review:</strong> Our experts are analyzing your project specifications and timeline.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="28" valign="top" style="padding-top: 6px;"><div style="width: 6px; height: 6px; background-color: #C68E4E; border-radius: 50%;"></div></td>
                                                    <td style="padding-bottom: 20px; font-size: 15px; line-height: 1.6; color: rgba(243, 239, 231, 0.9);">
                                                        <strong style="color: #FFFFFF;">Personal Connection:</strong> A design lead will reach out within 48 business hours.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="28" valign="top" style="padding-top: 6px;"><div style="width: 6px; height: 6px; background-color: #C68E4E; border-radius: 50%;"></div></td>
                                                    <td style="margin: 0; font-size: 15px; line-height: 1.6; color: rgba(243, 239, 231, 0.9);">
                                                        <strong style="color: #FFFFFF;">Strategy Call:</strong> We'll propose a tailored strategy and initial budget estimate.
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <td style="padding: 0 40px 50px 40px;" class="content-padding">
                                <p style="margin: 0 0 15px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(243, 239, 231, 0.4);">Brief Summary</p>
                                <div style="padding: 20px; background: rgba(0,0,0,0.2); border-left: 3px solid #C68E4E; border-radius: 4px;">
                                    <p style="margin: 0; font-size: 15px; line-height: 1.7; color: rgba(243, 239, 231, 1); font-style: italic;">"${project}"</p>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td align="center" style="padding: 0 40px 60px 40px; text-align: center;" class="content-padding">
                                <p style="font-size: 15px; color: rgba(243, 239, 231, 0.7); margin: 0 0 35px 0; line-height: 1.7;">
                                    Need an immediate update? Use the direct line below.
                                </p>
                                <a href="tel:+442079460958" style="display: inline-block; background-color: transparent; border: 2px solid #C68E4E; color: #C68E4E; padding: 14px 35px; border-radius: 4px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; transition: all 0.3s ease;">
                                    Call Direct: +44 20 7946 0958
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td bgcolor="#C68E4E" style="padding: 20px; text-align: center;">
                                <p style="margin: 0; font-size: 13px; font-weight: 700; color: #0A0A0A; text-transform: uppercase; letter-spacing: 0.2em;">
                                    Mastery in Wood & Creation
                                </p>
                            </td>
                        </tr>
                    </table>
                    
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                        <tr>
                            <td align="center" style="padding: 50px 20px; font-size: 12px; color: rgba(243, 239, 231, 0.3); text-align: center; line-height: 2;">
                                <strong style="color: rgba(243, 239, 231, 0.5); font-size: 13px; letter-spacing: 0.1em;">MACE REVAMP EB LTD</strong><br>
                                LONDON &bull; UNITED KINGDOM<br>
                                LUXURY CARPENTRY & JOINERY SERVICES<br><br>
                                <a href="https://scaming.fans" style="color: #C68E4E; text-decoration: none; font-weight: 600; border-bottom: 1px solid rgba(198, 142, 78, 0.3);">VISIT DIGITAL PORTFOLIO</a>
                            </td>
                        </tr>
                    </table>
                    <!--[if mso]>
                    </td>
                    </tr>
                    </table>
                    <![endif]-->
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(400).json({ error });
        }

        return res.status(200).json({ data });
    } catch (error) {
        console.error('Fatal API error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
