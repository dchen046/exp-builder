function Header({info}) {
    return (
        <section id='cvHeader' className="text-center">
            <h1>{info.name}</h1>
            <p>
                {info.email} | {info.github} | {info.linkedin} 
            </p>
        </section>
    )
}

export default Header