import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-10">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-5 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} className="w-[130px]" />
          <p className="my-4">
          In the bustling city of Butwal, MVO Gym emerged as a beacon of fitness and wellness. Founded in 2019 by fitness enthusiasts Diya,and Mansa, MVO Gym began its journey with a shared vision of creating a fitness haven that would transcend conventional gym experiences.
          </p>
          <p>© Mvogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links of our pages</h4>
          <p className="my-5">FaceBook</p>
          <p className="my-5">Instagram</p>
          <p>Telegram</p>
        </div>
        <div className="mt-14 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">personal Contact</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;