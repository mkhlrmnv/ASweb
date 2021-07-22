import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaBars } from "react-icons/fa"

import Subnavi from "./subnavi.js"

import { compareUrl, tokenize, removeLangFromArr } from "./helpers/helpers.js"

import "./navbar.css"

export default function Navbar({ context }) {
    const [navExpanded, expandNav] = useState(false)

    const toggleNav = () => {
        navExpanded
            ? document.body.classList.remove("hideoverflow")
            : document.body.classList.add("hideoverflow")
        expandNav(!navExpanded)
    }

    const hideNav = () => {
        document.body.classList.remove("hideoverflow")
        expandNav(false)
    }

    let locarray = tokenize(context.slug)
    removeLangFromArr(locarray, context.lang)

    return (
        <StaticQuery
            query={graphql`
                query getNaviData {
                    allNaviYaml {
                        edges {
                            node {
                                content {
                                    title {
                                        fi
                                        en
                                    }
                                    link {
                                        fi
                                        en
                                    }
                                    subnavi {
                                        title {
                                            fi
                                            en
                                        }
                                        link {
                                            fi
                                            en
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `}
            render={data => (
                <div id="navbar-top" className={ navExpanded ? "expanded" : "" }>
                    <div className="navi">
                        <div className="navbar-logo">
                            <a href={ context.lang === "fi" ? "/" : "/en" }>
                                <StaticImage
                                    src="../../../images/aswhite.png"
                                    alt="Aivan Sama"
                                    layout="constrained"
                                    width={53}
                                    height={40}
                                />
                            </a>
                        </div>
                        <div id="navbar-collapse" className={ navExpanded ? "show" : "" } onClick={ () => hideNav() }>
                            {data.allNaviYaml.edges[0].node.content.map(entry => {
                                let linkarray = tokenize(entry.link[0][`${context.lang}`])
                                removeLangFromArr(linkarray, context.lang)
                                if (entry.subnavi)
                                    return (
                                        <Subnavi context={context} entry={entry} locarray={locarray} linkarray={linkarray} />
                                    )
                                else
                                    return compareUrl(locarray, linkarray) >= 0 ? (
                                        <div className="navi-item active">
                                            <a href={entry.link[0][`${context.lang}`]}>
                                                {entry.title[0][`${context.lang}`]}
                                            </a>
                                        </div>
                                    ) : (
                                        <div className="navi-item">
                                            <a href={entry.link[0][`${context.lang}`]}>
                                                {entry.title[0][`${context.lang}`]}
                                            </a>
                                        </div>
                                    )
                            })}
                            <div className="navi-item">
                                {context.lang === "fi" ? (
                                    <a href={context.translation || "/en"}>
                                        In English
                                    </a>
                                    ) : (
                                    <a href={context.translation || "/"}>
                                        Suomeksi
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="menu-toggle" onClick={toggleNav}>
                            <FaBars />
                        </div>
                    </div>
                </div>
            )}
        />
    )
}
