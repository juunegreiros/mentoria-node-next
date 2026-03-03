/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Patient` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_ownerId_fkey";

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "ownerId";

-- CreateTable
CREATE TABLE "OwnerPatient" (
    "ownerId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OwnerPatient_pkey" PRIMARY KEY ("ownerId","patientId")
);

-- AddForeignKey
ALTER TABLE "OwnerPatient" ADD CONSTRAINT "OwnerPatient_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OwnerPatient" ADD CONSTRAINT "OwnerPatient_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
