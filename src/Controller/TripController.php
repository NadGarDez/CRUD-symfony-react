<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class TripController extends AbstractController
{
    /**
     * @Route("/api/trips", name="app_get_trips")
     */
    public function index(): Response
    {
        $locations = [
            [
                'id'=>1,
                'destination'=>'calabozo',
                'placesNumber'=>20,
                'origin'=>'some',
                'price'=>'1$'
            ],
            [
                'id'=>1,
                'destination'=>'san juan',
                'placesNumber'=>20,
                'origin'=>'some',
                'price'=>'1$'
            ],
            [
                'id'=>1,
                'destination'=>'la pascua',
                'placesNumber'=>20,
                'origin'=>'some',
                'price'=>'1$'
            ],
            [
                'id'=>1,
                'destination'=>'san juan',
                'placesNumber'=>20,
                'origin'=>'some',
                'price'=>'1$'
            ],
            [
                'id'=>1,
                'destination'=>'la pascua',
                'placesNumber'=>20,
                'origin'=>'some',
                'price'=>'1$'
            ],
            [
                'id'=>1,
                'destination'=>'san juan',
                'placesNumber'=>20,
                'origin'=>'some',
                'price'=>'1$'
            ],
            [
                'id'=>1,
                'destination'=>'la pascua',
                'placesNumber'=>20,
                'origin'=>'some',
                'price'=>'1$'
            ],
            [
                'id'=>1,
                'destination'=>'san juan',
                'placesNumber'=>20,
                'origin'=>'some',
                'price'=>'1$'
            ],
            [
                'id'=>1,
                'destination'=>'la pascua',
                'placesNumber'=>20,
                'origin'=>'some',
                'price'=>'1$'
            ]
        ];

        $objeto = [
            'trips' => $locations,
            'status'=> 'success'
        ];

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($objeto));
        
        return $response;
    }

     /**
     * @Route("/api/trip/{idTrip}", name="app_get_trip")
     */
    public function trip(string $idTrip): Response
    {
        $trip = [
                'id'=>1,
                'destination'=>'calabozo',
                'placesNumber'=>20,
                'origin'=>'some',
                'price'=>'1$'
            ];
        

      

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($trip));
        
        return $response;
    }

     /**
     * @Route("/api/trip/edit", name="app_get_edit_trip")
     */
    public function editTrip(Request $request): Response
    {
       

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($response.query.all()));
        
        return $response;
    }
}
