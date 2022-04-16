<?php

namespace App\Entity;

use App\Repository\ReservationRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ReservationRepository::class)
 */
class Reservation
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $payReference;

    /**
     * @ORM\ManyToOne(targetEntity=Traveler::class, inversedBy="reservationRelation")
     * @ORM\JoinColumn(nullable=false)
     */
    private $travelerId;

    /**
     * @ORM\ManyToOne(targetEntity=Trip::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $tripId;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPayReference(): ?string
    {
        return $this->payReference;
    }

    public function setPayReference(string $payReference): self
    {
        $this->payReference = $payReference;

        return $this;
    }

    public function getTravelerId(): ?Traveler
    {
        return $this->travelerId;
    }

    public function setTravelerId(?Traveler $travelerId): self
    {
        $this->travelerId = $travelerId;

        return $this;
    }

    public function getTripId(): ?Trip
    {
        return $this->tripId;
    }

    public function setTripId(?Trip $tripId): self
    {
        $this->tripId = $tripId;

        return $this;
    }
}
