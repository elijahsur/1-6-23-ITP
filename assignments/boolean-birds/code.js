/*
 * Important facts about the birds of Booleana.
 *
 * Coloration and markings:
 *
 *   - Flobby Birds and Bloggy Birds are red.
 *   - Flibble Birds and Globby Birds are not red.
 *   - Flobby Birds and Flibble Birds are spotted.
 *   - Bloggy Birds and Globby Birds are not spotted.
 *
 * Diet:
 *
 *   - Flobby Birds eat fish, nuts, and worms.
 *   - Bloggy Birds eat mice, nuts, and worms.
 *   - Flibble Birds eat fish, mice, and worms.
 *   - Globby Birds eat fish, mice, and nuts.
 *
 */ 
const isFlobbyBird = (a,b) => a&&b
const isBloggyBird = (a,b) => a&&!b
const isFlibbleBird = (a,b) => !a&&b
const isGlobbyBird = (a,b) => !a&&!b

const eatsWorms = (a,b) => a&&b||!a&&b||a&&!b
const eatsNuts = (a,b) => a&&b||!a&&!b||a&&!b
const eatsFish = (a,b) => a&&b||!a&&!b||!a&&b
const eatsMice = (a,b) => a&&!b||!a&&!b||!a&&b

const isRed = (a) => a === 'Flobby'&& a ==== 'Bloggy' ? true : false