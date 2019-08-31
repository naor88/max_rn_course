import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    let iconPrefix = Platform.OS === 'ios' ? 'ios' : 'md';
    Promise.all([
        Icon.getImageSource(`${iconPrefix}-map`, 30),
        Icon.getImageSource(`${iconPrefix}-share-alt`, 30),
        Icon.getImageSource(`${iconPrefix}-menu`, 30)
    ]).then(sources  => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.FindPlaceScreen",
                    label: "Find Place",
                    title: "Find Place",
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "awesome-places.SharePlaceScreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                }        
            ],
            tabsStyle: {
                tabBarSelectedButtonColor: "orange"
            },
            appStyle: {
                tabBarSelectedButtonColor: "orange"
            },
            drawer: {
                left: {
                    screen: "awesome-places.SideDrawerScreen"
                }
            }
        });
    });
}

export default startTabs;