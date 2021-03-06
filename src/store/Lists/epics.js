import { combineEpics } from "redux-observable";
import actionCreators from "./actionCreators";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import "rxjs/add/operator/mergeMap";
import * as ajax from '../../common/services/utils';
import { Observable } from "rxjs/Observable";
import baseUrl from "../../common/services/baseUrl";

const getListEpic = action$ =>
    action$.ofType(actionCreators.getLists.type).mergeMap(action =>
        ajax
            .get(baseUrl(""))
            .map(res => res.response)
            .mergeMap(res =>
                Observable.of(actionCreators.updateLists.create(res))
            )
    );

export const epics = combineEpics(getListEpic);
