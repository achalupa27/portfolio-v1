import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { Skill } from '../types';

type Props = {
    skill: Skill;
    show: boolean;
    close: any;
};

function SkillCases({ skill, show, close }: Props) {
    if (!show) {
        return null;
    }
    return (
        <motion.div className='fixed top-0 left-0 right-0 bottom-0 dark:bg-slate-200/10 bg-gray-300/70 flex items-center justify-center z-10' onClick={close}>
            <div className='space-y-7 w-[60rem] h-auto dark:bg-gray-900 bg-gray-200  p-12 rounded-md z-20 shadow-2xl'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='uppercase tracking-[3px] text-gray-500'>
                        {skill.level} - {skill.progress}%
                    </div>
                    <div className='uppercase tracking-[12px] text-gray-800 dark:text-gray-200 text-2xl mt-1 text-center'>- {skill.title} -</div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='uppercase tracking-[3px] text-gray-500'>Background</div>
                    <div className='tracking-[3px] text-gray-800 dark:text-gray-200 text-center'>{skill?.background}</div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='uppercase tracking-[3px] text-gray-500'>Use Cases</div>
                    {skill?.usedCases?.map((useCase) => (
                        <div className='flex space-x-3 text-[rgb(36,36,36)] dark:text-gray-200 tracking-[3px] text-center'>
                            <p>- {useCase.split('$')[0]}</p>
                            {useCase.split('$')[1] && (
                                <Link href={useCase.split('$')[1]} target='_blank'>
                                    <AiFillGithub className='w-6 h-6 text-gray-800 dark:text-gray-200 hover:text-[#0084ff] dark:hover:text-[#0084ff] transition duration-300 ease-in-out' />
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
                {skill?.usedProjects !== undefined && (
                    <div className='flex flex-col items-center justify-center'>
                        <div className='uppercase tracking-[3px] text-gray-500'>Projects</div>
                        <div className='flex flex-col items-center justify-center tracking-[3px] text-gray-800 dark:text-gray-200 text-center'>
                            {skill?.usedProjects?.map((project) => (
                                <span>{project}</span>
                            ))}
                        </div>
                    </div>
                )}
                {skill?.usedWork !== undefined && (
                    <div className='flex flex-col items-center justify-center'>
                        <div className='uppercase tracking-[3px] text-gray-500'>Work</div>
                        <div className='flex flex-col items-center justify-center tracking-[3px] text-gray-800 dark:text-gray-200 text-center'>
                            {skill?.usedWork?.map((work) => (
                                <span>{work}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default SkillCases;
