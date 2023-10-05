import React, { useEffect, useState } from "react";
import { ChangeLog, Release } from "./ChangeLog";
import * as mockData from "./mock-data.json";
import {
    useAppVersion,
    useEnvironment,
    useServicePortalName,
} from "../../../hooks/MadConfigProvider";
import { useReleaseNotesVersion } from "../../../store/release-notes/release-notes";
import { CircularProgress } from "@equinor/mad-components";
import { useCoreStackNavigation } from "../../../hooks/useCoreStackNavigation";
import { useDemoMode } from "../../../store/demo-mode";
import { fetchReleaseNotes } from "./fetchReleaseNotes";

export const ReleaseNotesScreen = () => {
    const environment = useEnvironment();
    const releaseNotesVersion = useReleaseNotesVersion();
    const servicePortalName = useServicePortalName();
    const navigation = useCoreStackNavigation();
    const demoMode = useDemoMode();
    const appVersion = useAppVersion();
    const [release, setRelease] = useState<Release | null>(null);
    const [error, setError] = useState("");
    const [isFetching, setIsFetching] = useState(true);
    const enableIsFetching = () => setIsFetching(true);
    const disableIsFetching = () => setIsFetching(false);
    const navigate = () => navigation.navigate("Root");

    useEffect(() => {
        enableIsFetching();
        if (demoMode.isEnabled) {
            setRelease(mockData);
            disableIsFetching();
        } else {
            fetchReleaseNotes(environment, servicePortalName, appVersion)
                .then(setRelease)
                .catch(setError)
                .finally(disableIsFetching);
        }
    }, [demoMode.isEnabled, environment, servicePortalName, appVersion]);

    if (error || (!isFetching && !release)) {
        navigate();
    }

    if (!release) {
        return <CircularProgress />;
    }

    return (
        <ChangeLog
            release={release}
            onPressAffirm={() => {
                releaseNotesVersion.setLastDisplayedReleaseNotesVersion(appVersion);
                navigate();
            }}
        />
    );
};
