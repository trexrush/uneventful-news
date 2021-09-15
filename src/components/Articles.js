import React from 'react'
import Article from './Article';

const Section = (props) => {
    return  <div className="section"> 
                <div className="heading">{props.name}</div>
                {props.articles.map(ele => <Article title={ele.title} date={ele.date}/>)}
            </div>
}

export default Section;