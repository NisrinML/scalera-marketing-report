import useIsTablet from "@/hooks/useTablet";
import type { ResultCardProps } from "@/types/result";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
type ResultCardComponentProps = {
    card: ResultCardProps;
};
const ResultCard = ({ card }: ResultCardComponentProps) => {
    const isTablet = useIsTablet()
    return (
        <div className={`flex flex-col ${card.loc == 'r' ? `md:flex-row` : `md:flex-row-reverse`} w-full overflow-hidden`}>
            <div className="flex flex-col  md:flex-1 md:max-h-[300px] lg:max-h-[400px] ">
                <div className="flex flex-col items-start text-right justify-between gap-4 py-8 px-4 sm:py-20 md:gap-4 md:py-6 lg:py-16 md:px-8">
                    <h1 className="subtitle text-subtitle ">{card.title}</h1>
                    <p className="description text-text">{card.desc}</p>
                    <NavLink aria-label="start your report" to="/user-information" className="text text-link ">ابدأ التقييم المجاني</NavLink>
                </div>
            </div>
            <motion.img src={card.image} alt={card.title} loading='lazy' decoding="async" height={isTablet ? 10 : 550}
                className='object-cover md:flex-1 max-h-[250px] md:max-h-[300px] lg:max-h-[400px]' aria-label="result image"

                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                    duration: 1.4,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 60,
                    damping: 18
                }}
                viewport={{ once: true, amount: 0.3 }}
            />

        </div>
    )
}

export default ResultCard