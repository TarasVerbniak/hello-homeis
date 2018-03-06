import { Urls, Actions } from './constants';

// Action Creators
export const fetchGuideList = () => ({
    type: Actions.FETCH_GUIDE_LIST,
    url: Urls.guideList
});
export const fetchGuide = (url) => ({
    type: Actions.FETCH_SINGLE_GUIDE,
    url
});