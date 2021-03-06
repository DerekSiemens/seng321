import React from 'react'
import PropTypes from 'prop-types'
import { SiteHeader, SiteMast, SiteMastIcon, ACLogo,HeaderLogo,LogoHolder } from '.'
import Navigation from '../Navigation/Navigation'
import { ContainerDiv } from '..'
import SiteBanner from '../SiteBanner/SiteBanner'

const Header = ({ data, title, description, isHome }) => (
    <SiteHeader>
        <ContainerDiv>
            <SiteMast>
                <SiteMastIcon>
                    <a href={`https://github.com/DerekSgov/seng321`}>
                        {!isHome && <ACLogo src="\images\AidConnect-logo\vector\isolated-monochrome-white.svg" alt="AidConnect"/>}
                    </a>
                </SiteMastIcon>
            </SiteMast>
            <LogoHolder>
            { isHome && <HeaderLogo src = "\images\AidConnect-logo\vector\default-monochrome.svg"/>}
            </LogoHolder>
            <Navigation data={data}/>
        </ContainerDiv>
    </SiteHeader>
)

Header.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isHome: PropTypes.bool,
}

export default Header
