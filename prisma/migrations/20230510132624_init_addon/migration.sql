-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "isAdmin" BOOLEAN NOT NULL
);
INSERT INTO "new_User" ("email", "id", "image", "isAdmin", "name", "password", "phone") SELECT "email", "id", "image", "isAdmin", "name", "password", "phone" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
