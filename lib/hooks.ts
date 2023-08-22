import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from './types';


type useSectionInViewProps = {
    sectionName: SectionName;
    threshold: number;
};
export function useSectionInView({
    sectionName,
    threshold,
}: useSectionInViewProps) {
    const { ref, inView } = useInView({
        threshold: threshold,
    });
    const { SetActiveSection, timeofLastClick } = useActiveSectionContext();

    useEffect(() => {

        if (inView && Date.now() - timeofLastClick > 1000) {
            SetActiveSection(sectionName);
        }
    }, [inView, SetActiveSection, timeofLastClick]);

    return {
        ref,
    }
}