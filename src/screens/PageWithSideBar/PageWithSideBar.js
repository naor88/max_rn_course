import React, { Component } from 'react';

class PageWithSideBar extends Component {
    constructor(props){
        super();
        props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if(event.type === "NavBarButtonPress"){
            if(event.id === "sideDrawerToggle"){
                this.props.navigator.toggleDrawer({
                    side: "left"
                })
            }
        }
        // switch (event.id) {
        //     case 'willAppear':
        //         break;
        //     case 'didAppear':
        //         break;
        //     case 'willDisappear':
        //         break;
        //     case 'didDisappear':
        //         break;
        //     default:
        //         break;
        // }
    }
}

export default PageWithSideBar;