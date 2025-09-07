import { useTransition } from "react-spring"


const  About = () =>
{
const {t} = useTransition();

return(
    <Box>
        <h1>
            About us
        </h1>
    </Box>
);
};
export default About;