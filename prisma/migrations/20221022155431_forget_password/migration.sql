-- CreateTable
CREATE TABLE "ForgetPassword" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expireIn" TIMESTAMP(3) NOT NULL,
    "code" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "isChecked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ForgetPassword_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ForgetPassword" ADD CONSTRAINT "ForgetPassword_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
