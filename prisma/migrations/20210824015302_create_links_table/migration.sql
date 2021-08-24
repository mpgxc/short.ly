-- CreateTable
CREATE TABLE "links" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "links.token_unique" ON "links"("token");

-- CreateIndex
CREATE UNIQUE INDEX "links.url_unique" ON "links"("url");
