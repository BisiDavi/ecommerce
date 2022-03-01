/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Applayout from "@/layout/Applayout";
import aboutUsContent from "@/json/about-us.json";

const Aboutus = dynamic(() => import("@/components/Aboutus"));
const AboutusForm = dynamic(() => import("@/components/Form/AboutusForm"));

export default function About() {
  return (
    <Applayout title="About us">
      <main className="container-fluid px-0">
        {aboutUsContent.aboutUs.map((content) => (
          <Aboutus key={content.title} content={content} />
        ))}
        <hr />
        <section className="container py-3 py-lg-5 mt-4 mb-3">
          <h2 className="h3 my-2">{aboutUsContent.coreTeam.title}</h2>
          <p className="fs-sm text-muted">
            {aboutUsContent.coreTeam.description}
          </p>
          <div className="row pt-3">
            {aboutUsContent.coreTeam.teams.map((team) => (
              <div key={team.name} className="col-lg-4 col-sm-6 mb-grid-gutter">
                <div className="flex items-center">
                  <img
                    className="rounded-circle"
                    src={team.image}
                    width="96"
                    alt={team.name}
                  />
                  <div className="ps-3">
                    <h6 className="fs-base pt-1 mb-1">{team.name}</h6>
                    <p className="fs-ms text-muted mb-0">{team.role}</p>
                    <a
                      className="nav-link-style fs-ms text-nowrap"
                      href={`mailto:${team.email}`}
                    >
                      <i className="ci-mail me-2"></i>
                      {team.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <hr />
        <AboutusForm />
      </main>
    </Applayout>
  );
}
