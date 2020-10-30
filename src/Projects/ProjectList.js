import React from 'react';
import ProjectTab from './ProjectTab';

function ProjectList(){
    return(
        <div id = "Project-List">
            <ProjectTab name = "Automated Instagram Bot" src = "BotTab.jpg" description = "An Instagram bot written in Python using the Selenium library. This bot automatically runs a page doing such things as finding content, posting, following and unfollowing users." path = "Bot"/>
            <ProjectTab name = "Message Board" src = "MessageBoardTab.jpg" description = "A message board to converse with others who have visited the site" path = "MessageBoard"/>
            <ProjectTab name = "Speed Reader" src = "SpeedReaderTab.jpg" description = "A way to get through readings quicker, just input the text and listen to the reading" path = "SpeedReader"/>
        </div>
    );
}

export default ProjectList;