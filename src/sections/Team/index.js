import './index.css';
import { constants, members } from 'texts/team';
import SectionHeader from 'components/SectionHeader';
import { getIconByUrl } from 'common/utils';

import Icon from 'components/Icon';
import { mdiAccountCircle } from '@mdi/js';

const MemberSocial = ({ urls }) => {
  return (
    <>
      {urls.map((url, index) => {
        return (
          <a key={index} href={url}>
            <div className="icon-btn">
              <Icon icon={getIconByUrl(url)} color="#000" />
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
          <div className="member-image">
            {member.image ? (
              <img src={member.image} />
            ) : (
              <Icon icon={mdiAccountCircle} width={150} />
            )}
          </div>

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
    <div
      className="container team"
      id="team"
      data-aos="fade-right"
      data-aos-duration="3000">
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
