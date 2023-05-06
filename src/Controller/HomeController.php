<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Manager\OpenaiManager;

#[Route("/", name: "home_")]
class HomeController extends AbstractController
{
    #[Route("/", name: "index")]
    public function index(OpenaiManager $openaiManager)
    {

//        $result = $openaiManager->generateOfferContent();

  //      dump($result);

        return $this->render('homepage.html.twig');
    }
}
