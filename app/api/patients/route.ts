import { NextResponse } from 'next/server'
import { listPatients, createPatient } from '@/app/modules/patients/patients.repo'

export async function GET() {
  const patients = await listPatients()

  return NextResponse.json({ data: patients }, { status: 200 })
}

export async function POST(request: Request) {
  const body = await request.json()
  const { name, species } = body
  const patient = await createPatient({ name, species })

  return NextResponse.json({ data: patient }, { status: 201 })
}
