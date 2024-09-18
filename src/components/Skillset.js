import ActiveSection from "../activeSection";

const Skillset = ({ children, animationIn, animationOut }) => {
    return (
        <div
            className={ActiveSection("skillset", animationIn, animationOut)}
            id="skillset" 
        >
            <div className="card-wrap">{children}</div>
        </div>
    );
};
export default Skillset;