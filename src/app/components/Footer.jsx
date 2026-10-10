const Footer = () => {
  return (
    <div className="w-full bg-[#f8f9fa] border-y border-gray-200 py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-[13px] md:text-sm text-gray-800 gap-2">
        <p className="text-center sm:text-left">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        <p className="text-center sm:text-right">
          সকল দাম সপ্তাহব্যাপী; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </div>
  );
};

export default Footer;
