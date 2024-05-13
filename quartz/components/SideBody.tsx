import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { joinSegments } from "../util/path"
import { pathToRoot } from "../util/path"


const SideBody: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const sidebody = fileData.frontmatter?.sidebody
  const sidebody2 = fileData.frontmatter?.sidebody2
  const sidebody3 = fileData.frontmatter?.sidebody3
    
  if (sidebody) {
    return <h1 class={classNames(displayClass, "side-body")}>	<font size="3">{sidebody}	<br><br>{sidebody2}</br></br>	<br><br>{sidebody3}</br></br>		</font></h1>
  } else {
    return null
  }
  
  const home = fileData.frontmatter?.home
  if (home) {
	   return <h1 class={classNames(displayClass, "side-body")}>		test		</h1>
  } else {
	  return null
  }
}

SideBody.css = `
.side-body {
  margin-top: 0rem;
  margin-left: 0rem;
}
`

export default (() => SideBody) satisfies QuartzComponentConstructor
