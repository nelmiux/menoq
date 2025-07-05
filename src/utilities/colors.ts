import { Color } from '@mui/material';

// MUI Colors
export type MuiColors = { [key in MuiColorNames]: Color };
type MuiColorNames = 'lightBlue' | 'amber' | 'green' | 'teal' | 'deepPurple' | 'pink' | 'red';

// Grayscale Colors
export type GrayScale = {
  white: string;
  black: Partial<Color>;
  alto: Partial<Color>;
};

export const white = '#FFFFFF';
export const black: Partial<Color> = {
  50: '#CCCCCC',
  100: '#AAAAAA',
  200: '#7F7F7F',
  300: '#555555',
  400: '#2A2A2A',
  500: '#000000',
};
export const alto: Partial<Color> = {
  50: '#FBFBFB',
  100: '#F5F5F5',
  200: '#EFEFEF',
  300: '#E8E8E8',
  400: '#E3E3E3',
  500: '#DEDEDE',
  600: '#DADADA',
  700: '#D5D5D5',
  800: '#D1D1D1',
  900: '#C8C8C8',
  A100: white,
};

// Custom Colors
export type CustomColors = { [key in CustomColorNames]: Color };
type CustomColorNames =
  | 'nevada'
  | 'paleSky'
  | 'endeavour'
  | 'bostonBlue'
  | 'morningGlory'
  | 'fountainBlue'
  | 'cornHarvest'
  | 'tamarillo'
  | 'carrotOrange'
  | 'gambodge'
  | 'plum';
export const nevada: Color = {
  50: '#EDEEEE',
  100: '#D3D4D4',
  200: '#B6B7B8',
  300: '#999A9C',
  400: '#838486',
  500: '#6D6E71',
  600: '#656669',
  700: '#5A5B5E',
  800: '#505154',
  900: '#3E3F42',
  A100: '#A6BAF7',
  A200: '#7796F3',
  A400: '#386AFF',
  A700: '#1F57FF',
};

export const paleSky: Color = {
  50: '#EDEEEF',
  100: '#D3D6D8',
  200: '#B6BABE',
  300: '#989EA4',
  400: '#828A91',
  500: '#6C757D',
  600: '#646D75',
  700: '#59626A',
  800: '#4F5860',
  900: '#3D454D',
  A100: '#A9D3FD',
  A200: '#77B9FC',
  A400: '#41A0FF',
  A700: '#2793FF',
};

export const endeavour: Color = {
  50: '#E0EAF3',
  100: '#B3CBE1',
  200: '#80A9CD',
  300: '#4D86B9',
  400: '#266CAA',
  500: '#00529B',
  600: '#004B93',
  700: '#004189',
  800: '#00387F',
  900: '#00286D',
  A100: '#9CB8FF',
  A200: '#6993FF',
  A400: '#366EFF',
  A700: '#1D5BFF',
};

export const bostonBlue: Color = {
  50: '#F2F7FE',
  100: '#C5D8EC',
  200: '#9EBFED',
  300: '#77A5D4',
  400: '#5991CA',
  500: '#3C7EC1',
  600: '#3676BB',
  700: '#2E6BB3',
  800: '#2761AB',
  900: '#1A4E9E',
  A100: '#D4E4FF',
  A200: '#A1C3FF',
  A400: '#6EA3FF',
  A700: '#5593FF',
};

export const morningGlory: Color = {
  50: '#F1F7FB',
  100: '#DCEAF5',
  200: '#C4DDEE',
  300: '#ACCFE7',
  400: '#9BC4E1',
  500: '#89BADC',
  600: '#8183D8',
  700: '#76ABD3',
  800: '#6CA3CE',
  900: '#5994C5',
  A100: white,
  A200: '#F8FCFF',
  A400: '#C5E4FF',
  A700: '#ACD8FF',
};

export const fountainBlue: Color = {
  50: '#EBF7F7',
  100: '#CDEBEA',
  200: '#ACDEDD',
  300: '#8AD1CF',
  400: '#71C7C4',
  500: '#58BDBA',
  600: '#50B7B3',
  700: '#47AEAB',
  800: '#3DA6A3',
  900: '#2D9894',
  A100: '#EBF7F7',
  A200: '#CDEBEA',
  A400: '#ACDEDD',
  A700: '#8AD1CF',
};

export const cornHarvest: Color = {
  50: '#F1F1E1',
  100: '#DCDDB5',
  200: '#CS5684',
  300: '#ADAF53',
  400: '#9C9E2E',
  500: '#8A8D09',
  600: '#828508',
  700: '#777A06',
  800: '#6D7005',
  900: '#5A5D02',
  A100: '#FBFF8E',
  A200: '#F9FF5B',
  A400: '#F7FF28',
  A700: '#F6FF0E',
};

export const tamarillo: Color = {
  50: '#F0E2E2',
  100: '#D9B8B8',
  200: '#C08888',
  300: '#A75858',
  400: '#943535',
  500: '#811111',
  600: '#790F0F',
  700: '#6E0C0C',
  800: '#640A0A',
  900: '#510505',
  A100: '#FF8585',
  A200: '#FF5252',
  A400: '#FF1F1F',
  A700: '#FF0505',
};

export const carrotOrange: Color = {
  50: '#FDF1E4',
  100: '#FADCBB',
  200: '#F7C58E',
  300: '#F3AD61',
  400: '#F19C3F',
  500: '#EE8A1D',
  600: '#EC821A',
  700: '#E97715',
  800: '#E76D11',
  900: '#E25A0A',
  A100: white,
  A200: '#FFE5D9',
  A400: '#FFC3A6',
  A700: '#FFB18C',
};

export const gambodge: Color = {
  50: '#FAF4E2',
  100: '#F2E3B7',
  200: '#EAD087',
  300: '#E1BD57',
  400: '#DAAE33',
  500: '#D4A00F',
  600: '#CF980D',
  700: '#C98E0B',
  800: '#C38408',
  900: '#B97304',
  A100: '#FFF3E2',
  A200: '#FFDCAF',
  A400: '#FFC67C',
  A700: '#FFBB63',
};

export const plum: Color = {
  50: '#EFEAED',
  100: '#DFD4DD',
  200: '#C493BB',
  300: '#9C27B0',
  400: '#F95CDD',
  500: '#742389',
  600: '#5C2751',
  700: '#761C63',
  800: '#6C1759',
  900: '#590D46',
  A100: '#FF8FE0',
  A200: '#FF5CD1',
  A400: '#FF29C3',
  A700: '#FF0FBC',
};
