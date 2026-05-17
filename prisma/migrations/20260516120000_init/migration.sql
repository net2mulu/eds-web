-- CreateTable
CREATE TABLE `news` (
    `id` VARCHAR(30) NOT NULL,
    `title` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `content` TEXT NULL,
    `image` TEXT NOT NULL,
    `date` TEXT NOT NULL,
    `category` TEXT NOT NULL,
    `featured` TINYINT(1) NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `events` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `date` TEXT NOT NULL,
    `time` TEXT NOT NULL,
    `location` TEXT NOT NULL,
    `image` TEXT NOT NULL,
    `category` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
