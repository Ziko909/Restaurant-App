interface ChefCardProps {
    imageUrl: string;
    titleImage: string;
    name: string;
    description: string;
    containerStyles?: string;
    headingStyles?: string;
    descriptionStyles?: string;
    buttonStyles?: string;
    buttonTitle?: string;
    showButton?: boolean;
    showPrice?: boolean;
    price?: number | string;
    priceStyles?: string;
}

export default ChefCardProps;