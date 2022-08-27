import * as React from "react"

// const line = {
// width: 112px;
// height: 47px;
// border-bottom: 1px solid black;
// position: absolute;
// }

const pageStyles = {
  color: "#232129",
  padding: "2.355rem 1.775rem",
  fontFamily: "Montserrat, sans-serif",
}
const headingStyles = {
  marginLeft: "auto",
  marginRight: "auto",
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
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "37.68rem",
  marginBottom: 30,
}

const linkStyle = {
  color: "#121212",
//   fontWeight: "bold",
  fontSize: 20,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#121212",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const home = {
  text: "Home",
  url: "",
  color: "#8954A8",
}

const publications = {
  text: "Publications",
  url: "",
  color: "#8954A8",
}

const cv = {
  text: "CV",
  url: "",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "About",
//     url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "I am a soft-condensed matter physicist and the focus of my research lies at the intersection of complexity science and non-equilibrium thermodynamics. In my research, I try to understand, address, and quantify these observable features of complex systems through the fundamental laws of physics and statistical mechanics.",
    color: "#D3D3D3",
  },
  {
    text: "Research",
//     url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#D3D3D3",
  },
  {
    text: "Contact",
//     url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Department of Physics of Complex Systems, Weizmann Institute of Science, Israel",
    color: "#D3D3D3",
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
//       "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//     color: "#663399",
//   },
]

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Atanu Chatterjee
        <br/>
      </h1>
      <hr/>
       <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${home.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {home.text}
          </a>
        </li>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${publications.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {publications.text}
          </a>
        </li>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${cv.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {cv.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
