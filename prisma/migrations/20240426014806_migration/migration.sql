-- CreateTable
CREATE TABLE "user_info" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notes_info" (
    "note_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notes_info_pkey" PRIMARY KEY ("note_id")
);

-- AddForeignKey
ALTER TABLE "notes_info" ADD CONSTRAINT "notes_info_note_id_fkey" FOREIGN KEY ("note_id") REFERENCES "user_info"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
