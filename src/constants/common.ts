export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const OBJECT_ID_LENGTH = 24;
export const JP_ROW = [0, 0, 0, 0];
export enum RandomState {
  Normal = 0,
  NoJP = 1,
  NoScatter = 2
};