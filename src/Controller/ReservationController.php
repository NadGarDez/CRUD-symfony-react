<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Reservation;
use App\Entity\Traveler;
use App\Entity\Trip;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class ReservationController extends AbstractController
{
    /**
     * @Route("/reservation", name="app_reservation")
     */
    public function index(): Response
    {
        return $this->render('reservation/index.html.twig', [
            'controller_name' => 'ReservationController',
        ]);
    }

    /**
     * @Route("/api/createReservation", name="createReservation",  methods={"POST"}))
     */
    public function createReservation(ManagerRegistry $doctrine, Request $request): Response
    {
        $parameters = json_decode($request->getContent(), true);
        
        $traveler = $doctrine->getRepository(Traveler::class)->find($parameters['values']['travelerId']);
        $trip = $doctrine->getRepository(Trip::class)->find($parameters['values']['tripId']);
        $entityManager = $doctrine->getManager();

        $reservation = new Reservation();
        $reservation->setTravelerId($traveler);
        $reservation->setPayReference($parameters['values']['payReference']);
        
        $reservation->setTripId($trip);

        $entityManager->persist($reservation);

        $entityManager->flush();

       
       
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        

        $response->setContent(json_encode(['reservation'=>$reservation->getId()]));

        return $response;
        
    }

    /**
     * @Route("/api/reservations", name="reservations",  methods={"GET"})
     */
    public function reservations(ManagerRegistry $doctrine, Request $request): Response
    {
        $reservation = $doctrine->getRepository(Reservation::class)->allThings();
        $encoders = [ new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        $jsonContent = $serializer->serialize($reservation, 'json');
        
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($jsonContent));

        return $response;
    }

}


