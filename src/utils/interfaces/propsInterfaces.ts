
export interface optionProps {
    checked: boolean;
    onChange: () => void;
    name: string;
    icon: any
}

export interface PaymentOptionsProps {
    showOptions: boolean; 
    setShowOptions: (isVisible: boolean) => void;
    slideUp: boolean;
    setSlideUp: (slide: boolean) => void;
}