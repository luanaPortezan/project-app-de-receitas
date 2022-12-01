export const INPUT_SEARCH = 'INPUT_SEARCH';
export const INPUT_SELECTED = 'INPUT_SELECTED';
export const RECIEPES = 'RECIEPES';

export const inputSearchValue = (value) => ({
  type: INPUT_SEARCH,
  value,
});

export const inputSelected = (input) => ({
  type: INPUT_SELECTED,
  input,
});

export const reciepesSelect = (reciepes) => ({
  type: RECIEPES,
  reciepes,
});
