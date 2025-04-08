import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { joinSegments } from "../util/path"
import { i18n } from "../i18n"

const Icon: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.Icon ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const iconPath = joinSegments(baseDir, "static/DesktopLogo.jpg")
  return (
    <h1>
        <div style="max-height: 5000; overflow: hidden">
			<img class="Logo" src={iconPath} />
		</div>
    </h1>
  )
}

Icon.css = `
.Logo {
width: 16rem;
height: 8rem;

margin-top: -2rem;
margin-bottom: -1rem;
margin-left: 0rem;

}
`

export default (() => Icon) satisfies QuartzComponentConstructor