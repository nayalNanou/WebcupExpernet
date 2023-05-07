<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route("/about", name: "about_")]
class AboutController extends AbstractController
{
    #[Route("/", name: "index")]
    public function index()
    {
        return $this->render('about.html.twig');
    }

    #[Route("/contact", name: "contact")]
    public function contact()
    {
        return $this->render('contact.html.twig');
    }

    #[Route("/team", name: "team")]
    public function team()
    {
        return $this->render('team.html.twig');
    }

    #[Route("/service", name: "service")]
    public function service()
    {
        return $this->render('service.html.twig');
    }

    #[Route("/searchdevelopement", name: "search_developement")]
    public function searchdevelopement()
    {
        return $this->render('searchdevelopement.html.twig');
    }

    #[Route("/mentionslegales", name: "mentions_legales")]
    public function mentionslegales()
    {
        return $this->render('mentionslegales.html.twig');
    }

    #[Route("/politiqueconfidentialite", name: "politique_confidentialite")]
    public function politiqueconfidentialite()
    {
        return $this->render('politiqueconfidentialite.html.twig');
    }
}
