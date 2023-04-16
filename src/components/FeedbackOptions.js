import React from "react";
import {Section} from './Section.styled'
export const Button = ({onButtonPressGood, onButtonPressNeutral, onButtonPressBad})=>{
 return(
    <Section >
    <button type="button" onClick={onButtonPressGood }>
Good
</button>
<button type="button" onClick={onButtonPressNeutral}>
Neutral
</button>
<button type="button" onClick={onButtonPressBad}>
Bad
</button>
</Section>
 )
}
// onClick={onShow}