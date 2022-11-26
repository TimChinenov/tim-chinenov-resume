export function CareerPage() {

    const indentBlock = () => { return <div className="mb-5 ml-5 mr-2 mt-1 border-l-2 border-b-2 border-slate-400 w-6 rounded-bl-md"></div> }

    return(
        <div>
            <section className="pb-4">
                <h2>Summary</h2>
                <hr className="mt-1 pb-1"></hr>
                <p>I am a Fullstack Engineer who builds distributed microservice web applications for automating various services. Historically I have built such services to solve supply chain, manufacturing, and B2B Consumer problems.</p>
                <br></br>
                <p>I prefer to work for mission driven organizations. My passion spaces are climate change mitigation and green tech.</p>
            </section>

            <section className="pb-4">
                <h2>Active Technical Skills</h2>
                <hr className="mt-1 pb-1"></hr>
                <p><strong>Programming Languages:</strong> C#, Javascript, Typescript, Python, PostgreSQL</p>
                <p><strong>Frameworks:</strong> .NET 5+, ReactJS, Angular</p>
                <p><strong>Operations and Cloud:</strong> Azure, Grafana, Loki, Thanos, Kubernetes, Helm</p>
            </section>

            <section className="pb-4">
                <h2>Random Cool Achievements</h2>
                <hr className="mt-1 pb-1"></hr>
                <p><strong>Patent US11249544B2</strong> <a href="https://patents.google.com/patent/US11249544B2/en" target="_blank">🔗</a></p>
                <p>Co-patented <i>"Methods and systems for using artificial intelligence to evaluate, correct, and monitor user attentiveness"</i>.</p>
                <p><strong>Over 200k views on Medium Articles</strong>  <a href="https://theclassytim.medium.com/robotic-path-planning-rrt-and-rrt-212319121378" target="_blank">🔗</a></p>
                <p> My technical and policy articles on Medium have reached over 200k views, with <i>"Robotic Path Planning: RRT and RRT*"</i> having the most views surpassing 80K.</p>
                <p><strong>ARS Technica Article</strong> <a href="https://electrek.co/2021/01/13/tesla-automated-camera-system-quality-inspection-fremont-factory/" target="_blank">🔗</a></p>
                <p>The project I worked on during my time at Tesla got featured in an ARS Technica Article!</p>
            </section>

            <section className="pb-4">
                <h2>Industry Experience</h2>
                <hr className="mt-1 pb-1"></hr>
                <div className="flex flex-row w-full justify-between">
                    <h3 className="flex"><strong>SpaceX</strong></h3>
                    <h4 className="flex">October 2020 - Present</h4>
                </div>
                <h3>Fullstack SWE - Launch Consumer Applications</h3>
                <div className="flex">
                    { indentBlock() }
                    <p className="flex-1">Worked on a small team to design, build, test, launch, and support our rideshare customer portal <a href="https://launch.spacex.com"><u>launch.spacex.com</u></a></p>
                </div>

                <h3>Fullstack SWE - Starlink Manufacturing</h3>
                <div className="flex">
                    { indentBlock() }
                    <p className="flex-1">Responsible for building out various services in our microservice ecosystem that tracked and executed various factory functions</p>
                </div>
                
                <h3>Fullstack SWE - Starlink Supply Chain</h3>
                <div className="flex">
                    { indentBlock() }
                    <p className="flex-1">Worked to migrate and build services off of legacy systems to accomodate for the growth of the starlink team.</p>
                </div>

                <div className="flex flex-row w-full justify-between pt-4">
                    <h3 className="flex"><strong>Goldman Sachs</strong></h3>
                    <h4 className="flex">June 2020 - September 2020</h4>
                </div>
                <h3>Software Engineer - Synthetics and Options</h3>
                <div className="flex">
                    { indentBlock() }
                    <div>
                        <p>Developed front-end features for Quant tools.</p>
                        
                    </div>
                </div>
            </section>

            <section className="pb-12">
                <h2>Internships and Contracts</h2>
                <hr className="mt-1 pb-1"></hr>
                <p>Tesla - Vision Manufacturing</p>
                <p>Dreyev - Road Ahead Computer Vision</p>
                <p>Corning - Manufacturing Software Intern</p>
                <p>NASA - Web Application Software Intern</p>
                <p>NASA - Quality Assurance Software Intern</p>
            </section>
        </div>)
}


