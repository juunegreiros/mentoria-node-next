import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

type Patient = {
  name: string
  species: string
}

export async function listPatients() {
  const patients = await prisma.patient.findMany()

  return patients
}

export async function createPatient(patient: Patient) {
  const patients = await prisma.patient.create({
    data: {
      name: patient.name,
      species: patient.species,
    },
  })

  return patients
}

export async function getPatientById(id: string) {
  const patient = await prisma.patient.findUnique({
    where: { id },
  })

  return patient
}
