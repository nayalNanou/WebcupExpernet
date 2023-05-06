<?php
namespace App\Entity;

use Doctrine\ORM\Mapping AS ORM;

#[ORM\Entity]
#[ORM\Table(name: 'app_prediction')]
class Prediction
{
    #[ORM\Id]
    #[ORM\GeneratedValue(strategy: 'IDENTITY')]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(name: 'description', type: 'text', nullable: false)]
    private ?string $description = null;

    #[ORM\Column(name: 'display', type: 'boolean', nullable: true)]
    private ?bool $display = false;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description)
    {
        $this->description = $description;

        return $this;
    }

    public function getDisplay(): ?boolean
    {
        return $this->display;
    }

    public function setDispay(?boolean $display)
    {
        $this->display = $display;

        return $this;
    }
}
