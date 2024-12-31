import Backdrop from "../components/Backdrop";
import ProfileSlide from "../components/Profile-Slide";
import "../css/profile.css";

function RecipesSaves() {
    return (
        <>

            {false ? <Backdrop /> : (
                <section className="container-profile">
                    <ProfileSlide />

                    <div className="profile-data-info">
                        <h1>RECIPES SAVES</h1>
                        
                    </div>
                </section>

            )}
        </>
    );
}

export default RecipesSaves;