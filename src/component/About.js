import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <>
            <h2>Welcome</h2>
            <h3>This is about us page</h3>
            <Outlet/>
        </>
    )
}
export default About;