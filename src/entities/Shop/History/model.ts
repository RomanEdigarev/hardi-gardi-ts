// Alias Type //
type HistoryId = string;
type HistoryTitle = string;
type HistorySubtitle = string;
type HistoryIMG = string;
type HistoryText = string;
type HistoryColor = string;
// Alias Type END //

export type History = {
  title: HistoryTitle;
  subtitle: HistorySubtitle;
  img: HistoryIMG;
  text: HistoryText;
  color: HistoryColor;
};
