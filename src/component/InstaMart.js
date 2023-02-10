import React, { useState } from "react";

const Section = ({ title, text, visible , setVisible}) => {
    // const [visible, setVisible] = useState(false)
    return (
        <>
            { visible ? <button className="bg-red-400 rounded-md p-1 m-1" onClick={() => setVisible(false)}>Hide</button> :
             <button className="bg-green-400 rounded-md p-1 m-1" onClick={() => setVisible(true)}>show</button>
            }
            <div className="border border-black p-2 m-2">
                <h4 className="font-bold text-center">{title}</h4>
                {visible && <p>{text}</p>}
            </div>
            
        </>
    )
}

const InstaMart = () => {
    const [sectionConfig, setSectionConfig] = useState("")
    return (
        <>

            <Section title={"About Instamart"} text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance"} 
            visible = {sectionConfig === "about"}
            setVisible = { () => setSectionConfig( sectionConfig === "about" ? "" : "about" )}


            />
            <Section title={"Team Instamart"} text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance"}
             visible = {sectionConfig === "teams"}
             setVisible = { () => setSectionConfig( sectionConfig === "teams" ? "" : "teams" )}
             />
            <Section title={"Careers"} text={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance"} 
            visible = {sectionConfig === "career"}
            setVisible = { () => setSectionConfig( sectionConfig === "career" ? "" : "career" )}
            />
        </>
    )
}

export default InstaMart;