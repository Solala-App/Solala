export const SortType = {
  PRIORITY: 0,
  COMPLEXITY: 1,
  CATEGORY: 2,
  DATE: 3,
  TIME: 4,
};

export function SortData(data, sortType) {
  switch (sortType) {
    case SortType.PRIORITY:
      return [...data].sort((a, b) =>
        parseInt(b.cardData.priority - a.cardData.priority)
      );
    case SortType.COMPLEXITY:
      return [...data].sort((a, b) =>
        parseInt(b.cardData.complexity - a.cardData.complexity)
      );
    case SortType.DATE:
      return [...data].sort((a, b) => {
        if (new Date(a.cardData.dateTime) > new Date(b.cardData.dateTime)) {
          return 1;
        } else {
          return -1;
        }
      });
    case SortType.TIME:
      return [...data].sort((a, b) => {
        if (new Date(a.cardData.dateTime) > new Date(b.cardData.dateTime)) {
          return 1;
        }
        return -1;
      });
    case SortType.CATEGORY:
      return [...data];
    default:
  }
}
