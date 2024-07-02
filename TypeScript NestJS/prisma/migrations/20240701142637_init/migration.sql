-- CreateTable
CREATE TABLE `Autor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `nacionalidade` VARCHAR(191) NOT NULL,
    `dataNascimento` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Editora` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `pais` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Editora_cnpj_key`(`cnpj`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Livro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `isbn` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `assunto` VARCHAR(191) NOT NULL,
    `dataPublicacao` DATETIME(3) NOT NULL,
    `edicao` VARCHAR(191) NOT NULL,
    `autorId` INTEGER NOT NULL,
    `editoraId` INTEGER NOT NULL,

    UNIQUE INDEX `Livro_isbn_key`(`isbn`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Livro` ADD CONSTRAINT `Livro_autorId_fkey` FOREIGN KEY (`autorId`) REFERENCES `Autor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Livro` ADD CONSTRAINT `Livro_editoraId_fkey` FOREIGN KEY (`editoraId`) REFERENCES `Editora`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
