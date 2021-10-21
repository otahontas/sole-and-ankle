import { intervalToDuration } from "date-fns";
const JUST_RELEASED_THRESHOLD_MONTHS = 1;

const normalizeToDollars = price => (price ? `$${price / 100}` : null);

const normalizeCount = count => (count === 1 ? "1 Color" : `${count} Colors`);

const isJustReleased = releaseDate => {
  const { months } = intervalToDuration({
    start: releaseDate,
    end: Date.now(),
  });
  return months < JUST_RELEASED_THRESHOLD_MONTHS;
};

export { normalizeToDollars, normalizeCount, isJustReleased };
