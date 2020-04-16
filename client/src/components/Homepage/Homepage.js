import React from 'react'
import styled from 'styled-components'

const Homepage = () => {
    return (
        <HomepageDiv>
            {/* <FloatingDiv> */}
                <NasaHandImage src='https://aaayejaaaye.com/pictures/ChrisInterview/chrishand.jpg' alt='NASA Hand'/>
                <ImgFooter>GET CONNECTED</ImgFooter>
            {/* </FloatingDiv> */}
                <GShockImage src='https://cdn.gearpatrol.com/wp-content/uploads/2019/06/Casio-G-Shock-GMW-b5000-gear-patrol-full-03.jpg' alt='G-Shock Advert'/>
                <ImgFooter2>EXPLORE G-SHOCK</ImgFooter2>
        </HomepageDiv>
    )
}

// style={{width:'232px', border: '1px solid black'}}
const HomepageDiv = styled.div`
    width: 100%;
    display: grid;
    border: 1px solid black;
    grid-template-columns: 50% 50%;
    grid-template-areas: 'left right';
    margin-top: 40px;
`

const NasaHandImage = styled.img`
    width: 90%;
    padding: 5% 5% 5% 5%;
    grid-area: left;
    /* border: 1px solid black; */
    margin-top: 40px; 
    margin-bottom: 40px;
`
const GShockImage = styled.img`
    width: 90%;
    padding: 5% 5% 5% 5%;
    grid-area: right;
    margin-top: 40px;
    margin-bottom: 40px;
    /* border: 1px solid black; */
`



const FloatingDiv = styled.div`
width: 100%;
/* border: 2px solid #000; */
/* display: grid;
grid-template-columns: 50% 50%;
grid-template-areas: 'left right';
font-family: 'Open Sans', sans-serif; */
`

const ImgFooter = styled.div`
    margin-top: 550px;
    color: white;
    font-size: 36px;
    font-weight: 900;
    width: 100%;
    height: 400px;
    padding: 22px 0 0 0;
    /* border: 1px solid black; */
    text-align: center;
    grid-area: left;
    font-family: 'Open Sans', sans-serif;
`
const ImgFooter2 = styled.div`
    margin-top: 550px;
    color: white;
    font-size: 36px;
    font-weight: 900;
    width: 100%;
    padding: 22px 0 22px 0;
    /* border: 1px solid black; */
    text-align: center;
    height: 50%;
    grid-area: right;
    font-family: 'Open Sans', sans-serif;
`
    /* height: auto; */
    /* margin-top: -2px; */


export default Homepage