import { Accordion as _Accordion, AccordionProps } from "./Accordion";
import { AccordionItem, AccordionItemProps } from "./AccordionItem";

export type AccordionFamily = typeof _Accordion & {
    Item: typeof AccordionItem,
};

const Accordion = _Accordion as AccordionFamily;
Accordion.Item = AccordionItem;

export {
    Accordion,
    AccordionProps,
    AccordionItemProps,
};