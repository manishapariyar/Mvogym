export enum SelectedPage{
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contact"
}
export interface BenefitsType{
  icon:JSX.Element;
  title:string;
  description:string;
}