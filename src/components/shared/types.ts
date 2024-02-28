export enum SelectedPage{
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "Contact"
}
export interface BenefitsType{
  icon:JSX.Element;
  title:string;
  description:string;
}
export interface ClassType{
    Name: string;
    description:string;
    image:string;
}