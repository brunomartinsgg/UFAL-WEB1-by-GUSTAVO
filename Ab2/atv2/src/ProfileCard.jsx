import './ProfileCard.css'

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <h2 className="profile-nome">{props.nome}</h2>
        <span className="profile-idade">{props.idade} anos</span>
      </div>
      <div className="profile-body">
        <p className="profile-biografia">{props.biografia}</p>
      </div>
    </div>
  )
}

export default ProfileCard

