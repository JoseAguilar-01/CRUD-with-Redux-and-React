import { Dispatch } from 'redux';

export type BaseAction<T = Record<string, any>> = (
  props?: T,
) => (dispatch: Dispatch) => Promise<void> | void;
