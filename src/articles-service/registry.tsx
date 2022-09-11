import { Article } from "./articles-service";

export const articles: Map<string, Article> = new Map([
    ["1", {
        referenceId: "1",
        coverPhoto: "rivianvcyber.png",
        title: "Rivian, Cybertruck, and The Cultural Implications of EV Design",
        subtitle: "A conversation with a former Tesla designer on the two vehicles",
        episode: 1,
        body: [
            "The electric truck race has been entertaining to watch from a distance. The industry is tackling complex physical and manufacturing problems. However, probably the most attractive element of this race is the polarizing and bizarrely different nature of the two contending vehicles. On one hand, you have the idiosyncratic cyber-punk Cybertruck from Tesla, and on the other hand, you have the utilitarian solar-punk R1T from Rivian.",
            "Not too long ago, I sat down with an old friend who was a design engineer at Tesla. He was (and still is) a big fan of Tesla and what the company stands for. He is also an incredibly passionate and skilled UI/UX engineer. I enjoy pointing to random advertisements, logos, architectures, etc. and asking him what design strategies or techniques he can spot that do not permeate past my subconscious.",
            "I wanted to know his thoughts between the Cybertruck and the R1T. Even as someone who has the design expertise of a toddler attempting to draw within the lines, I could tell the Cybertruck was somewhat odd. So I asked, \"who are you rooting for?\"",
            "The UI/UX expert drew an analogy for me: the current battle between the two vehicles is reminiscent of the early days between Microsoft and Apple. The two companies were contending for similar markets, yet they had drastically different approaches to design.",
            "The design of the two companies reflected the world they wanted to create. Apple products always seemed to put design and user friendliness first. They wanted to shape a world that was sleek, clean, and a little fun. Their products were always intuitive and simple. They arguably invested more into design and creative software. Meanwhile, Microsoft saw a much more functional world — a world of corporate professionalism. Impressively smooth and powerful tools that also required equally powerful glasses to use.",
            {
                fileName: "mac.jpeg",
                subtext: "Sleek, clean, and colorful."
            },
            "Both companies were ultimately successful, but it is the design of Apple products that the world chose. It is the design of Apple products that were impressed onto the world. In the corporate environment we now wear eccentric colors and chic outfits instead of oversized brown and khaki suits. Our skyscrapers adopt elegant glass based geometries, while concrete brutalist architecture dies out. We drive sleek aerodynamic cars instead of the blocky cars of the past. Many other technologies, even those of Microsoft, have adopted the design elements of Apple.",
            "Similarly, the former Tesla engineer viewed the two vehicles as separate visions for what the companies wanted the world to be. The Rivian R1T is an adventure vehicle and wants its drivers to go out exploring with it. The car has an array of tires and suspension modes that facilitate driving through harsh terrain. It does not stand out in the wilderness either. The vehicle is designed with natural elements, such as rounded edges, natural soft curves, and Earth tone color palettes.",
            "The inside of the R1T continues to use natural elements through the use of modern wood paneling. The interior also demonstrates the utilitarian and sporty characteristics of the vehicle. In addition to common truck peripherals, such as outlets and additional batteries, the vehicle has built in compartments for a Rivian flash light, portable speaker set, and a whole pullout section for a stove and sink. This truck is meant to be driven into the wilderness and opened with all its doors to the world.",
            "The design of the R1T envisions a world where technology has not strayed from nature. Where even in the cyber enhanced world, we still explore and we still have fun. Our electric trucks are not dainty vehicles that must be reserved to the anthropogenic realm. They can be drudged through the swampy fields of Florida or rough ridden through the deserts of New Mexico. The addition of a portable speaker also sings out to the communal nature of the vehicle. This is a car that we drive with friends, park on the beach and get rowdy with. This is a car that we can make memories with.",
            "The design of the Cybertruck could not scream for an ever more opposite world. The Cybetruck has no smooth edges; it is a polygonal chunk of metal that does not sport a paint coat in its base model. The sharp edges of the truck look like they can cut you just by driving past.",
            "Upon initial inspection, one could possibly mistake the flat bed for an industrial or military vehicle. It would be a gaudy spectacle in any environment outside of an American city. Surrounded by trees in a forest, the truck would look like the left behind engine of an alien spacecraft. In the dense streets of a European city, the oversized truck would feel like a dangerous nuisance to pedestrians and intentionally iconoclastic to the surrounding traditional architecture. Only in the car catered, urban decayed cities of the United States would such a truck seem at home.",
            "Functionally, the vehicle is advertised as tough, for tough people. The Cybertruck is meant to have bulletproof glass windows and a body that can take a hit from a sledge hammer. Similar to Tesla\'s other vehicles, the Cybetruck will sport a “bio defense mode” that will engage an air filter to reduce toxic external particulates. Nothing says tough like a paranoia-inducing armored vehicle in your tranquil suburban neighborhood.",
            "Cybertruck is a post-apocalyptic survival tank, and the design projects a grim future. It\'s a future where we need a tank to drive places, because the world we\'ve made is so inhospitable. Whether it is crime or poor air quality, it envisions a world where one must ask themselves every morning whether it is safe to go outside. The vehicle's design comes from the cyberpunk genre that inspired grungy futuristic movies like Judge Dredd, Total Recall, and Punisher. These movies are set in dystopian futures where man has allowed technology to get the better of themselves.",
            "After this description, the former Tesla designer expressed, “I don\'t want to live in the world envisioned by the Cybertruck”. As much as he loved Tesla and their broader mission, he was rooting for the Rivian R1T.",
            "T.Y.C"
        ]
    }],
    ["2", {
        referenceId: "2",
        coverPhoto: "",
        title: "Image Processing To Count Artillery Craters",
        subtitle: "A basic and simple approach to get a sense of damage",
        episode: 2,
        body: [
            "As someone with a diverse lineage of Easter European ancestry, the war in Ukraine hits close to home. I'm continuously monitoring news as it comes from the front lines and hearing from friends and relatives various updates. I was recently passed a set of images of some of the damage Russian artillery has done in Eastern Ukraine and was requested to use some of my image processing experience to estimate the number of craters in these images.",
            "Admittedly, I haven't done much image processing work since I left Tesla roughly two years ago. As a result, my approach was fairly experimental and rudimentary. Yet, I hope this approach demonstrates just how much information can be scrapped with a bit of image processing know-how. So let's dust off those old image processing lecture notes and get to it.",
            "Method",
            "The photo I will be using throughout this example is part of a series of satellite images taken by Maxar Technologies. The company has been publishing photos throughout the War. I have attached a few more of their examples in the Github repository at the end of this article.",
            {
                fileName: "",
                subtext: "A field of craters in Eastern Ukraine"
            },
            "From the get-go, I could tell this photo has several elements that would make running any image processing algorithm across the whole image tricky. There are tree lines, roads, and some clouds that are interfering with parts of the image. To better isolate the clean regions of the image, I performed some basic spatial transformations.",
        ]
    }],
    ["3", {
        referenceId: "3",
        coverPhoto: "",
        title: "The Lag — My Brief Experience Working in Financial Tech",
        subtitle: "",
        episode: 3,
        body: [
            "I believe it is important that I preface this article by stating that the opinions in this article are solely my own and do not represent that of any organization or other individuals.",
            "...",
            "If you were to ask my freshmen college self, if I could envision working at an investment bank, I would have scoffed. However, in early 2020, a haphazard chain of unrelated events and a desire for radical change drove me to taking on a full-time position as a software engineer at a legacy investing giant in New York City. I did not stay there for long.",
            "I came in as an enthusiastic, full stack engineer for a front office team. The group I worked for focused on building software workflows for various financial tradeables. During my time, I enjoyed talking with many people in the field and butting heads with financial engineers. While I obviously can't go into the technical details, working at this finance giant gave me some understanding of the state of financial technology (a.k.a. fintech). Most of the points and lessons in this post are based on anecdotal experience, but I hope to deliver some insight into the current state of legacy finance companies and the culture that propels them to their present state.",
            "In the engineering world, it is a common trope that government related and financial technologies tend to be the most outdated. The consequences of reliance on legacy systems tend to be fairly inconspicuous, although unfortunate incidents sporadically happen. To evoke a recent example, ATMs in New Jersey couldn't process the large withdrawal demand of customers in the early days of the COVID-19 pandemic because of their archaic programming. While handling mass requests is a challenge, it is infrequently a source of failure in the production applications of major technology firms.",
            "While at the bank, I witnessed a myriad of applications that greatly varied in age. Eventually, I started to have a feeling that I was working in a history museum on software engineering, occasionally encountering systems that were designed before my birth in 1996. Many tools were the humble predecessors of the modern norm. Although these can give you a fuzzy sentimental feeling at first, dated tech is draining. Few engineers enjoy pouring over incomprehensible documentation, knowing that better alternatives exist.",
            "Hate The Player, Not The Game",
            "The most overused excuse for the lag in adopting new technology was concerns over legal regulations. Managers would tense up when considering a switch to new tools or languages because regulations — present and future — would flash alarmingly in their minds. Nevertheless, this excuse always came off as contrived to me. If concerns over security were the main reason for the continuous use of old technology, then big tech firms that transact billions of personal and private pieces of information every hour would still be developing applications in COBOL. More recently, tech firms have gone under scrutiny and legal actions that have caused millions in fines over failing to uphold security practices. Thus, commitment to security doesn’t work as a plausible culprit for a technological lag.",
            {
                fileName: "",
                subtext: "Me trying to explain a modern tech stack — circa 2020"
            },
            "A more likely explanation for the lack of interest in using post 2010s era technologies is a cultural lapse, rooted in complacency and ignorance of upper managers. In many modern industries, software engineers need to continuously learn new technologies and tooling to stay relevant. Fintech, however, depends on a interlock between management and engineering, which seems to discourage innovation.",
            "Management is haunted with concerns over security and regulation. On top of this, the inter-managerial competition that influences decision making, rewards those that succeed and produce. Once a manager learns that a specific tool achieves an end, there is no incentive to experiment with technologies that might give you faster development cycles or improve scaling down the road. Even more so, financial management may be unaware or unclear on how such concepts as development cycles or system scaling even matter. This leads to a strong preference for vertically scaling systems. Traditionally, this incurs a heavier infrastructure cost down the road.",
            "In Fintech, because of the lack of interest in modern software approaches, engineers do not have a reason to adopt new technologies and themselves avoid learning modern practices. This sort of complacency doesn't work in tech companies, because of the cut-throat competition with other tech companies. The only way to stay afloat is to perpetually leverage the most up to date tech concepts. Therefore, tech, but not fintech, tends to have management that encourages adoption of new tooling and growth."
        ]
    }]
])