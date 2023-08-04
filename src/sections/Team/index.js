import './index.css';
import { constants, members } from 'texts/team';
import SectionHeader from 'components/SectionHeader';
import { getIconByUrl } from 'common/utils';
import { userIcon } from 'common/icons';

const MemberSocial = ({ urls }) => {
  return (
    <>
      {urls.map((url, index) => {
        return (
          <a key={index} href={url}>
            <div className="icon-btn">
              <img src={getIconByUrl(url)} />
            </div>
          </a>
        );
      })}
    </>
  );
};

const Team = () => {
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
              <img src={userIcon} />
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
        <SectionHeader {...constants} />

        <div className="team-card-container">
          {members.map((member) => {
            return <TeamCard key={member.id} member={member} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
