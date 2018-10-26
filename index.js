function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(i) + n).toString();
  }
}

function deepestChild() {
  let parent = document.querySelector('div#grand-node');
  let child = parent.children[0];

  while (child) {
    parent = child
    child = parent.children[0];
  }
  return parent;
}
