import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

// Initialize auth client
const client = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth: client });
const spreadsheetId = process.env.GOOGLE_SHEET_ID;

export async function appendToSheet(values: any[]) {
  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:V', // Adjust the range based on your columns
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [values],
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error appending to sheet:', error);
    throw error;
  }
} 