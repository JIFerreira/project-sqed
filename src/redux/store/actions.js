export function requestSqedList() {
  return {
    type: "REQUEST_SQED_LIST"
  };
}

export function requestShowModal() {
  return {
    type: "REQUEST_SHOW_MODAL"
  };
}

export function actionOptionSelected(option) {
  return {
    type: "MODAL_DETAILS_OPTION_CLICKED",
    payload: option
  };
}

export function requestSqedDetails(id) {
  return {
    type: "REQUEST_SQED_DETAILS",
    id
  };
}

export function stepAllowed(sqed_allowed) {
  return {
    type: "STEP_ALLOWED_SLIDE",
    sqed_allowed
  };
}

export function previousSlideFuncAction(prevStep) {
  return {
    type: "PREVIOUS_STEP_CHANCHED_SLIDE",
    prevStep
  };
}

export function nextSlideFuncAction(nextStep) {
  return {
    type: "NEXT_STEP_CHANCHED_SLIDE",
    nextStep
  };
}

export function indexOptionsClicked(ind) {
  return {
    type: "INDEX_OPTION_CLICKED",
    ind
  };
}

export function reset() {
  return {
    type: "RESET"
  };
}

export function showModalCreateSqed() {
  return {
    type: "REQUEST_SHOW_MODAL_CREATE_SQED"
  };
}

export function setNewTitle(title) {
  return {
    type: "NEW_TITLE",
    title
  };
}

export function setNewDescription(description) {
  return {
    type: "NEW_DESCRIPTION",
    description
  };
}

export function showModalLoading() {
  return {
    type: "MODAL_LOADING"
  };
}

export function setNewFile(option) {
  return {
    type: "NEW_FILE",
    option
  };
}

export function setInitialDate(dateInitial) {
  return {
    type: "SET_INITIAL_DATE",
    dateInitial
  };
}
export function setFinalDate(dateFinal) {
  return {
    type: "SET_FINAL_DATE",
    dateFinal
  };
}

export function setInitialTime(timeInitial) {
  return {
    type: "SET_INITIAL_TIME",
    timeInitial
  };
}

export function setFinalTime(timeFinal) {
  return {
    type: "SET_FINAL_TIME",
    timeFinal
  };
}

export function setVideoCamera1(videoCamera1) {
  
  return {
    type: "SET_VIDEO_CAMERA1",
    videoCamera1
  };
}

export function setVideoCamera(videoCamera) {
  return {
    type: "SET_VIDEO_CAMERA",
    videoCamera
  };
}

export function setLink(link) {
  return {
    type: "SET_LINK",
    link
  };
}

export function setEnvironment(environment) {
  return {
    type: "SET_ENVIRONMENT",
    environment
  };
}

export function setAudio(audio) {
  return {
    type: "SET_AUDIO",
    audio
  };
}

export function setCamera(camera) {
  return {
    type: "SET_CAMERA",
    camera
  };
}

export function selectedColor(selectedColor) {
  return {
    type: "OPTION_COLOR_SELECTED",
    selectedColor
  };
}

export function request_send_new_sqed(data) {
  return {
    type: "REQUEST_NEW_SQED",
    data
  };
}

export function clearInputFile(type) {
  return {
    type
  };
}

export function doubClick(count) {
  return {
    type: "DOUBLE_CLICK_SLIDE",
    count
  };
}

export function clearFinalDate() {
  
  return {
    type: "CLEAR_FINAL_HOUR"
  };
}

export function clearInitialDate() {
  
  return {
    type: "CLEAR_DATE_HOUR"
  };
}

export function clear() {
  return {
    type: "CLEAR_ALL"
  };
}

export function showModalLoadingFeedback() {
  return {
    type: "SHOW_MODAL_LOADING_FEEDBACK"
  };
}
