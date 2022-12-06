-- CreateTable
CREATE TABLE "Nfe" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "content" xml NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Nfe_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Nfe" ADD CONSTRAINT "Nfe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
