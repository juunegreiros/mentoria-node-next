import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

export async function GET() {
  const patients = await prisma.patient.findMany()

  return NextResponse.json({ data: patients }, { status: 200 })
}
