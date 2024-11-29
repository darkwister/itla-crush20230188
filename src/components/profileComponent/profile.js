import ProfileCard from './ProfileCard';
export default function Profile() {
    return (
        <div className="container-fluid w-75 mx-auto p-0 row flex-column">
            <p className="text-center fs-3 col">
            Mi perfil
            </p>
            <div className="col-xxxl-5 col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto">
            <ProfileCard/>
            </div>
        </div>
    )
}