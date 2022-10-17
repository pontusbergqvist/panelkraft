import preval from "next-plugin-preval";
import Contentful from "./contentful";

const contentful = new Contentful();
export default preval(contentful.getPageInfo());
