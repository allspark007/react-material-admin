import React from 'react'
import {
    Home as HomeIcon,
    NotificationsNone as NotificationsIcon,
    FormatSize as TypographyIcon,
    FilterNone as UIElementsIcon,
    BorderAll as TableIcon,
    QuestionAnswer as SupportIcon,
    LibraryBooks as LibraryIcon,
    HelpOutline as FAQIcon,
    ArrowBack as ArrowBackIcon,
    Inbox as InboxIcon
  } from "@material-ui/icons";
  import Dot from "../Dot";


export default function Icon({name})
{
    if(name == "home")
    {
        return <HomeIcon/>
    }
    else if(name == "typography")
    {
        return <TypographyIcon/>
    }
    else if(name == "notification")
    {
        return <NotificationsIcon/>
    }
    else if(name == "uielement")
    {
        return <UIElementsIcon/>
    }
    else if(name == "dotwarning")
    {
        return <Dot size="small" color="warning"></Dot>
    }
    else if(name == "dotprimary")
    {
        return <Dot size="small" color="primary"/>
    }
    else if(name == "dotsecondary")
    {
        return <Dot size="small" color="secondary"></Dot>
    }
    else if(name == "library")
    {
        return <LibraryIcon/>
    }
    else if(name == "support")
    {
        return <SupportIcon/>
    }
    else if(name == "faq")
    {
        return <FAQIcon/>
    }
    else
    {
        return <InboxIcon/>
    }
}