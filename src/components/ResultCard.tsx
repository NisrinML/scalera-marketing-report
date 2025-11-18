import useIsTablet from "@/hooks/useTablet";
import type { ResultCardProps } from "@/types/result";
import { NavLink } from "react-router-dom";

type ResultCardComponentProps = {
    card: ResultCardProps;
};
const ResultCard = ({ card }: ResultCardComponentProps) => {
    const isTablet = useIsTablet()
    return (
        <div className={`flex ${card.loc == 'r' ? `flex-row` : `flex-row-reverse`} w-full`}>
            <div className="flex flex-col flex-1 ">
                <div className="flex flex-col items-start text-right justify-between gap-4 py-8 px-4 sm:py-20 md:gap-8 md:py-32 md:px-8">
                    <h1 className="subtitle text-subtitle">{card.title}</h1>
                    <p className="text text-text">{card.desc}</p>
                    <NavLink aria-label="start your report" to="/user-information" className="text text-link ">ابدأ التقييم المجاني</NavLink>
                </div>
            </div>
            <img src={card.image} alt={card.title} loading='lazy' decoding="async" width={isTablet ? 196 : 550}
                className='object-cover flex-1' aria-label="result image"
            />

        </div>
    )
}

export default ResultCard