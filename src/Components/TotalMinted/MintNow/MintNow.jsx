import React from 'react'
import styled from 'styled-components'

const StyledBox = styled.div`
  margin: 44px auto 0;
  padding: 4px 3px;
  width: 351px;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 1050px) {
    width: 210px;
    margin-top: 22px;
    flex-direction: column;
  }
`

const StyledInput = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5px;
  background-color: white;
  height: 100%;
  width: 200px;
  border-radius: 10px;
  font-weight: 700;
`

const StyledButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: #EE4646;
  color: white;
  font-weight: 700;
  
  transition: all .3s ease-in-out;
    
  :hover {
      font-size: 25px;
      cursor: pointer;
      transform: scale(1.1);
  }
`

const MintButton = styled.div`
    box-sizing: border-box;
    width: 129px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 9px 15px;
    background: #EE4646;
    border-radius: 10px;
    text-transform: uppercase;
    color: white;
    
    @media screen and (max-width: 1050px) {
        margin-top: 32px;
    }
    
    transition: all .3s ease-in-out;
    
    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    
    span {
      line-height: 19px;
      font-weight: 700;
    }
`

export default function MintNow() {
    return (
        <StyledBox>
            <StyledInput>
                <StyledButton style={{"left": '3px'}}>+</StyledButton>
                1
                <StyledButton style={{"right": '3px'}}>-</StyledButton>
            </StyledInput>
            <MintButton><span>Mint now</span></MintButton>
        </StyledBox>
    )
}
