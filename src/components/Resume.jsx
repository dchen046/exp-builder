import Header from "./Header"
import Education from "./Education";

function Resume({info, educations}) {

    return (
        <>
            <Header info={info}/>
            <Education educations={educations} />
        </>
    )

}

export default Resume;