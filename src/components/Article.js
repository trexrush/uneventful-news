import React from 'react'

const Article = (props) => {
    return  <div className="article">
                <div className="text">
                    {props.title}
                    <br/>
                    {props.date}
                </div>
            </div>
}

export default Article;