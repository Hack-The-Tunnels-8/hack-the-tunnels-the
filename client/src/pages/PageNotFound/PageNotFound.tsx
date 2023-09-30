import { Page } from "../../components";
import "./PageNotFound.style.scss";

function PageNotFound() {
  return (
    <Page>
      <div className="page-not-found">
        <h1>Error 404: Page not found</h1>
        <img src="./kevinjames.jpg" alt="kevin james"></img>
      </div>
    </Page>
  );
}

export default PageNotFound;