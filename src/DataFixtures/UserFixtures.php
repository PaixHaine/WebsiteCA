<?php

namespace App\DataFixtures;

use App\Entity\Post;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use App\DataFixtures\BaseFixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends BaseFixture
{
    private static $userNames = [
        'Michel',
        'Michelle',
        'Alice',
    ];
    private static $usersImages = [
        'uploads/users-images/anthony-delanoix-OZDsM60eeec-unsplash.jpg',
        'uploads/users-images/fezbot2000-pqYPRPHNE_8-unsplash.jpg',
        'uploads/users-images/ivana-cajina-dnL6ZIpht2s-unsplash.jpg',
    ];

    private static $postsImages = [
        'uploads/posts/antonio-molinari-xD1c4FUHIJY-unsplash.jpg',
        'uploads/posts/clay-banks-OOS6bEK6QrU-unsplash.jpg',
        'uploads/posts/jeff-kepler-R3IRoTjU0mk-unsplash.jpg',

        'uploads/posts/jon-tyson-g2QOdjF0h9c-unsplash.jpg',
        'uploads/posts/jonathan-knepper-FDCr4frb7Vg-unsplash.jpg',
        'uploads/posts/joseph-barrientos-UbWhP0J8dsw-unsplash.jpg',

        'uploads/posts/malik-sy-gegktdeN9eU-unsplash.jpg',
        'uploads/posts/nicolas-tissot-VWRb8QjqjJY-unsplash.jpg',
        'uploads/posts/sergei-akulich--heLWtuAN3c-unsplash.jpg',

    ];

    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function loadData(ObjectManager $manager){
        $this->createMany(User::class, 3, function(User $user, $count) use ($manager){
            $user->setUsername(self::$userNames[$count]);
            $user->setEmail(self::$userNames[$count].'@example.org');
            $user->setPassword('test');
            $user->setUserImage(self::$usersImages[$count]);

            //TODO: create PostFixtures class
            $post1 = new Post();
            $post1->User($user);
            $post1->setPostImage(self::$postsImages[$count]);
            $manager->persist($post1);

            $post2 = new Post();
            $post2->setUser($user);
            $post2->setPostImage(self::$postsImages[$count+3]);
            $manager->persist($post2);

            $post3 = new Post();
            $post3->setUser($user);
            $post3->setPostImage(self::$postsImages[$count+6]);
            $manager->persist($post3);

        });
        $manager->flush();
    }

//    public function load(ObjectManager $manager)
//    {
//        $user = new User();
//        $user->setUsername('admin');
//        $user->setEmail('admin@example.org');
//
//        $user->setPassword($this->passwordEncoder->encodePassword(
//            $user,
//            'admin'
//        ));
//
//        $manager->persist($user);
//        $manager->flush();
//    }
}
