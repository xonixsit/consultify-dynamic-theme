import { getHeroContent } from "../utils/contentLoader";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const hero = getHeroContent();

  return (
    <div className="relative bg-primary min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-[#1A1F2C]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%),
            repeating-linear-gradient(
              45deg,
              rgba(255, 255, 255, 0.05) 0px,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px,
              transparent 10px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(255, 255, 255, 0.05) 0px,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px,
              transparent 10px
            )
          `
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {hero.subtitle}
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            {hero.cta}
          </Button>
        </div>
      </div>
    </div>
  );
};