import React from "react";
import {Section,ButtonStyle} from './Section.styled'
export const Button = ({onButtonPressGood, onButtonPressNeutral, onButtonPressBad})=>{
 return(
    <Section >
    <ButtonStyle type="button" onClick={onButtonPressGood }>
Good
</ButtonStyle>
<ButtonStyle type="button" onClick={onButtonPressNeutral}>
Neutral
</ButtonStyle>
<ButtonStyle type="button" onClick={onButtonPressBad}>
Bad
</ButtonStyle>
</Section>
 )
}
// onClick={onShow}