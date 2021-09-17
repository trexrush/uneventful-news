import React from 'react'

const Article = (props) => {
    return  <div className="article">
                <div className="text">
                    {props.title}
                </div>
                <div className="timestamp">
                    {props.date}
                </div>
            </div>
}

export default Article;