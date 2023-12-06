import { ServiceProp } from "../components/_servicesSection";

import security from "@/assets/images/security.jpg";
import integration from "@/assets/images/coffee_card.jpg";
import customSolution from "@/assets/images/susu.jpg"
import growth from "@/assets/images/growth.jpg"

export const ServiceData: ServiceProp[] = [
  {
    image: security,
    title: "Security First",
    content:
      "At the core of our payment management system is an unwavering commitment to security. Utilizing cutting-edge encryption technology and advanced fraud prevention measures, we prioritize safeguarding your sensitive information. Trust us for a secure environment that instills confidence in every financial transaction",
  },
  {
    image: integration,
    title: "Seamless Integration",
    content: "Experience a truly hassle-free payment process with our platform, designed for seamless integration with a diverse array of payment methods. Whether it's credit cards, digital wallets, or other forms of payment, our user-friendly interface ensures a smooth and efficient transactional experience for both businesses and customers"
  },
  {
    image: customSolution,
    title: "Customized Solutions",
    content: "Recognizing the unique needs of every business, we offer tailored payment management solutions. Our customizable options empower businesses to adapt swiftly to evolving market trends and changing customer preferences. From subscription models to one-time purchases, our platform flexibly accommodates your specific requirements"
  },
  {
    image: growth,
    title: "Scalabilty for Growth",
    content: "Embrace growth with confidence, as our payment management solutions scale seamlessly with your business. Whether you're experiencing a surge in transactions or expanding into new markets, our flexible system adapts to your evolving needs. Future-proof your payment capabilities, ensuring that your business can thrive amidst change, making our platform a foundational element for sustained success"
  }
];
