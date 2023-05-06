<?php

namespace App\Manager;

use Exception;
use App\Exception\NotAccessApiException;
use OpenAI\Client as OpenaiClient;
use OpenAI\Contracts\Response;
use OpenAI\Exceptions\ErrorException;
use OpenAI\Exceptions\TransporterException;
use Psr\Log\LoggerInterface;

class OpenaiManager
{
    public function __construct(private OpenaiClient $openAI, private LoggerInterface $apiOpenaiLogger)
    {
    }

    public function generatePredictionFromDream(?string $dream)
    {
        $companyDescription = "Maestria est un cabinet de recrutement situé à Mayotte, spécialisée dans les problématique RH";

        $params = [
            'model' => 'gpt-3.5-turbo',
            'max_tokens' => 700,
            'messages' => [

                ['role' => 'system', 'content' => "Tu es une intelligence artificielle qui s'appelle ONIRIX, capable de prédir un avenir à partir des rêves"],
                ['role' => 'assistant', 'content' => "Le rêve est le suivant : " . $dream],
                ['role' => 'user', 'content' => "Redige une prédiction à partir de ce rêve"],

            ],
        ];

        try{
            $this->apiOpenaiLogger->info(sprintf("Create chat with openai"), $params);
            $response = $this->openAI->chat()->create($params);
        }
        catch(TransporterException | ErrorException $e) {
            throw new \Exception('Not access open API client : ' . $e->getMessage());
        }

        return $response;
    }
}
