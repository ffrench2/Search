import { useAppSelector } from "../../hooks";
import "./newsStories.css";

export const NewsStories = () => {
  const storiesResults = useAppSelector((state) => state.story.stories);

  if (!!storiesResults && storiesResults.length) {
    return (
      <div className="StoryContainer" data-testid={"StoryTestId"}>
        {storiesResults.map((item: any) => {
          const links = !!item.links && !!item.links.permalink;
          return (
            <div key={item.id} className="StoryData">
              <h2 className="StoryTitle">{item.title}</h2>
              <p className="StoryBody">
                {!!links ? item.body.substring(0, 450) + " ......" : item.body}
              </p>
              {links && (
                <a
                  href={item.links.permalink}
                  target="_blank"
                  rel="newsStories"
                >
                  Click here to read more
                </a>
              )}
            </div>
          );
        })}
      </div>
    );
  }
  return null;
};

export default NewsStories;
