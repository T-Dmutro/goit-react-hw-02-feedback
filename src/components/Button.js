import React from "react";
export const Button = ({onButtonPressGood, onButtonPressNeutral, onButtonPressBad})=>{
 return(
    <div>
    <button type="button" onClick={onButtonPressGood }>
Good
</button>
<button type="button" onClick={onButtonPressNeutral}>
Neutral
</button>
<button type="button" onClick={onButtonPressBad}>
Bad
</button>
</div>
 )
}
