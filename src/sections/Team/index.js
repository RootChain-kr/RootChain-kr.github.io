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
      <div className="card md-3">
        <div className="card-contents">
          {member.image ? (
            <div className="member-image">
              <img src={member.img} />
            </div>
          ) : (
            <div className="member-image empty">
              <img src={userIcon} />
            </div>
          )}

          <div className="member-desc">
            <h5>{member.name}</h5>
            <p>{member.position}</p>
          </div>

          <div className="member-social">
            {member.social.length > 0 && <MemberSocial urls={member.social} />}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container team" id="team">
      <SectionHeader {...constants} />

      <div className="card-container">
        {members.map((member) => {
          return <TeamCard key={member.id} member={member} />;
        })}
      </div>
    </div>
  );
};

export default Team;
