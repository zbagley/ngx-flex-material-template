export class Single {
  y = Math.round(Math.random() * 1000 / 10);
  name = 'item ';
  color = '';
}

export class Double extends Single {
  x = 0
}

export class Range {
  x = 0
  low = Math.round(Math.random() * 1000 / 10);
  high = Math.round(Math.random() * 1000 / 10);
  name = 'item ';
  color = '';
}

export class Box extends Range {
  q1 = Math.round(Math.random() * 1000 / 10);
  median = Math.round(Math.random() * 1000 / 10);
  q3 = Math.round(Math.random() * 1000 / 10);
}

export class Bubble extends Double {
  z = Math.round(Math.random() * 1000 / 10);
}

export class Heat extends Double {
  value = Math.round(Math.random() * 1000 / 10);
}
