const
    slideLeftId = document.getElementById('home-slide-button-left');
    slideRightId = document.getElementById('home-slide-button-right');
    slideOne = document.getElementById('home-slide-one');
    slideTwo = document.getElementById('home-slide-two');
    slideThree = document.getElementById('home-slide-three');
    slideFour = document.getElementById('home-slide-four');
    slideFive = document.getElementById('home-slide-five');
    slideOneDisplay = getComputedStyle(slideOne, null).display;
    slideTwoDisplay = getComputedStyle(slideTwo, null).display;
    slideThreeDisplay = getComputedStyle(slideThree, null).display;
    slideFourDisplay = getComputedStyle(slideFour, null).display;
    slideFiveDisplay = getComputedStyle(slideFive, null).display;

slideOne.style.display ='none';
slideTwo.style.display ='flex';
slideThree.style.display ='flex';
slideFour.style.display ='flex';
slideFive.style.display ='none';

function slideLeftAction() {
    // console.log(slideOne.style.display);
    // slideOne.style.display ='flex';
    // slideTwo.style.display ='flex';
    // slideThree.style.display ='flex';
    // slideFour.style.display ='none';
    // slideFive.style.display ='none';

    if (slideOne.style.display === 'none' && slideFive.style.display === 'none'){
        slideOne.style.display ='flex';
        slideTwo.style.display ='flex';
        slideThree.style.display ='flex';
        slideFour.style.display ='none';
        slideFive.style.display ='none';

        slideOne.style.order = '2';
        slideTwo.style.order = '3';
        slideThree.style.order = '4';
        slideFour.style.order = '5';
        slideFive.style.order = '1';
    }
    else if (slideFive.style.display === 'none' && slideFour.style.display === 'none'){
        slideOne.style.display ='flex';
        slideTwo.style.display ='flex';
        slideThree.style.display ='none';
        slideFour.style.display ='none';
        slideFive.style.display ='flex';

        slideOne.style.order = '3';
        slideTwo.style.order = '4';
        slideThree.style.order = '5';
        slideFour.style.order = '1';
        slideFive.style.order = '2';
    }
    else if (slideFour.style.display === 'none' && slideThree.style.display === 'none'){
        slideOne.style.display ='flex';
        slideTwo.style.display ='none';
        slideThree.style.display ='none';
        slideFour.style.display ='flex';
        slideFive.style.display ='flex';

        slideOne.style.order = '4';
        slideTwo.style.order = '5';
        slideThree.style.order = '1';
        slideFour.style.order = '2';
        slideFive.style.order = '3';
    }
    else if (slideThree.style.display === 'none' && slideTwo.style.display === 'none'){
        slideOne.style.display ='none';
        slideTwo.style.display ='none';
        slideThree.style.display ='flex';
        slideFour.style.display ='flex';
        slideFive.style.display ='flex';

        slideOne.style.order = '5';
        slideTwo.style.order = '1';
        slideThree.style.order = '2';
        slideFour.style.order = '3';
        slideFive.style.order = '4';
    }
    else if (slideTwo.style.display === 'none' && slideOne.style.display === 'none'){
        slideOne.style.display ='none';
        slideTwo.style.display ='flex';
        slideThree.style.display ='flex';
        slideFour.style.display ='flex';
        slideFive.style.display ='none';

        slideOne.style.order = '1';
        slideTwo.style.order = '2';
        slideThree.style.order = '3';
        slideFour.style.order = '4';
        slideFive.style.order = '5';
    }
}

function slideRightAction() {
    if (slideOne.style.display === 'none' && slideFive.style.display === 'none'){
        slideOne.style.display ='none';
        slideTwo.style.display ='none';
        slideThree.style.display ='flex';
        slideFour.style.display ='flex';
        slideFive.style.display ='flex';

        slideOne.style.order = '5';
        slideTwo.style.order = '1';
        slideThree.style.order = '2';
        slideFour.style.order = '3';
        slideFive.style.order = '4';
    }
    else if (slideTwo.style.display === 'none' && slideOne.style.display === 'none'){
        slideOne.style.display ='flex';
        slideTwo.style.display ='none';
        slideThree.style.display ='none';
        slideFour.style.display ='flex';
        slideFive.style.display ='flex';

        slideOne.style.order = '4';
        slideTwo.style.order = '5';
        slideThree.style.order = '1';
        slideFour.style.order = '2';
        slideFive.style.order = '3';
    }
    else if (slideThree.style.display === 'none' && slideTwo.style.display === 'none'){
        slideOne.style.display ='flex';
        slideTwo.style.display ='flex';
        slideThree.style.display ='none';
        slideFour.style.display ='none';
        slideFive.style.display ='flex';

        slideOne.style.order = '3';
        slideTwo.style.order = '4';
        slideThree.style.order = '5';
        slideFour.style.order = '1';
        slideFive.style.order = '2';
    }
    else if (slideFour.style.display === 'none' && slideThree.style.display === 'none'){
        slideOne.style.display ='flex';
        slideTwo.style.display ='flex';
        slideThree.style.display ='flex';
        slideFour.style.display ='none';
        slideFive.style.display ='none';

        slideOne.style.order = '2';
        slideTwo.style.order = '3';
        slideThree.style.order = '4';
        slideFour.style.order = '5';
        slideFive.style.order = '1';
    }
    else if (slideFive.style.display === 'none' && slideFour.style.display === 'none'){
        slideOne.style.display ='none';
        slideTwo.style.display ='flex';
        slideThree.style.display ='flex';
        slideFour.style.display ='flex';
        slideFive.style.display ='none';

        slideOne.style.order = '1';
        slideTwo.style.order = '2';
        slideThree.style.order = '3';
        slideFour.style.order = '4';
        slideFive.style.order = '5';
    }
}


slideLeftId.addEventListener('click', slideLeftAction);
slideRightId.addEventListener('click', slideRightAction);

