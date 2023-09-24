import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { BenefitType, SelectedPage } from "../../shared/types"
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Culpa impedit ipsa perferendis tenetur illo asperiores magnam, voluptatem fugiat. Hic optio ipsa quia rem libero minus dicta enim laborum labore. Saepe!",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio ipsa quia rem libero minus dicta enim laborum labore. Saepe!",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa impedit ipsa perferendis tenetur illo asperiores magnam, voluptatem fugiat. Hic optio ipsa quia rem libero minus dicta enim laborum labore. Saepe!",
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: .5 }}
                variants={{
                    hidden: { opacity: 0, x:-50 },
                    visible: { opacity: 1, x:0 }
                }}
                className="md:my-5 md:w-3/5">
                <HText>MORE THAN JUST GYM.</HText>
                <p className="my-5 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa impedit ipsa perferendis tenetur illo asperiores magnam, voluptatem fugiat. Hic optio ipsa quia rem libero minus dicta enim laborum labore. Saepe!
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div 
                className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-page-graphic" />
                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:content-abstractwaves before:absolute before:-top-20 before:-left-20 before:z-[1]">
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: .5 }}
                            variants={{
                                hidden: { opacity: 0, x:50 },
                                visible: { opacity: 1, x:0 }
                            }}
                        >
                            <HText>
                                MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                <span className="text-primary-500">FIT</span>.
                            </HText>
                        </motion.div>
                    </div>

                    {/* DESCRIPTION */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: .5 }}
                        variants={{
                            hidden: { opacity: 0, x:-50 },
                            visible: { opacity: 1, x:0 }
                        }}
                    >
                        <p className="my-5">Amet consectetur adipisicing elit. Doloremque at, a obcaecati exercitationem voluptatibus blanditiis ad quod similique quia labore aliquam necessitatibus velit ullam! Architecto error qui alias soluta blanditiis.</p>
                        <p className="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque at, a obcaecati exercitationem voluptatibus blanditiis ad quod similique quia labore aliquam necessitatibus velit ullam! Architecto error qui alias soluta blanditiis.</p>
                    </motion.div>

                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:content-sparkles before:absolute before:-bottom-20 before:right-40 before:z-[-1]">
                        </div>
                        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}
export default Benefits