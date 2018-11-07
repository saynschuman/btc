import React from 'react'
import CustomCheckbox from '../../../commmon/CustomCheckbox/CustomCheckbox'
import { connect } from 'react-redux'
import { delArticle } from '../../../../actions'
import { editArticle } from '../../../../modules/editArticle'

const Article = props => {
  const title = props.title.slice(0, 15)
  const handleDeleteArticle = () => {
    props.delArticle(props.id)
  }
  const handleEditArticle = () => {
    props.editArticle(props.id, props.title, props.image, props.body)
  }
  return (
    <div className="news-item">
      <div className={'news-image'} style={{ backgroundImage: `url(${props.image})` }}>
        <div className={'news-buttons'}>
          <div className={'new-title'}>{title}</div>
          <div className="mask-image" />
          <div onClick={handleEditArticle} className={'news-edit'}>
            <div className="icon" />
          </div>
          <div onClick={handleDeleteArticle} className={'news-delete'}>
            <div className="icon" />
          </div>
        </div>
      </div>
      <div className={'news-toggle'}>
        <CustomCheckbox />
      </div>
    </div>
  )
}

export default connect(
  null,
  { delArticle, editArticle }
)(Article)
