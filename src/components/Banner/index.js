import './Banner.css'
const Banner = (props) => {
    return (
        <div className="banner">
            {props.description}
        </div>
    );
}

export default Banner