import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  if (title) {
    return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
	<h4> v1.0.0</h3>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin-bottom: 4rem;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
