import "./index.css";
import { team } from "assets/data";
import { icons } from "assets/data";

const getSocialIcon = (url) => {
  const socialCategories = [
    { name: "github", icon: icons.githubIcon },
    { name: "linkedin", icon: icons.linkedinIcon },
    { name: "blog", icon: icons.blogIcon },
  ];

  let icon = icons.linkIcon;
  socialCategories.map((category) => {
    if (url.search(category.name) > -1) icon = category.icon;
  });

  return icon;
};

const MemberSocial = ({ urls }) => {
  return (
    <>
      {urls.map((url, index) => {
        return (
          <a key={index} href={url}>
            <div className="icon-btn">
              <img src={getSocialIcon(url)} />
            </div>
          </a>
        );
      })}
    </>
  );
};

const Members = () => {
  const TeamCard = ({ member }) => {
    return (
      <div className="member-card">
        <div className="member-card-contents">
          {member.image ? (
            <div className="member-image">
              <img src={member.img} />
            </div>
          ) : (
            <div className="member-image empty">
              <img src={icons.userIcon} />
            </div>
          )}

          <h5>{member.name}</h5>
          <p>{member.position}</p>
          <div className="member-social">
            {member.social.length > 0 && <MemberSocial urls={member.social} />}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="App-content-wrapper" id="team">
      <div className="container">
        <div className="section-title">
          <h5>Team</h5>
          <h2>Our Members</h2>
        </div>

        <div className="team-card-container">
          {team.map((member) => {
            return <TeamCard key={member.id} member={member} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Members;
