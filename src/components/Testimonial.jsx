import { motion } from "framer-motion";
import { CircleUser } from "lucide-react";

function Testiomonial(){
    const reviews = [
        {
            name: 'John Reacher',
            role: 'Ceo',
            comment: 'ABM Productions is absolutely the best agency for coaching musical talents and reviving old flames. I am definitely grateful to have found them',
            icon: <CircleUser/>
        },
        {
            name: 'John Reacher',
            role: 'Ceo',
            comment: 'ABM Productions is absolutely the best agency for coaching musical talents and reviving old flames. I am definitely grateful to have found them',
            icon: <CircleUser/>
        },
        {
            name: 'John Reacher',
            role: 'Ceo',
            comment: 'ABM Productions is absolutely the best agency for coaching musical talents and reviving old flames. I am definitely grateful to have found them',
            icon: <CircleUser/>
        },
        {
            name: 'John Reacher',
            role: 'Ceo',
            comment: 'ABM Productions is absolutely the best agency for coaching musical talents and reviving old flames. I am definitely grateful to have found them',
            icon: <CircleUser/>
        },
        {
            name: 'John Reacher',
            role: 'Ceo',
            comment: 'ABM Productions is absolutely the best agency for coaching musical talents and reviving old flames. I am definitely grateful to have found them',
            icon: <CircleUser/>
        },
        {
            name: 'John Reacher',
            role: 'Ceo',
            comment: 'ABM Productions is absolutely the best agency for coaching musical talents and reviving old flames. I am definitely grateful to have found them',
            icon: <CircleUser/>
        }
    ]
    const ItemDiv = ({ item, index }) => (
        <div key={index}
        className={`rounded-[20px] p-6 bg-white space-y-8 w-[373px] mx-4 flex items-start gap-x-5`}
        >
            <div className="text-4xl mb-4 text-black">{item.icon}</div>
            <div className="text-black">
                <p>{item.comment}</p>
                <h3 className="text-lg font-semibold text-gray-800">
                    {item.role}
                </h3>
            </div>
            
        </div>
    );
    return(
        <section>
            <div className='overflow-hidden flex flex-col gap-y-5'>
                <ul className='flex  text-white animate-infinite-scroll-left'>
                    {[...reviews, ...reviews, ...reviews].map((items, index) => (
                        <ItemDiv item={items} index={index}/>
                    ))}
                </ul>

                <ul className='flex text-white animate-infinite-scroll-right'>
                    {[...reviews, ...reviews, ...reviews].map((items, index) => (
                        <ItemDiv item={items} index={index}/>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Testiomonial