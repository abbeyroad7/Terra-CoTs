import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
	Component.PageTitle(),
  ],
  footer: Component.Footer({
    links: {
      "Discord": "https://discord.gg/uTk4Dyz8CB",
	  "Foundry": "https://foundryredirect.com/tcs",
	  "Memories": "https://abbeyroad7.github.io/Terra-CoTs/World/Memories/Memories",
	  "History": "https://abbeyroad7.github.io/Terra-CoTs/World/History/History",
	  "Changelog": "https://abbeyroad7.github.io/Terra-CoTs/Changelog",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
  	Component.ArticleTitle(),
    //Component.Breadcrumbs(),
    //Component.TagList(),
  ],
  left: [
    //Component.MobileOnly(Component.Spacer()),
	
	Component.DesktopOnly(Component.Icon()),
	Component.DesktopOnly(Component.Graph()),
	//Component.DesktopOnly(Component.RecentNotes()),
    //Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.DesktopOnly(Component.Search()),
    Component.DesktopOnly(Component.SideFooter({
		linksSide: {
      "-Home": "https://abbeyroad7.github.io/Terra-CoTs/",
      "-Beastiary": "https://abbeyroad7.github.io/Terra-CoTs/World/Beastiary/Beastiary",
      "-Characters": "https://abbeyroad7.github.io/Terra-CoTs/World/Characters/Characters",
      "-Dictionary": "https://abbeyroad7.github.io/Terra-CoTs/World/Dictionary/Dictionary",
      "-Factions": "https://abbeyroad7.github.io/Terra-CoTs/World/Factions/Factions/Factions",
      "-History": "https://abbeyroad7.github.io/Terra-CoTs/World/History/History",
      "-Items": "https://abbeyroad7.github.io/Terra-CoTs/World/Items/Items",
      "-Quests": "https://abbeyroad7.github.io/Terra-CoTs/World/Quests/Quests",
      "-Religion": "https://abbeyroad7.github.io/Terra-CoTs/World/Religion/Religion",
      "-Misc": "https://abbeyroad7.github.io/Terra-CoTs/World/Misc/Misc",
      "-Memories": "https://abbeyroad7.github.io/Terra-CoTs/World/Memories/Memories",
      //"": "https://abbeyroad7.github.io/Terra-CoTs/World//",
    },
	})),
    Component.DesktopOnly(Component.SideBody()),
  
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
  ],
  right: [
    //Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(Component.Search()),
    //Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.SideFooter({
		linksSide: {
      "-Home": "https://abbeyroad7.github.io/Terra-CoTs/",
      "-Beastiary": "https://abbeyroad7.github.io/Terra-CoTs/World/Beastiary/Beastiary",
      "-Characters": "https://abbeyroad7.github.io/Terra-CoTs/World/Characters/Characters",
      "-Dictionary": "https://abbeyroad7.github.io/Terra-CoTs/World/Dictionary/Dictionary",
      "-Factions": "https://abbeyroad7.github.io/Terra-CoTs/World/Factions/Factions/Factions",
      "-History": "https://abbeyroad7.github.io/Terra-CoTs/World/History/History",
      "-Items": "https://abbeyroad7.github.io/Terra-CoTs/World/Items/Items",
      "-Quests": "https://abbeyroad7.github.io/Terra-CoTs/World/Quests/Quests",
      "-Religion": "https://abbeyroad7.github.io/Terra-CoTs/World/Religion/Religion",
      "-Misc": "https://abbeyroad7.github.io/Terra-CoTs/World/Misc/Misc",
      "-Memories": "https://abbeyroad7.github.io/Terra-CoTs/World/Memories/Memories",
      "-Getting Started": "https://abbeyroad7.github.io/Terra-CoTs/World/Getting-Started/Getting-Started",
      //"": "https://abbeyroad7.github.io/Terra-CoTs/World//",
		},
		})),
	
	Component.DesktopOnly(Component.SideBody()),
	
  ],
  left: [
	Component.DesktopOnly(Component.Icon()),
	Component.DesktopOnly(Component.Graph()),
	//Component.DesktopOnly(Component.RecentNotes()),
  ],
}
