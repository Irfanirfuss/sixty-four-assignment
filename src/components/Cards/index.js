import { Component } from "react";
import { v4 } from "uuid";
import Slider from "react-slick";
import CardDetails from "../CardDetails";
import CardDetalsShow from "../CardDetalsShow";

import { BiLeftArrowAlt } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const details = [
    {
        description:
            "Holiday shopping could extend another month for Twitter's biggest fans. In mid-January, the social media giant will auction off some of the surplus office items at its San Francisco, California, headquarters — including statues, kitchen items, furniture and more. ",
        id: v4(),
        imageUrl:
            "https://assets1.cbsnewsstatic.com/hub/i/r/2023/04/03/59f7ec8a-86b9-497e-8bcf-88f0b5fdd864/thumbnail/640x360g6/25bc88054ead5f1e4f347cab302bbb4d/snailfish-card.jpg?v=57e8fa9efcf044a821348136ff26ed69",
    },
    {
        id: v4(),
        imageUrl:
            "https://assets3.cbsnewsstatic.com/hub/i/r/2015/08/06/df2a49d8-b0ff-44b7-be87-34e550ee33eb/thumbnail/640x360/57cc62969416e1308356c90a4018c1d1/gettyimages-482129088.jpg?v=57e8fa9efcf044a821348136ff26ed69",
        description:
            "The snails captured so far were removed from 29 different properties primarily located in one section of New Port Richey, Fried told reporters at a Thursday press conference. Residents are encouraged to report any future sightings to a helpline at the agriculture department as officials continue to search for them.",
    },
    {
        id: v4(),
        imageUrl:
            "https://assets2.cbsnewsstatic.com/hub/i/r/2021/04/18/7af398e7-4adc-48e8-9dbd-62dc184f4177/thumbnail/640x360/3a211bec3e8c4b81dbd5e309fa0f35ea/ctm-yellowstone-bison-1072645-640x360.jpg?v=57e8fa9efcf044a821348136ff26ed69",
        description:
            " The bison was walking near a boardwalk at Black Sand Basin, just north of Old Faithful, when the woman approached it on Monday, according to a park statement. She got within 10 feet before the animal gored her and tossed her 10 feet in the air.",
    },
    {
        id: v4(),
        imageUrl:
            "https://assets3.cbsnewsstatic.com/hub/i/r/2022/02/16/cac0a1bc-a8a3-4b40-bc22-b8e99cad0eff/thumbnail/640x360/2840fa2f2f3d54234a1db35e82095f8a/screen-shot-2022-02-16-at-8-54-33-am.png?v=57e8fa9efcf044a821348136ff26ed69",
        description:
            " Hundreds of yellow-headed blackbirds swarmed over Chihuahua, Mexico, last week when something sent them crashing to the ground, leaving dozens of the birds dead along the street",
    },
    {
        id: v4(),
        imageUrl:
            "https://assets3.cbsnewsstatic.com/hub/i/r/2024/04/22/5f0b3add-7019-4cce-869a-1dcf3f136d6d/thumbnail/640x360/e80dadbc4254f3a9bbd803cf62b6f243/nicole-mitchell-2.jpg?v=57e8fa9efcf044a821348136ff26ed69",
        description:
            "A new generation of deodorant products promise whole-body odor protection. Should you try one? Dermatologists share what to know.",
    },
    {
        id: v4(),
        imageUrl:
            "https://assets1.cbsnewsstatic.com/hub/i/r/2024/04/24/9eba99fa-3741-402d-8423-708c8d3c83b1/thumbnail/640x360/890299414b10c46264e670cf7b0f54bb/carrotta-kidneyxeno2024-042.jpg?v=1da0267dcfd5e1d387d4678a648e733c",
        description:
            "or the first time, surgeons at NYU Langone Health performed a combined mechanical heart  pump and gene-edited pig kidney transplant, helping a 54-year-old woman with heart and kidney failure Before the two procedures, which took place earlier this month, New Jersey native Lisa Pisano faced heart failure and end-stage kidney disease that required routine dialysis, and she was not a candidate for a human transplant.",
    },
    {
        id: v4(),
        imageUrl:
            "https://assets3.cbsnewsstatic.com/hub/i/r/2024/04/23/fc5cef5f-c495-477e-a4d7-ff7758e93d1c/thumbnail/640x360/2bad9df6af288d35b004669bc2b8b4b3/1-voyager-2-copy-width-1320.jpg?v=1da0267dcfd5e1d387d4678a648e733c",
        description:
            "The most distant spacecraft from Earth has resumed sending data after a five-month gap, NASA said Monday  NASA's Voyager 1 spacecraft was launched in 1977, about two weeks after the launch of its twin, Voyager 2. The spacecraft has spent over 45 years studying the outer solar system and has made flybys of Jupiter and Saturn and traveled more than 46,000,000,000 miles. ",
    },
    {
        id: v4(),
        imageUrl:
            "https://assets2.cbsnewsstatic.com/hub/i/r/2024/02/01/244d81a0-aa4d-4481-93ed-2c44a84465b2/thumbnail/640x360/4f1d9fd52e6744222f46eace6654dc49/gettyimages-1416570415.jpg?v=1da0267dcfd5e1d387d4678a648e733c",
        description:
            "Glenn Sullivan Sr., 54, pled guilty to four counts of second-degree rape on April 17. Authorities began investigating Sullivan in July 2022, when a young woman told the Livingston Parish Sheriff's Office that Sullivan had assaulted her multiple times when she was 14. The assaults resulted in pregnancy, and a DNA test confirmed that Sullivan was the father of the child, the district attorney's office said. Sullivan had also groomed the victim and threatened her and her family to prevent her from coming forward. ",
    },
    {
        id: v4(),
        imageUrl:
            "https://assets1.cbsnewsstatic.com/hub/i/r/2024/04/24/0bb2e9e1-9756-4bfd-b450-c0ec6e5db353/thumbnail/1280x720/a91252cf1e17a52412f80f1375838e76/4ebda259b67111430b70f97bfc9ec24a.jpg?v=1da0267dcfd5e1d387d4678a648e733c",
        description:
            "University President Dr. Minouche Shafik issued a statement Tuesday saying she and other school leaders were speaking with students and working to reach an agreement. A university spokesperson confirmed overnight the conversations will continue, if necessary, through Thursday.",
    },
    {
        id: v4(),
        imageUrl:
            "https://assets3.cbsnewsstatic.com/hub/i/r/2022/01/20/b4db07bd-e35d-4191-b837-616dc19b393c/thumbnail/640x360/5794e03069279459d030470a34e184a3/0120-ctm-jurassicgiant-dagata-877324-640x360.jpg?v=1da0267dcfd5e1d387d4678a648e733c",
        description:
            "Hundreds of yellow-headed blackbirds swarmed over Chihuahua, Mexico, last week when something sent them crashing to the ground, leaving dozens of the birds dead along the street.",
    },
    {
        id: v4(),
        imageUrl:
            "https://assets3.cbsnewsstatic.com/hub/i/r/2024/04/11/a5cae23e-723f-4779-9e09-f7903ec80bff/thumbnail/1280x720/8041546bec0ac3f32daf082ecfb2fe76/cbsn-fusion-lunchables-health-concerns-what-to-know-thumbnail-2829379-640x360.jpg?v=1da0267dcfd5e1d387d4678a648e733c",
        description:
            "Elementary school cafeterias will be allowed to continue serving flavored milk such as chocolate and strawberry, the U.S. Department of Agriculture announced Wednesday. The Biden administration had initially floated a ban aimed at cutting consumption of added sugars by younger children.",
    },
    {
        id: v4(),
        imageUrl:
            "https://assets1.cbsnewsstatic.com/hub/i/r/2024/04/24/0bb2e9e1-9756-4bfd-b450-c0ec6e5db353/thumbnail/1280x720/a91252cf1e17a52412f80f1375838e76/4ebda259b67111430b70f97bfc9ec24a.jpg?v=1da0267dcfd5e1d387d4678a648e733c",
        description:
            "University President Dr. Minouche Shafik issued a statement Tuesday saying she and other school leaders were speaking with students and working to reach an agreement. A university spokesperson confirmed overnight the conversations will continue, if necessary, through Thursday.",
    },
    {
        id: v4(),
        imageUrl:
            "https://assets3.cbsnewsstatic.com/hub/i/r/2024/03/14/21247d5b-6611-44a6-8ef1-48305d01e755/thumbnail/640x360/661380c9e6e94920dccc6ce3b23bb6bd/gettyimages-2054042347.jpg?v=1da0267dcfd5e1d387d4678a648e733c",
        description:
            "Washington — A law that could lead to a national ban of TikTok cleared the Senate Tuesday night in a bipartisan vote of 79-18, representing one of the most serious threats to the immensely popular social media app's U.S. operations. ",
    },
    {
        id: v4(),
        imageUrl:
            "https://assets1.cbsnewsstatic.com/hub/i/r/2024/04/22/8065cbd9-ad97-4c35-923d-1ebfc0c4fb78/thumbnail/640x360/73b5588e8cb36add0600daf4f51c6202/dickey-betts-getty-152446177-1920.jpg?v=1da0267dcfd5e1d387d4678a648e733c",
        description:
            "The Francis Scott Key Bridge in Baltimore collapsed early Tuesday after a column was hit by a large container ship after the vessel lost power, sending vehicles and people into the Patapsco River.",
    },
];

class Cards extends Component {
    state = { more: false };

    showMore = () => {
        this.setState((prevState) => ({ more: !prevState.more }));
    };
    render() {
        const settings = {
            dots: true,
            infinite: false,
            autoplay: true,
            slidesToScroll: 1,
            slidesToShow: 3,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 786,
                    settings: {
                        dots: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        const { more } = this.state;
        return (
            <div className="slide-con">
                <div className="slide">
                    {" "}
                    {more && (
                        <button
                            type="button"
                            className="less-btn"
                            onClick={this.showMore}>
                            <BiLeftArrowAlt size={20} />
                        </button>
                    )}
                    {!more && (
                        <Slider {...settings} className="card-container slider">
                            {details.map((each) => (
                                <CardDetails key={each.id} data={each} />
                            ))}
                        </Slider>
                    )}
                    {!more && (
                        <button
                            type="button"
                            className="more-btn"
                            onClick={this.showMore}>
                            View More
                        </button>
                    )}
                    {more && (
                        <ul className="more">
                            {details.map((each) => (
                                <CardDetalsShow key={each.id} data={each} />
                            ))}
                        </ul>
                    )}
                </div>
                <div className="country">
                    <div className="select">
                        <h4>Recent Releases</h4>
                        <select>
                            <option>india</option>
                        </select>
                    </div>
                    <hr />
                    <div className="story">
                        <div className="lines">
                            <div className="circle"></div>
                            <div className="line"></div>
                        </div>
                        <div className="matter">
                            <p>February 12 , 2024</p>
                            <h4>industrial Production</h4>
                            <p>
                                index of industrial production (iip) grew by 3%
                                yoy in december . as a compared to 6.1% yoy in
                                same month last year. Electricity has seen in
                                the slowest growth of 1.2 % of yoy in december
                                in compared to 10.4 % yoy growth in the same
                                year
                            </p>
                        </div>
                    </div>{" "}
                    <div className="story">
                        <div className="lines">
                            <div className="circle"></div>
                            <div className="line"></div>
                        </div>
                        <div className="matter">
                            <p>February 12 , 2024</p>
                            <h4>Cpi Inflation</h4>
                            <p>
                                inia inflation is eased to 5.1 % in jan a 6.0
                                basic points decreases from the previous month .
                                consumer food price index (CPI) declined from
                                9.5 % in Dec 23 to 8.3 % .in
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cards;
