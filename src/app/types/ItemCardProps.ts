export type ItemCardProps = {
  imageUrl: string;
  titleImage: string;
  width: number;
  height: number;
  title: string;
  description: string;
  buttonTitle?: string;
  containerStyles?: string; // Changed to string
  descriptionStyles?: string; // Changed to string
  headingStyles?: string; // Changed to string
  showButton?: boolean;
  price?: string;
  showPrice?: boolean;
  priceStyles?: string; // Changed to string
  buttonStyles?: string; // Changed to string
};