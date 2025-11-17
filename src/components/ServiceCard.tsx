import useIsTablet from "@/hooks/useTablet";
import type { ServiceCardProps } from "@/types/service";

type ServiceCardComponentProps = {
  card: ServiceCardProps;
};

const ServiceCard = ({ card }: ServiceCardComponentProps) => {
    const isTablet=useIsTablet(900)
  return (
    <div
      className={`relative flex flex-col border border-text items-center justify-between gap-2 h-[280px] w-[136px] md:h-[420px] md:w-[270px] px-4 text-center card-shadow py-8 md:py-14 lg:py-8
      ${
        card.loc == "r"
          ? "rounded-tr-xl rounded-tl-xl rounded-bl-xl rounded-br-[50px] md:rounded-tr-3xl md:rounded-tl-3xl md:rounded-bl-3xl md:rounded-br-[100px]"
          : card.loc == "l"
          ? "rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-[50px] md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-3xl md:rounded-tl-[100px]"
          : "rounded-xl md:rounded-3xl md:self-end"
      }
    `}
    >
      <div className="flex items-center justify-center w-12 h-12 md:w-[120px] md:h-[120px] rounded-full gradient-background">
        <img
          src={card.icon}
          alt={card.title}
          loading="lazy"
          decoding="async"
          width={isTablet?10:80}
          height={isTablet?10:80}
          className="w-12 h-12 md:w-20 md:h-20 object-contain"
          aria-label="card image"
        />
      </div>

      <h2 className="subtitle text-subtitle">{card.title}</h2>
      <h4 className="description text-text">{card.desc}</h4>
    </div>
  );
};

export default ServiceCard;
