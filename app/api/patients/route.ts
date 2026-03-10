import { NextResponse } from 'next/server'
import { listPatients } from '@/app/modules/patients/patients.repo'

export async function GET() {
  const patients = await listPatients()

  return NextResponse.json({ data: patients }, { status: 200 })
}
