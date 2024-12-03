import Header from "./Header"
import Education from "./Education";
import Experience from "./Experience";

function Resume({info, educations, experiences}) {

    return (
        <>
            <Header info={info}/>
            <Education educations={educations} />
            <Experience experiences={experiences} />
        </>
    )

}

export default Resume;