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

export interface iQPartDTO {
  id: number;
  isKnown: string;
  partId: number;
  colorId: number;
  creatorId: number;
  rarety: number;
  // createdAt: string;
  // updatedAt: string;
}
export interface part {
  id: number;
  name: string;
  number: string;
  CatId: number;
  createdAt: string;
  updatedAt: string;
}
export interface IRatingDTO {
  // id: number;
  rating: number;
  qpartId: number;
  creatorId: number;
}
export interface rating {
  id: number;
  rating: number;
  qpartId: number;
  creatorId: number;
  createdAt: string;
  updatedAt: string;
}
export interface IUserDTO {
  name: string;
  email: string;
  password: string;
  role: string;
}
export interface user {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}
