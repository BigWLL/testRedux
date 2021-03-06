/**
 * Created by xiaohe on 2018/6/22.
 */
import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware  from 'redux-saga';
const sagaMiddleware=createSagaMiddleware();

//所有reducer的大集合
import Reducer from '../Reducer/index.js';
import Saga from '../Saga/index.js';

const store = createStore(Reducer
    ,
    compose(applyMiddleware(thunk,sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
);
sagaMiddleware.run(Saga);
console.log(2222)
export default store;