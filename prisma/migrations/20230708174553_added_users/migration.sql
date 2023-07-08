-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_patientId_key" ON "User"("patientId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;
