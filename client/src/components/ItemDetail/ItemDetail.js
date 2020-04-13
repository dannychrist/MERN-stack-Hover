import React from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom'

import { addItem } from '../../actions'

const ItemDetail = () => {
    // state
    const [product, setProduct] = React.useState(null);
    const [company, setCompany] = React.useState(null);
    const { id } = useParams();
    const dispatch = useDispatch()
    const history = useHistory()
    const clickRelatedItem = (ev, p) => {
        history.push(`/product/${p.id}`);
    }

    // checking array of all products & companies
    const productArray = useSelector(state => state.products.products);
    const companyArray = useSelector(state => state.companies.companies)

    // checking to see if all products have been fetched
    const productStatus = useSelector(state => state.products.status);
    
    // setting the product state using using id parameter. runs only when productStatus changes
    React.useEffect(()=> {
        if(productStatus === 'idle') {
            let prodObj = productArray.find(obj => obj.id == id)
            setProduct(prodObj)
        }
    }, [productStatus])

    // setting the company state using the product's companyId. runs only when the product state updates.
    React.useEffect(()=> {
        if(product !== null) {
            let compObj = companyArray.find(obj => obj.id === product.companyId)
            setCompany(compObj)
        }
    }, [product])

    //spaghett code beginz
    if (company) {
        const related = productArray.filter(p => p.companyId === product.companyId) //filter all products for having the same company
        let relatedArray = []
        let numArray = []
        let i = 0;
        
        do {
            let randomNo = Math.floor(Math.random() * related.length) + 1; // generate a random index number to populate array
            if(numArray.includes(randomNo)){
                return
            } else {
                numArray.push(randomNo);
                i += 1
            }
        } while ( i < 3)

        numArray.forEach(num => {
            relatedArray.push(related[num])
        })

        return (
            <Wrapper>
                <ItemWrapper>
                    <ItemName>
                        <ItemNameItem>{company.name}</ItemNameItem>
                        <ItemNameItem>{product.name}</ItemNameItem>
                        <ItemNameItem>{product.price}</ItemNameItem>
                    </ItemName>
                    <ImgWrapper>
                        <ItemImage src={`${product.imageSrc}`}/>
                    </ImgWrapper>
                </ItemWrapper>
                <DescriptionWrapper>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel leo sodales, convallis nibh ac, tempus ipsum. Fusce posuere cursus tempus. Vestibulum sit amet urna convallis, condimentum massa ut, vestibulum dolor. Nullam ac enim sit amet leo fermentum porta semper non ipsum. Nunc a neque magna. Praesent vitae lacus id sapien mattis gravida. Fusce sit amet est molestie, tincidunt eros sit amet, viverra leo.
                    </Description>
                    <Description>
                        Sed eget elit sed turpis feugiat gravida. Fusce condimentum eros ornare, placerat eros sed, rutrum dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla et metus sit amet nulla sollicitudin tincidunt sit amet sit amet velit. Integer eleifend, dolor in sagittis efficitur, enim nisl mollis tellus, et maximus mauris risus eu arcu. In et sagittis eros. Aenean consectetur, dolor iaculis pretium tempor.
                    </Description>
                    <AddToCart onClick={()=>dispatch(addItem(product))}>ADD TO CART</AddToCart>
                </DescriptionWrapper>
                <RelatedItemWrapper>
                    <BlackBox>RELATED ITEMS</BlackBox>
                    {relatedArray.map( p => {
                        return (
                            <RelatedItem key={p.id} onClick={()=> window.location.href = `/product/${p.id}`}>
                                <img src={p.imageSrc}/>
                            </RelatedItem>
                        )
                    })}
                </RelatedItemWrapper>
            </Wrapper>
        )
    } else {
        return <div>loading todo!</div>
    }
}

const RelatedItem = styled.div`
    width: 25%;
    border-left: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
`

const BlackBox = styled.div`
    background-color:black;
    color: white;
    font-family: 'Open Sans', sans-serif;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items:center;
    text-decoration: underline;
`

const RelatedItemWrapper = styled.div`
    display: flex;
    width: 100%;
    border: 1px solid black;
    margin-top: 50px;
    height: 250px;
    grid-area: related;
`

const AddToCart = styled.button`
    text-decoration: underline;
    background-color: black;
    color: white;
    font-family: 'Open Sans', sans-serif;
    border: 1px solid black;
    outline: none;
    height: 100px;
    bottom: 0;
    position:absolute;
    width: 100%;
    cursor: pointer;
`

const Description = styled.div`
    font-family: 'Open Sans', sans-serif;
    padding: 15px;
    font-size: 15px;
`

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    position: relative;
`

const ItemImage = styled.img`
    margin: auto;
`

const ImgWrapper = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    height: 100%;
`

const ItemNameItem = styled.div`
    text-align:center;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 500px 200px;
    margin-top: 50px;
    grid-template-areas: '. .'
    'related related';
`

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const ItemName = styled.div`
    background-color: black;
    color: white;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    flex-direction: column;
    padding: 10px;
`


export default ItemDetail;