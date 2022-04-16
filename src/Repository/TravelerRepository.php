<?php

namespace App\Repository;

use App\Entity\Traveler;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Traveler|null find($id, $lockMode = null, $lockVersion = null)
 * @method Traveler|null findOneBy(array $criteria, array $orderBy = null)
 * @method Traveler[]    findAll()
 * @method Traveler[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TravelerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Traveler::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(Traveler $entity, bool $flush = true): void
    {
        $this->_em->persist($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function remove(Traveler $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    public function findAllNamesAndId(): array
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = '
            SELECT id, name FROM traveler';
        $stmt = $conn->prepare($sql);
        $resultSet = $stmt->executeQuery();

        return $resultSet->fetchAllAssociative();
    }

    public function findId(string $id): array
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = '
            SELECT * FROM traveler WHERE id= :id';
        $stmt = $conn->prepare($sql);
        $resultSet = $stmt->executeQuery(['id'=>$id]);

        return $resultSet->fetchAllAssociative();
    }

    public function findAllThings(): array
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = '
            SELECT * FROM traveler';
        $stmt = $conn->prepare($sql);
        $resultSet = $stmt->executeQuery();

        return $resultSet->fetchAllAssociative();
    }

    // /**
    //  * @return Traveler[] Returns an array of Traveler objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Traveler
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
