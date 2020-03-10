let quizPics = document.getElementById(
  'quizPics'
);
function scroller(
  actionId,
  boxId,
  leftOrRight,
  increment
) {
  document.getElementById(
    actionId
  ).onclick = function() {
    let el = document.getElementById(
      boxId
    );
    let scrollLength = el.clientWidth;
    el.scrollBy({
      left:
        leftOrRight === 'left'
          ? scrollLength * increment
          : -scrollLength * increment,
      behavior: 'smooth'
    });
  };
}

const projects = [
  {
    screenshots: 'quizPics',
    goLeft: 'quizleft',
    goRight: 'quizright'
  },
  {
    screenshots: 'morkitPics',
    goLeft: 'morkitleft',
    goRight: 'morkitRight'
  },
  {
    screenshots: 'morkitMobilePics',
    goLeft: 'morkitmobileleft',
    goRight: 'morkitMobileRight'
  },
  {
    screenshots: 'frenmoPics',
    goLeft: 'frenmoleft',
    goRight: 'frenmoright'
  },
  {
    screenshots: 'spacerPics',
    goLeft: 'spacerleft',
    goRight: 'spacerright'
  }
];

let smallScreen =
  window.innerWidth < 1100;
for (let p of projects) {
  scroller(
    p.goLeft,
    p.screenshots,
    'left',
    smallScreen ? 1 : 0.5
  );
  scroller(
    p.goRight,
    p.screenshots,
    'right',
    smallScreen ? 1 : 0.5
  );
}
