import "./Footer2.css";
import GuestDropdown from "./GuestDropdown";
export default function () {
  return (
    <>
      <h2 style={{fontSize:'25px',fontWeight: "700", margin: "2% 0 2% 0"}}>Things to know</h2>
      <div className="footer2">
        <div>
          <ul className="list">
            <b>House rules</b>
            <li>Check-in: 12:00 pm - 10:00 pm</li>
            <li>Checkout before 10:00 am</li>
            <li>no pets</li>
            <li>no smoking</li>
          </ul>
        </div>
        <div>
          <ul className="list">
            <b>Safety & property</b>
            <li>Carbon monoxide alarm not reported</li>
            <li>Smoke alarm not reported</li>
            <li>Exterior security cameras on property</li>
            <li>smoke alaram</li>
          </ul>
        </div>
        <div>
          <ul className="list">
            <b>Cancellation policy</b>
            <li>Free cancellation before 14 May.</li>
            <li>
              Review the Host’s full cancellation policy which applies even{" "}
              <br></br>if you cancel for illness or disruptions caused by
              COVID-19.
            </li>
            <li>Full refund: Get back 100% of what you paid.</li>
          </ul>
        </div>
      </div>

    </>
  );
}
