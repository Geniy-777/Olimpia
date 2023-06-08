/*
  Warnings:

  - You are about to drop the column `userId` on the `Service` table. All the data in the column will be lost.
  - Added the required column `employeeId` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    CONSTRAINT "Service_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Service" ("description", "id", "name") SELECT "description", "id", "name" FROM "Service";
DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
