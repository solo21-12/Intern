import FeedSection from "../../components/common/feedSection";
import MainContainer from "../../components/MainContainer";
const NewFeed = () => {
  const feeds = [
    {
      id: 1,
      letter: "J",
      name: "Jone Don",
      date: "Today, 10:20",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti aspernatur debitis ex itaque. Unde adipisci consequuntur cupiditate expedita veritatis, nisi, ipsa labore explicabo, esse enim maxime alias doloribus repellat.",
      image: "/logo2.jpg",
      title: "Good day",
      comment:{
        id: 1,
        letter: "J",
  
        name: "Jone Don",
        date: "Today, 10:20",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti aspernatur debitis ex itaque. Unde adipisci consequuntur cupiditate expedita veritatis, nisi, ipsa labore explicabo, esse enim maxime alias doloribus repellat.",
      }
    },
    {
      id: 2,
      letter: "D",
      name: "David",
      date: "Today, 10:22",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti aspernatur debitis ex itaque. Unde adipisci consequuntur cupiditate expedita veritatis, nisi, ipsa labore explicabo, esse enim maxime alias doloribus repellat.",
      image: "/logo1.jpg",
      title: "Friendship",
    },
    {
      id: 3,
      letter: "J",
      name: "Lisa",
      date: "Today, 10:25",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti aspernatur debitis ex itaque. Unde adipisci consequuntur cupiditate expedita veritatis, nisi, ipsa labore explicabo, esse enim maxime alias doloribus repellat.",
      image: "/logo.webp",
      title: "new computer",
    },
  ];
  return (
    <main className="lg:ml-16 m-0 min-h-screen bg-[#141517] ">
      <div className="sm:m-10 m-0 w-[90%] mx-auto lg:w-[80%]">
        <MainContainer
          title="Feed"
          description="Last updates from your community!"
        >
          <div className="w-full sm:px-0  ">
            {feeds.length >= 1 &&
              feeds.map((feed) => {
                return (
                  <FeedSection
                    id={feed.id}
                    key={feed.id}
                    letter={feed.letter}
                    name={feed.name}
                    date={feed.date}
                    title={feed.title}
                    description={feed.description}
                    image={feed.image}
                  />
                );
              })}
          </div>
        </MainContainer>
      </div>
    </main>
  );
};

export default NewFeed;
