import { NextResponse } from 'next/server'
import { getPatientById, updatePatient } from '@/app/modules/patients/patients.repo'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = await params
  const patient = await getPatientById(id)

  return NextResponse.json({ data: patient }, { status: 200 })
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const { id } = await params
  const body = await request.json()
  const updatedPatient = await updatePatient(id, body)

  return NextResponse.json({ data: updatedPatient }, { status: 200 })
}
