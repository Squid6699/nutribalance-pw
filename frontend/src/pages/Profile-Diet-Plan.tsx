import Backdrop from "../components/Backdrop";
import ProfileSlide from "../components/Profile-Slide";

function DietPlan() {
    return (
        <>
            {false ? <Backdrop /> : (
                <section className="container-profile">
                    <ProfileSlide />

                    <div className="profile-data-info">
                        <h1>DIET PLAN</h1>

                    </div>
                </section>

            )}

        </>
    );
}

export default DietPlan;