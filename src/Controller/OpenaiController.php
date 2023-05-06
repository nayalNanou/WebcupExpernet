<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Manager\OpenaiManager;

#[Route("/openai", name: "openai_")]
class OpenaiController extends AbstractController
{
    #[Route("/prediction", name: "prediction")]
    public function prediction()
    {
        return $this->render('openai/prediction.html.twig', [
        ]);
    }

    #[Route("/generate/prediction", name: "generate_prediction")]
    public function generatePrediction(Request $request, OpenaiManager $openaiManager)
    {
        $dream = $request->request->get('dream');
        $dream = htmlspecialchars($dream);
        $dream = trim($dream);

        if ($dream) {
            $predictionResult = $openaiManager->generatePredictionFromDream($dream);

            return new Response(json_encode($predictionResult));
        } else {
            return new Response(json_encode(":( Sorry it looks like our AI took some vacation."));
        }
    }
}
