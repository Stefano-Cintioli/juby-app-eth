import Image from "next/image";

export default function CommunityStatsCard() {
  return (
    <div className="relative h-[162px] w-full max-w-[358px] overflow-hidden rounded-[19px] bg-white">
      {/* Title */}
      <h3 className="absolute left-[29px] top-[28px] font-manrope text-[14px] font-medium tracking-[-0.42px] text-[#31353b] opacity-60">
        Juby community stats
      </h3>

      {/* Decorative image on the right */}
      <div className="absolute right-[10px] top-[10px] h-[92px] w-[92px] opacity-40">
        <Image
          src="/assets/worldcoin-logo.png"
          alt=""
          width={92}
          height={92}
          className="object-contain"
        />
      </div>

      {/* Stats container */}
      <div className="absolute bottom-[28px] left-[29px] flex items-start gap-8">
        {/* Total en Juby */}
        <div className="flex flex-col gap-2">
          <h4 className="font-manrope text-[24px] font-extrabold tracking-[-0.72px] text-[#31353b]">
            $221k
          </h4>
          <p className="font-manrope text-[14px] font-medium tracking-[-0.42px] text-[#31353b] opacity-60">
            Total en Juby
          </p>
        </div>

        {/* Divider line */}
        <div className="h-[82px] w-px bg-[#e5e5e5]" />

        {/* Rendimiento Anual */}
        <div className="flex flex-col gap-2">
          <h4 className="font-manrope text-[24px] font-extrabold tracking-[-0.72px] text-[#31353b]">
            12%
          </h4>
          <p className="font-manrope text-[14px] font-medium tracking-[-0.42px] text-[#31353b] opacity-60">
            Rendimiento Anual
          </p>
        </div>
      </div>
    </div>
  );
}
