import "./Hostedby.css";
export default function ({host,aboutHost}) {
  return (
    <>
      <div className="hostedby">
        <div className="dp">
          <img
            src="	https://www.nicepng.com/png/full/933-9332131_profile-picture-default-png.png"
            alt="userdp"
          />
        </div>
        <div className="name">
          <p className="hostname">Hosted by {host}</p>
          <p className="subline">{aboutHost} years hosting</p>
        </div>
      </div>
    </>
  );
}
