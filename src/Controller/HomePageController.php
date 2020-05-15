<?php

namespace App\Controller;

use App\Entity\Post;
use App\Entity\User;
use App\Repository\PostRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomePageController extends AbstractController
{



    /**
     * @Route("/", name="app_homepage")
     * @param PostRepository $postRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(PostRepository $postRepository)
    {
//        $users = $this->getDoctrine()
//            ->getRepository(User::class)
//            ->findAll();
        $homeSlides= [
            'home-slide-one',
            'home-slide-two',
            'home-slide-three',
            'home-slide-four',
            'home-slide-five'
            ];

        $posts = $postRepository->findLastSixPosts();


        return $this->render('home_page/index.html.twig', [
            'controller_name' => 'HomePageController',
            'posts'=> $posts,
            'homeSlides' => $homeSlides
        ]);
    }
}
