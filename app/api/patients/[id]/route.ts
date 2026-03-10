import { NextResponse } from 'next/server'
import { getPatientById, updatePatient, deletePatient } from '@/app/modules/patients/patients.repo'

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

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = await params
  await deletePatient(id)

  return new Response(null, { status: 204 })
}
