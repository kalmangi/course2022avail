import { GA4React } from "ga-4-react";

const ga4react = new GA4React("G-0SPQ2Z9EE2").initialize();

// export interface AnalyticsData {
//     path: string;
//     search: string;
//     title: string;
// }

const trackPathForAnalytics = (path,search,title) => {
    ga4react
        .then((ga) => {
            ga.pageview(path, search, title);
        })
        .catch((err) => console.error(`Analytics failed: ${err}`));
};

export default trackPathForAnalytics;