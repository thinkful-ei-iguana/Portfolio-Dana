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
    console.log(
      leftOrRight === 'left'
        ? 'left click'
        : 'right click'
    );
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

// if (window.innerWidth < 1100) {
//   scroller(
//     projects[0].goLeft,
//     projects[0].screenshots,
//     'left',
//     1
//   );

//   scroller(
//     'quizright',
//     'quizPics',
//     'right',
//     1
//   );
// } else {
//   scroller(
//     'quizleft',
//     'quizPics',
//     'left',
//     0.5
//   );

//   scroller(
//     'quizright',
//     'quizPics',
//     'right',
//     0.5
//   );
// }
