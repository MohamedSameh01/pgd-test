import { Link } from "react-router-dom";
import logo2030 from "../../assets/svgs/2030.svg";
import logoTech from "../../assets/svgs/مقترح_شعار_التقنية_والذكاء_الاصطناعي_1-removebg-preview 1 (1).svg";

const footerLinks=[
  "النماذج",
  "عن النظام",
  "البوابه الداخليه",
  "البوابه الخارجيه",

]
const Footer = () => {

  return (
    <footer className="w-full flex flex-wrap items-center justify-center sm:justify-between bg-grayColor  py-4 px-8">
      {/* Links and copyright on the left */}
      <div className="flex flex-col items-center sm:items-start gap-1 flex-1 mb-4 sm:mb-0">
        <div className="flex gap-8 text-base text-gray-500 font-medium mb-1">
        {
          footerLinks.map((el,idx)=>{
            return (
              <Link key={idx} className="text-sm md:text-base cursor-pointer">{el}</Link>
            )
          })
        }
        </div>
        <div className="flex gap-4 items-center text-sm text-gray-400">
          <span>© التقنية والذكاء الاصطناعي بالمديرية العامة للسجون</span>
          <span className="text-[#BFAE8F] font-bold">الإصدار 3.1.2</span>
        </div>
      </div>
      {/* Logos on the right */}
      <div className="flex items-center justify-between gap-6">
        <img src={logoTech} alt="tech logo" className="h-30 w-30" />
        <img src={logo2030} alt="2030" className="h-30 w-30" />
      </div>
    </footer>
  );
};
export default Footer;
