import React from "react";

export const ValidatorName= ({name}) =>{

   const good = !name.match(/[A-E]/i) ? 'Not Correct' : null

    return (
       <span>{good}</span>

    )
}