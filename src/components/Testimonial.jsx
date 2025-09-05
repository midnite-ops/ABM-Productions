import { motion } from "framer-motion";
import { CircleUser } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import lindaPic from '@/assets/Home/profile-img.jpg';
import jamesPic from '@/assets/Coaching/img-2.jpg';
import sarahPic from '@/assets/Coaching/img-1.jpg';
import rachealPic from '@/assets/Coaching/img-3.jpg';
import davidPic from '@/assets/Coaching/img-5.jpg';
function Testiomonial(){
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const reviews = [
        {
            name: 'Sarah M',
            role: 'Aspiring Soloist',
            comment: 'Before starting coaching, I struggled with pitch control and stamina. Now, not only do I sing with more confidence, but I also feel my voice getting stronger every week. The sessions are challenging but so rewarding.',
            icon: sarahPic
        },
        {
            name: 'James K',
            role: 'Choir Member',
            comment: 'The group sessions have been amazing. I’ve learned how to blend my voice with others while still standing out when needed. It’s given me the skills and courage to sing in front of my church without fear.',
            icon: jamesPic
        },
        {
            name: 'Racheal A',
            role: 'Worship Leader',
            comment: 'I joined to improve my worship leading, and it’s been a game-changer. I’ve discovered how to use my voice effectively to guide the congregation, not just sing. My stage presence has grown so much.',
            icon: rachealPic
        },
        {
            name: 'David',
            role: 'Musical Director',
            comment: 'The praise team training brought our entire group closer. We now sing in harmony with confidence, and our services feel more powerful and uplifting. It was worth every moment.',
            icon: davidPic
        },
        {
            name: 'Linda C',
            role: 'Singer',
            comment: 'I never believed my voice could improve this much. I’ve gained breath control, better projection, and most importantly, the courage to share my gift without holding back. This experience has been truly life-changing.',
            icon: lindaPic
        }
    ]
    const ItemDiv = ({ item, index }) => (
        <div key={index}
        className='rounded-[20px] p-6 bg-white w-[373px] mx-4 flex flex-col justify-between h-[210px]'
        >
            <div className="text-black">
                <p className="text-sm">{item.comment}</p>
            </div>
            <div className="flex gap-5">
                <img src={item.icon} alt="" className="!w-[40px] !h-[40px]  object-cover rounded-full"/>
                <div>
                    <h3 className="text-lg font-[500] text-dRed">
                        {item.name}
                    </h3>
                    <p className="text-black font-semibold !text-sm">{item.role}</p>
                </div>
                
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