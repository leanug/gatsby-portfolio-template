import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import SEO from '../components/SEO'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import Title from '../components/Title'

const IndexPage = () => (
    <Layout>
        <SEO 
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, suscipit?"
            title="Home"
        />
        <section id="section-1">
            <Hero />
        </section>

        <section id="section-2" className="section-bg p-y">
            <div className="container">
                <Title 
                    title="About me." 
                    text="Lorem ipsum dolor, sit amet consectetur" 
                />
                <About />
            </div>
        </section>

        <section id="section-3" className="container p-y">
            <Title 
                title="Experience."
                text="Lorem ipsum dolor, sit amet consectetur" 
            />
            <Experience />
        </section>

        <section id="section-4" className="section-bg p-y">
            <div className="container">
                <Title 
                    title="Skills."
                    text="Lorem ipsum dolor, sit amet consectetur" 
                />
                <Services />
            </div>
        </section>

        <section id="section-5" className="container p-y">
            <Title 
                title="What people say about me."
                text="Lorem ipsum dolor, sit amet consectetur" 
            />
            <Testimonial />
        </section>

        <section id="section-6" className="section-bg p-y">
            <div className="container">
            <Title 
                title="Latest projects." 
                text="Lorem ipsum dolor, sit amet consectetur" 
            />
            <Projects />
            </div>
        </section>

        <section id="section-7" className="container p-y">
            <Title 
                title="Contact me."
                text="Lorem ipsum dolor, sit amet consectetur" 
            />
            <Contact />
        </section>
    </Layout>
)

export default IndexPage
