export interface Meal {
    name: string;
    price: number;
    description: string;
    media: Blob;
    category: string;
    discountPrice: number;
}

export interface Credentials {
    username: string;
    email: string;
    password: string;
}



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