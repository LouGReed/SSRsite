import { NextResponse } from 'next/server';
import { appendToSheet } from '@/lib/googleSheets';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const timestamp = new Date().toISOString();
    
    // Format the data as an array matching your sheet columns
    const values = [
      timestamp,
      data.sleepQuality,
      data.sleepAlone,
      data.exercise,
      data.work,
      data.socialActivity,
      data.vaping,
      data.alcohol,
      data.lyrica,
      data.creatine,
      data.liver,
      data.bVitamin,
      data.menstrualCycleDay,
      data.flowStateHours,
      data.lockedInLevel,
      data.socialFluidity,
      data.stalkVitality,
      data.stressLevel,
      data.energyMetabolism,
      data.emotionalCapability,
      data.musicReinforcement,
      data.anxietyLevel,
    ];

    await appendToSheet(values);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit form' }, { status: 500 });
  }
} 