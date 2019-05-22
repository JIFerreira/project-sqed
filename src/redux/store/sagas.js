import { put, call, takeLatest } from "redux-saga/effects";
/* eslint-disable */
const fetchData = async () => {
  const response = await fetch("https://sqed-web.herokuapp.com/getsqeds");
  const data = await response.json();
  return data;
};

function* getSqedList() {
  try {
    const retorno = yield call(fetchData);

    if (retorno.length !== 0) {
      yield put({ type: "SUCCESS_SQED_LIST", payload: { sqeds: retorno } });
    } else {
      throw retorno;
    }
  } catch (error) {
    yield put({ type: "FAILURE_SQED_LIST", payload: { err: error } });
  }
}

const fetchDataDetails = async (id = "") => {
  const response = await fetch(
    "https://sqed-web.herokuapp.com/getsqeddetail/" + id.id
  );
  const data = await response.json();
  return data;
};

function* getSqedDetails(action) {
  try {
    const retorno = yield call(fetchDataDetails, action);

    if (retorno.length !== 0) {
      yield put({
        type: "SUCCESS_SQED_DETAILS",
        payload: { sqed_details: retorno }
      });
    } else {
      throw retorno;
    }
  } catch (error) {
    yield put({ type: "FAILURE_SQED_DETAILS", payload: { err: error } });
  }
}

const fetchDataNewSQED = async data => {
  const response = await fetch("https://sqed-web.herokuapp.com/sqed/save", {
    method: "POST",
    body: JSON.stringify(data)
  });
  const datas = await response.json();
  return datas;
};

function* postSqedNew(action) {
  const statusRetorno = yield call(fetchDataNewSQED, action);
  if (statusRetorno.cod == 200) {
    yield put({
      type: "SUCCESS_SQED_NEW",
      sqed_new: statusRetorno
    });
  } else {
    yield put({ type: "FAILURE_SQED_NEW", error_new_sqeds: statusRetorno });
  }
}

export default function* root() {
  yield takeLatest("REQUEST_SQED_LIST", getSqedList);
  yield takeLatest("REQUEST_SQED_DETAILS", getSqedDetails);
  yield takeLatest("REQUEST_NEW_SQED", postSqedNew);
}
