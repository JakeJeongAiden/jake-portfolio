"use client";
import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40">
      <h2 className="text-zinc-800 text-3xl font-medium capitalize mb-8 drop-shadow-md">
        <Typewriter
          options={{
            strings: ["About", "Me"],
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("About me")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </h2>
      <p className="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
        animi voluptatem ullam quidem hic, enim vitae sunt nihil ad quo alias
        aliquam voluptatibus dolores modi autem. Quidem fugiat ea accusamus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        obcaecati alias quibusdam officia consequuntur sunt magnam voluptatibus
        delectus iusto minus. Minima iusto temporibus inventore eius unde
        necessitatibus atque fugit itaque.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
        animi voluptatem ullam quidem hic, enim vitae sunt nihil ad quo alias
        aliquam voluptatibus dolores modi autem. Quidem fugiat ea accusamus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        obcaecati alias quibusdam officia consequuntur sunt magnam voluptatibus
        delectus iusto minus. Minima iusto temporibus inventore eius unde
        necessitatibus atque fugit itaque.
      </p>
    </section>
  );
}
