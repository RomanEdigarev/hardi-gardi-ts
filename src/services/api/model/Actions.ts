import { LayoutAPI } from "@/services/api/model/LayoutAPI";

export type Action = {
  id: string;
  code: string;
  url: string;
  dateStart: string;
  dateEnd: string;
  name: string;
  img: string;
  preview: string;
};

export type ActionsData = {
  actions: Action[];
};

export type Actions = LayoutAPI<ActionsData>;
