import pic from './assets/mount-fuji.jpg'

function Card(){
    return(
        <div className="card">
      <img
        src={pic}
        alt="Card Image"
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">Simple Card</h2>
        <p className="card-description">
          This is a simple card component built with React and plain CSS.
        </p>
        <button className="card-button">Click Me</button>
      </div>
    </div>
    );
}
export default Card