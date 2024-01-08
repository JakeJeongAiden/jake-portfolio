"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { projectsData } from "@/app/lib/data";
import SectionHeading from "@/app/components/section-heading";

export default function Projects() {
  return (
    <>
      <SectionHeading>Project</SectionHeading>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {/* {Array.from({ length: 5 }).map((_, index) =>  */}
          {projectsData.map((project, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className=" ">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">
                      {project.title}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
