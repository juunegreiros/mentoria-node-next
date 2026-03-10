import { NextResponse } from 'next/server'
import { getPatientById } from '@/app/modules/patients/patients.repo'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = await params
  const patient = await getPatientById(id)

  return NextResponse.json({ data: patient }, { status: 200 })
}
