<?php

namespace App\DataFixtures;

use App\Entity\Post;
use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class PostFixtures extends BaseFixture
{

    public function loadData(ObjectManager $manager)
    {
//        $this->createMany(Post::class, 3, function(Post $post) {
//            $post->setUser($this->getReference(User::class));
//        });

//        $manager->persist($post);

//        $this->createMany(Post::class, 10, function(Post $post) {
//
//            $post->setUser($this->getReference(User::class.'_0'));
//        });
//        $manager->flush();
    }

}
