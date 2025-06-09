import { NextResponse } from 'next/server';
import { appendToSheet } from '@/lib/googleSheets';

export async function GET() {
  try {
    const testData = [
      new Date().toISOString(), // timestamp
      'test', // sleepQuality
      'test', // sleepAlone
      'test', // exercise
      'test', // work
      'test', // socialActivity
      'test', // vaping
      'test', // alcohol
      'test', // lyrica
      'test', // creatine
      'test', // liver
      'test', // bVitamin
      '1', // menstrualCycleDay
      '1', // flowStateHours
      '3', // lockedInLevel
      '3', // socialFluidity
      '3', // stalkVitality
      '3', // stressLevel
      '3', // energyMetabolism
      '3', // emotionalCapability
      '3', // musicReinforcement
      '3', // anxietyLevel
    ];

    const result = await appendToSheet(testData);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Test failed:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
} 