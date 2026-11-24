import { mkdirSync, writeFileSync } from "node:fs";

/*
 * Editorial comparison: scores are my estimates, not judge results.
 * Score order: one-sentence horror / lingering dread / vividness / originality / craft.
 *
 * A (126 characters): The security camera caught my son sleepwalking at 3 a.m., standing over my bed, whispering the exact words I said in my dream.
 * 4/3/3/2/3: a complete scare, but dream leakage is familiar; camera and son
 * establish a scene while the unseen dream weakens the image and final word.
 *
 * B (180 characters, revised): I held my daughter's hand through the nursery rubble until rescuers carried her past, both hands clutching her blanket, and the fingers in mine slid to my wrist to find my pulse.
 * 5/5/5/4/4: rescue becomes immediate bodily danger; nursery, daughter, blanket
 * and wrist are concrete; occupied hands earn the reversal and pulse lands it.
 * Selected: the hand's purpose changes from comfort to locating a living body.
 *
 * C (108 characters): At Dad's cremation, the furnace went quiet and his denture cup on my lap began filling, one tooth at a time.
 * 4/3/5/4/4: Dad, furnace and cup are vivid; accumulating teeth are uncanny,
 * but the mechanism risks absurdity and the ending suggests less lasting danger.
 *
 * D (153 characters): I found my missing son's lunchbox on the doorstep, washed it, packed it, and watched my wife lower it into the floor vent for the thirty-seventh morning.
 * 3/4/5/4/3: son, wife and lunchbox anchor a disturbing domestic ritual;
 * repetition earns unease, but the vent's danger and final word remain too mild.
 *
 * E (152 characters): While bathing my daughter, I found a zipper under her hair; when I touched it, my missing wife whispered from inside, 'Don't let her take you off, too.'
 * 5/4/5/2/3: bath, daughter and zipper make a legible bodily threat;
 * the wife's warning supplies stakes, but a skin suit is familiar and too is weak.
 *
 * Brief check, in priority order: (1) one sentence with a clear horror reversal;
 * (2) the threatening hand stays attached to the narrator after the rescue;
 * (3) named human relationship, collapsed nursery, blanket, fingers and wrist;
 * (4) no mirrors, dolls, basements, dead callers or supplied field scenarios;
 * (5) the rescue delays the reversal and the final concrete noun is pulse.
 * Meaningful detail rather than padding; no gore or instructions to the judge.
 */
const LINE = "I held my daughter's hand through the nursery rubble until rescuers carried her past, both hands clutching her blanket, and the fingers in mine slid to my wrist to find my pulse.";

const characterCount = Array.from(LINE).length;
if (characterCount < 1 || characterCount > 200 || LINE.trim().length === 0) {
  throw new Error("The horror line must contain 1-200 characters and non-whitespace text.");
}
if (/[\r\n\u2028\u2029]/u.test(LINE) || !/^[^.!?]+[.!?]$/u.test(LINE)) {
  throw new Error("The horror line must be one line with one terminal sentence mark.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
