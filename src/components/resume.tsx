'use client';


interface ResumeProps {
  buttonText?: string;
}

const Resume = ({ buttonText }: ResumeProps) => {

  return (
    <div className="transition-all duration-300 active:scale-[0.96] max-w-[200px] mx-auto md:mx-0 flex justify-center lg:flex lg:justify-start">
    
      <span
       
        className="cursor-pointer bg-gradient-to-r max-w-[197px] lg:max-w-[252px] to-[#D9D9D9] from-[#D9D9D900] py-0.5 pr-0.5"
      >
         <a href="https://standardresume.co/r/bimfuqcRzU5D8A4DYzHzG"  target="_blank"
            rel="noreferrer">
        <p className="bg-[#0b040c] px-[17px] py-[18px] font-medium text-[18px] font-clash">
       

          {buttonText || "Download PDF"}
        
        </p>
        </a>
      </span>
    
    </div>
  );
};

export default Resume;
