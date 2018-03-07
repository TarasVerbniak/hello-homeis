import { Actions, Urls } from "../actions/constants";
import { setGuideList, setGuide, getGuide, getGuideList } from "../actions";
import { list, guide } from "./temp";
import { call, take, put, fork, all } from "redux-saga/effects";

// Use hardcoded data because of 'cors' error from github
const $get = url =>
  new Promise(resolve => {
    // Imitate network delay
    setTimeout(() => {
      let data;

      switch (url) {
        case Urls.guide:
          data = guide;
          break;
        case Urls.guideList:
          data = list;
          break;
        default:
      }

      resolve(data);
    }, 4000);
  }).then(res => res);

function* fetchDataTask({ type, url }) {
  try {
    const { data } = yield call($get, url);

    switch (type) {
      case Actions.FETCH_GUIDE_LIST:
        yield put(setGuideList(data));
        break;
      case Actions.FETCH_SINGLE_GUIDE:
        yield put(setGuide(data));
        break;
      default:
    }
  } catch (e) {
    console.log("Something went wrong inside fetchDataTask...");
  }
}

export function* mainSagaWatcher() {
  while (true) {
    try {
      const action = yield take([
        Actions.FETCH_GUIDE_LIST,
        Actions.FETCH_SINGLE_GUIDE
      ]);
      yield fork(fetchDataTask, action);
    } catch (e) {
      console.log("Something went wrong inside mainSagaWatcher...");
    }
  }
}

export function* initSagaWatcher() {
  while (true) {
    try {
      yield take(Actions.INITIALIZE_PROJECT);
      // Start loader here

      const listAction = getGuideList();
      const guideAction = getGuide(Urls.guide);

      yield all([
        call(fetchDataTask, listAction),
        call(fetchDataTask, guideAction)
      ]);
      // Remove loader here
    } catch (e) {
      console.log("Something went wrong inside initSagaWatcher...");
    }
  }
}

export default [ initSagaWatcher, mainSagaWatcher ];