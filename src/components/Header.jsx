function Header({info}) {
    const contact = [info.email, info.github, info.linkedin]
    return (
        <section id='cvHeader' className="text-center mb-2">
            <h1>{info.name}</h1>
            <p>
                {contact.join(' | ')} 
            </p>
        </section>
    )
}

export default Header