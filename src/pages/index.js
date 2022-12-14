import * as React from "react"

// const line = {
// width: 112px;
// height: 47px;
// border-bottom: 1px solid black;
// position: absolute;
// }
const figure = {
    display: "inline-block",
    border: 10,
    margin: 20, 
}

const pageStyles = {
  color: "#232129",
  padding: "2.355rem 1.775rem",
  fontFamily: "Montserrat",
}
const headingStyles = {
  marginLeft: "auto",
  marginRight: "auto",
  fontWeight: 100,
//   marginTop: -100,
//   marginBottom: 64,
  maxWidth: "37.68rem",
}
const headingAccentStyles = {
  color: "#121212",
}
const paragraphStyles = {
  marginBottom: 48,
}
// const codeStyles = {
//   color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// }
// const div_top_hypers = {
//     backgroundColor: "#eeeeee",
//     display: "inline",
// }
// const ul_top_hypers = {
//     display: "inline",
// }

const listStyles = {
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "37.68rem",
  padding: 0,
  listStyleType: "none",
//   marginBottom: 96,
//   paddingLeft: 0,
//   display: "inline",
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "37.68rem",
  marginBottom: 30,
//   display: "inline",
}

const linkStyle = {
  color: "#121212",
  fontWeight: 200,
//   fontWeight: "bold",
  fontSize: 20,
  verticalAlign: "5%",
  display: "inline",
  textDecoration: "none"
}

const linkStyleHover = {
  color: "#121212",
//   fontWeight: "bold",
  fontSize: 20,
  verticalAlign: "5%",
  display: "inline",
  textDecoration: "underline"
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 2,
//   padding: 10,
}

const descriptionStyle = {
  color: "#121212",
  fontSize: 16,
  marginTop: 5,
  marginBottom: 0,
  lineHeight: 1.25,
  fontWeight: 300,
}

const home = {
  text: "Home   |   ",
  url: "https://www.netflix.com/",
  color: "#8954A8",
}

const publications = {
  text: "Publications   |   ",
  url: "https://www.youtube.com/",
  color: "#8954A8",
}

const talks = {
  text: "Talks  |   ",
  url: "https://www.google.com/",
  color: "#8954A8",
}

const cv = {
  text: "CV",
  url: "https://www.linkedin.com/",
  color: "#8954A8",
}

// const badgeStyle = {
//   color: "#fff",
//   backgroundColor: "#088413",
//   border: "1px solid #088413",
//   fontSize: 11,
//   fontWeight: "bold",
//   letterSpacing: 1,
//   borderRadius: 4,
//   padding: "4px 6px",
//   display: "inline-block",
//   position: "relative",
//   top: -2,
//   marginLeft: 10,
//   lineHeight: 1,
// }

const links = [
  {
    text: "About",
    description:
      "I am the 2022-23 Curwen-Lowy postdoctoral fellow in the Department of Physics of Complex Systems at the Weizmann Institute of Science. At the Weizmann Institute of Science, I work with Prof. Ofer Feinerman to quantify collective cognition in a group of Longhorn crazy ants as they cooperate ",
  },
  {
    text: "Research",
    description:
      "As a soft-condensed matter physicist, the focus of my research lies at the intersection of complexity science and non-equilibrium thermodynamics. Using thermodynamics and statistical mechanics, I try to understand, address, and quantify certain intriguing features in complex systems such as, pattern formation, self-organizationm, and collective problem solving in agents.",
  },
  {
    text: "Contact",
    description:
      "Department of Physics of Complex Systems, Weizmann Institute of Science, Israel",
  },
//   {
//     text: "Conceptual Guides",
//     url: "https://www.gatsbyjs.com/docs/conceptual/",
//     description:
//       "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
//     color: "#0D96F2",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//     color: "#8EB814",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     badge: true,
//     description:
//       "Now you???re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//     color: "#663399",
//   },
]

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Atanu Chatterjee
        <hr/>
      </h1>

 
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${home.url}`}
          >
            {home.text}
          </a>
        </li>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${publications.url}`}
          >
            {publications.text}
          </a>
        </li>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${talks.url}`}
          >
            {talks.text}
          </a>
        </li>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${cv.url}`}
          >
            {cv.text}
          </a>
        </li>
        
        <figure>
            <img src="img_pulpit.jpg" alt="The Pulpit Rock" width="304" height="228">
        </figure>
        
        {links.map(link => (
          <li style={{ ...listItemStyles}}>
            <span>
              <a
              >
                {link.text}
              </a><hr/>
                {link.badge && (<span style={badgeStyle} aria-label="New Badge">NEW!</span>)}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>About | Atanu Chatterjee</title>
