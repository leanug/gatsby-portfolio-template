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
        <Hero id="home" />
        <div id="about" className="section-bg p-y">
            <div className="container">
                <Title title="About me." />
                <About />
            </div>
        </div>
        <div id="experience" className="container p-y">
            <Title 
                title="experience."
            />
            <Experience />
        </div>
        <div id="skills" className="section-bg p-y">
            <div className="container">
                <Title 
                    title="skills."
                />
                <Services />
            </div>
        </div>
        <div id="testimonials" className="container p-y">
            <Title 
                title="What people say about me."
            />
            <Testimonial />
        </div>
        <div id="projects" className="section-bg p-y">
            <div className="container">
            <Title title="Projects." />
            <Projects />
            </div>
        </div>
        <div id="contact" className="container p-y">
            <Title 
                title="contact."
            />
            <Contact />
        </div>
    </Layout>
)

export default IndexPage
