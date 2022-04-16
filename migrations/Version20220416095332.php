<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220416095332 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE reservation (id INT AUTO_INCREMENT NOT NULL, traveler_id_id INT NOT NULL, trip_id_id INT NOT NULL, pay_reference VARCHAR(20) NOT NULL, INDEX IDX_42C84955776B35B0 (traveler_id_id), INDEX IDX_42C84955A50F1E14 (trip_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE traveler (id INT AUTO_INCREMENT NOT NULL, ci VARCHAR(9) NOT NULL, name VARCHAR(50) NOT NULL, phone_number VARCHAR(15) DEFAULT NULL, birth_date VARCHAR(20) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE trip (id INT AUTO_INCREMENT NOT NULL, destination VARCHAR(50) NOT NULL, places_number INT NOT NULL, origin VARCHAR(50) NOT NULL, price INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C84955776B35B0 FOREIGN KEY (traveler_id_id) REFERENCES traveler (id)');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C84955A50F1E14 FOREIGN KEY (trip_id_id) REFERENCES trip (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C84955776B35B0');
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C84955A50F1E14');
        $this->addSql('DROP TABLE reservation');
        $this->addSql('DROP TABLE traveler');
        $this->addSql('DROP TABLE trip');
    }
}
