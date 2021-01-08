//imports
import React from "react";
import styled from 'styled-components'
//imported Cards from reactstrap
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const PostContainer = styled.section`
    padding: 7em;
    text-align: center;
    background: #2B04E8;

`

const MainH1 = styled.h1`
    font-size: 4.5em;
    color: white;
`
const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 30px;

`

const ImageSection =styled.img`
    width: 100%;
    height: 100%;
    padding: 30px 30px;

`

const InfoContainer = styled.div`
    padding: 40px
    display: flex
    justify-content: flex-start
`

const H3Title = styled.h3`
    text-size: 10px
    text-color: #6A12E8;
`

const PDescription = styled.p`
    display: flex
    justify-content: flex-start
`


export default function Posts (props) {
    //setting up the props which will be used to connect this component to the App.js
    const { post } = props

    
     //layout of the component, returns designated data using jsx
    return (
    <Card body>
        <PostContainer>
        <CardTitle tag="h1">Photo of the Day </CardTitle>
            
            <ImageContainer className= "img" alt="photo-of-the-day">
                <ImageSection   src={post.url} alt=""></ImageSection>
            </ImageContainer>
            <InfoContainer>
                <H3Title>{post.copyright}</H3Title>
                <p>{post.explanation}</p>
                <p>{post.date} </p>
            </InfoContainer>
        </PostContainer>
    </Card>

    )
  
}  