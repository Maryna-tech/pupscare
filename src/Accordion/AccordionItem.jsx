import { useState } from "react"

export const AccordionItem = ({ title, content }) => {
    const [isOpen, setisOpen] = useState (false)
    
    const handleIsOpen = () => {
    setisOpen (!isOpen)
}

    return ( <div>
        <div className = 
        {isOpen ? "active" : "default"} onClick = {handleIsOpen}> {title}</div>
        
        {isOpen && <div className = "content"> {content} </div>
    }
    
    </div>)
}
