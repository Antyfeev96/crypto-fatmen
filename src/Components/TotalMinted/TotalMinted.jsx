import React from 'react';
import styled from 'styled-components';
import ToTalMintedHeader from "./TotalMintedHeader/TotalMintedHeader";
import TotalMintedTitle from './TotalMintedTitle/TotalMintedTitle';
// import MintNow from "./MintNow/MintNow";
import Fatties from "./Fatties/Fatties";

const StyledBox = styled.div`
    box-sizing: border-box;
    position: relative;
    padding: 18px 94px;
    background-color: #E9FFF2;
    text-transform: uppercase;
    height: 684px;
    font-weight: 700;
    
    @media screen and (max-width: 1475px) {
        padding: 16px 14px;
        height: 570px;
    }
    
    @media screen and (max-width: 1300px) {
        height: 500px;
    }
    
    @media screen and (max-width: 1100px) {
        height: 450px;
    }
    
    @media screen and (max-width: 825px) {
        padding: 16px 14px;
        // height: 570px;
    }
`

// const Quantity = styled.div`
//     margin: 44px auto 0;
//     width: 217px;
//     height: 25px;
//     text-transform: uppercase;
//     font-size: 21px;
//     line-height: 25px;
//     font-weight: 700;
    
//     @media screen and (max-width: 825px) {
//         margin-top: 11px;
//     }
    
//     @media screen and (max-width: 620px) {
//         margin-top: 22px;
//     }
    
//     @media screen and (max-width: 620px) {
//         margin-top: 44px;
//     }
// `

function TotalMinted() {
    return (
        <StyledBox>
            <ToTalMintedHeader/>
            <TotalMintedTitle/>
            {/* <MintNow/> */}
            {/* <Quantity>total minted: <span style={{'color': '#EE4646'}}>5555</span></Quantity> */}
            <Fatties/>
        </StyledBox>
    );
}

export default TotalMinted;