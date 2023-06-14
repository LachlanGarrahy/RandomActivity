import { Activity } from "../types";
import { GETRandomActivity } from "../data/GETRandomActivity";
import {useState} from "react";
import Card from "./Card";

export default function RandomActivity() {
    const [activity, setActivity] = useState<Activity | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isCached, setIsCached] = useState(false);

    const url = "https://www.boredapi.com/api/activity"

    const handleClick =async () => {
        setLoading(true);
        setError(false);
        try {
            const activity = await GETRandomActivity(url);
            setActivity(activity);
            setIsCached(true);
        } catch (error) {
            setError(true);
            console.log(error)
        }
        console.log(activity)
        setLoading(false);
    }

    return(
        <div>
            <div className="text-center">
                <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                disabled={loading || isCached}
                onClick={handleClick}
                >
                Get your Activity
                </button>
                <div className="mt-2" />
                {isCached && <p>Come back in an hour to find more stuff to do with your life</p>}
                <div className="mt-2" />
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Oops, something went wrong!</p>}
            {activity && <Card activity={activity} />}
        </div>
    )
}