<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route("/project", name: "project_")]
class ProjectController extends AbstractController
{
    #[Route("/futurlab", name: "futurlab")]
    public function futurlab()
    {
        return $this->render('futurlab.html.twig');
    }

    #[Route("/expansedream", name: "expansedream")]
    public function expansedream()
    {
        return $this->render('expansedream.html.twig');
    }
}
