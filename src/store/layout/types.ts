export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

export interface LayoutState {
    loading: boolean
}

interface ShowLoadingAction {
    type: typeof SHOW_LOADING
}

interface HideLoadingAction {
    type: typeof HIDE_LOADING
}

  
export type LayoutActionTypes = ShowLoadingAction | HideLoadingAction