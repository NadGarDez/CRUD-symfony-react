<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Traveler;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class TravelersController extends AbstractController
{

    /**
     * @Route("/travelers", name="app_travelers")
     */
    public function index(): Response
    {
        return $this->render('travelers/index.html.twig', [
            'controller_name' => 'TravelersController',
        ]);
    }
        
     /**
     * @Route("/api/createTraveler", name="createTraveler", methods={"POST"}))
     */
    public function createTraveler(ManagerRegistry $doctrine, Request $request): Response
    {
         $parameters = json_decode($request->getContent(), true);
        
        $entityManager = $doctrine->getManager();

        $traveler = new Traveler();
        $traveler->setName($parameters['values']['name']);
        $traveler->setBirthDate($parameters['values']['birth_date']);
        $traveler->setCi($parameters['values']['ci']);
        $traveler->setPhoneNumber($parameters['values']['phone_number']);

        $entityManager->persist($traveler);

        $entityManager->flush();
       
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        

        $response->setContent(json_encode(['id'=>$traveler->getId()]));

        return $response;
        
    }

     /**
     * @Route("/api/updateTraveler/{id}", name="updateTraveler", methods={"POST"}))
     */
    public function updateTraveler(ManagerRegistry $doctrine, Request $request, string $id): Response
    {
        $parameters = json_decode($request->getContent(), true);

        $entityManager = $doctrine->getManager();

        $traveler = $doctrine->getRepository(Traveler::class)->find($id);
        $traveler->setName($parameters['values']['name']);
        $traveler->setBirthDate($parameters['values']['birth_date']);
        $traveler->setCi($parameters['values']['ci']);
        $traveler->setPhoneNumber($parameters['values']['phone_number']);


        $entityManager->persist($traveler);

        $entityManager->flush();
       
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode(['id'=>$traveler->getId()]));

        return $response;
    }

     /**
     * @Route("/api/travelers", name="travelers"))
     */
    public function travelers(ManagerRegistry $doctrine, Request $request): Response
    {
        $travelers = $doctrine->getRepository(Traveler::class)->findAllThings();
        $encoders = [ new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        $jsonContent = $serializer->serialize($travelers, 'json');
        
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($jsonContent));

        return $response;
    }

     /**
     * @Route("/api/traveler/{id}", name="traveler", methods={"GET"}))
     */
    public function traveler(string $id, ManagerRegistry $doctrine, Request $request): Response
    {
        $traveler = $doctrine->getRepository(Traveler::class)->findId($id);
        $encoders = [ new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        $jsonContent = $serializer->serialize($traveler, 'json');
        
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($jsonContent));

        return $response;
    }

     /**
     * @Route("/api/deleteTraveler/{id}", name="deleteTraveler", methods={"DELETE"}))
     */
    public function deleteTraveler(string $id, ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $traveler = $doctrine->getRepository(Traveler::class)->find($id);
       
        $entityManager->remove($traveler);
        $entityManager->flush();
        
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode(['deleted'=>$traveler->getId()]));

        return $response;
    }

    /**
     * @Route("/api/names", name="names", methods={"GET"})
     */
    public function names(ManagerRegistry $doctrine, Request $request): Response
    {
        
        $entityManager = $doctrine->getManager();
        $travelers = $doctrine->getRepository(Traveler::class)->findAllNamesAndId();
       
        $encoders = [ new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        $jsonContent = $serializer->serialize($travelers, 'json');
        
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($jsonContent));
        return $response;


    }
    


}
