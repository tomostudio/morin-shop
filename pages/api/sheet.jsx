import formidable from 'formidable'
import { google } from 'googleapis'
import { createReadStream } from 'fs'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    })
    const sheets = google.sheets({
      auth,
      version: 'v4',
    })
    const drive = google.drive({
      auth,
      version: 'v3',
    })
    const form = new formidable.IncomingForm()
    form.parse(req, async function (err, fields, files) {
      const file = files.foto_transfer
      const fileMetadata = {
        name: file.originalFilename,
        parents: [process.env.DRIVE_ID],
      }
      const media = {
        mimeType: 'image/jpeg',
        body: createReadStream(file.filepath),
      }

      try {
        const image = await drive.files.create({
          resource: fileMetadata,
          media: media,
        })
        sheets.spreadsheets.values
          .append({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: 'Sheet1!A2:C',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
              values: [
                [
                  fields.order_id,
                  fields.nama_pengirim,
                  fields.nama_bank,
                  fields.nominal,
                  `${process.env.IMAGE_LINK}${image.data.id}`,
                ],
              ],
            },
          })
          .then(() => res.json({ code: 200, message: 'Success' }))
          .catch((e) =>
            res.json({ code: 500, message: 'Something wrong', error: e }),
          )
      } catch (e) {
        res.json({ code: 500, message: 'Something wrong', error: e })
      }
    })
  }
}
