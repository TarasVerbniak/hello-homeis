import { Actions, Urls } from "../actions/constants";
import { setGuideList, setGuide } from "../actions";
import { list, guide } from "./temp";
import { effects } from "redux-saga";
const { call, take, put } = effects;

// Use hardcoded data because of 'cors' error from github
const $get = url =>
  new Promise(resolve => {
    // Imitate network delay
    setTimeout(() => {
      let data;

      switch (url) {
        case Urls.guide:
          data = guide;
        case Urls.guideList:
          data = list;
      }

      resolve(data);
    }, 5000);
  }).then(res => res);

export function* mainSaga() {
  while (true) {
    try {
      const { type, url } = yield take([ Actions.FETCH_GUIDE_LIST, Actions.FETCH_SINGLE_GUIDE ]);

      // Add loader here
      const { data } = yield call($get, url);

      switch (type) {
        case Actions.FETCH_GUIDE_LIST:
          yield put(setGuideList(data));
        case Actions.FETCH_SINGLE_GUIDE:
          yield put(setGuide(data));
      }
    } catch (e) {
      // TODO: Dispatch here fetch failed action
      console.log("Something went wrong...");
    }
  }
}
