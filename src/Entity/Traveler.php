<?php

namespace App\Entity;

use App\Repository\TravelerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TravelerRepository::class)
 */
class Traveler
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=9)
     */
    private $ci;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $name;


    /**
     * @ORM\Column(type="string", length=15, nullable=true)
     */
    private $phoneNumber;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $birthDate;

    /**
     * @ORM\OneToMany(targetEntity=Reservation::class, mappedBy="travelerId")
     */
    private $reservationRelation;

    public function __construct()
    {
        $this->reservationRelation = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCi(): ?string
    {
        return $this->ci;
    }

    public function setCi(string $ci): self
    {
        $this->ci = $ci;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }


    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(?string $phoneNumber): self
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    public function getBirthDate(): ?string
    {
        return $this->birthDate;
    }

    public function setBirthDate(string $birthDate): self
    {
        $this->birthDate = $birthDate;

        return $this;
    }

    /**
     * @return Collection<int, Reservation>
     */
    public function getReservationRelation(): Collection
    {
        return $this->reservationRelation;
    }

    public function addReservationRelation(Reservation $reservationRelation): self
    {
        if (!$this->reservationRelation->contains($reservationRelation)) {
            $this->reservationRelation[] = $reservationRelation;
            $reservationRelation->setTravelerId($this);
        }

        return $this;
    }

    public function removeReservationRelation(Reservation $reservationRelation): self
    {
        if ($this->reservationRelation->removeElement($reservationRelation)) {
            // set the owning side to null (unless already changed)
            if ($reservationRelation->getTravelerId() === $this) {
                $reservationRelation->setTravelerId(null);
            }
        }

        return $this;
    }
}
