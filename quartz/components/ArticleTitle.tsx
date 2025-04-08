import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const landing = fileData.frontmatter?.landing
  if (landing) {
	   return null
  } else {
	  const title = fileData.frontmatter?.title
		if (title) {
			return <div class={classNames(displayClass, "article-title")} style="font-size: 36px;"><b>{title}</b></div>
		} else {
			return null
		}
  }
}

ArticleTitle.css = `
.article-title {
  margin-bottom: 2rem;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
