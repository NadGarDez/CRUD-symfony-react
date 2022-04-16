<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Trip;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


class TripsController extends AbstractController
{
    /**
     * @Route("/api/trips", name="trips", methods={"GET"})
     */
    public function index(ManagerRegistry $doctrine): Response
    {
        $trips = $doctrine->getRepository(Trip::class)->findAll();
        $encoders = [ new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        $jsonContent = $serializer->serialize($trips, 'json');
        
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($jsonContent));

        return $response;
    }


     /**
     * @Route("/api/trip/{idTrip}", name="trip", methods={"GET"})
     */
    public function trip(string $idTrip, ManagerRegistry $doctrine): Response
    {
        $trip = $doctrine->getRepository(Trip::class)->find($idTrip);
        $encoders = [ new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        $jsonContent = $serializer->serialize($trip, 'json');
        
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($jsonContent));

        return $response;
    }

     /**
     * @Route("/api/createTrip", name="createTrip", methods={"POST"})
     */
    public function createTrip(ManagerRegistry $doctrine, Request $request): Response
    {
        $parameters = json_decode($request->getContent(), true);

        
        $entityManager = $doctrine->getManager();

        $trip = new Trip();
        $trip->setDestination($parameters['values']['destination']);
        $trip->setPlacesNumber($parameters['values']['placesNumber']);
        $trip->setOrigin($parameters['values']['origin']);
        $trip->setPrice($parameters['values']['price']);

        $entityManager->persist($trip);

        $entityManager->flush();
       
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode(['id'=>$trip->getId()]));
        
        return $response;
        
    }

     /**
     * @Route("/api/editTrip/{id}", name="editTrips", methods={"POST"})
     */
    public function editTrip(ManagerRegistry $doctrine, Request $request, string $id): Response
    {
        $parameters = json_decode($request->getContent(), true);
        
        $entityManager = $doctrine->getManager();

        $trip = $doctrine->getRepository(Trip::class)->find($id);
        $trip->setDestination($parameters['values']['destination']);
        $trip->setPlacesNumber($parameters['values']['placesNumber']);
        $trip->setOrigin($parameters['values']['origin']);
        $trip->setPrice($parameters['values']['price']);

        $entityManager->persist($trip);

        $entityManager->flush();
       
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode(['id'=>$trip->getId()]));
        
        return $response;
    }

     /**
     * @Route("/api/deleteTrip/{id}", name="deleteTrip", methods={"DELETE"})
     */
    public function deleteTrip(ManagerRegistry $doctrine, Request $request, string $id): Response
    {
        
        $entityManager = $doctrine->getManager();
        $trip = $doctrine->getRepository(Trip::class)->find($id);
       
        $entityManager->remove($trip);
        $entityManager->flush();
        
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode(['deleted'=>$trip->getId()]));
        return $response;


    }

    /**
     * @Route("/api/tripAvailable", name="available", methods={"GET"})
     */
    public function available(ManagerRegistry $doctrine, Request $request): Response
    {
        
        $entityManager = $doctrine->getManager();
        $trips = $doctrine->getRepository(Trip::class)->findAllGreaterThanOne();
       
        $encoders = [ new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        $jsonContent = $serializer->serialize($trip, 'json');
        
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode(['deleted'=>$trip->getId()]));
        return $response;


    }
    
}
