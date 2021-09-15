import React from 'react'
import Article from './Article';

const Articles = (props) => {
    return  <div className="articleList"> 
                {/* Mobile uses normal, PC uses SM */}
                <div>{props.name}</div>
                <Article/>
                <Article/>
                <Article/>
            </div>
}

export default Articles;