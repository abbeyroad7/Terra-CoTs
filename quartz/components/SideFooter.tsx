import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { classNames } from "../util/lang"
import { version } from "../../package.json"
import { i18n } from "../i18n"	

interface Options {
  linksSide: Record<string, string>
}

export default ((opts?: Options) => {
  const SideFooter: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    
    const linksSide = opts?.linksSide ?? []
    return (
      <sidefooter class={classNames(displayClass, "side-footer")}>
		<h3 style="color: #bebebe; font-size: 1.4rem;">Next Session: Tuesday, May 27 @7:00pm CT</h3>

		<h3 style="text-align: left; width:49%; display: inline-block; color: #00FF4A; font-size: 1.15rem;">Navigation</h3>
		<h3 style="text-align: right; width:50%;  display: inline-block; color: #00FF4A; font-size: 1.15rem;">
			v0.57.44
		</h3>
		
          {Object.entries(linksSide).map(([text, linksSide]) => (
              <br><a href={linksSide}>{text}</a></br>
          ))}
      </sidefooter>
    )
  }

SideFooter.css = `
.side-footer {
  margin-top: -2rem;
  margin-left: -8rem;
  line-height: 60%;
  
  h3 {
	  line-height: 130%;
	  font-weight: bold;
  }
  br {
	  line-height: 60%;
  }
}
`

  return SideFooter
}) satisfies QuartzComponentConstructor 