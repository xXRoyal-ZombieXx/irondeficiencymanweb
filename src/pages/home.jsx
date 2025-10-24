import { useEffect, useState } from "react";

export default function Home() {

    const [youtubeVideos, setYoutubeVideos] = useState([]);
    const [tiktokVideos, setTiktokVideos] = useState([]);

    // Fetch latest videos from APIs (placeholder functions)
    useEffect(() => {
        fetchYouTubeVideos();
        fetchTikTokVideos();
    }, []);

    async function fetchYouTubeVideos() {
        // Call your backend or YouTube API (with channelId)
        // Example structure:
        // setYoutubeVideos([{ id: 1, title: "My Video", thumbnail: "url", url: "youtube.com/..." }]);
    }

    async function fetchTikTokVideos() {
        // Call your backend or TikTok API (or use scraping service)
    }

    return (
        <section class="section">
            <div class="container is-fluid ">
                <div class="box mainTransparency">
                    <div class="columns">
                        <div class="column"></div>
                        <div class="column is-three-fifths">
                            <div class="box overflow-hidden darlingBG">
                                <div class="columns is-mobile">
                                    <div class="column is-2">
                                        <figure class="image is-square">
                                            <img class="testClass" src="https://tr.rbxcdn.com/30DAY-AvatarHeadshot-4F35007B3E8BA592317289A0C4908199-Png/150/150/AvatarHeadshot/Png/noFilter">
                                            </img>
                                        </figure>
                                    </div>
                                    <div class="column slightTransparency">
                                        <h2 class="centerItem">Iron Deficiency Man</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column"></div>
                    </div>

                    <div class="box">
                        <h1 class="title is-1">About Me</h1>
                    </div>
                    <div class="columns">
                        <div class="column"></div>
                        <div class="column is-four-fifths">
                            <div class="content">
                                <h1>Hello Everyone!</h1>
                                <p>
                                    Hey everybody! My name is Iron Deficiency Man and I am a content creator/game developer on Roblox and some other games too.
                                    I mainly make content relating to Roblox but I do plan on branching out eventually to VRChat and some other games like
                                    Minecraft and more. Iron Deficiency Man started off as a gimick, something I came up with when I was bored. Now? Its turning
                                    into something even bigger than that(hence the website). Enough about that though, I know some people are wondering, "why the
                                    website?" Well its pretty obvious, I cant just keep answering questions over and over.
                                </p>
                                <h2>Content Creation</h2>
                                <p>
                                    I plan on growing a community around Iron Deficiency Man and want to spread some humor and funny moments to all. I never
                                    really found something to do that stuck with me until I came up with him. Ive made a lot of friends through him and had
                                    a lot of laughs because of it. I hope you all can enjoy this as much as I do :)
                                </p>
                                <h3>Development Information</h3>
                                <p>
                                    As I said previously, I am also a game developer. I mainly do programming stuff but I plan on learning more of the visual
                                    end of things as well. I havent done much public work(mainly because I procrastinate a lot and some of what I did do
                                    has been projects that never went anywhere) but I do plan on actually making a name for myself in the development world as
                                    well.
                                </p>
                            </div>
                        </div>
                        <div class="column"></div>
                    </div>
                    <div class="box">
                        <h1 class="title is-1">Content</h1>
                    </div>
                    <div class="columns">
                        <div class="column"></div>
                        <div class="column is-four-fifths">
                            <div class="grid">
                                <button class="button is-primary has-background-danger" onClick={() => window.open("https://www.youtube.com/@Dev_RoyalX")}>
                                    Youtube
                                </button>
                                <button class="button is-primary has-background-info" onClick={() => window.open("https://www.tiktok.com/@irondeficiencyman3")}>
                                    Tik Tok
                                </button>
                                <button class="button is-primary has-background-link" onClick={() => window.open("https://www.twitch.tv/dev_royalx")}>
                                    Twitch
                                </button>
                            </div>
                        </div>
                        <div class="column"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}