import { useEnvironment, useServicePortalName } from "../store/mad-config";
import { useDemoMode } from "../store/demo-mode";
import { useEffect, useMemo, useState } from "react";
import { Release } from "../components/screens/release-notes/ChangeLog";
import { fetchAllReleaseNotes } from "../components/screens/release-notes/fetchReleaseNotes";
import * as mockData from "../static/mock-data/whats-new.json";
export const useReleaseNotes = () => {
    const demoMode = useDemoMode();
    const environment = useEnvironment();
    const servicePortalName = useServicePortalName();

    const [releaseNotes, setReleaseNotes] = useState<Release[] | null>(null);
    const [error, setError] = useState("");
    const [isFetching, setIsFetching] = useState(true);
    const sortedReleaseNotes = useMemo(
        () => releaseNotes?.sort(sortReleaseNotes),
        [releaseNotes],
    );

    useEffect(() => {
        if (demoMode.isEnabled) {
            setReleaseNotes([mockData]);
            setIsFetching(false);
        } else {
            fetchAllReleaseNotes(environment, servicePortalName)
                .then(setReleaseNotes)
                .catch((error: Error) => setError(error.message))
                .finally(() => setIsFetching(false));
        }
    }, [demoMode.isEnabled, environment, servicePortalName]);

    return { releaseNotes: sortedReleaseNotes, isFetching, error };
};

const sortReleaseNotes = (releaseNoteA: Release, releaseNoteB: Release) => {
    return releaseNoteA.version < releaseNoteB.version
        ? releaseNoteB.version < releaseNoteA.version
            ? -1
            : 1
        : 0;
};
