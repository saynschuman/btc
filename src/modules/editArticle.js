import { updateArticleOnServer } from '../backend/api'

const EDIT_ARTICLE = 'EDIT_ARTICLE'
const UPDATE_ARTICLE = 'UPDATE_ARTICLE'
const CHANGE_TITLE = 'CHANGE_TITLE'
const CHANGE_BODY = 'CHANGE_BODY'

const initialState = {
  id: '',
  title: '',
  image: '',
  body: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case EDIT_ARTICLE:
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.title,
        image: action.payload.image,
        body: action.payload.body
      }
    case UPDATE_ARTICLE:
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.title,
        image: action.payload.image,
        body: action.payload.body
      }
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.title
      }
    case CHANGE_BODY:
      return {
        ...state,
        body: action.body
      }
    default:
      return state
  }
}

export const editArticle = (id, title, image, body) => dispatch => {
  dispatch({
    type: EDIT_ARTICLE,
    payload: {
      id,
      title,
      image,
      body
    }
  })
}

export const updateArticle = (id, title, image, body) => dispatch => {
  const promise = new Promise(resolve => {
    resolve(updateArticleOnServer(id, title, image, body))
  })

  promise.then(result => {
    console.log(result, id)
    return dispatch({
      type: UPDATE_ARTICLE,
      payload: {
        id,
        title,
        image,
        body
      }
    })
  })
}

export const changeTitle = title => dispatch => {
  dispatch({
    type: CHANGE_TITLE,
    title
  })
}

export const changeBody = body => dispatch => {
  dispatch({
    type: CHANGE_BODY,
    body
  })
}
