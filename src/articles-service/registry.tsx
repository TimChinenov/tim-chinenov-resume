import { Article } from "./articles-service";

export const articles: Map<string, Article> = new Map([
    ["1", {
        referenceId: "1",
        coverPhoto: "rivian_v_cybertruck/rivianvcyber.png",
        title: "Rivian, Cybertruck, and The Cultural Implications of EV Design",
        subtitle: "A conversation with a former Tesla designer on the two vehicles",
        episode: 8,
        link: "https://theclassytim.medium.com/rivian-cybetruck-and-the-cultural-implications-of-ev-design-f9b97f21faa9"
    }],
    [
        "2", {
        referenceId: "2",
        coverPhoto: "social_media_ux_encourages_lunacy/coverPhoto.bmp",
        title: "Social Media UX Encourages Lunacy",
        subtitle: "How non-distinguishable user design makes reputability difficult to discern",
        episode: 7,
        link: "https://medium.com/@theclassytim/social-media-ux-encourages-lunacy-dc6b53f49ba8"
    }],
    ["3", {
        referenceId: "3",
        coverPhoto: "ukraine_craters/coverPhoto.bmp",
        title: "Image Processing To Count Artillery Craters",
        subtitle: "A basic and simple approach to get a sense of damage",
        episode: 6,
        link: "https://medium.com/@theclassytim/using-image-processing-to-count-artillery-craters-in-ukraine-b8768c45309"
    }],
    ["4", {
        referenceId: "4",
        coverPhoto: "monetize_social_media/coverPhoto.bmp",
        title: "How to Monetize a Low Moderated Social Network Platform",
        subtitle: "Ideas for making money and preserving speech.",
        episode: 5,
        link: "https://medium.com/@theclassytim/how-to-monetize-a-low-moderated-social-network-platform-29bc084088ff"
    }],
    ["5", {
        referenceId: "",
        coverPhoto: "real_los_angeles/coverPhoto.bmp",
        title: "The Real Los Angeles From A Bus Window",
        subtitle: "From the window of local roads, we are reminded of everything wrong with the city",
        episode: 4,
        link: "https://theclassytim.medium.com/the-real-los-angeles-from-a-bus-window-130fe850211"
    }],
    ["6", {
        referenceId: "6",
        coverPhoto: "social_cost_of_cars/coverPhoto.bmp",
        title: "The Social Cost of Car Culture",
        subtitle: "A rant on how car culture reduces the human experience.",
        episode: 3,
        link: "https://theclassytim.medium.com/the-social-cost-of-car-culture-3f45dff94b0a"
    }],
    ["7", {
        referenceId: "7",
        coverPhoto: "why_instagram_will_die/coverPhoto.bmp",
        title: "Instagram Will Die Because Your Friends Are Boring",
        subtitle: "A look into why Instagram's longevity as a dominant social media platform is in danger.",
        episode: 2,
        link: "https://theclassytim.medium.com/instagram-will-die-because-your-friends-are-boring-11fe34d2370f"
    }],
    ["8", {
            referenceId: "8",
            coverPhoto: "learn_to_dig/coverPhoto.bmp",
            title: "Learn to Dig as a Software Engineer",
            subtitle: "One of the most useful skills I learned as a software engineer",
            episode: 1,
            link: "https://theclassytim.medium.com/learn-to-dig-as-a-software-engineer-24441de1f007"
    }]
])