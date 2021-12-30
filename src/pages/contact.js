import React, { useRef, useEffect } from "react"
import { Link as GatsbyLink } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { gsap } from "gsap"
import tw from 'twin.macro'
import ContactForm from '../components/ContactForm'
import { Pinterest } from "@styled-icons/entypo-social/Pinterest"
import { StackOverflow } from "@styled-icons/boxicons-logos/StackOverflow"
import { Twitter } from "@styled-icons/boxicons-logos/Twitter"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { Behance } from "@styled-icons/boxicons-logos/Behance"
import { Tumblr } from "@styled-icons/boxicons-logos/Tumblr"
import { ShieldCheckmark } from "@styled-icons/fluentui-system-regular/ShieldCheckmark"
import { PageDefault } from "../components/theme" 
// Assets
// import selfie from "../../about.png" 

const ContactLayout = tw.div`mx-auto w-k5 mt-k3v`;

const ContactPage = ({ transitionStatus }) => {
  const { twitter, github, stackoverflow, secureEmail, behance, pinterest, tumblrJournal  } = useSiteMetadata();
  
  useEffect(() => {
    // console.log('About Page', transitionStatus);
  }, [transitionStatus]);
  useEffect(() => {
    gsap.to('.anim-about', {
      autoAlpha: 1,
      duration: .3,
    });
  }, []); //THIS IS RUN THE FIRST TIME THE SITE IS OPENED
  useEffect(() => {
    if (transitionStatus === 'entering') {
      gsap.to('.anim-about', {
        autoAlpha: 1, 
        duration: .3, 
      });
    }
    if (transitionStatus === 'exiting') {
      gsap.to('.anim-about', { autoAlpha: 0, duration: .3 });
    }
  }, [transitionStatus]);
  return (

      <div className={`anim-about opacity-0 mb-14 ${PageDefault}`}>
        <div>
          <div className="">
            <h1>Let's get in touch!</h1>
          </div>
          <div className="">
            <ContactForm className="flex flex-col w-full"/>
          </div>
          <div className="mt-12">
            <p className="text-base">
              For an encrypted service you can send your message at my Mailfence account: <a className="block mt-2 font-normal whitespace-nowrap" href={`mailto:${secureEmail}?subject=Message from the portfolio website`} title=""><ShieldCheckmark size="36"/> {secureEmail}</a>
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-base mb-2">
              Social networks
            </h2>
            <ul className="flex flex-row gap-6">
              <li>
                <a href={twitter} target="_blank" title="">
                  <Twitter size="32"/>
                </a>
              </li>
              <li>
                <a href={github} target="_blank" title="">
                  <Github size="32"/>
                </a>
              </li>
              <li>
                <a href={stackoverflow} target="_blank" title="">
                  <StackOverflow size="32"/>
                </a>
              </li>
              <li>
                <a href={behance} target="_blank" title="">
                  <Behance size="32"/>
                </a>
              </li>
              <li>
                <a href={pinterest} target="_blank" title="">
                  <Pinterest size="32"/>
                </a>
              </li>
              <li>
                <a href={tumblrJournal} target="_blank" title="">
                  <Tumblr size="32"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

  )
}

// AboutPage.Layout = Layout

export default ContactPage