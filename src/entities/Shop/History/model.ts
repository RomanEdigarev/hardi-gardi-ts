// Alias Type //
type HistoryId = string;
type HistoryTitle = string;
type HistorySubtitle = string;
type HistoryIMG = string;
type HistoryText = string;
type HistoryColor = string;
// Alias Type END //
type HistoryItem = {
  title: HistoryTitle;
  subtitle: HistorySubtitle;
  img: HistoryIMG;
  text: HistoryText;
  color: HistoryColor;
};
export type History = HistoryItem[];
