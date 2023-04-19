import React from "react";
import {Section,ButtonStyle} from './Section.styled'
export const Button = ({ options, onReview })=>{
 return(
    <Section >
  {options.map(btn => (
            <ButtonStyle value={btn} key={btn} type="button" onClick={onReview}>
              {btn}
            </ButtonStyle>
          ))}
</Section>
 )
}
// onClick={onShow}