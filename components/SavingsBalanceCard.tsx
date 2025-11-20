import Image from "next/image";

export default function SavingsBalanceCard() {
  return (
    <div className="relative h-[163px] w-full max-w-[358px] overflow-hidden rounded-[19px] bg-white">
      {/* Settings icon */}
      <button className="absolute right-[30px] top-[28px] h-[19px] w-5">
        <Image
          src="/assets/icons/settings-gear.svg"
          alt="Settings"
          width={20}
          height={19}
          className="object-contain"
        />
      </button>

      {/* Balance info */}
      <div className="absolute left-[29px] top-[33px] flex flex-col gap-[15px]">
        <p className="font-manrope text-[14px] font-medium tracking-[-0.42px] text-[#31353b] opacity-60">
          Savings Balance
        </p>
        <h2 className="font-manrope text-[30px] font-extrabold tracking-[-0.9px] text-[#31353b] -mt-[10px]">
          $120,560
        </h2>
      </div>

      {/* Growth badge */}
      <div className="absolute left-[26px] top-[108px] flex h-[28px] w-[143px] items-center justify-center gap-1 rounded-[14px] bg-[#E7F7E8]">
        <Image
          src="/assets/icons/arrow-up-green.svg"
          alt="Growth"
          width={16}
          height={11}
          className="object-contain"
        />
        <span className="font-manrope text-[12px] font-bold tracking-[-0.36px] text-[#6e6e6e]">
          +5% Last month
        </span>
      </div>

      {/* Action buttons */}
      <div className="absolute bottom-[20px] right-[30px] flex items-center gap-[22px]">
        {/* External link button */}
        <button className="flex h-[40.515px] w-[40.515px] items-center justify-center rounded-full bg-[#f5f5f5] transition-colors hover:bg-[#e0e0e0]">
          <Image
            src="/assets/icons/external-link.svg"
            alt="Open"
            width={24}
            height={24}
            className="object-contain"
          />
        </button>

        {/* Download button */}
        <button className="flex h-[40.515px] w-[40.515px] items-center justify-center rounded-full bg-[#424de7] transition-colors hover:bg-[#3640c7]">
          <Image
            src="/assets/icons/download-icon.svg"
            alt="Download"
            width={24}
            height={24}
            className="object-cover"
          />
        </button>
      </div>
    </div>
  );
}
