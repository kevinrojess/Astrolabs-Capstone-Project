import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import RatingComponent from '../components/RatingComponent';

const Container = styled.div``;

const LeftContainer = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 300;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 30px;
    color:black;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
   font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 6px 24px;
    border: 2px solid;
    border-radius: 5px;
    color:white;
    background-color: #222222;
    cursor: pointer;
    font-weight: 500;
//
    &:hover{                              
        background-color: #0d6efd;
        color: white;
    }
`;

const ProductScreen = () => {
    return (
        <Container className='bg-light'>
            <Wrapper>
                <LeftContainer>
                    <ImgContainer>
                        <Image src="https://i.etsystatic.com/6799010/r/il/9c8232/3059083246/il_794xN.3059083246_cwmr.jpg" />
                    </ImgContainer>
                    <Tabs
                        defaultActiveKey="profile"
                        id="fill-tab-example"
                        className=" bg-light mt-5 mb-3 justify"
                        fill
                    >
                        <Tab eventKey="reviewitem" title="Review for this item">
                            {/* <Sonnet /> */}
                            <h1>Review</h1>
                            <p>Lorem ipsum askjvfbiwvbjk cb wdvckjkhdvchjwbd  ,m vkjbiuwefbuw  wekjfcbwe vewh vjhwevcn wevc   jkewbvjicweb ikjkj kjb jubuibkj bhj gfvyu k ckjut yuvyx syjhvc jhdxyt chjcuyjdstycvkjdx utcjkcxhgdyuhjvkj hdxsytjkdxjyduyhjvjk duyfkjchjv</p>
                        </Tab>
                        <Tab eventKey="suggestions" title="Suggestions">
                            {/* <Sonnet /> */}
                            <h1>Suggestions</h1>
                            <p>Lorem ipsum askjvfbiwvbjk cb wdvckjkhdvchjwbd  ,m vkjbiuwefbuw  wekjfcbwe vewh vjhwevcn wevc   jkewbvjicweb ikjkj kjb jubuibkj bhj gfvyu k ckjut yuvyx syjhvc jhdxyt chjcuyjdstycvkjdx utcjkcxhgdyuhjvkj hdxsytjkdxjyduyhjvjk duyfkjchjv</p>
                        </Tab>
                    </Tabs>
                </LeftContainer>
                <InfoContainer>
                    <Title>Handmade Service Bowl</Title>
                    <Price> $ 20.00</Price>
                    <RatingComponent />
                    <FilterContainer>
                        <Filter className='me-4'>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="pink" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button><a href="/cart" className='text-white'>Add to cart</a></Button>
                    </AddContainer>
                    <h6 className='mt-5'>Highlights</h6>
                    <p>Handmade</p>
                    <p>Materials: Ceramic</p>
                    <h6>Description</h6>
                    <Desc>This listing is for a Second Sale item. A Second Sale item is a product with a slight imperfection. The imperfections may include, but are not limited to, clay chipped from the base of the piece, crawling glaze, hairline cracks on a planter, or slight warping. The defect does not affect the durability or safety of the piece. The Sale is part of our Company's sustainability initiative to reduce waste by selling defective products at a discounted price, rather than throwing the product away.
                    </Desc>
                </InfoContainer>
            </Wrapper>
        </Container>
    );
};

export default ProductScreen;