import React from 'react'
import styled from 'styled-components';

const FactElem = styled.div`
    background-color: rgb(192, 34, 34);
`

const Fact = () => {
    return  <FactElem>
                Fact of the day: <br/>
                Turtles love to eat Straws
            </FactElem>
}

export default Fact;