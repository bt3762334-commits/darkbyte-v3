import Image from "next/image";

const certs = [
  "/images/cert-html-css.png",
  "/images/cert-python.png",
  "/images/cert-django.png"
];

export default function Certificates() {

  return (
    <section className="py-24">

      <h2 className="text-center text-4xl mb-10">
        Certificates
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {certs.map((cert,index)=>(
          <Image
            key={index}
            src={cert}
            width={600}
            height={400}
            alt="certificate"
            className="rounded-xl hover:scale-105 duration-300"
          />
        ))}

      </div>

    </section>
  );
}
