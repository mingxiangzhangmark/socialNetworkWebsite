
import { Tab, TabPane } from "semantic-ui-react";
import ProfileAbout from "./profileAbout";
import { Profile } from "../../app/types/profile";
import ProfilePhotos from "./ProfilePhotos";



type Props = {
    profile: Profile
}

export default function profileContent({profile}: Props) {
    const panes = [
        {menuItem: 'About', render: () => <ProfileAbout profile={profile}/>},
        {menuItem: 'Photos', render: () => <ProfilePhotos profile={profile}/>},
        {menuItem: 'Events', render: () => <TabPane>Events</TabPane>},
        {menuItem: 'Followers', render: () => <TabPane>Followers</TabPane>},
        {menuItem: 'Following', render: () => <TabPane>Following</TabPane>},
    ]

  return (
    <Tab
        menu={{fluid: true, vertical: true}}
        menuPosition='right'
        panes={panes}
    />
  )
}
