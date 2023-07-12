/*
  Warnings:

  - You are about to drop the column `age` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `patientId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Patient` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nationality` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sex` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "State" AS ENUM ('SCHEDULED', 'RECRUITING', 'TESTING', 'ANALYSING', 'COMPLETED');

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_patientId_fkey";

-- DropIndex
DROP INDEX "User_patientId_key";

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "age",
DROP COLUMN "name",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "patientId",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "nationality" TEXT NOT NULL,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "sex" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Condition" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "partsAffected" TEXT[],
    "symptoms" TEXT[],
    "terminal" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Condition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConditionsOnDoctors" (
    "doctorId" INTEGER NOT NULL,
    "conditionId" INTEGER NOT NULL,

    CONSTRAINT "ConditionsOnDoctors_pkey" PRIMARY KEY ("doctorId","conditionId")
);

-- CreateTable
CREATE TABLE "ConditionsOnPatients" (
    "patientId" INTEGER NOT NULL,
    "conditionId" INTEGER NOT NULL,

    CONSTRAINT "ConditionsOnPatients_pkey" PRIMARY KEY ("patientId","conditionId")
);

-- CreateTable
CREATE TABLE "ConditionsOnStudies" (
    "studyId" INTEGER NOT NULL,
    "conditionId" INTEGER NOT NULL,

    CONSTRAINT "ConditionsOnStudies_pkey" PRIMARY KEY ("studyId","conditionId")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResearchCenter" (
    "id" SERIAL NOT NULL,
    "addresses" TEXT[],
    "emails" TEXT[],
    "name" TEXT NOT NULL,
    "phoneNumbers" TEXT[],
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResearchCenter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Study" (
    "id" SERIAL NOT NULL,
    "researchCenterId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "paperUrl" TEXT,
    "patientCurrent" INTEGER NOT NULL,
    "patientMax" INTEGER NOT NULL,
    "state" "State" NOT NULL DEFAULT 'SCHEDULED',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Study_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Condition_name_key" ON "Condition"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_userId_key" ON "Doctor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ResearchCenter_name_key" ON "ResearchCenter"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_userId_key" ON "Patient"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");

-- AddForeignKey
ALTER TABLE "ConditionsOnDoctors" ADD CONSTRAINT "ConditionsOnDoctors_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConditionsOnDoctors" ADD CONSTRAINT "ConditionsOnDoctors_conditionId_fkey" FOREIGN KEY ("conditionId") REFERENCES "Condition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConditionsOnPatients" ADD CONSTRAINT "ConditionsOnPatients_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConditionsOnPatients" ADD CONSTRAINT "ConditionsOnPatients_conditionId_fkey" FOREIGN KEY ("conditionId") REFERENCES "Condition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConditionsOnStudies" ADD CONSTRAINT "ConditionsOnStudies_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConditionsOnStudies" ADD CONSTRAINT "ConditionsOnStudies_conditionId_fkey" FOREIGN KEY ("conditionId") REFERENCES "Condition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Study" ADD CONSTRAINT "Study_researchCenterId_fkey" FOREIGN KEY ("researchCenterId") REFERENCES "ResearchCenter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
