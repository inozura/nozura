import Animated from "components/animations";
import { ContentText, RoundedButton } from "components/atoms";
import { SectionTitle } from "components/molecules";
import { LanguageContext } from "contexts";
import React, { useContext } from "react";
import AboutSectionProps from "components/organisms/About/types";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { forwardRef } from "react";

const About = forwardRef<HTMLElement | undefined, AboutSectionProps>(
  ({ title, content, className }: AboutSectionProps, ref) => {
    const controls = useAnimation();
    const [refView, inView] = useInView({
      threshold: 0.5,
    });
    const language = useContext(LanguageContext);

    useEffect(() => {
      if (inView) {
        controls.start("show");
      }
    }, [controls, inView]);

    return (
      <section
        id="about"
        className={className}
        ref={(section) => {
          refView(section);
          if (ref) {
            if (typeof ref === "function") {
              ref(section);
            } else {
              ref.current = section;
            }
          }
        }}
      >
        <SectionTitle
          lineProps={{
            animate: controls,
            custom: 1,
            transition: {
              delay: 1,
            },
          }}
        >
          <Animated.Letter
            text={title}
            animate={controls}
            custom={0}
            delay={1}
          />
        </SectionTitle>
        <div className="grid lg:grid-rows-1 gap-1 lg:grid-cols-4 h-auto">
          <Animated.FromDirection
            className="lg:col-span-3"
            from="left"
            animate={controls}
            custom={0}
            delay={1}
          >
            <Animated.Reveal
              from="left"
              animate={controls}
              custom={1}
              delay={1}
            >
              <ContentText className="lg:text-left">{content.text}</ContentText>
            </Animated.Reveal>
          </Animated.FromDirection>
          <div className="mx-auto my-auto mt-6 lg:mr-0 lg:ml-auto lg:mt-0">
            <Animated.FromDirection
              from="bottom"
              animate={controls}
              custom={1}
              delay={1}
            >
              <RoundedButton
                as="a"
                href={`${process.env.PUBLIC_URL}/RESUME_NovandraZulfiRamadhan.pdf`}
              >
                {language.value === "en" ? "Download" : "Unduh"} Resume
              </RoundedButton>
            </Animated.FromDirection>
          </div>
        </div>
      </section>
    );
  }
);

export default About;
