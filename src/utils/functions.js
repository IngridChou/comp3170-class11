export function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

export function random(limit) {
  return Math.floor(Math.random() * (limit + 1));
}

export function normalize(name) {
  /** Given a name such as New York,
   * return a normalize form like new-york
   * which is easier to use in urls
   */
  return name.toLowerCase().replace(/ /g, "-");
}
