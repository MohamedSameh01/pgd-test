import fileDownloadIcon from "../../assets/icons/sidebar/file-download.png"

const SidebarFooter = () => {
  return (
    <div className="mb-4">
      <button className="px-2 flex items-center justify-start gap-2 w-full bg-lightYelloColor text-[#BFAE8F] rounded-xl py-3 text-xs font-bold border border-[#E0E0E0]">
        <img
          src={fileDownloadIcon}
          alt="download"
          className="w-[24px] h-[24px]"
        />
        <span style={{ fontSize: "14px" }}>تحميل دليل المستخدم</span>
      </button>
    </div>
  );
};

export default SidebarFooter;
