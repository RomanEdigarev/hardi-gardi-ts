// Alias Type //
import { LayoutAPI } from "@/services/api/model/LayoutAPI";

type HistoryId = string;
type HistoryTitle = string;
type HistorySubtitle = string;
type HistoryIMG = string;
type HistoryText = string;
type HistoryColor = string;
// Alias Type END //

type HistoryItem = {
  id: HistoryId;
  title: HistoryTitle;
  subtitle: HistorySubtitle;
  img: HistoryIMG;
  text: HistoryText;
  color: HistoryColor;
};
type HistoryData = {
  items: HistoryItem[];
};
export type History = LayoutAPI<HistoryData>;
