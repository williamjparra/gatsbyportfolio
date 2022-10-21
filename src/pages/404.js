import * as React from "react"

import Seo from "../components/seo"
import { BasicContainer,  BodyContainer} from "../styles/component"

const NotFoundPage = () => (
  <>
    <BasicContainer>
      <BodyContainer>
        <Seo title="404: Not found" />
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </BodyContainer>
    </BasicContainer>
  </>
)

export default NotFoundPage
