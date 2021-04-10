import React from 'react';

function NavItem(props: any){
    return (
        <span className="navItem">
            <a herf={props.url}>{props.value}</a>
        </span>
    );
}

function SiteInfo(props: any){

}

function SearchBar(props: any){
    
}

function UserInfo(props: any){
    
}

function Header(props: any){
    return (
        <SiteInfo />
        <SearchBar />
        <UserInfo />
    );
}

export default Header;