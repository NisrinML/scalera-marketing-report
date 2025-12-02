import type { ResultCardProps } from "@/types/result"
import Result1 from "@/assets/result1.webp"
import Result2 from "@/assets/result2.webp"
import Result3 from "@/assets/result3.webp"
import ResultCard from "@/components/ResultCard"
const ResultsSection = () => {
  const resultsList: ResultCardProps[]=[
    {title:"1. أكمل التقييم القصير",desc:"خصّص 10 دقائق فقط للإجابة على مجموعة من الأسئلة حول استراتيجيتك التسويقية الحالية، ليتم بعدها إعداد خطتك المخصّصة بدقة وفق احتياجاتك.",image:Result1,loc:'r'},
    {title:"2. راجع تقريرك",desc:"نعطيك رؤية واضحة فيما تتفوّق فيه وأين تكمن قوتك، وأين الفرص الضائعة، وما الذي يجب تحسينه لتحقيق نتائج أقوى",image:Result2,loc:'l'},
    {title:"3. احصل على خطتك التسويقية المخصّصة",desc:"استلم خطة واضحة ومصممة لاحتياجاتك — تطبقها فورًا، وتدفع توسع عملك إلى المستوى الذي تستحقه.",image:Result3,loc:'r'},
  ]
  return (
    <section className="min-h-screen bg-background " >
        <div className="flex flex-col mx-auto items-center text-center gap-4 pt-4 md:gap-8 md:pt-8 max-w-5xl">
            <div className="px-8 md:px-16 lg:px-24">
              <h1 className="title text-linear ">طبّق خطتك التسويقية المخصّصة…<br/> واستعد للتوسع وحصد الأرباح</h1>
           </div>
            <div className="flex flex-col items-start ">
              {
                resultsList.map((result,index)=>{return(
                  <div key={index} >
                      <ResultCard card={result}/>
                  </div>
                )})
              }
            </div>
        </div>
        </section>
  )
}

export default ResultsSection