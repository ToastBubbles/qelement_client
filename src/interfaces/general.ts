export interface ISimilarColorDTO {
  color_one: number;
  color_two: number;
}
export interface IColorDTO {
  bl_name: string;
  tlg_name: string;
  bo_name: string;
  hex: string;
  bl_id: number;
  tlg_id: number;
  type: string;
  note: string;
}
export interface color {
  id: number;
  bl_name: string;
  tlg_name: string;
  bo_name: string;
  hex: string;
  bl_id: number;
  tlg_id: number;
  type: string;
  note: string;
  createdAt: string;
  updatedAt: string;
}

export interface IEditColor {
  bl_name: string;
  tlg_name: string;
  bo_name: string;
  hex: string;
  bl_id: number;
  tlg_id: number;
  type: string;
  note: string;
}
export interface similarColor {
  id: number;
  colorId1: number;
  colorId2: number;
  createdAt: string;
  updatedAt: string;
}
