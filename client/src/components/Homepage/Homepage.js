import React from 'react'
import styled from 'styled-components'

const Homepage = () => {
    return (
        <HomepageGrid>
            <FloatingDiv>
                <GShockImage src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2018-09-12-at-3-49-51-pm-1536781919.png' alt='G-Shock Advert'/>
                <DivFooter>EXPLORE G-SHOCK</DivFooter>
            </FloatingDiv>
        </HomepageGrid>
    )
}

const HomepageGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-areas: 'left .';
    margin-top: 50px;
`

const GShockImage = styled.img`
    grid-area: media;
    width: 100%;
`

const FloatingDiv = styled.div`
    border: 1px solid black;
    width: auto;
    height: 65vh;
    background-color: white;
    grid-area: left;
    display: grid;
    grid-template-rows: 85% auto;
    grid-template-areas: 'media'
    'footer';
    object-fit:contain;
`

const DivFooter = styled.div`
    position: relative;
    width: 100%;
    padding: 22px 0 22px 0;
    border-top: 1px solid black;
    text-align: center;
    grid-area: footer;
    font-family: 'Open Sans', sans-serif;
    background-color: white;
    height: auto;
`

export default Homepage