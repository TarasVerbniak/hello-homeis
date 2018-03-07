import { Urls, Actions } from './constants';

// Action Creators
export const initialize = () => ({
    type: Actions.INITIALIZE_PROJECT
});
export const getGuideList = () => ({
    type: Actions.FETCH_GUIDE_LIST,
    url: Urls.guideList
});
export const getGuide = (url) => ({
    type: Actions.FETCH_SINGLE_GUIDE,
    url
});
export const setGuideList = (data) => ({
    type: Actions.SET_GUIDE_LIST,
    data
});
export const setGuide = (data) => ({
    type: Actions.SET_SINGLE_GUIDE,
    data
});