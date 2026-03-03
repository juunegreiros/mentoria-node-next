import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

const IDS = {
  OWNER: {
    JULIANA: '1',
    VICTOR: '2',
  },
  PATIENT: {
    NANA: '1',
    NALA: '2',
  },
}

async function createOwners() {
  await prisma.owner.create({
    data: {
      id: IDS.OWNER.JULIANA,
      name: 'Juliana',
      phone: '1234567890',
    },
  })

  await prisma.owner.create({
    data: {
      id: IDS.OWNER.VICTOR,
      name: 'Victor',
      phone: '1234567890',
    },
  })
}

async function createPatients() {
  await prisma.patient.create({
    data: {
      id: IDS.PATIENT.NANA,
      name: 'Nana',
      species: 'Cat',
    },
  })

  await prisma.patient.create({
    data: {
      id: IDS.PATIENT.NALA,
      name: 'Nala',
      species: 'cat',
    },
  })
}

async function createOwnerPatients() {
  await prisma.ownerPatient.create({
    data: {
      ownerId: '1',
      patientId: '1',
    },
  })
  await prisma.ownerPatient.create({
    data: {
      ownerId: '1',
      patientId: '2',
    },
  })
  await prisma.ownerPatient.create({
    data: {
      ownerId: '2',
      patientId: '1',
    },
  })
  await prisma.ownerPatient.create({
    data: {
      ownerId: '2',
      patientId: '2',
    },
  })
}

async function main() {
  await createOwners()
  await createPatients()
  await createOwnerPatients()
}

main().finally(() => {
  prisma.$disconnect()
})
