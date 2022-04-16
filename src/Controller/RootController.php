<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RootController extends AbstractController
{
    /**
     * @Route("/{reactRouting}/{param}", name="home",requirements={"reactRouting"="^(?!api).+"}, defaults={"reactRouting": null, "param": ""})
     */
    public function root(string $param): Response
    {
        return $this->render('root/index.html.twig', [
            'controller_name' => 'RootController',
        ]);
    }

     
}