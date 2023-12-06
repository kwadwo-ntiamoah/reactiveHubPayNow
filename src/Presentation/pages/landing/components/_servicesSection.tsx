import { Container, Typography } from "@/Presentation/common/styled-components";
import { ServiceData } from "../data";

export const ServicesSection = () => {
  return (
    <div className="relative flex flex-col py-12">
      {/* bg patter */}
      <div className="md:h-32 w-screen bg-cover bg-line-pattern"></div>
      <div className="absolute md:h-32 w-screen bg-white/90"></div>

      {/* why choose us */}
      <div className="absolute w-full md:h-32">
      <Container $allowYPadding={true}>
           <div className="flex w-full h-full justify-start items-center">
           <Typography $size="title">Why Choose Us?</Typography>
           </div>
          </Container>
      </div>

      <div className="h-12 w-full"></div>

      {/* services */}
      <Container>
        {ServiceData.map((service, index) => (
          <ServiceCard service={service} key={service.title} index={index} />
        ))}
      </Container>
    </div>
  );
};


const ServiceCard = (props: { service: ServiceProp; index: number }) => {
  return (
    <div className="grid md:grid-cols-2 gap-5 md:gap-24 items-center  mt-5 md:mt-0">
      <img
        src={props.service.image}
        alt="security"
        className={`md:h-96 object-cover rounded-xl ${
          props.index % 2 == 0 ? "order-first" : "md:order-last"
        }`}
      />

      <div className="flex flex-col gap-8">
        <Typography $size="title">{props.service.title}</Typography>
        <Typography>{props.service.content}</Typography>
      </div>
    </div>
  );
};

export default ServicesSection;

export interface ServiceProp {
    title: string;
    image: string;
    content: string;
  }