import React from "react";
import motdoi from "/motdoi.jpg";
import matketnoi from "/matketnoi.jpg";
import saoemvotinh from "/saoemvotinh.jpg";

const SongCard = ({ image, title, description, link }) => {
  return (
    <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd5cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>

      <div className="relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[200px] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 transition-opacity duration-300"
          ></a>
        </figure>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const songsData = [
    {
      id: 1,
      image: motdoi,
      title:
        "Một Đời [Lo-Fi Ver.] - 14 Casper & Bon Nghiêm (feat.buitruonglinh) x TK2 Lofi ♪",
      description:
        "Một Đời [Lo-Fi Ver.] - 14 Casper & Bon Nghiêm (feat.buitruonglinh) x TK2 Lofi ♪",
      link: "https://soundcloud.com/akatk2/mot-doi-lo-fi-ver-14-casper-bon-nghiem-featbuitruonglinh-x-tk2-lofi",
    },
    {
      id: 2,
      image: matketnoi,
      title: "Mất Kết Nối [Lo-Fi Ver.] - Dương Domic x TK2 Lofi ♪",
      description: "Mất Kết Nối [Lo-Fi Ver.] - Dương Domic x TK2 Lofi ♪",
      link: "https://soundcloud.com/akatk2/mat-ket-noi-lo-fi-ver-duong-domic-x-tk2-lofi",
    },
    {
      id: 3,
      image: saoemvotinh,
      title: "Sao Em Vô Tình - Lofi Ver. - Thang x TK2 ♪",
      description: "Sao Em Vô Tình - Lofi Ver. - Thang x TK2 ♪",
      link: "https://soundcloud.com/akatk2/sao-em-vo-tinh-lofi-ver-thang",
    },
  ];

  return (
    <main className="p-4 pt-18" id="songs">
      {/* Hero Section */}
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Featured <span className="text-purple-400">Songs</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Explore my featured songs, where creativity meets technology. From
            lo-fi beats to melodic vibes, each track reflects my journey as both
            a Web Developer and Music Producer.
          </p>
        </header>
      </section>

      {/* Songs Grid Section */}
      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex flex-wrap gap-4 justify-center mt-6"
      >
        {songsData.map((project, index) => (
          <SongCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}
