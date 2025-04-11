import AddProfilePage from "@/components/templates/AddProfilePage"
import { Profile } from "@/models/Profile"
import connectDB from "@/utils/connectDB"

export default async function Edit({ params }) {
    await connectDB()
    const profileId = params?.profileId;
    const profile = await Profile.findById(profileId);
    console.log(profile.title)
    if(!profile) return <h3>مشکلی پیش آمده است</h3>
    return <AddProfilePage data={JSON.parse(JSON.stringify(profile))}/>
}
