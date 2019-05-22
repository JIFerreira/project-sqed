const INITIAL_STATE = {
  sqeds: [],
  loading: true,
  loadingModal: false,
  error: false,
  showModal: false,
  option_clicked: "",
  sqed_details: {},
  showModalCreateSqed: false,
  slide_change_step: 0,
  color_option_selected: null,
  new_sqeds: "",
  showModalLoading: false,
  showModalLoadingFeedback: false,
  statusFeedbackCreateSqed: "",
  steps_allowed: [],
  doubleClic: 0,
  fileMain: "",
  create_sqed: {
    title: "",
    description: "",
    initialDate: null,
    initialTime: null,
    finalDate: null,
    finalTime: null,

    link: "",
    address: "",
    color: null,
    imgAtt: null,
    videoAtt: null,
    audioAtt: null
  }
};

export default function sqeds(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CLEAR_ALL":
      return {
        ...state,
        create_sqed: { ...INITIAL_STATE.create_sqed }
      };
    case "DOUBLE_CLICK_SLIDE":
      return {
        ...state,
        doubleClic: action.doubleclick
      };
    case "RESET":
      return {
        ...state,
        steps_allowed: [],
        slide_change_step: 0,
        option_clicked: "",
        showModal: false,
        fileMain: "",
        color_option_selected: null
      };
    case "REQUEST_SHOW_MODAL_CREATE_SQED":
      return {
        ...state,
        showModalCreateSqed: !state.showModalCreateSqed,
        loadingModal: true
      };
    case "REQUEST_NEW_SQED": {
      return {
        ...state,
        showModalLoading: true
        // showModalCreateSqed: false
      };
    }

    case "FAILURE_SQED_NEW":
      return {
        ...state,
        // new_sqeds: action.sqed_new,
        showModalLoading: false,
        showModalCreateSqed: true,
        showModalLoadingFeedback: true,
        statusFeedbackCreateSqed: action.sqed_new
      };

    case "SUCCESS_SQED_NEW":
      return {
        ...state,
        showModalLoading: false,
        showModalCreateSqed: false,
        showModalLoadingFeedback: true,
        statusFeedbackCreateSqed: action.sqed_new
      };
    case "REQUEST_SQED_DETAILS":
      return { ...state, showModalLoading: true };
    case "SUCCESS_SQED_DETAILS":
      return {
        ...state,
        sqed_details: action.payload.sqed_details,
        showModal: true,
        showModalLoading: false
      };
    case "FAILURE_SQED_DETAILS":
      return {
        ...state,
        sqeds: [],
        loading: false,
        error: true,
        showModalLoading: true
      };
    case "STEP_CHANCHED_SLIDE":
      return {
        ...state,
        slide_change_step: action
      };
    case "MODAL_DETAILS_OPTION_CLICKED":
      return { ...state, option_clicked: action };
    case "SUCCESS_SQED_LIST":
      return {
        ...state,
        sqeds: action.payload.sqeds,
        loading: false,
        error: false,
        loadingModal: false
      };
    case "FAILURE_SQED_LIST":
      return {
        ...state,
        sqeds: [],
        loading: false,
        error: true,
        loadingModal: false
      };
    case "PREVIOUS_STEP_CHANCHED_SLIDE":
      return {
        ...state,
        slide_change_step: action.prevStep
      };
    case "NEXT_STEP_CHANCHED_SLIDE":
      return {
        ...state,
        slide_change_step: action.nextStep
      };

    case "INDEX_OPTION_CLICKED":
      return {
        ...state,
        slide_change_step: action.ind
      };
    case "NEW_TITLE":
      return {
        ...state,
        create_sqed: {
          ...state.create_sqed,
          title: action.title
        }
      };
    case "NEW_DESCRIPTION":
      return {
        ...state,
        create_sqed: {
          ...state.create_sqed,
          description: action.description
        }
      };
    case "SET_INITIAL_DATE":
      return {
        ...state,
        create_sqed: {
          ...state.create_sqed,
          initialDate: action.dateInitial
        }
      };
    case "SET_FINAL_DATE":
      return {
        ...state,
        create_sqed: {
          ...state.create_sqed,
          finalDate: action.dateFinal
        }
      };
    case "SET_INITIAL_TIME":
      return {
        ...state,
        create_sqed: {
          ...state.create_sqed,
          initialTime: action.timeInitial
        }
      };
    case "SET_FINAL_TIME":
      return {
        ...state,
        create_sqed: {
          ...state.create_sqed,
          finalTime: action.timeFinal
        }
      };
    case "NEW_FILE":
      return {
        ...state,
        fileMain: action.option,
        create_sqed: {
          ...state.create_sqed,
          color: action.option
        }
      };
    case "SET_VIDEO_CAMERA":
      return {
        ...state,
        create_sqed: {
          ...state.create_sqed,
          videoAtt: action.videoCamera
        }
      };
    case "SET_LINK":
      return {
        ...state,
        create_sqed: {
          ...state.create_sqed,
          link: action.link
        }
      };
    case "SET_ENVIRONMENT":
      return {
        ...state,
        create_sqed: {
          ...state.create_sqed,
          address: action.environment
        }
      };
    case "SET_AUDIO":
      return {
        ...state,
        create_sqed: {
          ...state.create_sqed,
          audioAtt: action.audio
        }
      };
    case "SET_CAMERA":
      return {
        ...state,
        create_sqed: {
          ...state.create_sqed,
          imgAtt: action.camera
        }
      };

    case "OPTION_COLOR_SELECTED":
      return {
        ...state,
        color_option_selected: action.selectedColor
      };
    case "STEP_ALLOWED_SLIDE":
      return {
        ...state,
        steps_allowed: [...state.steps_allowed, action.sqed_allowed]
      };

    case "CLEAR_INPUT_FILE_VIDEO":
      return {
        ...state,
        create_sqed: {
          ...state.create_sqed,
          videoAtt: null
        }
      };

    case "CLEAR_INPUT_FILE_AUDIO":
      return {
        ...state,
        create_sqed: {
          ...state.create_sqed,
          audioAtt: null
        }
      };

    case "CLEAR_INPUT_FILE_CAMERA":
      return {
        ...state,
        create_sqed: {
          ...state.create_sqed,
          imgAtt: null
        }
      };
    case "CLEAR_FINAL_HOUR":
      return {
        ...state,
        create_sqed: {
          ...state.create_sqed,
          finalTime: null
        }
      };

    case "CLEAR_DATE_HOUR":
      return {
        ...state,
        create_sqed: {
          ...state.create_sqed,
          initialDate: null,
          initialTime: null,
          finalDate: null,
          finalTime: null
        }
      };

    case "SHOW_MODAL_LOADING_FEEDBACK":
      return {
        ...state,
        showModalLoadingFeedback: !state.showModalLoadingFeedback
      };
    default:
      return state;
  }
}
