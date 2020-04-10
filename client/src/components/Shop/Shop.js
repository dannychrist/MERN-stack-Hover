import React from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'

const Shop = () => {
    const state = useSelector(state => state)
    console.log(state);
    return (
        <WrapperDiv>
            <CategoryDiv>
                CATEGORIES {
                    state.companies.companies.map(company => {
                        return (
                            <div style={{marginTop:'2px'}}>{company.name}</div>
                        )
                    })
                }
            </CategoryDiv>
            <ItemDiv>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
                <PlaceholderItem>TEST</PlaceholderItem>
            </ItemDiv>
            <SortDiv>
                <p>
                    SORT BY
                </p>
                <p>
                    PRICE: LOW TO HIGH
                </p>
                <p>
                    PRICE: HIGH TO LOW
                </p>
            </SortDiv>
        </WrapperDiv>
    )
}

export default Shop;

const CategoryDiv = styled.div`
    width: 100%;
    text-align: left;
`

const SortDiv = styled.div`
    width: 100%;
    text-align: right;
`

const ItemDiv = styled.div`
    width: 100%;
    text-align: center;
    display: grid;
    grid-gap: 10px;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: auto auto auto;
`

const PlaceholderItem = styled.div`
    width: auto;
    border: 1px solid black;
    height: 250px;
    text-align: center;
    background-color: pink;
`

const WrapperDiv = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 20% auto 20%;
    height: 500px;
    font-family: 'Open Sans', sans-serif;
`